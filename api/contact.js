/**
 * Vercel Serverless Function: /api/contact
 * Envia mensagens do formulário de contato sem expor o e-mail de destino no front-end.
 * Configure em Vercel Project Settings -> Environment Variables:
 *   - CONTACT_TO_EMAIL (e-mail de destino privado)
 *   - RESEND_API_KEY (opcional, envio via Resend API)
 *   - CONTACT_FROM_EMAIL (opcional, padrão 'Portfolio <onboarding@resend.dev>')
 *   - WEB3FORMS_ACCESS_KEY (alternativa gratuita via Web3Forms)
 */

function sanitize(str, maxLen = 2000) {
  return String(str || '').trim().slice(0, maxLen);
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: 'Invalid JSON body' });
    }
  }
  body = body || {};

  // Honeypot anti-spam
  if (body.website || body._gotcha) {
    return res.status(200).json({ ok: true });
  }

  const name = sanitize(body.name, 140);
  const email = sanitize(body.email, 180);
  const subject = sanitize(body.subject, 200);
  const message = sanitize(body.message, 4000);
  const lang = sanitize(body.lang || 'pt', 10);

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address' });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  try {
    if (resendKey && toEmail) {
      const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin-bottom: 12px;">Nova mensagem pelo Portfólio (${escapeHtml(lang.toUpperCase())})</h2>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>`;

      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `[Portfólio] ${subject}`,
          html: htmlBody,
          text: `Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\nIdioma: ${lang}\n\n${message}`
        })
      });

      if (!resp.ok) {
        const errText = await resp.text();
        return res.status(502).json({ ok: false, error: 'Resend error', detail: errText.slice(0, 200) });
      }
      return res.status(200).json({ ok: true, provider: 'resend' });
    }

    if (web3Key) {
      const resp = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: web3Key,
          name,
          email,
          subject: `[Portfólio] ${subject}`,
          message: `Idioma: ${lang}\n\n${message}`,
          replyto: email
        })
      });
      const data = await resp.json();
      if (!resp.ok || !data.success) {
        return res.status(502).json({ ok: false, error: 'Web3Forms error' });
      }
      return res.status(200).json({ ok: true, provider: 'web3forms' });
    }

    if (webhookUrl) {
      const resp = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, lang, createdAt: new Date().toISOString() })
      });
      if (!resp.ok) {
        return res.status(502).json({ ok: false, error: 'Webhook error' });
      }
      return res.status(200).json({ ok: true, provider: 'webhook' });
    }

    return res.status(501).json({
      ok: false,
      configured: false,
      error: 'Email delivery provider is not configured on this deployment yet.'
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err && err.message ? err.message : 'Internal error' });
  }
};
