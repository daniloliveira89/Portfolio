const fs = require('fs');
const path = require('path');

// 1. Read base template from repo
const templatePath = path.join(__dirname, 'portfolio-base-template.html');
let html = fs.readFileSync(templatePath, 'utf8');

// 2. Custom CSS for Language Switcher with Flags + Clean Floating Overlay Project Cards
const customCss = `
    /* === LANGUAGE PILL SELECTOR WITH FLAGS === */
    .lang-pill-container {
      background: rgba(11, 14, 23, 0.9);
      border: 1px solid rgba(59, 130, 246, 0.28);
      border-radius: 0.85rem;
      padding: 0.25rem;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.4);
    }
    body[data-theme="light"] .lang-pill-container {
      background: rgba(241, 245, 252, 0.95);
      border: 1px solid rgba(37, 99, 235, 0.24);
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.06);
    }
    .lang-btn {
      padding: 0.35rem 0.55rem;
      border-radius: 0.55rem;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: var(--text-muted);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .lang-btn:hover {
      color: var(--text-heading);
    }
    .lang-btn.active {
      background: #2563EB !important;
      color: #FFFFFF !important;
      font-weight: 700;
      box-shadow: 0 1px 6px rgba(37, 99, 235, 0.45);
    }
    body[data-theme="light"] .lang-btn.active {
      background: #2563EB !important;
      color: #FFFFFF !important;
      box-shadow: 0 1px 6px rgba(37, 99, 235, 0.35);
    }

    /* === CLEAN PROJECT CARDS WITH OVERLAY === */
    .clean-proj-card {
      transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s ease, border-color 0.28s ease;
      will-change: transform;
    }
    .clean-proj-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.7), 0 0 24px rgba(34, 211, 238, 0.25);
      border-color: rgba(34, 211, 238, 0.5);
    }
    body[data-theme="light"] .clean-proj-card:hover {
      box-shadow: 0 16px 32px -8px rgba(15, 23, 42, 0.14), 0 0 20px rgba(8, 145, 178, 0.2);
      border-color: rgba(8, 145, 178, 0.45);
    }

    /* === HARMONIOUS CYAN/SKY FLOATING BADGE & ARROW === */
    .badge-gold {
      background: linear-gradient(135deg, rgba(8, 145, 178, 0.38) 0%, rgba(30, 58, 138, 0.38) 100%) !important;
      color: #F0FDFA !important;
      font-weight: 700 !important;
      letter-spacing: 0.02em;
      border: 1px solid rgba(34, 211, 238, 0.45) !important;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5), 0 0 14px rgba(6, 182, 212, 0.22) !important;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .clean-proj-card:hover .badge-gold {
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.55) 0%, rgba(37, 99, 235, 0.5) 100%) !important;
      border-color: rgba(34, 211, 238, 0.8) !important;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.6), 0 0 20px rgba(34, 211, 238, 0.45) !important;
      transform: translateY(-1px);
    }
    body[data-theme="light"] .badge-gold {
      background: linear-gradient(135deg, rgba(8, 145, 178, 0.14) 0%, rgba(37, 99, 235, 0.12) 100%) !important;
      color: #0E7490 !important;
      border: 1px solid rgba(8, 145, 178, 0.35) !important;
      box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08) !important;
    }
    body[data-theme="light"] .clean-proj-card:hover .badge-gold {
      background: linear-gradient(135deg, rgba(8, 145, 178, 0.25) 0%, rgba(37, 99, 235, 0.2) 100%) !important;
      border-color: rgba(8, 145, 178, 0.65) !important;
    }

    .arrow-gold {
      background: rgba(6, 182, 212, 0.22) !important;
      color: #22D3EE !important;
      font-weight: 800 !important;
      border: 1px solid rgba(34, 211, 238, 0.5) !important;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4), 0 0 10px rgba(6, 182, 212, 0.2) !important;
      transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .clean-proj-card:hover .arrow-gold {
      transform: translate(2px, -2px) scale(1.08);
      background: #22D3EE !important;
      color: #06070B !important;
      border-color: #22D3EE !important;
      box-shadow: 0 4px 18px rgba(34, 211, 238, 0.65) !important;
    }
    body[data-theme="light"] .arrow-gold {
      background: rgba(8, 145, 178, 0.15) !important;
      color: #0891B2 !important;
      border: 1px solid rgba(8, 145, 178, 0.4) !important;
    }
    body[data-theme="light"] .clean-proj-card:hover .arrow-gold {
      background: #0891B2 !important;
      color: #FFFFFF !important;
      border-color: #0891B2 !important;
      box-shadow: 0 4px 16px rgba(8, 145, 178, 0.4) !important;
    }

    /* === CUSTOM CURSOR COM TRAILING RING (SITE CYAN PALETTE) === */
    body.has-custom-cursor,
    body.has-custom-cursor a,
    body.has-custom-cursor button,
    body.has-custom-cursor input,
    body.has-custom-cursor select,
    body.has-custom-cursor textarea,
    body.has-custom-cursor [data-cursor="pointer"],
    body.has-custom-cursor label,
    body.has-custom-cursor [role="button"] {
      cursor: none !important;
    }

    .custom-cursor-dot {
      position: fixed;
      top: 0;
      left: 0;
      width: 6px;
      height: 6px;
      background-color: #22D3EE;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      box-shadow: 0 0 10px rgba(34, 211, 238, 0.95), 0 0 4px rgba(6, 182, 212, 0.85);
      transition: opacity 0.3s ease;
      will-change: transform;
      display: none;
    }

    .custom-cursor-ring {
      position: fixed;
      top: 0;
      left: 0;
      width: 34px;
      height: 34px;
      border: 1.5px solid rgba(34, 211, 238, 0.75);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      box-shadow: 0 0 14px rgba(34, 211, 238, 0.28);
      transition: opacity 0.3s ease, border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
      will-change: transform;
      display: none;
    }

    body.has-custom-cursor .custom-cursor-dot,
    body.has-custom-cursor .custom-cursor-ring {
      display: block;
    }

    .custom-cursor-ring.cursor-hover {
      border-color: rgba(34, 211, 238, 0.95);
      background-color: rgba(34, 211, 238, 0.16);
      box-shadow: 0 0 22px rgba(34, 211, 238, 0.45);
    }

    .custom-cursor-ring.cursor-active {
      border-color: #38BDF8;
      background-color: rgba(56, 189, 248, 0.3);
      box-shadow: 0 0 16px rgba(56, 189, 248, 0.6);
    }

    .custom-cursor-hidden {
      opacity: 0 !important;
    }

    body[data-theme="light"] .custom-cursor-dot {
      background-color: #0891B2;
      box-shadow: 0 0 8px rgba(8, 145, 178, 0.8);
    }
    body[data-theme="light"] .custom-cursor-ring {
      border-color: rgba(8, 145, 178, 0.7);
      box-shadow: 0 0 12px rgba(8, 145, 178, 0.25);
    }
    body[data-theme="light"] .custom-cursor-ring.cursor-hover {
      border-color: #0891B2;
      background-color: rgba(8, 145, 178, 0.14);
      box-shadow: 0 0 18px rgba(8, 145, 178, 0.4);
    }
    body[data-theme="light"] .custom-cursor-ring.cursor-active {
      border-color: #0369A1;
      background-color: rgba(3, 105, 161, 0.25);
    }
`;

// Insert custom CSS
html = html.replace('</style>', `${customCss}\n  </style>`);

// Ensure projects-data.js script and Favicon tags are included in <head>
const faviconAndHeadTags = `
  <!-- Favicon & Browser Icons -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico?v=4" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=4" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=4" />
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=4" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=4" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#06070B" />
`;
html = html.replace('<title>', `${faviconAndHeadTags}\n  <title>`);

if (!html.includes('projects-data.js')) {
  html = html.replace('</head>', '  <script src="/assets/js/projects-data.js"></script>\n</head>');
}

// Replace base64 brand/avatar images with brand-rabbit.png
html = html.replace(/<img[^>]*src="data:image\/png;base64[^"]*"[^>]*>/g, '<img src="/assets/images/brand-rabbit.png" alt="Danilo Oliveira — Brand Logo" class="w-full h-full object-contain filter drop-shadow" />');

// 1. Fix Header Brand Logo button to scroll smoothly to the top of page
const oldBrandLogo = `<a href="#top" class="flex items-center gap-3 no-underline group">`;
const newBrandLogo = `<a href="#top" id="btn-brand-home" onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;" class="flex items-center gap-3 no-underline group cursor-pointer" data-i18n-title="btn_home_title" title="Ir para o topo">`;
html = html.replace(oldBrandLogo, newBrandLogo);

// 1.1 Enlarge Header Brand Logo inside its frame
html = html.replace(
  '<div class="w-full h-full rounded-[10px] bg-[#090B12] overflow-hidden flex items-center justify-center p-1">',
  '<div class="w-full h-full rounded-[10px] bg-[#090B12] overflow-hidden flex items-center justify-center p-0.5">'
);
html = html.replace(
  '<img src="/assets/images/brand-rabbit.png" alt="Danilo Oliveira — Brand Logo" class="w-full h-full object-contain filter drop-shadow" />',
  '<img src="/assets/images/brand-rabbit.png" alt="Danilo Oliveira — Brand Logo" class="w-full h-full object-contain filter drop-shadow transform scale-110 group-hover:scale-120 transition-transform" />'
);

// Header Theme / Search / Wave controls with data-i18n hooks
html = html
  .replace(
    '<button type="button" id="btn-toggle-theme" class="px-3 py-1.5 rounded-xl border b-subtle bg-chip-var text-xs font-mono-code t-heading hover:border-cyan-400/60 transition flex items-center gap-1.5" title="Alternar modo Claro / Escuro">',
    '<button type="button" id="btn-toggle-theme" class="px-3 py-1.5 rounded-xl border b-subtle bg-chip-var text-xs font-mono-code t-heading hover:border-cyan-400/60 transition flex items-center gap-1.5" data-i18n-title="theme_toggle_title" title="Alternar modo Claro / Escuro">'
  )
  .replace(
    '<button type="button" id="btn-cmdk" class="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border b-subtle bg-chip-var hover:border-cyan-400/50 text-xs t-body transition" title="Abrir Menu Rápido">\n          <span>Buscar</span>',
    '<button type="button" id="btn-cmdk" class="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border b-subtle bg-chip-var hover:border-cyan-400/50 text-xs t-body transition" data-i18n-title="cmdk_title" title="Abrir Menu Rápido">\n          <span data-i18n="nav_search">Buscar</span>'
  )
  .replace(
    '<button type="button" id="btn-toggle-fx" class="px-2.5 py-1.5 rounded-xl border border-cyan-500/35 bg-cyan-500/10 text-[11px] font-mono-code t-cyan hover:bg-cyan-500/20 transition" title="Ativar/Desativar onda líquida">\n          Onda: ON\n        </button>',
    '<button type="button" id="btn-toggle-fx" class="px-2.5 py-1.5 rounded-xl border border-cyan-500/35 bg-cyan-500/10 text-[11px] font-mono-code t-cyan hover:bg-cyan-500/20 transition" data-i18n-title="wave_toggle_title" title="Ativar/Desativar onda líquida">\n          Onda: ON\n        </button>'
  );

// 2. Language Switcher with Flags
const oldLangBlockRegex = /<!-- Language Switcher with Country Flags -->[\s\S]*?<\/div>/;
const newLangBlock = `<!-- Language Switcher Pill with Flags -->
        <div class="lang-pill-container">
          <button type="button" data-lang="pt" class="lang-btn active" title="Português">
            <span class="text-[9px] font-bold tracking-wider leading-none">PT</span>
            <svg class="w-4 h-2.5 rounded-[2px] mt-1 shadow-sm shrink-0" viewBox="0 0 720 504" aria-hidden="true">
              <rect width="720" height="504" fill="#009b3a"/>
              <polygon points="360,42 666,252 360,462 54,252" fill="#fedf00"/>
              <circle cx="360" cy="252" r="126" fill="#002776"/>
            </svg>
          </button>
          <button type="button" data-lang="es" class="lang-btn" title="Español">
            <span class="text-[9px] font-bold tracking-wider leading-none">ES</span>
            <svg class="w-4 h-2.5 rounded-[2px] mt-1 shadow-sm shrink-0" viewBox="0 0 750 500" aria-hidden="true">
              <rect width="750" height="500" fill="#c60b1e"/>
              <rect y="125" width="750" height="250" fill="#ffc400"/>
            </svg>
          </button>
          <button type="button" data-lang="en" class="lang-btn" title="English">
            <span class="text-[9px] font-bold tracking-wider leading-none">EN</span>
            <svg class="w-4 h-2.5 rounded-[2px] mt-1 shadow-sm shrink-0" viewBox="0 0 60 30" aria-hidden="true">
              <clipPath id="flag-en-s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
              <clipPath id="flag-en-t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
              <g clip-path="url(#flag-en-s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#flag-en-t)" stroke="#C8102E" stroke-width="4"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
              </g>
            </svg>
          </button>
        </div>`;
html = html.replace(oldLangBlockRegex, newLangBlock);

// 3. Update Hero Bio, 3D card, Sections, Contact, Footer, Modals, Wave Dock, and WhatsApp with i18n hooks
html = html
  .replace(
    'Desenvolvo aplicações modernas de alta performance — desde observatórios inteligentes e pipelines de I.A. Generativa até jogos táticos em WebGL e extensões ultrarrápidas de navegador.',
    'Desenvolvo websites comerciais modernos, landing pages de alta conversão e identidades visuais exclusivas com performance impecável e foco total em vendas.'
  )
  .replace(
    '<button type="button" id="btn-open-terminal-shortcut" class="px-3 py-1.5 rounded-lg border border-fuchsia-500/35 bg-fuchsia-500/10 hover:bg-fuchsia-500/20 t-orchid transition">⚡ Testar Terminal</button>',
    '<button type="button" id="btn-open-terminal-shortcut" class="px-3 py-1.5 rounded-lg border border-fuchsia-500/35 bg-fuchsia-500/10 hover:bg-fuchsia-500/20 t-orchid transition" data-i18n="hero_test_terminal">⚡ Testar Terminal</button>'
  )
  .replace(
    '<button type="button" data-card-tab="profile" class="card-tab-btn py-1.5 rounded-xl border border-transparent tab-pill-active transition font-semibold">Perfil</button>',
    '<button type="button" data-card-tab="profile" class="card-tab-btn py-1.5 rounded-xl border border-transparent tab-pill-active transition font-semibold" data-i18n="card_tab_profile">Perfil</button>'
  )
  .replace(
    '<span class="mt-3 text-[10px] font-mono-code t-muted">Mova o mouse para efeito 3D</span>',
    '<span class="mt-3 text-[10px] font-mono-code t-muted" data-i18n="card_hover_hint">Mova o mouse para efeito 3D</span>'
  )
  .replace('Software Engineer & AI Architect', '<span data-i18n="card_role">Web Designer &amp; Frontend Specialist</span>')
  .replace('<p class="font-display font-bold text-xl t-heading">54+</p>', '<p class="font-display font-bold text-xl t-heading">40+</p>')
  .replace('<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5">Projetos</p>', '<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5" data-i18n="stat_sites">Sites</p>')
  .replace('<p class="font-display font-bold text-xl t-cyan">5</p>', '<p class="font-display font-bold text-xl t-cyan">100%</p>')
  .replace('<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5">Áreas</p>', '<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5" data-i18n="stat_resp">Responsivo</p>')
  .replace('<p class="font-display font-bold text-xl t-orchid">10+</p>', '<p class="font-display font-bold text-xl t-orchid">48+</p>')
  .replace('<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5">Extensões</p>', '<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5" data-i18n="stat_logos">Logos</p>')
  .replace('<span class="text-[11px] font-mono-code t-muted">Brasil • Remoto</span>', '<span class="text-[11px] font-mono-code t-muted" data-i18n="card_loc">Brasil • Remoto</span>')
  .replace(
    '<p class="text-slate-400"># Terminal interativo — clique ou digite um comando:</p>\n                <p><span class="text-cyan-400">➜</span> <span class="text-fuchsia-300">whoami</span></p>\n                <p class="text-slate-200 pl-3">Danilo Oliveira — Engenheiro de Software, I.A. & WebGL.</p>',
    '<p class="text-slate-400" data-i18n="term_intro"># Terminal interativo — clique ou digite um comando:</p>\n                <p><span class="text-cyan-400">➜</span> <span class="text-fuchsia-300">whoami</span></p>\n                <p class="text-slate-200 pl-3" data-i18n="term_whoami_init">Danilo Oliveira — Web Designer &amp; Especialista em Websites Comerciais.</p>'
  )
  .replace('<button type="button" data-cmd="projetos" class="px-2.5 py-1 rounded-lg bg-chip-var hover:bg-fuchsia-500/15 border b-subtle text-[10px] t-orchid transition">projetos</button>', '<button type="button" data-cmd="projetos" class="px-2.5 py-1 rounded-lg bg-chip-var hover:bg-fuchsia-500/15 border b-subtle text-[10px] t-orchid transition" data-i18n="term_btn_proj">projetos</button>')
  .replace('<button type="button" data-cmd="contato" class="px-2.5 py-1 rounded-lg bg-chip-var border b-subtle text-[10px] t-heading transition">contato</button>', '<button type="button" data-cmd="contato" class="px-2.5 py-1 rounded-lg bg-chip-var border b-subtle text-[10px] t-heading transition" data-i18n="term_btn_contact">contato</button>')
  .replace('placeholder="Digite \'help\', \'stack\', \'projetos\'..."', 'data-i18n-placeholder="term_input_ph" placeholder="Digite \'help\', \'stack\', \'projetos\'..."')
  .replace('<span class="absolute top-2.5 left-3 text-[10px] font-mono-code text-cyan-300 pointer-events-none">Clique ou arraste para gerar ondas</span>', '<span class="absolute top-2.5 left-3 text-[10px] font-mono-code text-cyan-300 pointer-events-none" data-i18n="lab_hint">Clique ou arraste para gerar ondas</span>')
  .replace('<button type="button" id="btn-lab-burst" class="flex-1 py-2 rounded-xl text-xs font-semibold btn-cyan">⚡ Pulso de Energia</button>', '<button type="button" id="btn-lab-burst" class="flex-1 py-2 rounded-xl text-xs font-semibold btn-cyan" data-i18n="lab_burst">⚡ Pulso de Energia</button>')
  .replace('<button type="button" id="btn-lab-clear" class="px-4 py-2 rounded-xl text-xs btn-ghost">Limpar</button>', '<button type="button" id="btn-lab-clear" class="px-4 py-2 rounded-xl text-xs btn-ghost" data-i18n="lab_clear">Limpar</button>')
  .replace('<p class="mt-2.5 text-xs t-muted font-mono-code">Clique em uma tecnologia para filtrar os projetos correspondentes</p>', '<p class="mt-2.5 text-xs t-muted font-mono-code" data-i18n="sec_skills_hint">Clique em uma tecnologia para filtrar os projetos correspondentes</p>')
  .replace('<h2 class="font-display text-3xl md:text-4xl font-bold t-heading">\n            Projetos em <span class="brand-gradient-text">Destaque</span>\n          </h2>', '<h2 class="font-display text-3xl md:text-4xl font-bold t-heading" data-i18n-html="sec_portfolio_title">\n            Projetos em <span class="brand-gradient-text">Destaque</span>\n          </h2>')
  .replace('<p class="text-xs font-semibold tracking-[0.3em] uppercase t-orchid mb-3 font-mono-code">Engenharia & Confiabilidade</p>', '<p class="text-xs font-semibold tracking-[0.3em] uppercase t-orchid mb-3 font-mono-code" data-i18n="sec_diff_kicker">Engenharia &amp; Confiabilidade</p>')
  .replace('<h2 class="font-display text-3xl md:text-4xl font-bold t-heading">Padrão de Entrega & Segurança</h2>', '<h2 class="font-display text-3xl md:text-4xl font-bold t-heading" data-i18n="sec_diff_title">Padrão de Entrega &amp; Segurança</h2>')
  .replace('Muito além do visual: estruturas construídas com foco em velocidade, conversão e proteção jurídica para o seu negócio.', '<span data-i18n="sec_diff_desc">Muito além do visual: estruturas construídas com foco em velocidade, conversão e proteção jurídica para o seu negócio.</span>')
  .replace('<p class="text-xs font-semibold tracking-[0.3em] uppercase t-cyan mb-3 font-mono-code">Conectar & Colaborar</p>', '<p class="text-xs font-semibold tracking-[0.3em] uppercase t-cyan mb-3 font-mono-code" data-i18n="sec_contact_kicker">Conectar &amp; Colaborar</p>')
  .replace('<h2 class="font-display text-3xl md:text-4xl font-bold t-heading">\n            Vamos <span class="brand-gradient-text">Trabalhar Juntos</span>\n          </h2>', '<h2 class="font-display text-3xl md:text-4xl font-bold t-heading" data-i18n-html="sec_contact_title">\n            Vamos <span class="brand-gradient-text">Trabalhar Juntos</span>\n          </h2>')
  .replace('<h3 class="font-display text-lg font-bold t-heading mb-5">Canais Diretos</h3>', '<h3 class="font-display text-lg font-bold t-heading mb-5" data-i18n="contact_direct">Canais Diretos</h3>')
  .replace('<button type="button" id="btn-copy-email" class="px-2.5 py-1 rounded-lg border b-subtle bg-chip-var text-[10px] font-mono-code t-cyan hover:border-cyan-400 transition">Copiar</button>', '<button type="button" id="btn-copy-email" class="px-2.5 py-1 rounded-lg border b-subtle bg-chip-var text-[10px] font-mono-code t-cyan hover:border-cyan-400 transition" data-i18n="btn_copy">Copiar</button>')
  .replace('<button type="button" id="btn-copy-gh-contact" class="px-2.5 py-1 rounded-lg border b-subtle bg-chip-var text-[10px] font-mono-code t-orchid hover:border-fuchsia-400 transition">Copiar</button>', '<button type="button" id="btn-copy-gh-contact" class="px-2.5 py-1 rounded-lg border b-subtle bg-chip-var text-[10px] font-mono-code t-orchid hover:border-fuchsia-400 transition" data-i18n="btn_copy">Copiar</button>')
  .replace('<button type="button" id="btn-copy-ig-contact" class="px-2.5 py-1 rounded-lg border b-subtle bg-chip-var text-[10px] font-mono-code t-orchid hover:border-fuchsia-400 transition">Copiar</button>', '<button type="button" id="btn-copy-ig-contact" class="px-2.5 py-1 rounded-lg border b-subtle bg-chip-var text-[10px] font-mono-code t-orchid hover:border-fuchsia-400 transition" data-i18n="btn_copy">Copiar</button>')
  .replace('<p class="t-muted uppercase tracking-wider text-[10px] font-mono-code">Localização</p>\n                  <p class="t-heading mt-0.5">Brasil • Atuação Remota Global</p>', '<p class="t-muted uppercase tracking-wider text-[10px] font-mono-code" data-i18n="contact_loc_label">Localização</p>\n                  <p class="t-heading mt-0.5" data-i18n="contact_loc_val">Brasil • Atuação Remota Global</p>')
  .replace('<p class="t-muted uppercase tracking-wider text-[10px] font-mono-code">Tempo de Resposta</p>\n                  <p class="t-heading mt-0.5">Em até 24 horas</p>', '<p class="t-muted uppercase tracking-wider text-[10px] font-mono-code" data-i18n="contact_resp_label">Tempo de Resposta</p>\n                  <p class="t-heading mt-0.5" data-i18n="contact_resp_val">Em até 24 horas</p>')
  .replace('<p class="text-xs text-emerald-500 font-semibold">Aberto a propostas de engenharia e contratos</p>', '<p class="text-xs text-emerald-500 font-semibold" data-i18n="contact_status">Aberto a projetos de Web Design e consultoria</p>')
  .replace('<h3 class="font-display text-lg font-bold t-heading mb-2">Envie uma Mensagem</h3>', '<h3 class="font-display text-lg font-bold t-heading mb-2" data-i18n="contact_form_title">Envie uma Mensagem</h3>')
  .replace('<label for="c-name" class="block text-[11px] font-mono-code uppercase t-muted mb-1.5">Seu Nome</label>', '<label for="c-name" class="block text-[11px] font-mono-code uppercase t-muted mb-1.5" data-i18n="form_name">Seu Nome</label>')
  .replace('placeholder="Ex: Carlos Silva"', 'data-i18n-placeholder="form_name_ph" placeholder="Ex: Carlos Silva"')
  .replace('<label for="c-email" class="block text-[11px] font-mono-code uppercase t-muted mb-1.5">Seu E-mail</label>', '<label for="c-email" class="block text-[11px] font-mono-code uppercase t-muted mb-1.5" data-i18n="form_email">Seu E-mail</label>')
  .replace('placeholder="Ex: contato@empresa.com"', 'data-i18n-placeholder="form_email_ph" placeholder="Ex: contato@empresa.com"')
  .replace('<label for="c-subject" class="block text-[11px] font-mono-code uppercase t-muted mb-1.5">Assunto</label>', '<label for="c-subject" class="block text-[11px] font-mono-code uppercase t-muted mb-1.5" data-i18n="form_subject">Assunto</label>')
  .replace('placeholder="Ex: Projeto Web App / Consultoria"', 'data-i18n-placeholder="form_subject_ph" placeholder="Ex: Novo Site Comercial / Landing Page"')
  .replace('<label for="c-msg" class="block text-[11px] font-mono-code uppercase t-muted mb-1.5">Mensagem</label>', '<label for="c-msg" class="block text-[11px] font-mono-code uppercase t-muted mb-1.5" data-i18n="form_msg">Mensagem</label>')
  .replace('placeholder="Conte mais sobre o projeto, escopo ou objetivo..."', 'data-i18n-placeholder="form_msg_ph" placeholder="Conte mais sobre o projeto, escopo ou objetivo..."')
  .replace('<button type="submit" class="w-full sm:w-auto px-8 py-3 rounded-xl text-xs btn-cyan">Enviar Mensagem</button>', '<button type="submit" class="w-full sm:w-auto px-8 py-3 rounded-xl text-xs btn-cyan" data-i18n="form_submit">Enviar Mensagem</button>')
  .replace('<p class="text-xs t-muted">&copy; 2026 <strong class="t-heading">Danilo Oliveira</strong>. Todos os direitos reservados.</p>', '<p class="text-xs t-muted">&copy; 2026 <strong class="t-heading">Danilo Oliveira</strong>. <span data-i18n="footer_rights">Todos os direitos reservados.</span></p>')
  .replace('<a href="#services" class="hover:t-cyan transition">Serviços</a>', '<a href="#services" class="hover:t-cyan transition" data-i18n="nav_services">Serviços</a>')
  .replace('<a href="#skills" class="hover:t-cyan transition">Tecnologias</a>', '<a href="#skills" class="hover:t-cyan transition" data-i18n="nav_skills">Tecnologias</a>')
  .replace('<a href="#portfolio" class="hover:t-cyan transition">Projetos</a>', '<a href="#portfolio" class="hover:t-cyan transition" data-i18n="nav_projects">Projetos</a>')
  .replace('<a href="#contact" class="hover:t-cyan transition">Contato</a>', '<a href="#contact" class="hover:t-cyan transition" data-i18n="nav_contact">Contato</a>')
  .replace('<a href="#top" class="t-cyan font-semibold hover:underline">Topo ↑</a>', '<a href="#top" class="t-cyan font-semibold hover:underline" data-i18n="footer_top">Topo ↑</a>')
  .replace('placeholder="Ir para seção, alternar tema ou copiar contato..."', 'data-i18n-placeholder="cmdk_ph" placeholder="Ir para seção, alternar tema ou copiar contato..."')
  .replace('<span class="t-heading font-semibold">Onda Líquida</span>', '<span class="t-heading font-semibold" data-i18n="wave_title">Onda Líquida</span>')
  .replace('<span>Espaço</span>', '<span data-i18n="wave_gap">Espaço</span>')
  .replace('<span>Força</span>', '<span data-i18n="wave_force">Força</span>')
  .replace('<span>Vel.</span>', '<span data-i18n="wave_speed">Vel.</span>')
  .replace('<span>Raio</span>', '<span data-i18n="wave_radius">Raio</span>')
  .replace('✦ Ajustar Onda Líquida', '<span data-i18n="wave_adjust">✦ Ajustar Onda Líquida</span>')
  .replace('<p class="text-[11px] t-body mb-3 leading-relaxed">Envie uma mensagem rápida sobre seu projeto ou orçamento:</p>', '<p class="text-[11px] t-body mb-3 leading-relaxed" data-i18n="wa_prompt">Envie uma mensagem rápida sobre seu projeto ou orçamento:</p>')
  .replace('<span>Iniciar no WhatsApp</span>', '<span data-i18n="wa_send">Iniciar no WhatsApp</span>');

// Full I18N + ROLES + SERVICES + DIFFERENTIALS replacement
const oldDataBlockRegex = /const I18N = \{[\s\S]*?const SKILLS = \[/;
const newDataBlock = `const I18N = {
      pt: {
        page_title: 'Danilo Oliveira — Web Designer & Especialista em Sites Comerciais',
        nav_services: 'Serviços', nav_skills: 'Tecnologias', nav_projects: 'Projetos', nav_diff: 'Diferenciais', nav_contact: 'Contato',
        nav_search: 'Buscar', btn_home_title: 'Ir para o topo', theme_toggle_title: 'Alternar modo Claro / Escuro',
        cmdk_title: 'Abrir Menu Rápido', wave_toggle_title: 'Ativar/Desativar onda líquida',
        theme_light: 'Claro', theme_dark: 'Escuro', wave_on: 'Onda: ON', wave_off: 'Onda: OFF',
        avail: 'Disponível para projetos & contratos', hero_hi: 'Olá, eu sou',
        hero_bio: 'Desenvolvo websites comerciais modernos, landing pages de alta conversão e identidades visuais exclusivas com performance impecável e foco total em vendas.',
        cta_projects: 'Explorar Projetos', cta_contact: 'Entrar em Contato', find_me: 'Encontre-me em',
        hero_test_terminal: '⚡ Testar Terminal',
        card_tab_profile: 'Perfil', card_hover_hint: 'Mova o mouse para efeito 3D',
        card_role: 'Web Designer & Frontend Specialist', stat_sites: 'Sites', stat_resp: 'Responsivo', stat_logos: 'Logos',
        card_loc: 'Brasil • Remoto',
        term_intro: '# Terminal interativo — clique ou digite um comando:',
        term_whoami_init: 'Danilo Oliveira — Web Designer & Especialista em Websites Comerciais.',
        term_btn_proj: 'projetos', term_btn_contact: 'contato',
        term_input_ph: "Digite 'help', 'stack', 'projetos'...",
        lab_hint: 'Clique ou arraste para gerar ondas', lab_burst: '⚡ Pulso de Energia', lab_clear: 'Limpar', lab_particles: 'partículas',
        sec_services_kicker: 'Especialidades & Domínios', sec_services_title: 'Serviços que Ofereço',
        srv_less: '− Menos', srv_more: '+ Detalhes',
        sec_skills_kicker: 'Tecnologias & Ferramentas', sec_skills_title: 'Stack & Proficiência',
        sec_skills_hint: 'Clique em uma tecnologia para filtrar os projetos correspondentes',
        skill_all: 'Todas',
        sec_portfolio_kicker: 'Catálogo de Trabalhos',
        sec_portfolio_title: 'Projetos em <span class="brand-gradient-text">Destaque</span>',
        tab_layouts: 'Layouts & Sites', tab_logos: 'Logos',
        proj_empty: 'Nenhum projeto encontrado com os filtros selecionados.',
        sec_diff_kicker: 'Engenharia & Confiabilidade', sec_diff_title: 'Padrão de Entrega & Segurança',
        sec_diff_desc: 'Muito além do visual: estruturas construídas com foco em velocidade, conversão e proteção jurídica para o seu negócio.',
        sec_contact_kicker: 'Conectar & Colaborar',
        sec_contact_title: 'Vamos <span class="brand-gradient-text">Trabalhar Juntos</span>',
        contact_direct: 'Canais Diretos', btn_copy: 'Copiar',
        contact_loc_label: 'Localização', contact_loc_val: 'Brasil • Atuação Remota Global',
        contact_resp_label: 'Tempo de Resposta', contact_resp_val: 'Em até 24 horas',
        contact_status: 'Aberto a projetos de Web Design e consultoria',
        contact_form_title: 'Envie uma Mensagem',
        form_name: 'Seu Nome', form_name_ph: 'Ex: Carlos Silva',
        form_email: 'Seu E-mail', form_email_ph: 'Ex: contato@empresa.com',
        form_subject: 'Assunto', form_subject_ph: 'Ex: Novo Site Comercial / Landing Page',
        form_msg: 'Mensagem', form_msg_ph: 'Conte mais sobre o projeto, escopo ou objetivo...',
        form_submit: 'Enviar Mensagem', form_sent: 'Mensagem enviada com sucesso! Retorno em até 24h.',
        footer_rights: 'Todos os direitos reservados.', footer_top: 'Topo ↑',
        cmdk_ph: 'Ir para seção, alternar tema ou copiar contato...',
        cmdk_empty: 'Nenhum comando encontrado.',
        wave_title: 'Onda Líquida', wave_gap: 'Espaço', wave_force: 'Força', wave_speed: 'Vel.', wave_radius: 'Raio',
        wave_adjust: '✦ Ajustar Onda Líquida',
        wa_prompt: 'Envie uma mensagem rápida sobre seu projeto ou orçamento:',
        wa_default_msg: 'Olá Danilo! Vi seu portfólio e gostaria de conversar sobre um projeto.',
        wa_send: 'Iniciar no WhatsApp', wa_toast: 'Abrindo conversa no WhatsApp...',
        toast_filter: 'Filtrando projetos com', toast_wave_on: 'Onda líquida ativada', toast_wave_off: 'Onda líquida pausada',
        toast_light: 'Modo Claro ativado', toast_dark: 'Modo Escuro ativado',
        toast_gh: 'GitHub copiado!', toast_email: 'E-mail copiado!', toast_ig: 'Instagram @daniloliveira89 copiado!'
      },
      es: {
        page_title: 'Danilo Oliveira — Diseñador Web y Especialista en Sitios Comerciales',
        nav_services: 'Servicios', nav_skills: 'Tecnologías', nav_projects: 'Proyectos', nav_diff: 'Diferenciales', nav_contact: 'Contacto',
        nav_search: 'Buscar', btn_home_title: 'Ir arriba', theme_toggle_title: 'Cambiar modo Claro / Oscuro',
        cmdk_title: 'Abrir Menú Rápido', wave_toggle_title: 'Activar/Desactivar onda líquida',
        theme_light: 'Claro', theme_dark: 'Oscuro', wave_on: 'Onda: ON', wave_off: 'Onda: OFF',
        avail: 'Disponible para proyectos y contratos', hero_hi: 'Hola, soy',
        hero_bio: 'Desarrollo sitios web comerciales modernos, landing pages de alta conversión e identidades visuales exclusivas con alto rendimiento y enfoque total en ventas.',
        cta_projects: 'Explorar Proyectos', cta_contact: 'Contactar', find_me: 'Encuéntrame en',
        hero_test_terminal: '⚡ Probar Terminal',
        card_tab_profile: 'Perfil', card_hover_hint: 'Mueve el ratón para efecto 3D',
        card_role: 'Diseñador Web y Especialista Frontend', stat_sites: 'Sitios', stat_resp: 'Responsivo', stat_logos: 'Logos',
        card_loc: 'Brasil • Remoto Global',
        term_intro: '# Terminal interactivo — haz clic o escribe un comando:',
        term_whoami_init: 'Danilo Oliveira — Diseñador Web y Especialista en Sitios Comerciales.',
        term_btn_proj: 'proyectos', term_btn_contact: 'contacto',
        term_input_ph: "Escribe 'help', 'stack', 'proyectos'...",
        lab_hint: 'Haz clic o arrastra para generar ondas', lab_burst: '⚡ Pulso de Energía', lab_clear: 'Limpiar', lab_particles: 'partículas',
        sec_services_kicker: 'Especialidades & Dominios', sec_services_title: 'Servicios que Ofrezco',
        srv_less: '− Menos', srv_more: '+ Detalles',
        sec_skills_kicker: 'Tecnologías & Herramientas', sec_skills_title: 'Stack & Dominio',
        sec_skills_hint: 'Haz clic en una tecnología para filtrar los proyectos correspondientes',
        skill_all: 'Todas',
        sec_portfolio_kicker: 'Catálogo de Trabajos',
        sec_portfolio_title: 'Proyectos <span class="brand-gradient-text">Destacados</span>',
        tab_layouts: 'Sitios & Diseños', tab_logos: 'Logos',
        proj_empty: 'No se encontraron proyectos con los filtros seleccionados.',
        sec_diff_kicker: 'Ingeniería & Confiabilidad', sec_diff_title: 'Estándar de Entrega & Seguridad',
        sec_diff_desc: 'Mucho más allá de lo visual: estructuras construidas con enfoque en velocidad, conversión y protección legal para tu negocio.',
        sec_contact_kicker: 'Conectar & Colaborar',
        sec_contact_title: 'Trabajemos <span class="brand-gradient-text">Juntos</span>',
        contact_direct: 'Canales Directos', btn_copy: 'Copiar',
        contact_loc_label: 'Ubicación', contact_loc_val: 'Brasil • Cobertura Remota Global',
        contact_resp_label: 'Tiempo de Respuesta', contact_resp_val: 'En hasta 24 horas',
        contact_status: 'Disponible para proyectos de Diseño Web y consultoría',
        contact_form_title: 'Envía un Mensaje',
        form_name: 'Tu Nombre', form_name_ph: 'Ej: Carlos García',
        form_email: 'Tu Correo', form_email_ph: 'Ej: contacto@empresa.com',
        form_subject: 'Asunto', form_subject_ph: 'Ej: Nuevo Sitio Web / Landing Page',
        form_msg: 'Mensaje', form_msg_ph: 'Cuéntanos sobre el proyecto, alcance u objetivo...',
        form_submit: 'Enviar Mensaje', form_sent: '¡Mensaje enviado con éxito! Respuesta en hasta 24h.',
        footer_rights: 'Todos los derechos reservados.', footer_top: 'Subir ↑',
        cmdk_ph: 'Ir a sección, cambiar tema o copiar contacto...',
        cmdk_empty: 'Ningún comando encontrado.',
        wave_title: 'Onda Líquida', wave_gap: 'Espacio', wave_force: 'Fuerza', wave_speed: 'Vel.', wave_radius: 'Radio',
        wave_adjust: '✦ Ajustar Onda Líquida',
        wa_prompt: 'Envía un mensaje rápido sobre tu proyecto o presupuesto:',
        wa_default_msg: '¡Hola Danilo! Vi tu portafolio y me gustaría conversar sobre un proyecto.',
        wa_send: 'Abrir en WhatsApp', wa_toast: 'Abriendo chat de WhatsApp...',
        toast_filter: 'Filtrando proyectos con', toast_wave_on: 'Onda líquida activada', toast_wave_off: 'Onda líquida pausada',
        toast_light: 'Modo Claro activado', toast_dark: 'Modo Oscuro activado',
        toast_gh: '¡GitHub copiado!', toast_email: '¡Correo copiado!', toast_ig: '¡Instagram @daniloliveira89 copiado!'
      },
      en: {
        page_title: 'Danilo Oliveira — Web Designer & Commercial Website Specialist',
        nav_services: 'Services', nav_skills: 'Tech Stack', nav_projects: 'Projects', nav_diff: 'Standards', nav_contact: 'Contact',
        nav_search: 'Search', btn_home_title: 'Back to top', theme_toggle_title: 'Toggle Light / Dark mode',
        cmdk_title: 'Open Quick Menu', wave_toggle_title: 'Toggle liquid wave effect',
        theme_light: 'Light', theme_dark: 'Dark', wave_on: 'Wave: ON', wave_off: 'Wave: OFF',
        avail: 'Available for projects & contracts', hero_hi: "Hi, I'm",
        hero_bio: 'I design and build modern commercial websites, high-conversion landing pages, and distinctive visual identities with peak performance and business results.',
        cta_projects: 'Explore Projects', cta_contact: 'Get in Touch', find_me: 'Find me on',
        hero_test_terminal: '⚡ Test Terminal',
        card_tab_profile: 'Profile', card_hover_hint: 'Move mouse for 3D effect',
        card_role: 'Web Designer & Frontend Specialist', stat_sites: 'Sites', stat_resp: 'Responsive', stat_logos: 'Logos',
        card_loc: 'Brazil • Worldwide Remote',
        term_intro: '# Interactive terminal — click or type a command:',
        term_whoami_init: 'Danilo Oliveira — Web Designer & Commercial Website Specialist.',
        term_btn_proj: 'projects', term_btn_contact: 'contact',
        term_input_ph: "Type 'help', 'stack', 'projects'...",
        lab_hint: 'Click or drag to generate waves', lab_burst: '⚡ Energy Pulse', lab_clear: 'Clear', lab_particles: 'particles',
        sec_services_kicker: 'Specialties & Domains', sec_services_title: 'Services I Offer',
        srv_less: '− Less', srv_more: '+ Details',
        sec_skills_kicker: 'Technologies & Tools', sec_skills_title: 'Stack & Proficiency',
        sec_skills_hint: 'Click a technology to filter matching projects',
        skill_all: 'All',
        sec_portfolio_kicker: 'Selected Works',
        sec_portfolio_title: 'Featured <span class="brand-gradient-text">Projects</span>',
        tab_layouts: 'Websites & Layouts', tab_logos: 'Logos',
        proj_empty: 'No projects found with the selected filters.',
        sec_diff_kicker: 'Engineering & Reliability', sec_diff_title: 'Delivery Standards & Security',
        sec_diff_desc: 'Far beyond visuals: digital architecture engineered for speed, conversion, and legal compliance for your business.',
        sec_contact_kicker: 'Connect & Collaborate',
        sec_contact_title: "Let's <span class=\\"brand-gradient-text\\">Work Together</span>",
        contact_direct: 'Direct Channels', btn_copy: 'Copy',
        contact_loc_label: 'Location', contact_loc_val: 'Brazil • Global Remote Collaboration',
        contact_resp_label: 'Response Time', contact_resp_val: 'Within 24 hours',
        contact_status: 'Open to Web Design projects and consulting',
        contact_form_title: 'Send a Message',
        form_name: 'Your Name', form_name_ph: 'e.g. Alex Miller',
        form_email: 'Your Email', form_email_ph: 'e.g. contact@company.com',
        form_subject: 'Subject', form_subject_ph: 'e.g. Commercial Website / Landing Page',
        form_msg: 'Message', form_msg_ph: 'Tell me about your project, scope, or goals...',
        form_submit: 'Send Message', form_sent: 'Message sent successfully! Reply within 24 hours.',
        footer_rights: 'All rights reserved.', footer_top: 'Top ↑',
        cmdk_ph: 'Go to section, switch theme, or copy contact...',
        cmdk_empty: 'No matching commands found.',
        wave_title: 'Liquid Wave', wave_gap: 'Gap', wave_force: 'Force', wave_speed: 'Speed', wave_radius: 'Radius',
        wave_adjust: '✦ Adjust Liquid Wave',
        wa_prompt: 'Send a quick message about your project or quote:',
        wa_default_msg: 'Hi Danilo! I saw your portfolio and would like to discuss a project.',
        wa_send: 'Chat on WhatsApp', wa_toast: 'Opening WhatsApp chat...',
        toast_filter: 'Filtering projects with', toast_wave_on: 'Liquid wave enabled', toast_wave_off: 'Liquid wave paused',
        toast_light: 'Light mode enabled', toast_dark: 'Dark mode enabled',
        toast_gh: 'GitHub copied!', toast_email: 'Email copied!', toast_ig: 'Instagram @daniloliveira89 copied!'
      }
    };

    const ROLES_I18N = {
      pt: [
        'Web Designer & UI/UX',
        'Especialista em Sites Comerciais',
        'Landing Pages de Alta Conversão',
        'Identidade Visual & Branding'
      ],
      es: [
        'Diseñador Web & UI/UX',
        'Especialista en Sitios Comerciales',
        'Landing Pages de Alta Conversión',
        'Identidad Visual & Branding'
      ],
      en: [
        'Web Designer & UI/UX',
        'Commercial Website Specialist',
        'High-Conversion Landing Pages',
        'Visual Identity & Branding'
      ]
    };

    const SERVICES_I18N = {
      pt: [
        {
          id: '01',
          title: 'Websites Comerciais & Institucionais',
          desc: 'Projetos sob medida para clínicas, escritórios de advocacia, hotelaria, imobiliárias e consultorias com design refinado e foco em autoridade.',
          deliverables: ['Design exclusivo sob medida', 'Arquitetura de informação clara', 'Painel de agendamento & contato'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>'
        },
        {
          id: '02',
          title: 'Lojas Virtuais & E-commerce',
          desc: 'Vitrines dinâmicas com catálogo de produtos, filtros em tempo real, sacola de compras ágil e integração direta com WhatsApp para fechamento imediato.',
          deliverables: ['Carrinho de compras dinâmico', 'Filtro instantâneo por categoria', 'Checkout via WhatsApp'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>'
        },
        {
          id: '03',
          title: 'Landing Pages de Alta Conversão',
          desc: 'Páginas estratégicas projetadas para tráfego pago (Google/Meta Ads), com gatilhos visuais, quebra de objeções e chamadas para ação assertivas.',
          deliverables: ['Copywriting estruturado', 'Design persuasivo & moderno', 'Métricas de conversão'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
        },
        {
          id: '04',
          title: 'Identidade Visual & Logotipos',
          desc: 'Criação de marcas marcantes e logotipos vetorizados em alta resolução, paletas de cores contemporâneas e guias visuais completos.',
          deliverables: ['Logotipo em vetor & PNG transparente', 'Paleta cromática exclusiva', 'Aplicações para redes e impressos'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>'
        },
        {
          id: '05',
          title: 'Performance & Otimização SEO',
          desc: 'Carregamento instantâneo em 4G, notas 95+ no Google PageSpeed, estrutura semântica para indexação orgânica e zero lentidão.',
          deliverables: ['Carregamento sub-segundo', 'SEO técnico estruturado', 'Código limpo sem plugins pesados'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
        },
        {
          id: '06',
          title: '100% Responsivo & Mobile First',
          desc: 'Layouts perfeitamente adaptados para smartphones, tablets e desktops de qualquer proporção, garantindo legibilidade e usabilidade plena.',
          deliverables: ['Adaptação para todas as telas', 'Navegação tátil fluida', 'Tipografia proporcional'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>'
        }
      ],
      es: [
        {
          id: '01',
          title: 'Sitios Comerciales & Corporativos',
          desc: 'Proyectos a medida para clínicas, bufetes de abogados, hoteles, inmobiliarias y consultoras con diseño refinado y enfoque en autoridad.',
          deliverables: ['Diseño exclusivo a medida', 'Arquitectura de información clara', 'Agenda & contacto directo'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>'
        },
        {
          id: '02',
          title: 'Tiendas Virtuales & E-commerce',
          desc: 'Catálogos dinámicos con filtros en tiempo real, carrito ágil e integración directa con WhatsApp para cierre inmediato de ventas.',
          deliverables: ['Carrito de compras dinámico', 'Filtro instantáneo por categoría', 'Checkout por WhatsApp'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>'
        },
        {
          id: '03',
          title: 'Landing Pages de Alta Conversión',
          desc: 'Páginas estratégicas pensadas para campañas de pago (Google/Meta Ads), con gatillos visuales y llamadas a la acción efectivas.',
          deliverables: ['Copywriting estructurado', 'Diseño persuasivo y moderno', 'Métricas de conversión'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
        },
        {
          id: '04',
          title: 'Identidad Visual & Logotipos',
          desc: 'Creación de marcas memorables y logotipos vectoriales en alta resolución, paletas cromáticas actuales y guías de marca completas.',
          deliverables: ['Logotipo vectorial y PNG transparente', 'Paleta cromática exclusiva', 'Aplicaciones digitales e impresas'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>'
        },
        {
          id: '05',
          title: 'Rendimiento & Optimización SEO',
          desc: 'Carga instantánea en redes 4G, puntuación 95+ en Google PageSpeed, estructura semántica para SEO local y cero lentitud.',
          deliverables: ['Carga en menos de 1s', 'SEO técnico y Schema JSON-LD', 'Código limpio sin plugins pesados'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
        },
        {
          id: '06',
          title: '100% Responsivo & Mobile First',
          desc: 'Diseños perfectamente adaptados a móviles, tablets y pantallas de escritorio, garantizando legibilidad y experiencia táctil fluida.',
          deliverables: ['Adaptación multipantalla', 'Navegación táctil fluida', 'Tipografía proporcional'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>'
        }
      ],
      en: [
        {
          id: '01',
          title: 'Commercial & Corporate Websites',
          desc: 'Bespoke websites tailored for clinics, law firms, hospitality, real estate, and consulting with refined aesthetics built for authority.',
          deliverables: ['Custom bespoke design', 'Clear information architecture', 'Booking & lead capture flows'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>'
        },
        {
          id: '02',
          title: 'Online Stores & E-commerce',
          desc: 'Dynamic digital storefronts with live category filtering, fast shopping bag drawers, and seamless direct checkout integrations.',
          deliverables: ['Interactive shopping cart', 'Instant category filtering', 'Frictionless direct checkout'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>'
        },
        {
          id: '03',
          title: 'High-Conversion Landing Pages',
          desc: 'Strategic pages engineered for paid acquisition (Google & Meta Ads) with clear trust signals and compelling calls to action.',
          deliverables: ['Structured persuasive copy', 'Conversion-focused layout', 'Ad tracking & analytics ready'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
        },
        {
          id: '04',
          title: 'Brand Identity & Logo Design',
          desc: 'Distinctive brand marks, vector logos in high resolution, curated color systems, and comprehensive visual guidelines.',
          deliverables: ['Vector & transparent PNG logos', 'Bespoke color palette', 'Digital & print assets'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>'
        },
        {
          id: '05',
          title: 'Performance & SEO Engineering',
          desc: 'Sub-second mobile load times, 95+ Google PageSpeed scores, semantic HTML structure for local search, and zero plugin bloat.',
          deliverables: ['Sub-second edge loading', 'Technical SEO & JSON-LD', 'Clean zero-bloat codebase'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
        },
        {
          id: '06',
          title: '100% Responsive & Mobile First',
          desc: 'Layouts crafted to adapt seamlessly across smartphones, tablets, and ultra-wide monitors with crisp readability and touch UX.',
          deliverables: ['Multi-viewport precision', 'Fluid touch interactions', 'Proportional typography'],
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>'
        }
      ]
    };

    const DIFFERENTIALS_I18N = {
      pt: [
        {
          tag: 'Borda em Nuvem',
          title: 'Blindagem & Segurança',
          desc: 'Proteção nativa contra clonagem e scripts maliciosos com cabeçalhos de segurança na nuvem, sem vulnerabilidades de CMS genéricos.',
          foot: 'Zero banco exposto',
          tone: 'cyan',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>'
        },
        {
          tag: 'Conversão Direta',
          title: 'Velocidade & WhatsApp',
          desc: 'Código ultraleve que abre instantaneamente no 4G móvel, com botões estratégicos que enviam pedidos direto para o WhatsApp.',
          foot: 'Carregamento < 1s',
          tone: 'emerald',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
        },
        {
          tag: 'Conformidade Legal',
          title: 'Adequação à LGPD',
          desc: 'Estruturas entregues com termos de privacidade e consentimento de dados configurados, garantindo transparência jurídica.',
          foot: 'Privacidade blindada',
          tone: 'fuchsia',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>'
        },
        {
          tag: 'Patrimônio Real',
          title: 'Propriedade 100% Sua',
          desc: 'O domínio é registrado diretamente no seu CPF ou CNPJ. Você mantém a posse legal total do seu patrimônio digital.',
          foot: 'Posse legal garantida',
          tone: 'amber',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>'
        }
      ],
      es: [
        {
          tag: 'Red en la Nube',
          title: 'Blindaje & Seguridad',
          desc: 'Protección nativa contra clonación y scripts maliciosos mediante cabeceras de seguridad en la nube, sin vulnerabilidades de CMS.',
          foot: 'Cero bases expuestas',
          tone: 'cyan',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>'
        },
        {
          tag: 'Conversión Directa',
          title: 'Velocidad & WhatsApp',
          desc: 'Código ultraligero que abre al instante en redes móviles 4G, con botones estratégicos que envían pedidos directo por WhatsApp.',
          foot: 'Carga < 1s',
          tone: 'emerald',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
        },
        {
          tag: 'Cumplimiento Legal',
          title: 'Adaptado a RGPD / LGPD',
          desc: 'Estructuras entregadas con avisos de privacidad y consentimiento configurados, garantizando total transparencia jurídica.',
          foot: 'Privacidad protegida',
          tone: 'fuchsia',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>'
        },
        {
          tag: 'Activo Propio',
          title: 'Propiedad 100% Tuya',
          desc: 'El dominio se registra directamente a nombre de tu empresa. Mantienes la titularidad legal completa de tu patrimonio digital.',
          foot: 'Titularidad garantizada',
          tone: 'amber',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>'
        }
      ],
      en: [
        {
          tag: 'Edge Cloud',
          title: 'Hardened Security',
          desc: 'Native protection against cloning and script injection via cloud HTTP security headers, with zero bloated CMS vulnerabilities.',
          foot: 'Zero exposed database',
          tone: 'cyan',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>'
        },
        {
          tag: 'Direct Conversion',
          title: 'Speed & Instant Leads',
          desc: 'Ultra-light code engineered to open instantaneously on mobile 4G/5G with strategic CTAs and direct messaging workflows.',
          foot: 'Sub-1s loading',
          tone: 'emerald',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
        },
        {
          tag: 'Regulatory Ready',
          title: 'Privacy & Compliance',
          desc: 'Structures delivered with clear privacy notices and consent workflows ready for US, Canadian, European, and Brazilian standards.',
          foot: 'Compliance ready',
          tone: 'fuchsia',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>'
        },
        {
          tag: 'Digital Equity',
          title: '100% Yours to Own',
          desc: 'Every domain and codebase belongs legally to you and your business. Complete ownership with zero vendor lock-in.',
          foot: 'Full ownership',
          tone: 'amber',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>'
        }
      ]
    };

    const SKILLS = [`;

html = html.replace(oldDataBlockRegex, newDataBlock);

// Comprehensive mapping for Site Types in PT, ES, EN + LOGOS_DATA
const siteTypeDictCode = `
    const SITE_TYPE_DICT = {
      'layout-ecommerce': { pt: 'Loja Virtual & E-commerce', es: 'Tienda Virtual & E-commerce', en: 'E-Commerce Store' },
      'layout-omakase': { pt: 'Restaurante Japonês', es: 'Restaurante Japonés', en: 'Japanese Restaurant' },
      'layout-odontologia': { pt: 'Clínica Odontológica', es: 'Clínica Dental', en: 'Dental Clinic' },
      'layout-clinica-medica': { pt: 'Centro Médico & Hospital', es: 'Centro Médico', en: 'Medical Center' },
      'layout-real-estate': { pt: 'Imobiliária de Luxo', es: 'Inmobiliaria de Lujo', en: 'Luxury Real Estate' },
      'layout-corporate': { pt: 'Escritório de Advocacia', es: 'Bufete de Abogados', en: 'Law Firm' },
      'layout-barbearia': { pt: 'Barbearia & Visagismo', es: 'Barbería & Visagismo', en: 'Barbershop' },
      'layout-academia': { pt: 'Academia & Fitness', es: 'Gimnasio & Fitness', en: 'Gym & Fitness' },
      'layout-concessionaria': { pt: 'Concessionária & Blindados', es: 'Concesionaria & Blindados', en: 'Car Dealership' },
      'layout-estetica': { pt: 'Clínica de Estética & Laser', es: 'Clínica de Estética & Láser', en: 'Aesthetic Clinic' },
      'layout-hotel-resort': { pt: 'Hotel & Eco-Resort', es: 'Hotel & Eco-Resort', en: 'Hotel & Eco-Resort' },
      'layout-agencia-viagens': { pt: 'Agência de Turismo', es: 'Agencia de Viajes', en: 'Travel Agency' },
      'layout-arquitetura': { pt: 'Escritório de Arquitetura', es: 'Estudio de Arquitectura', en: 'Architecture Studio' },
      'layout-coworking': { pt: 'Coworking & Hub de Inovação', es: 'Coworking & Espacio Flexible', en: 'Coworking Hub' },
      'layout-cafeteria': { pt: 'Cafeteria & Grãos Especiais', es: 'Cafetería de Especialidad', en: 'Specialty Coffee' },
      'layout-hamburgueria': { pt: 'Hamburgueria Artesanal', es: 'Hamburguesería Artesanal', en: 'Artisan Burger Bar' },
      'layout-pizzaria': { pt: 'Pizzaria Napolitana', es: 'Pizzería Napolitana', en: 'Neapolitan Pizzeria' },
      'layout-confeitaria': { pt: 'Confeitaria & Chocolateria', es: 'Pastelería & Chocolatería', en: 'Artisan Bakery' },
      'layout-petshop': { pt: 'Pet Shop & Spa Pet', es: 'Pet Shop & Spa Canino', en: 'Pet Shop & Spa' },
      'layout-pet-shop': { pt: 'Pet Shop & Spa Pet', es: 'Pet Shop & Spa Canino', en: 'Pet Shop & Spa' },
      'layout-clinica-veterinaria': { pt: 'Hospital Veterinário 24h', es: 'Hospital Veterinario 24h', en: 'Veterinary Hospital' },
      'layout-veterinaria': { pt: 'Hospital Veterinário 24h', es: 'Hospital Veterinario 24h', en: 'Veterinary Hospital' },
      'layout-advocacia': { pt: 'Escritório de Advocacia', es: 'Bufete de Abogados', en: 'Law Firm' },
      'layout-consultoria': { pt: 'Consultoria Empresarial', es: 'Consultoría Estratégica', en: 'Business Consulting' },
      'layout-fintech': { pt: 'Fintech & Câmbio Global', es: 'Fintech & Cambio Global', en: 'Fintech & Currency' },
      'layout-imobiliaria': { pt: 'Imobiliária de Luxo', es: 'Inmobiliaria de Lujo', en: 'Luxury Real Estate' },
      'layout-construtora': { pt: 'Construtora & Incorporadora', es: 'Constructora & Inmobiliaria', en: 'Construction Company' },
      'layout-engenharia': { pt: 'Engenharia Estrutural BIM', es: 'Ingeniería Estructural BIM', en: 'Structural Engineering' },
      'layout-escola-cursos': { pt: 'Cursos & Escola de Tecnologia', es: 'Escuela de Tecnología', en: 'Tech Academy' },
      'layout-saas-ai': { pt: 'SaaS & Startup de I.A.', es: 'SaaS & Startup de I.A.', en: 'AI SaaS Landing' },
      'layout-agencia-publicidade': { pt: 'Agência de Marketing & Branding', es: 'Agencia de Marketing & Branding', en: 'Marketing Agency' },
      'layout-contabilidade': { pt: 'Escritório de Contabilidade', es: 'Estudio Contable & BPO', en: 'Accounting Firm' },
      'layout-logistica': { pt: 'Transportadora & Logística', es: 'Operador Logístico', en: 'Logistics & Freight' },
      'layout-energia-solar': { pt: 'Energia Solar & Fotovoltaica', es: 'Energía Solar Fotovoltaica', en: 'Solar Energy' },
      'layout-fotografo': { pt: 'Estúdio de Fotografia', es: 'Estudio de Fotografía', en: 'Photography Studio' },
      'layout-produtora-eventos': { pt: 'Produtora de Eventos & Shows', es: 'Productora de Eventos', en: 'Events Production' },
      'layout-eventos': { pt: 'Produtora de Eventos & Shows', es: 'Productora de Eventos', en: 'Events Production' },
      'layout-produtora-audiovisual': { pt: 'Produtora de Cinema & Vídeo', es: 'Productora Audiovisual', en: 'Film Production' },
      'layout-cinema': { pt: 'Produtora de Cinema & Vídeo', es: 'Productora Audiovisual', en: 'Film Production' },
      'layout-marca-roupas': { pt: 'Marca Streetwear & Moda', es: 'Marca Streetwear & Moda', en: 'Streetwear Fashion Brand' },
      'layout-spa-massagem': { pt: 'Spa Terapêutico & Bem-Estar', es: 'Spa Terapéutico & Bienestar', en: 'Wellness & Spa Sanctuary' },
      'layout-motel': { pt: 'Motel Boutique & Suítes', es: 'Motel Boutique & Suites', en: 'Boutique Suites Hotel' },
      'layout-moveis-decoracao': { pt: 'Mobiliário & Design Escandinavo', es: 'Mobiliario & Diseño Escandinavo', en: 'Bespoke Furniture & Decor' },
      'layout-limpeza-manutencao': { pt: 'Limpeza Pós-Obra & Facilities', es: 'Limpieza & Mantenimiento', en: 'Facility & Cleaning Services' },
      'layout-psicologia': { pt: 'Psicologia Clínica & TCC', es: 'Psicología Clínica & TCC', en: 'Clinical Psychology' },
      'layout-ferramentaria-caldeiraria': { pt: 'Usinagem CNC & Metalurgia', es: 'Mecanizado CNC & Metalurgia', en: 'CNC Machining & Industry' },
      'layout-tattoo': { pt: 'Estúdio de Tatuagem', es: 'Estudio de Tatuajes', en: 'Tattoo Studio' },
      'layout-banda-gravadora': { pt: 'Banda & Gravadora Musical', es: 'Banda & Sello Musical', en: 'Band & Record Label' },
      'layout-banda': { pt: 'Banda & Gravadora Musical', es: 'Banda & Sello Musical', en: 'Band & Record Label' },
      'layout-arte': { pt: 'Portfólio de Arte Editorial', es: 'Portafolio de Arte Editorial', en: 'Art Portfolio' },
      'layout-meridian-wave': { pt: 'Fintech & Liquid Wave 3D', es: 'Fintech & Onda Líquida 3D', en: 'Fintech & 3D Liquid Wave' },
      'layout-site-face': { pt: 'Portfólio Editorial Dourado', es: 'Portafolio Editorial Dorado', en: 'Gold Mask Editorial' },
      'layout-site-tattoo': { pt: 'Estúdio de Tatuagem X-Ray', es: 'Estudio de Tatuajes X-Ray', en: 'X-Ray Tattoo Studio' },
      'layout-toca-white-rabbit': { pt: 'Portfólio Surrealista 3D', es: 'Portafolio Surrealista 3D', en: '3D Surreal Portfolio' }
    };

    const LOGOS_DATA = [
      { id: 'logo-01', name: 'Aether Gear', file: '01-aether-gear.png', pt: 'Engenharia de Precisão', es: 'Ingeniería de Precisión', en: 'Precision Engineering', demoUrl: '/layouts para sites/site-ferramentaria-caldeiraria/index.html' },
      { id: 'logo-02', name: 'Division 89', file: '02-division-89.png', pt: 'Agência de Branding & Design', es: 'Agencia de Branding & Diseño', en: 'Branding & Design Agency', demoUrl: '/layouts para sites/site-agencia-publicidade/index.html' },
      { id: 'logo-03', name: 'Norden Atelier', file: '03-norden-atelier.png', pt: 'Mobiliário & Design Autoral', es: 'Mobiliario & Diseño Autoral', en: 'Bespoke Furniture & Design', demoUrl: '/layouts para sites/site-moveis-decoracao/index.html' },
      { id: 'logo-04', name: 'Kuro Omakase', file: '04-kuro-omakase.png', pt: 'Restaurante Japonês', es: 'Restaurante Japonés', en: 'Japanese Restaurant', demoUrl: '/layouts para sites/site-gastronomia-reserva/index.html' },
      { id: 'logo-05', name: 'Origem 85', file: '05-origem-85.png', pt: 'Cafeteria & Grãos Especiais', es: 'Cafetería & Cafés Especiales', en: 'Specialty Coffee & Roastery', demoUrl: '/layouts para sites/site-cafeteria/index.html' },
      { id: 'logo-06', name: 'Vale das Nuvens', file: '06-vale-das-nuvens.png', pt: 'Hotel & Eco-Resort', es: 'Hotel & Eco-Resort', en: 'Eco-Resort & Spa', demoUrl: '/layouts para sites/site-hotel-resort/index.html' },
      { id: 'logo-07', name: 'Velvet Suites', file: '07-velvet-suites.png', pt: 'Motel Boutique & Suítes', es: 'Motel Boutique & Suites', en: 'Boutique Motel & Suites', demoUrl: '/layouts para sites/site-motel/index.html' },
      { id: 'logo-08', name: 'Horizon Expeditions', file: '08-horizon-expeditions.png', pt: 'Agência de Viagens & Expedições', es: 'Agencia de Viajes & Expediciones', en: 'Travel Agency & Expeditions', demoUrl: '/layouts para sites/site-agencia-viagens/index.html' },
      { id: 'logo-09', name: 'Lumina Smile', file: '09-lumina-smile.png', pt: 'Clínica Odontológica', es: 'Clínica Odontológica', en: 'Dental Clinic', demoUrl: '/layouts para sites/site-odontologia/index.html' },
      { id: 'logo-10', name: 'Nexus Hub', file: '10-nexus.png', pt: 'Coworking & Inovação', es: 'Coworking & Innovación', en: 'Coworking & Innovation', demoUrl: '/layouts para sites/site-escola-cursos/index.html' },
      { id: 'logo-11', name: 'Derma Reveal', file: '11-derma-reveal.png', pt: 'Clínica de Estética & Laser', es: 'Clínica de Estética & Láser', en: 'Aesthetic & Laser Clinic', demoUrl: '/layouts para sites/site-estetica/index.html' },
      { id: 'logo-12', name: 'Mente & Fluxo', file: '12-mente-and-fluxo.png', pt: 'Psicologia & Terapia', es: 'Psicología & Terapia', en: 'Psychology & Therapy', demoUrl: '/layouts para sites/site-psicologia/index.html' },
      { id: 'logo-13', name: 'Sanctuary Spa', file: '13-sanctuary.png', pt: 'Spa & Bem-Estar', es: 'Spa & Bienestar', en: 'Spa & Wellness', demoUrl: '/layouts para sites/site-spa-massagem/index.html' },
      { id: 'logo-14', name: 'Pet Majesty', file: '14-pet-majesty.png', pt: 'Pet Shop & Boutique Canina', es: 'Pet Shop & Boutique Canina', en: 'Pet Shop & Canine Boutique', demoUrl: '/layouts para sites/site-petshop/index.html' },
      { id: 'logo-15', name: 'Vet Life 24h', file: '15-vet-life-24h.png', pt: 'Hospital Veterinário 24h', es: 'Hospital Veterinario 24h', en: '24h Veterinary Hospital', demoUrl: '/layouts para sites/site-clinica-veterinaria/index.html' },
      { id: 'logo-16', name: 'Valoris Law', file: '16-valoris.png', pt: 'Escritório de Advocacia', es: 'Bufete de Abogados', en: 'Corporate Law Firm', demoUrl: '/layouts para sites/site-corporate/index.html' },
      { id: 'logo-17', name: 'ContaFlow', file: '17-contaflow.png', pt: 'Escritório de Contabilidade', es: 'Estudio de Contabilidad', en: 'Accounting & Finance', demoUrl: '/layouts para sites/site-contabilidade/index.html' },
      { id: 'logo-18', name: 'Apex Consulting', file: '18-apex.png', pt: 'Consultoria Empresarial', es: 'Consultoría Empresarial', en: 'Business Consulting', demoUrl: '/layouts para sites/site-consultoria/index.html' },
      { id: 'logo-19', name: 'Pulse Pay', file: '19-pulse-pay.png', pt: 'Fintech & Câmbio Global', es: 'Fintech & Cambio Global', en: 'Fintech & Payments', demoUrl: '/layouts para sites/site-meridian-wave/index.html' },
      { id: 'logo-20', name: 'Prime Villas', file: '20-prime-villas.png', pt: 'Imobiliária de Luxo', es: 'Inmobiliaria de Lujo', en: 'Luxury Real Estate', demoUrl: '/layouts para sites/site-real-estate/index.html' },
      { id: 'logo-21', name: 'Studio Arq 89', file: '21-studio-arq-89.png', pt: 'Escritório de Arquitetura', es: 'Estudio de Arquitectura', en: 'Architecture Studio', demoUrl: '/layouts para sites/site-arquitetura-editorial/index.html' },
      { id: 'logo-22', name: 'Vértice Construtora', file: '22-vertice.png', pt: 'Construtora & Incorporadora', es: 'Constructora & Inmobiliaria', en: 'Construction & Real Estate', demoUrl: '/layouts para sites/site-construtora/index.html' },
      { id: 'logo-23', name: 'BIM Struct', file: '23-bim-struct.png', pt: 'Engenharia Estrutural BIM', es: 'Ingeniería Estructural BIM', en: 'BIM Structural Engineering', demoUrl: '/layouts para sites/site-engenharia/index.html' },
      { id: 'logo-24', name: 'Solaris Energia', file: '24-solaris.png', pt: 'Energia Solar Fotovoltaica', es: 'Energía Solar Fotovoltaica', en: 'Solar & Renewable Energy', demoUrl: '/layouts para sites/site-energia-solar/index.html' },
      { id: 'logo-25', name: 'Prime Clean', file: '25-prime-clean.png', pt: 'Limpeza Pós-Obra & Manutenção', es: 'Limpieza Post-Obra & Mantenimiento', en: 'Post-Construction Cleaning', demoUrl: '/layouts para sites/site-limpeza-manutencao/index.html' },
      { id: 'logo-26', name: 'Veloce Motors', file: '26-veloce-motors.png', pt: 'Concessionária de Superesportivos', es: 'Concesionaria de Superdeportivos', en: 'Supercars & Dealership', demoUrl: '/layouts para sites/site-concessionaria/index.html' },
      { id: 'logo-27', name: 'CargoMax', file: '27-cargomax.png', pt: 'Transportadora & Logística', es: 'Transporte & Logística', en: 'Logistics & Freight', demoUrl: '/layouts para sites/site-logistica/index.html' },
      { id: 'logo-28', name: 'Precision CNC', file: '28-precision-cnc.png', pt: 'Usinagem CNC & Moldes', es: 'Mecanizado CNC & Moldes', en: 'CNC Machining & Tooling', demoUrl: '/layouts para sites/site-ferramentaria-caldeiraria/index.html' },
      { id: 'logo-29', name: 'Studio Matrix', file: '29-studio-matrix.png', pt: 'Marketing Digital & Growth', es: 'Marketing Digital & Growth', en: 'Digital Marketing & Growth', demoUrl: '/layouts para sites/site-agencia-publicidade/index.html' },
      { id: 'logo-30', name: 'Lumière Photo', file: '30-lumiere.png', pt: 'Estúdio de Fotografia Fine Art', es: 'Estudio de Fotografía Fine Art', en: 'Fine Art Photography', demoUrl: '/layouts para sites/site-fotografo/index.html' },
      { id: 'logo-31', name: 'Stage Live', file: '31-stage-live.png', pt: 'Produtora de Eventos & Shows', es: 'Productora de Eventos & Shows', en: 'Live Events & Concerts', demoUrl: '/layouts para sites/site-produtora-eventos/index.html' },
      { id: 'logo-32', name: 'Framework Filmes', file: '32-framework.png', pt: 'Produtora Cinematográfica', es: 'Productora Cinematográfica', en: 'Film & Cinema Production', demoUrl: '/layouts para sites/site-produtora-audiovisual/index.html' },
      { id: 'logo-33', name: 'The Barber Club', file: '33-the-barber-club.png', pt: 'Barbearia & Visagismo', es: 'Barbería & Visagismo', en: 'Barbershop & Styling', demoUrl: '/layouts para sites/site-barbearia/index.html' },
      { id: 'logo-34', name: 'Black Needle', file: '34-black-needle.png', pt: 'Estúdio de Tatuagem', es: 'Estudio de Tatuajes', en: 'Tattoo Studio', demoUrl: '/layouts para sites/site tattoo/index.html' },
      { id: 'logo-35', name: 'Neon Horizon', file: '35-neon-horizon.png', pt: 'Banda & Gravadora Musical', es: 'Banda & Sello Musical', en: 'Band & Record Label', demoUrl: '/layouts para sites/site-banda-gravadora/index.html' },
      { id: 'logo-36', name: 'Iron Core Gym', file: '36-iron-core.png', pt: 'Academia & Performance', es: 'Gimnasio & Performance', en: 'Gym & Fitness', demoUrl: '/layouts para sites/site-academia/index.html' },
      { id: 'logo-37', name: 'Aurea Atelier', file: '37-aurea-atelier.png', pt: 'Portfólio de Arte Editorial', es: 'Portafolio de Arte Editorial', en: 'Fine Art Editorial', demoUrl: '/layouts para sites/site face/index.html' },
      { id: 'logo-38', name: 'Hyperion Academy', file: '38-hyperion.png', pt: 'Cursos & Tecnologia', es: 'Cursos & Escuela de Tecnología', en: 'Tech Academy & Courses', demoUrl: '/layouts para sites/site-escola-cursos/index.html' },
      { id: 'logo-39', name: 'FlowGate AI', file: '39-flowgate-ai.png', pt: 'SaaS & Startup de I.A.', es: 'SaaS & Startup de I.A.', en: 'AI Gateway & SaaS', demoUrl: '/layouts para sites/site-saas-ai/index.html' },
      { id: 'logo-40', name: 'Radar IA', file: '40-radar-ia.png', pt: 'Observatório Global de I.A.', es: 'Observatorio Global de I.A.', en: 'Global AI Observatory', demoUrl: 'https://daniloliveira89.github.io/site---Radar-IA/' },
      { id: 'logo-41', name: 'Prompt Studio', file: '41-prompt-studio.png', pt: 'Estúdio de Prompts I.A.', es: 'Estudio de Prompts I.A.', en: 'AI Prompt Engineering Studio', demoUrl: 'https://app-studio-ai.vercel.app' },
      { id: 'logo-42', name: 'IVFR Global', file: '42-ivfr-global.png', pt: 'Índice Econômico Global', es: 'Índice Económico Global', en: 'Global Economic Index', demoUrl: 'https://daniloliveira89.github.io/indice-custo-vida/' },
      { id: 'logo-43', name: 'Music Atlas', file: '43-music-atlas.png', pt: 'Streaming & Música PWA', es: 'Streaming & Música PWA', en: 'Music Streaming PWA', demoUrl: 'https://music-atlas.vercel.app' },
      { id: 'logo-44', name: 'Game Atlas', file: '44-game-atlas.png', pt: 'Diário Gamer & Backlog', es: 'Diario Gamer & Backlog', en: 'Gamer Journal & Backlog', demoUrl: 'https://game-atlas.vercel.app' },
      { id: 'logo-45', name: 'Cinematheque Atlas', file: '45-cinematheque-atlas.png', pt: 'Catálogo & Acervo de Cinema', es: 'Catálogo & Archivo de Cine', en: 'Film Archive & Journal', demoUrl: 'https://github.com/daniloliveira89/cinematheque-atlas' },
      { id: 'logo-46', name: 'Bookshelf Atlas', file: '46-bookshelf-atlas.png', pt: 'Biblioteca & Diário Literário', es: 'Biblioteca & Diario Literario', en: 'Literary Journal & Library', demoUrl: 'https://github.com/daniloliveira89/bookshelf-atlas' },
      { id: 'logo-47', name: 'Neon Synapse', file: '47-neon-synapse.png', pt: 'Jogo Tático Cyberpunk', es: 'Juego Táctico Cyberpunk', en: 'Cyberpunk Card Game', demoUrl: 'https://neon-synapse.vercel.app' },
      { id: 'logo-48', name: 'Prancheta Tática', file: '48-prancheta-tatica.png', pt: 'Simulador Tático de Futebol', es: 'Pizarra Táctica de Fútbol', en: 'Tactical Soccer Board', demoUrl: 'https://prancheta-tatica.vercel.app' }
    ];
`;

// Replace PROJECTS declaration with Web Design filtered projects + automatic language initializer
const oldProjectsRegex = /const PROJECTS = \[[\s\S]*?const state = \{[\s\S]*?\};/;
const newProjectsCode = `${siteTypeDictCode}

    const DEFAULT_PROJECTS = [
      { id: 'layout-ecommerce', title: 'Techwear Luxury Store', badge: 'Loja Virtual & E-commerce', cat: 'Layouts & Sites', desc: 'Loja virtual minimalista de alta conversão.', tags: ['E-commerce', 'Tailwind CSS'] },
      { id: 'layout-omakase', title: 'Aurum Omakase', badge: 'Restaurante Japonês', cat: 'Layouts & Sites', desc: 'Restaurante contemporâneo com menu degustação.', tags: ['Gastronomia', 'UI/UX'] },
      { id: 'layout-hotel-resort', title: 'Botanique Eco Resort', badge: 'Hotel & Eco-Resort', cat: 'Layouts & Sites', desc: 'Hotel boutique e spa nas montanhas.', tags: ['Hotelaria', 'Next.js'] },
      { id: 'layout-odontologia', title: 'OrtoLuxe Odontologia', badge: 'Clínica Odontológica', cat: 'Layouts & Sites', desc: 'Clínica estética de alta tecnologia.', tags: ['Saúde', 'Tailwind CSS'] }
    ];

    const PROJECTS = (typeof PROJECTS_DATA !== 'undefined' && Array.isArray(PROJECTS_DATA))
      ? PROJECTS_DATA
          .filter(p => p.category === 'layouts')
          .map(p => ({
            id: p.id,
            title: p.title,
            badge: p.badge || p.categoryLabel || 'Projeto',
            cat: 'Layouts & Sites',
            rawCat: p.category,
            desc: p.shortDescription || p.description || '',
            fullDesc: p.fullDescription || p.shortDescription || p.description || '',
            image: p.image || '/assets/images/radar-ia-real.png',
            gallery: (p.gallery && p.gallery.length) ? p.gallery : [p.image || '/assets/images/radar-ia-real.png'],
            tags: p.tags || [],
            links: p.links || {},
            features: p.features || []
          }))
      : DEFAULT_PROJECTS;

    const ROUTE_DEFAULT_LANG = 'pt';

    function detectInitialLanguage() {
      try {
        const params = new URLSearchParams(window.location.search);
        const qLang = (params.get('lang') || '').toLowerCase();
        if (qLang === 'pt' || qLang === 'en' || qLang === 'es') {
          localStorage.setItem('portfolio_lang', qLang);
          localStorage.setItem('portfolio_lang_manual', '1');
          return qLang;
        }
      } catch (e) {}
      const pathLower = window.location.pathname.toLowerCase();
      if (pathLower === '/en' || pathLower.indexOf('/en/') === 0) return 'en';
      if (pathLower === '/es' || pathLower.indexOf('/es/') === 0) return 'es';
      try {
        if (localStorage.getItem('portfolio_lang_manual') === '1') {
          const saved = localStorage.getItem('portfolio_lang');
          if (saved === 'pt' || saved === 'es' || saved === 'en') return saved;
        }
      } catch (e) {}
      if (ROUTE_DEFAULT_LANG !== 'pt') return ROUTE_DEFAULT_LANG;
      const langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || navigator.userLanguage || 'pt'];
      for (let i = 0; i < langs.length; i++) {
        const code = (langs[i] || '').toLowerCase().split('-')[0];
        if (code === 'pt') return 'pt';
        if (code === 'es') return 'es';
        if (code === 'en') return 'en';
      }
      return 'en';
    }

    const state = {
      theme: 'dark',
      lang: detectInitialLanguage(),
      skillCat: 'Todas',
      projectCat: 'Layouts & Sites',
      techFilter: null,
      expandedService: null,
      selectedScopes: new Set(),
      fxEnabled: true
    };`;
html = html.replace(oldProjectsRegex, newProjectsCode);

// Update theme toggle, typing, terminal, services, differentials, skills, and projects to be 100% localized
const oldScriptsBlockRegex = /\/\/ =========================================================================\s*\/\/ 2\. THEME TOGGLE[\s\S]*?\/\/ =========================================================================\s*\/\/ 6\. COMMAND PALETTE/;
const newScriptsBlock = `// =========================================================================
    // 2. THEME TOGGLE (CLARO / ESCURO)
    // =========================================================================
    function toggleTheme() {
      const t = I18N[state.lang] || I18N.pt;
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', state.theme);
      document.getElementById('theme-icon').textContent = state.theme === 'dark' ? '☀️' : '🌙';
      document.getElementById('theme-label').textContent = state.theme === 'dark' ? t.theme_light : t.theme_dark;
      showToast(state.theme === 'light' ? t.toast_light : t.toast_dark);
    }
    document.getElementById('btn-toggle-theme').addEventListener('click', toggleTheme);

    // =========================================================================
    // 3. TYPING EFFECT & 3D TILT
    // =========================================================================
    let roleIdx = 0, charIdx = 0, deleting = false;
    function getRoles() { return ROLES_I18N[state.lang] || ROLES_I18N.pt; }
    (function initTypingStart() {
      const first = getRoles()[0];
      charIdx = first.length;
      deleting = true;
      const el = document.getElementById('typing-role');
      if (el) el.textContent = first;
    })();
    function tickTyping() {
      const roles = getRoles();
      const target = roles[roleIdx % roles.length];
      const el = document.getElementById('typing-role');
      if (!deleting) {
        charIdx++; el.textContent = target.slice(0, charIdx);
        if (charIdx >= target.length) { deleting = true; setTimeout(tickTyping, 1800); return; }
        setTimeout(tickTyping, 55);
      } else {
        charIdx--; el.textContent = target.slice(0, charIdx);
        if (charIdx <= 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; setTimeout(tickTyping, 320); return; }
        setTimeout(tickTyping, 30);
      }
    }
    setTimeout(tickTyping, 1800);

    const tiltCard = document.getElementById('hero-tilt-card');
    tiltCard.addEventListener('mousemove', (e) => {
      const r = tiltCard.getBoundingClientRect();
      tiltCard.style.transform = \`rotateY(\${((e.clientX - r.left) / r.width - 0.5) * 11}deg) rotateX(\${-((e.clientY - r.top) / r.height - 0.5) * 11}deg)\`;
    });
    tiltCard.addEventListener('mouseleave', () => { tiltCard.style.transform = 'rotateY(0deg) rotateX(0deg)'; });

    document.addEventListener('mousemove', (e) => {
      const card = e.target.closest('.spotlight-card');
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', \`\${e.clientX - r.left}px\`);
        card.style.setProperty('--my', \`\${e.clientY - r.top}px\`);
      }
    });

    // =========================================================================
    // 4. MINI CANVAS LAB & TERMINAL
    // =========================================================================
    const labCanvas = document.getElementById('mini-lab-canvas'), labCtx = labCanvas.getContext('2d');
    let labOrbs = [], labDrawing = false;
    function initLabCanvas() {
      const rect = labCanvas.parentElement.getBoundingClientRect();
      labCanvas.width = Math.max(260, rect.width); labCanvas.height = Math.max(200, rect.height);
    }
    function spawnLabOrbs(x, y, count = 8) {
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2, sp = Math.random() * 2.6 + 0.8;
        labOrbs.push({ x, y, vx: Math.cos(a)*sp, vy: Math.sin(a)*sp, r: Math.random()*3.5+1.5, life: 1, color: Math.random()>0.5?'#22D3EE':'#E879F9' });
      }
      if (labOrbs.length > 140) labOrbs = labOrbs.slice(-140);
    }
    function animateLab() {
      if (!document.getElementById('tab-playground').classList.contains('hidden')) {
        labCtx.fillStyle = 'rgba(6, 7, 11, 0.22)';
        labCtx.fillRect(0, 0, labCanvas.width, labCanvas.height);
        labOrbs.forEach(o => {
          o.x += o.vx; o.y += o.vy; o.vx *= 0.985; o.vy *= 0.985; o.life -= 0.012;
          if (o.x < 0 || o.x > labCanvas.width) o.vx *= -1;
          if (o.y < 0 || o.y > labCanvas.height) o.vy *= -1;
          labCtx.beginPath(); labCtx.arc(o.x, o.y, o.r, 0, Math.PI*2);
          labCtx.fillStyle = o.color; labCtx.globalAlpha = Math.max(0, o.life); labCtx.fill();
        });
        labCtx.globalAlpha = 1;
        labOrbs = labOrbs.filter(o => o.life > 0);
        const t = I18N[state.lang] || I18N.pt;
        document.getElementById('lab-count').textContent = \`\${labOrbs.length} \${t.lab_particles}\`;
      }
      requestAnimationFrame(animateLab);
    }
    animateLab();
    labCanvas.addEventListener('pointerdown', (e) => { labDrawing = true; const r = labCanvas.getBoundingClientRect(); spawnLabOrbs(e.clientX - r.left, e.clientY - r.top, 14); });
    labCanvas.addEventListener('pointermove', (e) => { if (!labDrawing) return; const r = labCanvas.getBoundingClientRect(); spawnLabOrbs(e.clientX - r.left, e.clientY - r.top, 4); });
    window.addEventListener('pointerup', () => { labDrawing = false; });
    document.getElementById('btn-lab-burst').addEventListener('click', () => { initLabCanvas(); spawnLabOrbs(labCanvas.width/2, labCanvas.height/2, 32); });
    document.getElementById('btn-lab-clear').addEventListener('click', () => { labOrbs = []; labCtx.clearRect(0,0,labCanvas.width,labCanvas.height); });

    function switchHeroTab(tab) {
      ['profile', 'terminal', 'playground'].forEach(t => document.getElementById(\`tab-\${t}\`).classList.toggle('hidden', t !== tab));
      document.querySelectorAll('.card-tab-btn').forEach(btn => {
        const active = btn.getAttribute('data-card-tab') === tab;
        btn.classList.toggle('tab-pill-active', active);
        btn.classList.toggle('t-muted', !active);
      });
      if (tab === 'playground') setTimeout(() => { initLabCanvas(); spawnLabOrbs(labCanvas.width/2, labCanvas.height/2, 20); }, 30);
    }

    function runTerminalCmd(raw) {
      const cmd = raw.trim().toLowerCase(), out = document.getElementById('term-output');
      const curLang = state.lang || 'pt';
      const clearMsgs = {
        pt: '# Terminal limpo. Digite "help".',
        es: '# Terminal limpio. Escribe "help".',
        en: '# Terminal cleared. Type "help".'
      };
      if (cmd === 'clear') { out.innerHTML = \`<p class="text-slate-400">\${clearMsgs[curLang] || clearMsgs.pt}</p>\`; return; }
      const maps = {
        pt: {
          help: 'Comandos: whoami, stack, projetos, contato, clear',
          whoami: 'Danilo Oliveira — Web Designer & Especialista em Websites Comerciais.',
          stack: 'UI/UX Design • Landing Pages • Tailwind CSS • React/Next.js • Identidade Visual • SEO & Performance.',
          projetos: '40 Websites Comerciais em produção (Restaurantes, Clínicas, Hotelaria, E-commerce, Advocacia, Portfólios 3D) e 48 Logos.',
          contato: 'E-mail: danilo.bls89@gmail.com | Instagram: @daniloliveira89 | GitHub: github.com/daniloliveira89',
          notFound: 'Comando não encontrado. Use: help'
        },
        es: {
          help: 'Comandos: whoami, stack, proyectos, contacto, clear',
          whoami: 'Danilo Oliveira — Diseñador Web y Especialista en Sitios Comerciales.',
          stack: 'Diseño UI/UX • Landing Pages • Tailwind CSS • React/Next.js • Identidad Visual • SEO & Velocidad.',
          projetos: '40 Sitios Web Comerciales en producción (Restaurantes, Clínicas, Hoteles, E-commerce, Abogados, Portafolios 3D) y 48 Logos.',
          proyectos: '40 Sitios Web Comerciales en producción (Restaurantes, Clínicas, Hoteles, E-commerce, Abogados, Portafolios 3D) y 48 Logos.',
          contato: 'Correo: danilo.bls89@gmail.com | Instagram: @daniloliveira89 | GitHub: github.com/daniloliveira89',
          contacto: 'Correo: danilo.bls89@gmail.com | Instagram: @daniloliveira89 | GitHub: github.com/daniloliveira89',
          notFound: 'Comando no encontrado. Usa: help'
        },
        en: {
          help: 'Commands: whoami, stack, projects, contact, clear',
          whoami: 'Danilo Oliveira — Web Designer & Commercial Website Specialist.',
          stack: 'UI/UX Design • Landing Pages • Tailwind CSS • React/Next.js • Brand Identity • SEO & Speed.',
          projetos: '40 Live Commercial Websites (Restaurants, Clinics, Hospitality, E-commerce, Law Firms, 3D Portfolios) & 48 Logos.',
          projects: '40 Live Commercial Websites (Restaurants, Clinics, Hospitality, E-commerce, Law Firms, 3D Portfolios) & 48 Logos.',
          contato: 'Email: danilo.bls89@gmail.com | Instagram: @daniloliveira89 | GitHub: github.com/daniloliveira89',
          contact: 'Email: danilo.bls89@gmail.com | Instagram: @daniloliveira89 | GitHub: github.com/daniloliveira89',
          notFound: 'Command not found. Type: help'
        }
      };
      const m = maps[curLang] || maps.pt;
      out.innerHTML += \`<p><span class="text-cyan-400">➜</span> <span class="text-fuchsia-300">\${raw}</span></p><p class="text-slate-200 pl-3">\${m[cmd] || m.notFound}</p>\`;
      out.scrollTop = out.scrollHeight;
    }
    document.getElementById('term-form').addEventListener('submit', (e) => {
      e.preventDefault(); const inp = document.getElementById('term-input');
      if (inp.value.trim()) { runTerminalCmd(inp.value); inp.value = ''; }
    });

    // =========================================================================
    // 5. RENDERERS (SERVIÇOS, DIFERENCIAIS, PROJETOS & LOGOS)
    // =========================================================================
    function renderServices() {
      const t = I18N[state.lang] || I18N.pt;
      const list = SERVICES_I18N[state.lang] || SERVICES_I18N.pt;
      document.getElementById('services-grid').innerHTML = list.map(s => {
        const isOpen = state.expandedService === s.id;
        return \`
          <div data-toggle-service="\${s.id}" class="spotlight-card rounded-2xl p-7 cursor-pointer select-none flex flex-col justify-between \${isOpen ? 'border-cyan-400/60' : ''}">
            <div>
              <div class="flex items-start justify-between mb-5">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/25 t-cyan">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\${s.icon}</svg>
                </div>
                <span class="text-[11px] font-mono-code t-muted">\${isOpen ? t.srv_less : t.srv_more}</span>
              </div>
              <h3 class="font-display text-lg font-bold t-heading mb-2.5">\${s.title}</h3>
              <p class="text-xs t-body leading-relaxed">\${s.desc}</p>
            </div>
            \${isOpen ? \`
              <ul class="mt-4 pt-4 border-t b-subtle space-y-1.5 text-xs t-cyan font-mono-code">
                \${s.deliverables.map(d => \`<li>✦ \${d}</li>\`).join('')}
              </ul>\` : ''}
          </div>\`;
      }).join('');
    }

    function renderDifferentials() {
      const list = DIFFERENTIALS_I18N[state.lang] || DIFFERENTIALS_I18N.pt;
      const tones = {
        cyan: { box: 'bg-cyan-500/15 border-cyan-500/25 t-cyan', badge: 'bg-cyan-500/10 border-cyan-500/25 t-cyan' },
        emerald: { box: 'bg-emerald-500/15 border-emerald-500/25 text-emerald-500', badge: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-500' },
        fuchsia: { box: 'bg-fuchsia-500/15 border-fuchsia-500/25 t-orchid', badge: 'bg-fuchsia-500/10 border-fuchsia-500/25 t-orchid' },
        amber: { box: 'bg-amber-500/15 border-amber-500/25 text-amber-500', badge: 'bg-amber-500/10 border-amber-500/25 text-amber-500' }
      };
      document.getElementById('diff-grid').innerHTML = list.map(d => {
        const tn = tones[d.tone];
        return \`
          <div class="spotlight-card rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border \${tn.box}">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\${d.icon}</svg>
              </div>
              <span class="text-[10px] font-mono-code uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded border mb-3 inline-block \${tn.badge}">\${d.tag}</span>
              <h3 class="font-display text-lg font-bold t-heading mb-2.5">\${d.title}</h3>
              <p class="text-xs t-body leading-relaxed">\${d.desc}</p>
            </div>
            <div class="pt-4 mt-4 border-t b-subtle text-[11px] font-mono-code t-muted">\${d.foot}</div>
          </div>\`;
      }).join('');
    }

    function renderSkills() {
      const t = I18N[state.lang] || I18N.pt;
      const cats = [
        { key: 'Todas', label: t.skill_all },
        { key: 'Frontend & WebGL', label: 'Frontend & WebGL' },
        { key: 'I.A. & Backend', label: state.lang === 'en' ? 'AI & Backend' : 'I.A. & Backend' },
        { key: 'Extensões & DevOps', label: state.lang === 'en' ? 'Extensions & DevOps' : (state.lang === 'es' ? 'Extensiones & DevOps' : 'Extensões & DevOps') }
      ];
      document.getElementById('skill-filters').innerHTML = cats.map(c => \`
        <button type="button" data-skill-cat="\${c.key}" class="px-4 py-1.5 rounded-full text-xs font-semibold border transition \${state.skillCat === c.key ? 'tab-pill-active' : 'b-subtle t-body hover:border-cyan-400/50'}">\${c.label}</button>
      \`).join('');
      const list = state.skillCat === 'Todas' ? SKILLS : SKILLS.filter(s => s.cat === state.skillCat);
      document.getElementById('skills-grid').innerHTML = list.map(s => {
        const isSel = state.techFilter === s.name;
        return \`
          <button type="button" data-select-tech="\${s.name}" class="spotlight-card text-left rounded-2xl p-5 w-full \${isSel ? 'border-fuchsia-400/70' : ''}">
            <div class="flex justify-between items-center mb-2.5">
              <span class="text-xs font-bold t-heading">\${s.name}</span>
              <span class="text-xs font-mono-code \${isSel ? 't-orchid' : 't-cyan'}">\${s.pct}%</span>
            </div>
            <div class="w-full h-1.5 rounded-full bg-panel-var overflow-hidden">
              <div class="h-full rounded-full" style="width:\${s.pct}%; background: linear-gradient(90deg, #22D3EE, #D946EF);"></div>
            </div>
          </button>\`;
      }).join('');
    }

    function localizeDemoUrl(rawUrl, lang) {
      if (!rawUrl || rawUrl.indexOf('/layouts para sites/') !== 0) return rawUrl;
      const targetFile = lang === 'en' ? 'en.html' : (lang === 'es' ? 'es.html' : 'index.html');
      return rawUrl.replace(/index\\.html$/, targetFile) + '?lang=' + lang;
    }

    function renderProjects() {
      const t = I18N[state.lang] || I18N.pt;
      const cats = [
        { label: t.tab_layouts, key: 'Layouts & Sites', count: PROJECTS.length },
        { label: t.tab_logos, key: 'Logos', count: LOGOS_DATA.length }
      ];

      if (state.projectCat !== 'Logos') {
        state.projectCat = 'Layouts & Sites';
      }

      document.getElementById('project-filters').innerHTML = cats.map(c => \`
        <button type="button" data-proj-cat="\${c.key}" class="px-5 py-2 rounded-full text-xs font-semibold border transition inline-flex items-center gap-2 cursor-pointer \${state.projectCat === c.key ? 'tab-pill-active' : 'b-subtle t-body hover:border-cyan-400/50'}">
          <span>\${c.label}</span>
          <span class="text-[10px] opacity-75 font-mono-code font-normal">(\${c.count})</span>
        </button>
      \`).join('');

      const banner = document.getElementById('active-tech-banner');
      if (state.techFilter && state.projectCat !== 'Logos') {
        banner.classList.remove('hidden'); banner.classList.add('inline-flex');
        document.getElementById('active-tech-label').textContent = \`Tech: \${state.techFilter}\`;
      } else {
        banner.classList.add('hidden'); banner.classList.remove('inline-flex');
      }

      const grid = document.getElementById('projects-grid');
      const curLang = state.lang || 'pt';

      // 1. RENDER LOGOS TAB (48 Logos)
      if (state.projectCat === 'Logos') {
        grid.innerHTML = LOGOS_DATA.map(l => {
          const siteType = l[curLang] || l.pt;
          const openUrl = localizeDemoUrl(l.demoUrl || ('/assets/images/logos-ia/' + l.file), curLang);
          return \`
          <a href="\${openUrl}" target="_blank" rel="noopener noreferrer" class="clean-proj-card spotlight-card rounded-2xl overflow-hidden block relative aspect-[16/10] bg-slate-950 border b-subtle group cursor-pointer shadow-md">
            <img src="/assets/images/logos-ia/\${l.file}" alt="\${l.name}" class="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105" loading="lazy" onerror="this.onerror=null; this.src='/assets/images/brand-rabbit.png';" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300"></div>
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span class="badge-gold px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] tracking-wide truncate max-w-[85%]">
                \${l.name} • \${siteType}
              </span>
              <span class="arrow-gold w-7 h-7 rounded-xl flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 shrink-0">
                ↗
              </span>
            </div>
          </a>\`;
        }).join('');
        return;
      }

      // 2. RENDER WEBSITES / LAYOUTS (40 Commercial Sites)
      let list = PROJECTS;

      if (state.techFilter) {
        const tf = state.techFilter.toLowerCase();
        list = list.filter(p => p.tags.some(t => t.toLowerCase() === tf || t.toLowerCase().includes(tf)));
      }

      if (!list.length) {
        grid.innerHTML = \`<div class="col-span-full text-center py-12 rounded-2xl border b-subtle text-sm t-muted">\${t.proj_empty}</div>\`;
        return;
      }

      grid.innerHTML = list.map(p => {
        const rawUrl = (p.links && p.links.demo) ? p.links.demo : ((p.links && p.links.github) ? p.links.github : '#');
        const openUrl = localizeDemoUrl(rawUrl, curLang);
        const siteTypeInfo = SITE_TYPE_DICT[p.id];
        const siteType = (siteTypeInfo && siteTypeInfo[curLang]) ? siteTypeInfo[curLang] : (p.title.split('—')[0].trim());

        return \`
        <a href="\${openUrl}" target="_blank" rel="noopener noreferrer" class="clean-proj-card spotlight-card rounded-2xl overflow-hidden block relative aspect-[16/10] bg-slate-950 border b-subtle group cursor-pointer shadow-md">
          <img src="\${p.image}" alt="\${siteType}" class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" onerror="this.onerror=null; this.src='/assets/images/radar-ia-real.png';" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300"></div>
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span class="badge-gold px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] tracking-wide truncate max-w-[85%]">
              \${siteType}
            </span>
            <span class="arrow-gold w-7 h-7 rounded-xl flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 shrink-0">
              ↗
            </span>
          </div>
        </a>\`;
      }).join('');
    }

    // =========================================================================
    // 6. COMMAND PALETTE`;

if (oldScriptsBlockRegex.test(html)) {
  html = html.replace(oldScriptsBlockRegex, newScriptsBlock);
} else {
  console.log('WARNING: oldScriptsBlockRegex did not match!');
}

// Update COMMAND PALETTE, applyTranslations, and events
const oldTailScriptRegex = /const CMD_ITEMS = \[[\s\S]*?<\/script>/;
const newTailScript = `const CMD_ITEMS_I18N = {
      pt: [
        { label: 'Alternar Tema Claro / Escuro', hint: 'Tema', action: toggleTheme },
        { label: 'Ir para Serviços', hint: '#services', action: () => location.hash = '#services' },
        { label: 'Ir para Diferenciais', hint: '#differentials', action: () => location.hash = '#differentials' },
        { label: 'Ir para Contato', hint: '#contact', action: () => location.hash = '#contact' },
        { label: 'Abrir Terminal no Hero', hint: 'CLI', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); switchHeroTab('terminal'); } },
        { label: 'Copiar E-mail (danilo.bls89@gmail.com)', hint: 'Copy', action: () => copyText('danilo.bls89@gmail.com', I18N.pt.toast_email) },
        { label: 'Copiar GitHub (@daniloliveira89)', hint: 'Copy', action: () => copyText('https://github.com/daniloliveira89', I18N.pt.toast_gh) },
        { label: 'Copiar Instagram (@daniloliveira89)', hint: 'Copy', action: () => copyText('https://instagram.com/daniloliveira89', I18N.pt.toast_ig) }
      ],
      es: [
        { label: 'Cambiar Tema Claro / Oscuro', hint: 'Tema', action: toggleTheme },
        { label: 'Ir a Servicios', hint: '#services', action: () => location.hash = '#services' },
        { label: 'Ir a Diferenciales', hint: '#differentials', action: () => location.hash = '#differentials' },
        { label: 'Ir a Contacto', hint: '#contact', action: () => location.hash = '#contact' },
        { label: 'Abrir Terminal en el Hero', hint: 'CLI', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); switchHeroTab('terminal'); } },
        { label: 'Copiar Correo (danilo.bls89@gmail.com)', hint: 'Copy', action: () => copyText('danilo.bls89@gmail.com', I18N.es.toast_email) },
        { label: 'Copiar GitHub (@daniloliveira89)', hint: 'Copy', action: () => copyText('https://github.com/daniloliveira89', I18N.es.toast_gh) },
        { label: 'Copiar Instagram (@daniloliveira89)', hint: 'Copy', action: () => copyText('https://instagram.com/daniloliveira89', I18N.es.toast_ig) }
      ],
      en: [
        { label: 'Toggle Light / Dark Theme', hint: 'Theme', action: toggleTheme },
        { label: 'Go to Services', hint: '#services', action: () => location.hash = '#services' },
        { label: 'Go to Standards', hint: '#differentials', action: () => location.hash = '#differentials' },
        { label: 'Go to Contact', hint: '#contact', action: () => location.hash = '#contact' },
        { label: 'Open Hero Terminal', hint: 'CLI', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); switchHeroTab('terminal'); } },
        { label: 'Copy Email (danilo.bls89@gmail.com)', hint: 'Copy', action: () => copyText('danilo.bls89@gmail.com', I18N.en.toast_email) },
        { label: 'Copy GitHub (@daniloliveira89)', hint: 'Copy', action: () => copyText('https://github.com/daniloliveira89', I18N.en.toast_gh) },
        { label: 'Copy Instagram (@daniloliveira89)', hint: 'Copy', action: () => copyText('https://instagram.com/daniloliveira89', I18N.en.toast_ig) }
      ]
    };

    function renderCmdk(filter = '') {
      const t = I18N[state.lang] || I18N.pt;
      const items = CMD_ITEMS_I18N[state.lang] || CMD_ITEMS_I18N.pt;
      const q = filter.toLowerCase();
      const filtered = items.filter(i => i.label.toLowerCase().includes(q) || i.hint.toLowerCase().includes(q));
      document.getElementById('cmdk-list').innerHTML = filtered.map(item => \`
        <button type="button" data-cmd-idx="\${items.indexOf(item)}" class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs t-heading hover:bg-cyan-500/15 transition">
          <span>\${item.label}</span><span class="font-mono-code text-[10px] t-cyan px-2 py-0.5 rounded bg-panel-var">\${item.hint}</span>
        </button>\`).join('') || \`<p class="p-4 text-xs t-muted text-center">\${t.cmdk_empty}</p>\`;
    }
    function openCmdk() { renderCmdk(''); const m = document.getElementById('cmdk-modal'); m.classList.remove('hidden'); m.classList.add('flex'); document.getElementById('cmdk-input').value = ''; setTimeout(() => document.getElementById('cmdk-input').focus(), 30); }
    function closeCmdk() { const m = document.getElementById('cmdk-modal'); m.classList.add('hidden'); m.classList.remove('flex'); }

    function showToast(msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.remove('hidden'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.add('hidden'), 2400); }
    function copyText(text, msg) {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => showToast(msg)).catch(() => fallbackCopy(text, msg));
      else fallbackCopy(text, msg);
    }
    function fallbackCopy(text, msg) { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); showToast(msg); }

    function applyTranslations() {
      const t = I18N[state.lang] || I18N.pt;
      document.title = t.page_title;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (t[k]) el.textContent = t[k];
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const k = el.getAttribute('data-i18n-html');
        if (t[k]) el.innerHTML = t[k];
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const k = el.getAttribute('data-i18n-placeholder');
        if (t[k]) el.setAttribute('placeholder', t[k]);
      });
      document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const k = el.getAttribute('data-i18n-title');
        if (t[k]) el.setAttribute('title', t[k]);
      });
      document.getElementById('theme-label').textContent = state.theme === 'dark' ? t.theme_light : t.theme_dark;
      document.getElementById('btn-toggle-fx').textContent = state.fxEnabled ? t.wave_on : t.wave_off;
      const waInput = document.getElementById('wa-msg-input');
      if (waInput && !waInput.dataset.edited) waInput.value = t.wa_default_msg;

      document.querySelectorAll('.lang-btn').forEach(b => {
        const act = b.getAttribute('data-lang') === state.lang;
        b.classList.toggle('active', act);
      });
      document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : (state.lang === 'es' ? 'es-ES' : 'en-US');
      try { localStorage.setItem('portfolio_lang', state.lang); } catch(e) {}

      // Update typing text immediately cleanly
      const roles = getRoles();
      const firstRole = roles[roleIdx % roles.length];
      document.getElementById('typing-role').textContent = firstRole;
      charIdx = firstRole.length;
      deleting = true;

      renderServices();
      renderDifferentials();
      renderSkills();
      renderProjects();
    }

    document.addEventListener('DOMContentLoaded', () => {
      const btnHome = document.getElementById('btn-brand-home');
      if (btnHome) {
        btnHome.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
      const waInput = document.getElementById('wa-msg-input');
      if (waInput) waInput.addEventListener('input', () => { waInput.dataset.edited = '1'; });
    });

    document.addEventListener('click', (e) => {
      const tabBtn = e.target.closest('[data-card-tab]'); if (tabBtn) { switchHeroTab(tabBtn.getAttribute('data-card-tab')); return; }
      const termBtn = e.target.closest('[data-cmd]'); if (termBtn) { runTerminalCmd(termBtn.getAttribute('data-cmd')); return; }
      const langBtn = e.target.closest('[data-lang]'); if (langBtn) {
        state.lang = langBtn.getAttribute('data-lang');
        try { localStorage.setItem('portfolio_lang', state.lang); localStorage.setItem('portfolio_lang_manual', '1'); } catch(err) {}
        applyTranslations();
        return;
      }
      const srvCard = e.target.closest('[data-toggle-service]'); if (srvCard) { const id = srvCard.getAttribute('data-toggle-service'); state.expandedService = state.expandedService === id ? null : id; renderServices(); return; }
      const skBtn = e.target.closest('[data-skill-cat]'); if (skBtn) { state.skillCat = skBtn.getAttribute('data-skill-cat'); renderSkills(); return; }
      const techBtn = e.target.closest('[data-select-tech]'); if (techBtn) {
        const tech = techBtn.getAttribute('data-select-tech');
        state.techFilter = state.techFilter === tech ? null : tech;
        renderSkills(); renderProjects();
        if (state.techFilter) {
          const t = I18N[state.lang] || I18N.pt;
          showToast(\`\${t.toast_filter} \${state.techFilter}\`);
          document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      const prBtn = e.target.closest('[data-proj-cat]'); if (prBtn) { state.projectCat = prBtn.getAttribute('data-proj-cat'); renderProjects(); return; }
      const demoBtn = e.target.closest('[data-open-demo]'); if (demoBtn) { openProjectDemo(demoBtn.getAttribute('data-open-demo')); return; }
      const cmdBtn = e.target.closest('[data-cmd-idx]'); if (cmdBtn) {
        const idx = Number(cmdBtn.getAttribute('data-cmd-idx'));
        closeCmdk();
        const items = CMD_ITEMS_I18N[state.lang] || CMD_ITEMS_I18N.pt;
        if (items[idx]) items[idx].action();
        return;
      }
    });

    document.getElementById('clear-tech-filter').addEventListener('click', () => { state.techFilter = null; renderSkills(); renderProjects(); });
    document.getElementById('btn-toggle-fx').addEventListener('click', (e) => {
      const t = I18N[state.lang] || I18N.pt;
      state.fxEnabled = !state.fxEnabled;
      e.target.textContent = state.fxEnabled ? t.wave_on : t.wave_off;
      showToast(state.fxEnabled ? t.toast_wave_on : t.toast_wave_off);
    });
    document.getElementById('btn-copy-gh').addEventListener('click', () => copyText('https://github.com/daniloliveira89', (I18N[state.lang] || I18N.pt).toast_gh));
    document.getElementById('btn-copy-gh-contact').addEventListener('click', () => copyText('https://github.com/daniloliveira89', (I18N[state.lang] || I18N.pt).toast_gh));
    document.getElementById('btn-copy-email').addEventListener('click', () => copyText('danilo.bls89@gmail.com', (I18N[state.lang] || I18N.pt).toast_email));
    document.getElementById('btn-copy-ig-contact').addEventListener('click', () => copyText('https://instagram.com/daniloliveira89', (I18N[state.lang] || I18N.pt).toast_ig));
    document.getElementById('btn-wa-float').addEventListener('click', () => {
      document.getElementById('wa-popover').classList.toggle('hidden');
    });
    document.getElementById('btn-close-wa').addEventListener('click', () => {
      document.getElementById('wa-popover').classList.add('hidden');
    });
    document.getElementById('btn-send-wa').addEventListener('click', () => {
      const t = I18N[state.lang] || I18N.pt;
      const msg = encodeURIComponent(document.getElementById('wa-msg-input').value.trim() || t.wa_default_msg);
      window.open(\`https://wa.me/?text=\${msg}\`, '_blank', 'noopener,noreferrer');
      document.getElementById('wa-popover').classList.add('hidden');
      showToast(t.wa_toast);
    });
    document.getElementById('btn-open-terminal-shortcut').addEventListener('click', () => switchHeroTab('terminal'));
    document.getElementById('btn-cmdk').addEventListener('click', openCmdk);
    document.getElementById('close-cmdk').addEventListener('click', closeCmdk);
    document.getElementById('cmdk-input').addEventListener('input', (e) => renderCmdk(e.target.value));

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openCmdk(); }
      else if (e.key === 'Escape') { closeCmdk(); closeProjectModal(); }
    });

    function closeProjectModal() { const m = document.getElementById('project-modal'); m.classList.add('hidden'); m.classList.remove('flex'); }
    document.getElementById('close-project-modal').addEventListener('click', closeProjectModal);
    document.getElementById('pm-close-btn').addEventListener('click', closeProjectModal);

    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault(); e.target.reset();
      showToast((I18N[state.lang] || I18N.pt).form_sent);
    });

    applyTranslations();
  </script>`;

if (oldTailScriptRegex.test(html)) {
  html = html.replace(oldTailScriptRegex, newTailScript);
} else {
  console.log('WARNING: oldTailScriptRegex did not match!');
}

// 6. Custom Cursor (Trailing Ring com lerp via requestAnimationFrame)
const cursorElementsHtml = `
  <!-- Custom Cursor (Trailing Ring) -->
  <div id="cursor-dot" class="custom-cursor-dot custom-cursor-hidden" aria-hidden="true"></div>
  <div id="cursor-ring" class="custom-cursor-ring custom-cursor-hidden" aria-hidden="true"></div>
`;
html = html.replace(/<body[^>]*>/, `$&${cursorElementsHtml}`);

const cursorScript = `
    // =========================================================================
    // CUSTOM CURSOR COM TRAILING RING (LERP VIA RAF)
    // =========================================================================
    (() => {
      let dot = document.getElementById('cursor-dot');
      let ring = document.getElementById('cursor-ring');
      if (!dot) {
        dot = document.createElement('div');
        dot.id = 'cursor-dot';
        dot.className = 'custom-cursor-dot custom-cursor-hidden';
        dot.setAttribute('aria-hidden', 'true');
        document.body.appendChild(dot);
      }
      if (!ring) {
        ring = document.createElement('div');
        ring.id = 'cursor-ring';
        ring.className = 'custom-cursor-ring custom-cursor-hidden';
        ring.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ring);
      }

      let isInitialized = false;
      let mouseX = -100;
      let mouseY = -100;
      let ringX = -100;
      let ringY = -100;
      let targetScale = 1;
      let currentScale = 1;
      let isVisible = false;
      let isHovered = false;

      const lerp = (a, b, n) => (1 - n) * a + n * b;

      let isTouchOnly = false;
      window.addEventListener('touchstart', () => {
        if (!isInitialized && ('ontouchstart' in window) && !window.matchMedia('(hover: hover)').matches) {
          isTouchOnly = true;
        }
      }, { passive: true, once: true });

      window.addEventListener('mousemove', (e) => {
        if (isTouchOnly) return;

        if (!isInitialized) {
          isInitialized = true;
          document.body.classList.add('has-custom-cursor');
          requestAnimationFrame(renderCursor);
        }

        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = \`translate3d(\${mouseX}px, \${mouseY}px, 0) translate(-50%, -50%)\`;

        if (!isVisible) {
          isVisible = true;
          dot.classList.remove('custom-cursor-hidden');
          ring.classList.remove('custom-cursor-hidden');
          ringX = mouseX;
          ringY = mouseY;
        }
      });

      function renderCursor() {
        if (isVisible) {
          ringX = lerp(ringX, mouseX, 0.16);
          ringY = lerp(ringY, mouseY, 0.16);
          currentScale = lerp(currentScale, targetScale, 0.2);
          ring.style.transform = \`translate3d(\${ringX}px, \${ringY}px, 0) translate(-50%, -50%) scale(\${currentScale})\`;
        }
        requestAnimationFrame(renderCursor);
      }

      const interactiveSelector = 'a, button, input, select, textarea, [data-cursor="pointer"], .clean-proj-card, .lang-btn, [role="button"], label';

      document.addEventListener('mouseover', (e) => {
        if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
          isHovered = true;
          targetScale = 1.6;
          ring.classList.add('cursor-hover');
        }
      });

      document.addEventListener('mouseout', (e) => {
        if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
          const nextInteractive = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(interactiveSelector);
          if (!nextInteractive) {
            isHovered = false;
            targetScale = 1;
            ring.classList.remove('cursor-hover');
          }
        }
      });

      window.addEventListener('mousedown', () => {
        targetScale = 0.85;
        ring.classList.add('cursor-active');
      });

      window.addEventListener('mouseup', () => {
        ring.classList.remove('cursor-active');
        targetScale = isHovered ? 1.6 : 1;
      });

      document.addEventListener('mouseleave', () => {
        isVisible = false;
        dot.classList.add('custom-cursor-hidden');
        ring.classList.add('custom-cursor-hidden');
      });

      document.addEventListener('mouseenter', () => {
        dot.classList.remove('custom-cursor-hidden');
        ring.classList.remove('custom-cursor-hidden');
      });
    })();
`;

if (html.includes('applyTranslations();\n  </script>')) {
  html = html.replace('applyTranslations();\n  </script>', `applyTranslations();\n${cursorScript}\n  </script>`);
} else {
  console.log('WARNING: applyTranslations() closing script not found!');
}

console.log('Final HTML length:', html.length);

// Write index.html (root auto-detects language unless ?lang= or /en/ or /es/)
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully wrote index.html');

// Create Spanish version for /es/index.html
let esHtml = html
  .replace('<html lang="pt-BR"', '<html lang="es-ES"')
  .replace("const ROUTE_DEFAULT_LANG = 'pt';", "const ROUTE_DEFAULT_LANG = 'es';")
  .replace('data-lang="pt" class="lang-btn active"', 'data-lang="pt" class="lang-btn"')
  .replace('data-lang="es" class="lang-btn"', 'data-lang="es" class="lang-btn active"');

if (!fs.existsSync('es')) fs.mkdirSync('es', { recursive: true });
fs.writeFileSync('es/index.html', esHtml, 'utf8');
console.log('Successfully wrote es/index.html');

// Create English version for /en/index.html
let enHtml = html
  .replace('<html lang="pt-BR"', '<html lang="en-US"')
  .replace("const ROUTE_DEFAULT_LANG = 'pt';", "const ROUTE_DEFAULT_LANG = 'en';")
  .replace('data-lang="pt" class="lang-btn active"', 'data-lang="pt" class="lang-btn"')
  .replace('data-lang="en" class="lang-btn"', 'data-lang="en" class="lang-btn active"');

if (!fs.existsSync('en')) fs.mkdirSync('en', { recursive: true });
fs.writeFileSync('en/index.html', enHtml, 'utf8');
console.log('Successfully wrote en/index.html');
