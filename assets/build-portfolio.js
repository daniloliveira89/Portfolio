const fs = require('fs');
const path = require('path');

// 1. Read base template
const templatePath = 'C:/Users/Zombie PC/.gemini/antigravity/brain/1c2a9853-6515-4feb-8e6e-791b68c45782/.user_uploaded/media_1795097314429_375d6e0e.html';
let html = fs.readFileSync(templatePath, 'utf8');

// 2. Custom CSS for Language Switcher Pill matching user's attached screenshot
const customCss = `
    /* === LANGUAGE PILL SELECTOR (MATCHING USER SCREENSHOT) === */
    .lang-pill-container {
      background: rgba(11, 14, 23, 0.9);
      border: 1px solid rgba(59, 130, 246, 0.28);
      border-radius: 0.75rem;
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
      padding: 0.35rem 0.65rem;
      border-radius: 0.45rem;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
    }
    .lang-btn:hover {
      color: var(--text-heading);
    }
    .lang-btn.active {
      background: #2563EB !important;
      color: #FFFFFF !important;
      font-weight: 700;
      box-shadow: 0 1px 4px rgba(37, 99, 235, 0.4);
    }
    body[data-theme="light"] .lang-btn.active {
      background: #2563EB !important;
      color: #FFFFFF !important;
      box-shadow: 0 1px 4px rgba(37, 99, 235, 0.3);
    }
`;

// Insert custom CSS
html = html.replace('</style>', `${customCss}\n  </style>`);

// Ensure projects-data.js script is included in <head>
if (!html.includes('projects-data.js')) {
  html = html.replace('</head>', '  <script src="/assets/js/projects-data.js"></script>\n</head>');
}

// Replace the old Language Switcher block with the clean Pill
const oldLangBlockRegex = /<!-- Language Switcher with Country Flags -->[\s\S]*?<\/div>/;
const newLangBlock = `<!-- Language Switcher Pill (Matching User Screenshot) -->
        <div class="lang-pill-container">
          <button type="button" data-lang="pt" class="lang-btn active" title="Português">PT</button>
          <button type="button" data-lang="es" class="lang-btn" title="Español">ES</button>
          <button type="button" data-lang="en" class="lang-btn" title="English">EN</button>
        </div>`;
html = html.replace(oldLangBlockRegex, newLangBlock);

// Replace PROJECTS declaration with full dynamic mapping from PROJECTS_DATA
const oldProjectsRegex = /const PROJECTS = \[[\s\S]*?\];\s*const state = {/;
const newProjectsCode = `// Dynamic mapping from the full 54 projects in PROJECTS_DATA
    const DEFAULT_PROJECTS = [
      { id: 'radar-ia', title: 'Radar IA — Observatório Global', badge: 'Web Apps & I.A.', cat: 'Web Apps & I.A.', desc: 'Observatório em tempo real de lançamentos, benchmarks e custos por milhão de tokens das principais empresas de I.A.', tags: ['TypeScript', 'React & Next.js', 'LLMs & GenAI'], demoType: 'radar' },
      { id: 'prompt-studio', title: 'Prompt Studio AI — Estúdio Visual', badge: 'GenAI • Live', cat: 'Web Apps & I.A.', desc: 'Estúdio interativo para construção de prompts otimizados para geradores de imagem (Flux, SDXL, Midjourney).', tags: ['TypeScript', 'Tailwind & UI/UX', 'LLMs & GenAI'], demoType: 'prompt' },
      { id: 'ivfr', title: 'IVFR — Viabilidade Econômica', badge: '103 Cidades', cat: 'Layouts & Sites', desc: 'Comparador global de poder de compra real, margem líquida mensal e tempo para aquisição de bens.', tags: ['React & Next.js', 'Tailwind & UI/UX', 'Python'], demoType: 'ivfr' },
      { id: 'webgl-tactics', title: 'Vanguard — Jogo Tático WebGL', badge: '60 FPS • PixiJS', cat: 'Jogos & WebGL', desc: 'Engine tática por turnos no navegador com grid interativo, shaders e partículas em tempo real.', tags: ['TypeScript', 'WebGL & PixiJS'], demoType: 'tactics' },
      { id: 'atlas-pwa', title: 'Atlas Suite — Streaming PWA', badge: 'PWA • Edge', cat: 'Atlas Suite', desc: 'Player progressivo com reprodução em segundo plano no iOS e proxy de áudio em borda via Cloudflare.', tags: ['TypeScript', 'Cloudflare Workers'], demoType: 'audio' },
      { id: 'chrome-suite', title: 'Chromium Productivity Suite', badge: 'Manifest V3', cat: 'Extensões', desc: 'Mais de 10 extensões leves para fluxos de pesquisa, YouTube e automação limpa de DOM.', tags: ['TypeScript', 'Manifest V3', 'GitHub Actions'], demoType: 'ext' }
    ];

    const PROJECTS = (typeof PROJECTS_DATA !== 'undefined' && Array.isArray(PROJECTS_DATA))
      ? PROJECTS_DATA.map(p => {
          let cat = 'Layouts & Sites';
          if (p.category === 'web-ai') cat = 'Web Apps & I.A.';
          else if (p.category === 'games') cat = 'Jogos & WebGL';
          else if (p.category === 'atlas') cat = 'Atlas Suite';
          else if (p.category === 'extensions') cat = 'Extensões';
          else if (p.category === 'desktop') cat = 'Desktop & Ferramentas';
          else if (p.category === 'layouts') cat = 'Layouts & Sites';

          let demoType = null;
          if (p.id === 'radar-ia') demoType = 'radar';
          else if (p.id === 'prompt-studio') demoType = 'prompt';
          else if (p.id === 'ivfr') demoType = 'ivfr';
          else if (p.id === 'vanguard-tactics' || p.id === 'webgl-tactics') demoType = 'tactics';
          else if (p.id === 'atlas-suite' || p.id === 'atlas-pwa') demoType = 'audio';

          return {
            id: p.id,
            title: p.title,
            badge: p.badge || p.categoryLabel || 'Destaque',
            cat: cat,
            rawCat: p.category,
            desc: p.shortDescription || p.description || '',
            fullDesc: p.fullDescription || p.shortDescription || p.description || '',
            image: p.image || '/assets/images/radar-ia-real.png',
            gallery: (p.gallery && p.gallery.length) ? p.gallery : [p.image || '/assets/images/radar-ia-real.png'],
            tags: p.tags || [],
            links: p.links || {},
            features: p.features || [],
            demoType: demoType
          };
        })
      : DEFAULT_PROJECTS;

    const state = {`;
html = html.replace(oldProjectsRegex, newProjectsCode);

// Replace renderProjects and openProjectDemo
const oldRenderRegex = /function renderProjects\(\) \{[\s\S]*?\}\s*function openProjectDemo\(projId\) \{[\s\S]*?\}\s*\/\/ =========================================================================\s*\/\/ 6\. COMMAND PALETTE/;

const newRenderCode = `function renderProjects() {
      const cats = [
        { label: 'Todos', key: 'Todos', count: PROJECTS.length },
        { label: 'Web Apps & I.A.', key: 'Web Apps & I.A.', count: PROJECTS.filter(p => p.cat === 'Web Apps & I.A.').length },
        { label: 'Layouts & Sites', key: 'Layouts & Sites', count: PROJECTS.filter(p => p.cat === 'Layouts & Sites').length },
        { label: 'Jogos & WebGL', key: 'Jogos & WebGL', count: PROJECTS.filter(p => p.cat === 'Jogos & WebGL').length },
        { label: 'Atlas Suite', key: 'Atlas Suite', count: PROJECTS.filter(p => p.cat === 'Atlas Suite').length },
        { label: 'Extensões & Desktop', key: 'Extensões & Desktop', count: PROJECTS.filter(p => p.cat === 'Extensões' || p.cat === 'Desktop & Ferramentas').length }
      ];

      document.getElementById('project-filters').innerHTML = cats.map(c => \`
        <button type="button" data-proj-cat="\${c.key}" class="px-3.5 py-1.5 rounded-full text-xs font-semibold border transition inline-flex items-center gap-1.5 \${state.projectCat === c.key ? 'tab-pill-active' : 'b-subtle t-body hover:border-cyan-400/50'}">
          <span>\${c.label}</span>
          <span class="text-[10px] opacity-75 font-mono-code font-normal">(\${c.count})</span>
        </button>
      \`).join('');

      const banner = document.getElementById('active-tech-banner');
      if (state.techFilter) {
        banner.classList.remove('hidden'); banner.classList.add('inline-flex');
        document.getElementById('active-tech-label').textContent = \`Tech: \${state.techFilter}\`;
      } else {
        banner.classList.add('hidden'); banner.classList.remove('inline-flex');
      }

      let list = PROJECTS;
      if (state.projectCat === 'Extensões & Desktop') {
        list = list.filter(p => p.cat === 'Extensões' || p.cat === 'Desktop & Ferramentas');
      } else if (state.projectCat !== 'Todos') {
        list = list.filter(p => p.cat === state.projectCat);
      }

      if (state.techFilter) {
        const tf = state.techFilter.toLowerCase();
        list = list.filter(p => p.tags.some(t => t.toLowerCase() === tf || t.toLowerCase().includes(tf)));
      }

      const grid = document.getElementById('projects-grid');
      if (!list.length) {
        grid.innerHTML = \`<div class="col-span-full text-center py-12 rounded-2xl border b-subtle text-sm t-muted">Nenhum projeto encontrado com os filtros selecionados.</div>\`;
        return;
      }

      grid.innerHTML = list.map(p => {
        const hasDemo = p.links && p.links.demo;
        const hasGithub = p.links && p.links.github;
        return \`
        <article class="spotlight-card rounded-3xl flex flex-col justify-between overflow-hidden group">
          <div>
            <!-- Cover Screenshot Preview -->
            <div class="h-44 relative overflow-hidden border-b b-subtle bg-slate-950">
              <img src="\${p.image}" alt="\${p.title}" class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" onerror="this.onerror=null; this.src='/assets/images/radar-ia-real.png';" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
              <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span class="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-bold bg-slate-900/90 backdrop-blur-md t-cyan border border-cyan-500/30">\${p.badge}</span>
                <span class="text-[10px] font-mono-code t-orchid bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-orchid/30">⚡ \${hasDemo ? 'Demo Live' : (hasGithub ? 'Código' : 'Ativo')}</span>
              </div>
            </div>
            
            <!-- Body -->
            <div class="p-6">
              <h3 class="font-display text-base font-bold t-heading mb-2 line-clamp-1" title="\${p.title}">\${p.title}</h3>
              <p class="text-xs t-body leading-relaxed mb-4 line-clamp-2" title="\${p.desc}">\${p.desc}</p>
              <div class="flex flex-wrap gap-1.5 mb-2">
                \${p.tags.slice(0, 3).map(t => \`<button type="button" data-select-tech="\${t}" class="px-2.5 py-1 rounded-md text-[10px] font-mono-code bg-panel-var border b-subtle t-body hover:border-cyan-400/50 transition cursor-pointer">\${t}</button>\`).join('')}
                \${p.tags.length > 3 ? \`<span class="px-2 py-1 rounded-md text-[10px] font-mono-code t-muted">+\${p.tags.length - 3}</span>\` : ''}
              </div>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="px-6 py-4 border-t b-subtle flex items-center justify-between gap-2 bg-slate-950/20">
            <span class="text-[11px] font-mono-code t-muted truncate">\${p.cat}</span>
            <div class="flex items-center gap-2">
              \${hasDemo ? \`
                <a href="\${p.links.demo}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-xl text-xs font-bold btn-cyan inline-flex items-center gap-1 shadow-sm">
                  Demo ↗
                </a>
              \` : (hasGithub ? \`
                <a href="\${p.links.github}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-xl text-xs font-semibold btn-ghost inline-flex items-center gap-1">
                  GitHub ↗
                </a>
              \` : '')}
              <button type="button" data-open-demo="\${p.id}" class="text-xs font-bold t-cyan hover:t-orchid transition px-2 py-1">
                \${p.demoType ? 'Simulador →' : 'Detalhes →'}
              </button>
            </div>
          </div>
        </article>\`;
      }).join('');
    }

    function openProjectDemo(projId) {
      const p = PROJECTS.find(x => x.id === projId);
      if (!p) return;
      document.getElementById('pm-badge').textContent = p.badge;
      document.getElementById('pm-title').textContent = p.title;
      document.getElementById('pm-desc').textContent = p.fullDesc || p.desc;
      document.getElementById('pm-tags').innerHTML = p.tags.map(t => \`<span class="px-2.5 py-1 rounded-md text-[10px] font-mono-code bg-panel-var border b-subtle t-body">\${t}</span>\`).join('');
      const area = document.getElementById('pm-demo-area');
      
      if (p.demoType === 'radar') {
        area.innerHTML = \`<div class="space-y-3 text-xs font-mono-code"><label class="flex justify-between t-body"><span>Volume Mensal de Tokens:</span><span id="tok-val" class="t-cyan font-bold">10M</span></label><input id="tok-slider" type="range" min="1" max="50" value="10" class="w-full accent-cyan-500"/><div class="grid grid-cols-2 gap-2 pt-1"><div class="p-3 rounded-xl bg-surface-solid border b-subtle"><div class="text-[10px] t-muted">Modelo Rápido</div><div id="cost-fast" class="text-base font-bold t-cyan">$3.00</div></div><div class="p-3 rounded-xl bg-surface-solid border b-subtle"><div class="text-[10px] t-muted">Modelo Pro</div><div id="cost-pro" class="text-base font-bold t-orchid">$25.00</div></div></div></div>\`;
        document.getElementById('tok-slider').addEventListener('input', (e) => {
          const m = Number(e.target.value);
          document.getElementById('tok-val').textContent = \`\${m}M\`;
          document.getElementById('cost-fast').textContent = \`$\${(m * 0.3).toFixed(2)}\`;
          document.getElementById('cost-pro').textContent = \`$\${(m * 2.5).toFixed(2)}\`;
        });
      } else if (p.demoType === 'prompt') {
        area.innerHTML = \`<div class="space-y-3 text-xs"><div class="flex flex-wrap gap-1.5"><button type="button" data-mod="neon cyan rim light" class="px-2.5 py-1 rounded-lg border border-cyan-500/40 bg-cyan-500/15 t-cyan">+ Neon Cyan</button><button type="button" data-mod="85mm anamorphic lens" class="px-2.5 py-1 rounded-lg border b-subtle bg-chip-var t-body">+ 85mm Lens</button><button type="button" data-mod="obsidian glass reflections" class="px-2.5 py-1 rounded-lg border b-subtle bg-chip-var t-body">+ Obsidian Glass</button></div><div id="prompt-out" class="p-3 rounded-xl bg-surface-solid border b-subtle font-mono-code text-[11px] t-orchid">futuristic studio portrait, neon cyan rim light --v 6.1</div></div>\`;
        const activeMods = new Set(['neon cyan rim light']);
        area.querySelectorAll('[data-mod]').forEach(btn => btn.addEventListener('click', () => {
          const m = btn.getAttribute('data-mod');
          if (activeMods.has(m)) activeMods.delete(m); else activeMods.add(m);
          btn.classList.toggle('bg-cyan-500/15', activeMods.has(m));
          document.getElementById('prompt-out').textContent = \`futuristic studio portrait\${activeMods.size ? ', ' + [...activeMods].join(', ') : ''} --v 6.1\`;
        }));
      } else if (p.demoType === 'tactics') {
        area.innerHTML = \`<div class="space-y-2 text-center"><p class="text-[11px] font-mono-code t-body">Clique nas células para mover a unidade:</p><div id="tactics-grid" class="grid grid-cols-5 gap-1.5 max-w-[220px] mx-auto"></div></div>\`;
        let pos = 12;
        function drawGrid() {
          document.getElementById('tactics-grid').innerHTML = Array.from({ length: 15 }, (_, i) => \`<button type="button" data-cell="\${i}" class="h-9 rounded-lg border text-xs font-mono-code transition \${i === pos ? 'bg-cyan-500 text-white font-bold border-cyan-400' : 'bg-surface-solid b-subtle hover:border-fuchsia-400 t-muted'}">\${i === pos ? '◆' : '·'}</button>\`).join('');
          document.querySelectorAll('[data-cell]').forEach(b => b.addEventListener('click', () => { pos = Number(b.getAttribute('data-cell')); drawGrid(); }));
        }
        drawGrid();
      } else {
        // Rich visual preview for all 54 projects
        const bullets = (p.features && p.features.length) ? p.features.map(f => \`<li class="flex items-start gap-2"><span class="text-cyan-400 font-bold">✓</span><span>\${f}</span></li>\`).join('') : '';
        area.innerHTML = \`
          <div class="space-y-4">
            <div class="rounded-xl overflow-hidden border b-subtle bg-black max-h-56">
              <img src="\${p.image}" alt="\${p.title}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='/assets/images/radar-ia-real.png';" />
            </div>
            \${bullets ? \`<ul class="text-xs t-body space-y-1.5">\${bullets}</ul>\` : ''}
            <div class="flex flex-wrap gap-2 pt-2">
              \${p.links && p.links.demo ? \`<a href="\${p.links.demo}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl text-xs font-bold btn-cyan inline-flex items-center gap-1.5 shadow-sm">Abrir Site Oficial ↗</a>\` : ''}
              \${p.links && p.links.github ? \`<a href="\${p.links.github}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl text-xs font-semibold btn-ghost inline-flex items-center gap-1.5">Ver Código no GitHub ↗</a>\` : ''}
            </div>
          </div>\`;
      }
      const m = document.getElementById('project-modal'); m.classList.remove('hidden'); m.classList.add('flex');
    }

    // =========================================================================
    // 6. COMMAND PALETTE`;

if (oldRenderRegex.test(html)) {
  html = html.replace(oldRenderRegex, newRenderCode);
} else {
  console.log('WARNING: oldRenderRegex did not match!');
}

// Replace applyTranslations to toggle active class cleanly
const oldApplyTranslationsRegex = /function applyTranslations\(\) \{[\s\S]*?\}\s*document\.addEventListener\('click'/;
const newApplyTranslationsCode = `function applyTranslations() {
      const t = I18N[state.lang] || I18N.pt;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (t[k]) el.textContent = t[k];
      });
      document.querySelectorAll('.lang-btn').forEach(b => {
        const act = b.getAttribute('data-lang') === state.lang;
        if (act) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : (state.lang === 'es' ? 'es-ES' : 'en-US');
      try { localStorage.setItem('portfolio_lang', state.lang); } catch(e) {}
    }

    document.addEventListener('click'`;

if (oldApplyTranslationsRegex.test(html)) {
  html = html.replace(oldApplyTranslationsRegex, newApplyTranslationsCode);
} else {
  console.log('WARNING: oldApplyTranslationsRegex did not match!');
}

console.log('Final HTML length:', html.length);

// 3. Write index.html
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully wrote index.html');

// 4. Create Spanish version for /es/index.html
let esHtml = html
  .replace('<html lang="pt-BR"', '<html lang="es-ES"')
  .replace("lang: 'pt',", "lang: 'es',")
  .replace('data-lang="pt" class="lang-btn active"', 'data-lang="pt" class="lang-btn"')
  .replace('data-lang="es" class="lang-btn"', 'data-lang="es" class="lang-btn active"');

// Ensure es directory exists
if (!fs.existsSync('es')) fs.mkdirSync('es', { recursive: true });
fs.writeFileSync('es/index.html', esHtml, 'utf8');
console.log('Successfully wrote es/index.html');

// 5. Create English version for /en/index.html
let enHtml = html
  .replace('<html lang="pt-BR"', '<html lang="en-US"')
  .replace("lang: 'pt',", "lang: 'en',")
  .replace('data-lang="pt" class="lang-btn active"', 'data-lang="pt" class="lang-btn"')
  .replace('data-lang="en" class="lang-btn"', 'data-lang="en" class="lang-btn active"');

// Ensure en directory exists
if (!fs.existsSync('en')) fs.mkdirSync('en', { recursive: true });
fs.writeFileSync('en/index.html', enHtml, 'utf8');
console.log('Successfully wrote en/index.html');
