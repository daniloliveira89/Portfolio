const fs = require('fs');
const path = require('path');

// 1. Read base template
const templatePath = 'C:/Users/Zombie PC/.gemini/antigravity/brain/1c2a9853-6515-4feb-8e6e-791b68c45782/.user_uploaded/media_1795097314429_375d6e0e.html';
let html = fs.readFileSync(templatePath, 'utf8');

// 2. Custom CSS for Language Switcher Pill matching user's attached screenshot + Clean Project Cards
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

    /* === CLEAN PROJECT CARDS === */
    .clean-proj-card {
      transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s ease, border-color 0.28s ease;
      will-change: transform;
    }
    .clean-proj-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(34, 211, 238, 0.15);
      border-color: rgba(34, 211, 238, 0.5);
    }
    body[data-theme="light"] .clean-proj-card:hover {
      box-shadow: 0 16px 32px -8px rgba(15, 23, 42, 0.12), 0 0 18px rgba(8, 145, 178, 0.18);
      border-color: rgba(8, 145, 178, 0.45);
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

// Define comprehensive mapping for Site Types in PT, ES, EN
const siteTypeDictCode = `
    const SITE_TYPE_DICT = {
      // Web Apps & I.A.
      'radar-ia': { pt: 'Observatório de I.A.', es: 'Observatorio de I.A.', en: 'A.I. Observatory' },
      'prompt-studio-ai': { pt: 'Estúdio de Prompts I.A.', es: 'Estudio de Prompts I.A.', en: 'A.I. Prompt Studio' },
      'prompt-studio': { pt: 'Estúdio de Prompts I.A.', es: 'Estudio de Prompts I.A.', en: 'A.I. Prompt Studio' },
      'ivfr-economia': { pt: 'Comparador Econômico', es: 'Comparador Económico', en: 'Economic Index' },
      'ivfr': { pt: 'Comparador Econômico', es: 'Comparador Económico', en: 'Economic Index' },
      'calculadora-juros-compostos': { pt: 'Simulador Financeiro', es: 'Simulador Financiero', en: 'Financial Simulator' },

      // Jogos & WebGL
      'neon-synapse': { pt: 'Jogo Tático Cyberpunk', es: 'Juego Táctico Cyberpunk', en: 'Cyberpunk Game' },
      'prancheta-tatica': { pt: 'Simulador Tático de Futebol', es: 'Pizarra Táctica de Fútbol', en: 'Tactical Board' },
      'webgl-tactics': { pt: 'Jogo Tático WebGL', es: 'Juego Táctico WebGL', en: 'Tactical WebGL Game' },

      // Atlas Suite
      'music-atlas': { pt: 'Streaming & Música PWA', es: 'Streaming & Música PWA', en: 'Music Streaming PWA' },
      'atlas-suite': { pt: 'Streaming & Música PWA', es: 'Streaming & Música PWA', en: 'Music Streaming PWA' },
      'atlas-pwa': { pt: 'Streaming & Música PWA', es: 'Streaming & Música PWA', en: 'Music Streaming PWA' },
      'bookshelf-atlas': { pt: 'Biblioteca & Diário Literário', es: 'Biblioteca Literaria', en: 'Literary Library' },
      'cinematheque-atlas': { pt: 'Catálogo de Cinema', es: 'Catálogo de Cine', en: 'Film Archive' },
      'game-atlas': { pt: 'Diário Gamer & Backlog', es: 'Diario Gamer & Backlog', en: 'Gamer Journal' },

      // Layouts Comerciais (39 sites)
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
      'layout-construtora': { pt: 'Construtora & Incorporadora', es: 'Constructora & Inmobiliaria', en: 'Construction Company' },
      'layout-petshop': { pt: 'Pet Shop & Spa Pet', es: 'Pet Shop & Spa Canino', en: 'Pet Shop & Spa' },
      'layout-cafeteria': { pt: 'Cafeteria & Cafés Especiais', es: 'Cafetería & Microtostaduría', en: 'Specialty Coffee Shop' },
      'layout-escola-cursos': { pt: 'Cursos & Escola de Tecnologia', es: 'Escuela de Tecnología', en: 'Tech Academy' },
      'layout-saas-ai': { pt: 'SaaS & Startup de I.A.', es: 'SaaS & Startup de I.A.', en: 'AI SaaS Landing' },
      'layout-agencia-publicidade': { pt: 'Agência de Marketing & Branding', es: 'Agencia de Marketing & Branding', en: 'Marketing Agency' },
      'layout-contabilidade': { pt: 'Escritório de Contabilidade', es: 'Estudio Contable & BPO', en: 'Accounting Firm' },
      'layout-logistica': { pt: 'Transportadora & Logística', es: 'Operador Logístico', en: 'Logistics & Freight' },
      'layout-energia-solar': { pt: 'Energia Solar & Fotovoltaica', es: 'Energía Solar Fotovoltaica', en: 'Solar Energy' },
      'layout-fotografo': { pt: 'Estúdio de Fotografia', es: 'Estudio de Fotografía', en: 'Photography Studio' },
      'layout-consultoria': { pt: 'Consultoria Empresarial', es: 'Consultoría Estratégica', en: 'Business Consulting' },
      'layout-marca-roupas': { pt: 'Marca de Moda & Streetwear', es: 'Marca de Moda Urbana', en: 'Streetwear Brand' },
      'layout-clinica-veterinaria': { pt: 'Hospital Veterinário 24h', es: 'Hospital Veterinario 24h', en: 'Veterinary Hospital' },
      'layout-spa-massagem': { pt: 'Spa & Massagens', es: 'Spa & Terapias', en: 'Wellness Spa' },
      'layout-motel': { pt: 'Motel Boutique & Suítes', es: 'Motel Boutique & Suites', en: 'Boutique Motel' },
      'layout-produtora-eventos': { pt: 'Produtora de Eventos & Shows', es: 'Productora de Eventos', en: 'Events Production' },
      'layout-engenharia': { pt: 'Engenharia Estrutural BIM', es: 'Ingeniería Estructural BIM', en: 'Structural Engineering' },
      'layout-moveis-decoracao': { pt: 'Loja de Móveis & Decoração', es: 'Tienda de Muebles & Diseño', en: 'Furniture Store' },
      'layout-produtora-audiovisual': { pt: 'Produtora de Cinema & Vídeo', es: 'Productora Audiovisual', en: 'Film Production' },
      'layout-limpeza-manutencao': { pt: 'Limpeza Técnica & Facilities', es: 'Limpieza Técnica & Facilities', en: 'Cleaning & Facilities' },
      'layout-psicologia': { pt: 'Consultório de Psicologia', es: 'Consultorio de Psicología', en: 'Psychology Clinic' },
      'layout-banda-gravadora': { pt: 'Banda & Gravadora Musical', es: 'Banda & Sello Musical', en: 'Band & Record Label' },
      'layout-ferramentaria-caldeiraria': { pt: 'Indústria Metalúrgica & CNC', es: 'Industria Metalúrgica & CNC', en: 'CNC Machining' },
      'layout-meridian-wave': { pt: 'Fintech & Câmbio Global', es: 'Fintech & Cambio Global', en: 'Fintech & Currency' },
      'layout-site-face': { pt: 'Portfólio de Arte Editorial', es: 'Portafolio de Arte Editorial', en: 'Art Portfolio' },
      'layout-site-tattoo': { pt: 'Estúdio de Tatuagem', es: 'Estudio de Tatuajes', en: 'Tattoo Studio' },

      // Extensões & Desktop
      'universal-music-downloader': { pt: 'Extensão de Download de Áudio', es: 'Extensión de Audio', en: 'Audio Downloader Ext' },
      'youtube-power-tools': { pt: 'Suíte de Extensões YouTube', es: 'Suite de Extensiones YouTube', en: 'YouTube Extensions' },
      'sync-to-notion-suite': { pt: 'Extensão de Sincronização Notion', es: 'Extensión para Notion', en: 'Notion Extension' },
      'rclone-manager-desktop': { pt: 'App Desktop Multi-Nuvem', es: 'App Desktop Multi-Nube', en: 'Multi-Cloud Desktop App' },
      'torrent-rename-normalizer': { pt: 'Automação de Arquivos Desktop', es: 'Automatización de Archivos', en: 'File Automation Tool' }
    };
`;

// Replace PROJECTS declaration with full dynamic mapping from PROJECTS_DATA
const oldProjectsRegex = /const PROJECTS = \[[\s\S]*?\];\s*const state = {/;
const newProjectsCode = `${siteTypeDictCode}

    const DEFAULT_PROJECTS = [
      { id: 'radar-ia', title: 'Radar IA — Observatório Global', badge: 'Web Apps & I.A.', cat: 'Web Apps & I.A.', desc: 'Observatório em tempo real de lançamentos, benchmarks e custos por milhão de tokens.', tags: ['TypeScript', 'React & Next.js'], demoType: 'radar' },
      { id: 'prompt-studio', title: 'Prompt Studio AI — Estúdio Visual', badge: 'GenAI • Live', cat: 'Web Apps & I.A.', desc: 'Estúdio interativo para construção de prompts otimizados.', tags: ['TypeScript', 'Tailwind & UI/UX'], demoType: 'prompt' },
      { id: 'ivfr', title: 'IVFR — Viabilidade Econômica', badge: '103 Cidades', cat: 'Layouts & Sites', desc: 'Comparador global de poder de compra real.', tags: ['React & Next.js', 'Python'], demoType: 'ivfr' },
      { id: 'webgl-tactics', title: 'Vanguard — Jogo Tático WebGL', badge: '60 FPS • PixiJS', cat: 'Jogos & WebGL', desc: 'Engine tática por turnos no navegador.', tags: ['TypeScript', 'WebGL & PixiJS'], demoType: 'tactics' },
      { id: 'atlas-pwa', title: 'Atlas Suite — Streaming PWA', badge: 'PWA • Edge', cat: 'Atlas Suite', desc: 'Player progressivo com reprodução em background.', tags: ['TypeScript', 'Cloudflare Workers'], demoType: 'audio' },
      { id: 'chrome-suite', title: 'Chromium Productivity Suite', badge: 'Manifest V3', cat: 'Extensões', desc: 'Mais de 10 extensões leves para produtividade.', tags: ['TypeScript', 'Manifest V3'], demoType: 'ext' }
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

          return {
            id: p.id,
            title: p.title,
            badge: p.badge || p.categoryLabel || 'Projeto',
            cat: cat,
            rawCat: p.category,
            desc: p.shortDescription || p.description || '',
            fullDesc: p.fullDescription || p.shortDescription || p.description || '',
            image: p.image || '/assets/images/radar-ia-real.png',
            gallery: (p.gallery && p.gallery.length) ? p.gallery : [p.image || '/assets/images/radar-ia-real.png'],
            tags: p.tags || [],
            links: p.links || {},
            features: p.features || []
          };
        })
      : DEFAULT_PROJECTS;

    const state = {`;
html = html.replace(oldProjectsRegex, newProjectsCode);

// Redesign renderProjects for ultra-clean layout: ONLY Thumbnail + Site Type + "Abrir ↗" button
const oldRenderRegex = /function renderProjects\(\) \{[\s\S]*?\}\s*function openProjectDemo\(projId\) \{[\s\S]*?\}\s*\/\/ =========================================================================\s*\/\/ 6\. COMMAND PALETTE/;

const newRenderCode = `function renderProjects() {
      const cats = [
        { label: 'Todos', key: 'Todos', count: PROJECTS.length },
        { label: 'Layouts & Sites', key: 'Layouts & Sites', count: PROJECTS.filter(p => p.cat === 'Layouts & Sites').length },
        { label: 'Web Apps & I.A.', key: 'Web Apps & I.A.', count: PROJECTS.filter(p => p.cat === 'Web Apps & I.A.').length },
        { label: 'Jogos & WebGL', key: 'Jogos & WebGL', count: PROJECTS.filter(p => p.cat === 'Jogos & WebGL').length },
        { label: 'Atlas Suite', key: 'Atlas Suite', count: PROJECTS.filter(p => p.cat === 'Atlas Suite').length },
        { label: 'Extensões & Desktop', key: 'Extensões & Desktop', count: PROJECTS.filter(p => p.cat === 'Extensões' || p.cat === 'Desktop & Ferramentas').length }
      ];

      document.getElementById('project-filters').innerHTML = cats.map(c => \`
        <button type="button" data-proj-cat="\${c.key}" class="px-4 py-1.5 rounded-full text-xs font-semibold border transition inline-flex items-center gap-1.5 \${state.projectCat === c.key ? 'tab-pill-active' : 'b-subtle t-body hover:border-cyan-400/50'}">
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

      const curLang = state.lang || 'pt';
      const openBtnText = curLang === 'en' ? 'Open' : 'Abrir';

      grid.innerHTML = list.map(p => {
        const openUrl = (p.links && p.links.demo) ? p.links.demo : ((p.links && p.links.github) ? p.links.github : '#');
        const siteTypeInfo = SITE_TYPE_DICT[p.id];
        const siteType = (siteTypeInfo && siteTypeInfo[curLang]) ? siteTypeInfo[curLang] : (p.title.split('—')[0].trim());

        return \`
        <article class="clean-proj-card spotlight-card rounded-2xl overflow-hidden flex flex-col justify-between group border b-subtle bg-surface-solid">
          <!-- 1. Miniatura (Preview Image) -->
          <a href="\${openUrl}" target="_blank" rel="noopener noreferrer" class="relative block aspect-[16/10] overflow-hidden bg-slate-950">
            <img src="\${p.image}" alt="\${siteType}" class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" onerror="this.onerror=null; this.src='/assets/images/radar-ia-real.png';" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <!-- 2. Rodapé Limpo: Tipo de Site + Botão Abrir -->
          <div class="p-3.5 sm:p-4 flex items-center justify-between gap-3 bg-surface-solid border-t b-subtle">
            <span class="font-medium text-xs sm:text-sm t-heading truncate tracking-wide" title="\${siteType}">\${siteType}</span>
            <a href="\${openUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-xl text-xs font-bold btn-cyan inline-flex items-center gap-1 shrink-0 shadow-sm transition hover:scale-105">
              \${openBtnText} ↗
            </a>
          </div>
        </article>\`;
      }).join('');
    }

    // =========================================================================
    // 6. COMMAND PALETTE`;

if (oldRenderRegex.test(html)) {
  html = html.replace(oldRenderRegex, newRenderCode);
} else {
  console.log('WARNING: oldRenderRegex did not match!');
}

// Replace applyTranslations to toggle active class cleanly and re-render projects with new language
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
      renderProjects();
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

if (!fs.existsSync('es')) fs.mkdirSync('es', { recursive: true });
fs.writeFileSync('es/index.html', esHtml, 'utf8');
console.log('Successfully wrote es/index.html');

// 5. Create English version for /en/index.html
let enHtml = html
  .replace('<html lang="pt-BR"', '<html lang="en-US"')
  .replace("lang: 'pt',", "lang: 'en',")
  .replace('data-lang="pt" class="lang-btn active"', 'data-lang="pt" class="lang-btn"')
  .replace('data-lang="en" class="lang-btn"', 'data-lang="en" class="lang-btn active"');

if (!fs.existsSync('en')) fs.mkdirSync('en', { recursive: true });
fs.writeFileSync('en/index.html', enHtml, 'utf8');
console.log('Successfully wrote en/index.html');
