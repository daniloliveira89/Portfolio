const fs = require('fs');
const path = require('path');

// 1. Read base template
const templatePath = 'C:/Users/Zombie PC/.gemini/antigravity/brain/1c2a9853-6515-4feb-8e6e-791b68c45782/.user_uploaded/media_1795097314429_375d6e0e.html';
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
      box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.7), 0 0 24px rgba(34, 211, 238, 0.2);
      border-color: rgba(34, 211, 238, 0.5);
    }
    body[data-theme="light"] .clean-proj-card:hover {
      box-shadow: 0 16px 32px -8px rgba(15, 23, 42, 0.14), 0 0 20px rgba(8, 145, 178, 0.2);
      border-color: rgba(8, 145, 178, 0.45);
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
const newBrandLogo = `<a href="#top" id="btn-brand-home" onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;" class="flex items-center gap-3 no-underline group cursor-pointer" title="Ir para o topo">`;
html = html.replace(oldBrandLogo, newBrandLogo);

// 2. Language Switcher with Flags right below initials
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

// Define comprehensive mapping for Site Types in PT, ES, EN + LOGOS_DATA
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

    const LOGOS_DATA = [
      { id: 'logo-01', name: 'Aether Gear', file: '01-aether-gear.png', pt: 'Loja Virtual & E-commerce', es: 'Tienda Virtual & E-commerce', en: 'E-Commerce Store', demoUrl: 'https://daniloliveira89.github.io/site---techwear-audio-store/' },
      { id: 'logo-02', name: 'Division 89', file: '02-division-89.png', pt: 'Marca de Moda & Streetwear', es: 'Marca de Moda Urbana', en: 'Streetwear Brand', demoUrl: 'https://daniloliveira89.github.io/site---streetwear-drops/' },
      { id: 'logo-03', name: 'Norden Atelier', file: '03-norden-atelier.png', pt: 'Móveis & Design Escandinavo', es: 'Muebles & Diseño Escandinavo', en: 'Furniture & Design', demoUrl: 'https://daniloliveira89.github.io/site---moveis-design-escandinavo/' },
      { id: 'logo-04', name: 'Kuro Omakase', file: '04-kuro-omakase.png', pt: 'Restaurante Japonês', es: 'Restaurante Japonés', en: 'Japanese Restaurant', demoUrl: 'https://daniloliveira89.github.io/site---omakase-alta-gastronomia/' },
      { id: 'logo-05', name: 'Origem 85', file: '05-origem-85.png', pt: 'Cafeteria & Cafés Especiais', es: 'Cafetería & Microtostaduría', en: 'Specialty Coffee', demoUrl: 'https://daniloliveira89.github.io/site---microtorrefacao-cafes-especiais/' },
      { id: 'logo-06', name: 'Vale das Nuvens', file: '06-vale-das-nuvens.png', pt: 'Hotel & Eco-Resort', es: 'Hotel & Eco-Resort', en: 'Hotel & Eco-Resort', demoUrl: 'https://daniloliveira89.github.io/site---luxury-eco-resort/' },
      { id: 'logo-07', name: 'Velvet Suites', file: '07-velvet-suites.png', pt: 'Motel Boutique & Suítes', es: 'Motel Boutique & Suites', en: 'Boutique Motel', demoUrl: 'https://daniloliveira89.github.io/site---motel-boutique/' },
      { id: 'logo-08', name: 'Horizon Expeditions', file: '08-horizon-expeditions.png', pt: 'Agência de Turismo', es: 'Agencia de Viajes', en: 'Travel Agency', demoUrl: 'https://daniloliveira89.github.io/site---expedicoes-roteiros-sob-medida/' },
      { id: 'logo-09', name: 'Lumina Smile', file: '09-lumina-smile.png', pt: 'Clínica Odontológica', es: 'Clínica Dental', en: 'Dental Clinic', demoUrl: 'https://daniloliveira89.github.io/site---odontologia-digital/' },
      { id: 'logo-10', name: 'Nexus Medicina', file: '10-nexus.png', pt: 'Centro Médico & Hospital', es: 'Centro Médico', en: 'Medical Center', demoUrl: 'https://daniloliveira89.github.io/site---centro-medico-checkup/' },
      { id: 'logo-11', name: 'Derma Reveal', file: '11-derma-reveal.png', pt: 'Clínica de Estética & Laser', es: 'Clínica de Estética & Láser', en: 'Aesthetic Clinic', demoUrl: 'https://daniloliveira89.github.io/site---estetica-avancada-laser/' },
      { id: 'logo-12', name: 'Mente & Fluxo', file: '12-mente-and-fluxo.png', pt: 'Consultório de Psicologia', es: 'Consultorio de Psicología', en: 'Psychology Clinic', demoUrl: 'https://daniloliveira89.github.io/site---psicologia-clinica-tcc/' },
      { id: 'logo-13', name: 'Sanctuary Spa', file: '13-sanctuary.png', pt: 'Spa & Massagens', es: 'Spa & Terapias', en: 'Wellness Spa', demoUrl: 'https://daniloliveira89.github.io/site---massagens-terapeuticas-ofuro/' },
      { id: 'logo-14', name: 'Pet Majesty', file: '14-pet-majesty.png', pt: 'Pet Shop & Spa Pet', es: 'Pet Shop & Spa Canino', en: 'Pet Shop & Spa', demoUrl: 'https://daniloliveira89.github.io/site---pet-boutique-spa/' },
      { id: 'logo-15', name: 'Vet Life 24h', file: '15-vet-life-24h.png', pt: 'Hospital Veterinário 24h', es: 'Hospital Veterinario 24h', en: 'Veterinary Hospital', demoUrl: 'https://daniloliveira89.github.io/site---uti-veterinaria-planos-pet/' },
      { id: 'logo-16', name: 'Valoris Law', file: '16-valoris.png', pt: 'Escritório de Advocacia', es: 'Bufete de Abogados', en: 'Law Firm', demoUrl: 'https://daniloliveira89.github.io/site---advocacia-corporate-law/' },
      { id: 'logo-17', name: 'ContaFlow', file: '17-contaflow.png', pt: 'Escritório de Contabilidade', es: 'Estudio Contable & BPO', en: 'Accounting Firm', demoUrl: 'https://daniloliveira89.github.io/site---contabilidade-consultiva-tributario/' },
      { id: 'logo-18', name: 'Apex Consulting', file: '18-apex.png', pt: 'Consultoria Empresarial', es: 'Consultoría Estratégica', en: 'Business Consulting', demoUrl: 'https://daniloliveira89.github.io/site---consultoria-gestao-ebitda/' },
      { id: 'logo-19', name: 'Pulse Pay', file: '19-pulse-pay.png', pt: 'Fintech & Câmbio Global', es: 'Fintech & Cambio Global', en: 'Fintech & Currency', demoUrl: 'https://daniloliveira89.github.io/site---fintech-liquid-wave/' },
      { id: 'logo-20', name: 'Prime Villas', file: '20-prime-villas.png', pt: 'Imobiliária de Luxo', es: 'Inmobiliaria de Lujo', en: 'Luxury Real Estate', demoUrl: 'https://daniloliveira89.github.io/site---luxury-real-estate/' },
      { id: 'logo-21', name: 'Studio Arq 89', file: '21-studio-arq-89.png', pt: 'Escritório de Arquitetura', es: 'Estudio de Arquitectura', en: 'Architecture Studio', demoUrl: 'https://daniloliveira89.github.io/site---arquitetura-design-editorial/' },
      { id: 'logo-22', name: 'Vértice Construtora', file: '22-vertice.png', pt: 'Construtora & Incorporadora', es: 'Constructora & Inmobiliaria', en: 'Construction Company', demoUrl: 'https://daniloliveira89.github.io/site---construtora-incorporacao/' },
      { id: 'logo-23', name: 'BIM Struct', file: '23-bim-struct.png', pt: 'Engenharia Estrutural BIM', es: 'Ingeniería Estructural BIM', en: 'Structural Engineering', demoUrl: 'https://daniloliveira89.github.io/site---projetos-estruturais-bim/' },
      { id: 'logo-24', name: 'Solaris Energia', file: '24-solaris.png', pt: 'Energia Solar & Fotovoltaica', es: 'Energía Solar Fotovoltaica', en: 'Solar Energy', demoUrl: 'https://daniloliveira89.github.io/site---engenharia-fotovoltaica-usinas/' },
      { id: 'logo-25', name: 'Prime Clean', file: '25-prime-clean.png', pt: 'Limpeza Técnica & Facilities', es: 'Limpeza Técnica & Facilities', en: 'Cleaning & Facilities', demoUrl: 'https://daniloliveira89.github.io/site---limpeza-pos-obra-manutencao/' },
      { id: 'logo-26', name: 'Veloce Motors', file: '26-veloce-motors.png', pt: 'Concessionária & Blindados', es: 'Concesionaria & Blindados', en: 'Car Dealership', demoUrl: 'https://daniloliveira89.github.io/site---superesportivos-blindados/' },
      { id: 'logo-27', name: 'CargoMax', file: '27-cargomax.png', pt: 'Transportadora & Logística', es: 'Operador Logístico', en: 'Logistics & Freight', demoUrl: 'https://daniloliveira89.github.io/site---supply-chain-frete-expresso/' },
      { id: 'logo-28', name: 'Precision CNC', file: '28-precision-cnc.png', pt: 'Indústria Metalúrgica & CNC', es: 'Industria Metalúrgica & CNC', en: 'CNC Machining', demoUrl: 'https://daniloliveira89.github.io/site---usinagem-cnc-caldeiraria/' },
      { id: 'logo-29', name: 'Studio Matrix', file: '29-studio-matrix.png', pt: 'Agência de Marketing & Branding', es: 'Agencia de Marketing & Branding', en: 'Marketing Agency', demoUrl: 'https://daniloliveira89.github.io/site---creative-growth-branding/' },
      { id: 'logo-30', name: 'Lumière Photo', file: '30-lumiere.png', pt: 'Estúdio de Fotografia', es: 'Estudio de Fotografía', en: 'Photography Studio', demoUrl: 'https://daniloliveira89.github.io/site---fine-art-editorial-photography/' },
      { id: 'logo-31', name: 'Stage Live', file: '31-stage-live.png', pt: 'Produtora de Eventos & Shows', es: 'Productora de Eventos', en: 'Events Production', demoUrl: 'https://daniloliveira89.github.io/site---produtora-eventos-shows-av/' },
      { id: 'logo-32', name: 'Framework Filmes', file: '32-framework.png', pt: 'Produtora de Cinema & Vídeo', es: 'Productora Audiovisual', en: 'Film Production', demoUrl: 'https://daniloliveira89.github.io/site---produtora-cinematografica/' },
      { id: 'logo-33', name: 'The Barber Club', file: '33-the-barber-club.png', pt: 'Barbearia & Visagismo', es: 'Barbería & Visagismo', en: 'Barbershop', demoUrl: 'https://daniloliveira89.github.io/site---barbearia-visagismo/' },
      { id: 'logo-34', name: 'Black Needle', file: '34-black-needle.png', pt: 'Estúdio de Tatuagem', es: 'Estudio de Tatuajes', en: 'Tattoo Studio', demoUrl: 'https://daniloliveira89.github.io/site---tattoo-studio/' },
      { id: 'logo-35', name: 'Neon Horizon', file: '35-neon-horizon.png', pt: 'Banda & Gravadora Musical', es: 'Banda & Sello Musical', en: 'Band & Record Label', demoUrl: 'https://daniloliveira89.github.io/site---banda-gravadora-musical/' },
      { id: 'logo-36', name: 'Iron Core Gym', file: '36-iron-core.png', pt: 'Academia & Fitness', es: 'Gimnasio & Fitness', en: 'Gym & Fitness', demoUrl: 'https://daniloliveira89.github.io/site---high-performance-gym/' },
      { id: 'logo-37', name: 'Aurea Atelier', file: '37-aurea-atelier.png', pt: 'Portfólio de Arte Editorial', es: 'Portafolio de Arte Editorial', en: 'Art Portfolio', demoUrl: 'https://daniloliveira89.github.io/site---gold-mask-reveal/' },
      { id: 'logo-38', name: 'Hyperion Academy', file: '38-hyperion.png', pt: 'Cursos & Escola de Tecnologia', es: 'Escuela de Tecnología', en: 'Tech Academy', demoUrl: 'https://daniloliveira89.github.io/site---cursos-tech-ia/' },
      { id: 'logo-39', name: 'FlowGate AI', file: '39-flowgate-ai.png', pt: 'SaaS & Startup de I.A.', es: 'SaaS & Startup de I.A.', en: 'AI SaaS Landing', demoUrl: 'https://daniloliveira89.github.io/site---saas-ai-gateway/' },
      { id: 'logo-40', name: 'Radar IA', file: '40-radar-ia.png', pt: 'Observatório de I.A.', es: 'Observatorio de I.A.', en: 'A.I. Observatory', demoUrl: 'https://daniloliveira89.github.io/site---Radar-IA/' },
      { id: 'logo-41', name: 'Prompt Studio', file: '41-prompt-studio.png', pt: 'Estúdio de Prompts I.A.', es: 'Estudio de Prompts I.A.', en: 'A.I. Prompt Studio', demoUrl: 'https://daniloliveira89.github.io/site---Prompt-Studio-AI/' },
      { id: 'logo-42', name: 'IVFR Global', file: '42-ivfr-global.png', pt: 'Comparador Econômico', es: 'Comparador Económico', en: 'Economic Index', demoUrl: 'https://daniloliveira89.github.io/site---IVFR-Economia/' },
      { id: 'logo-43', name: 'Music Atlas', file: '43-music-atlas.png', pt: 'Streaming & Música PWA', es: 'Streaming & Música PWA', en: 'Music Streaming PWA', demoUrl: 'https://music-atlas.vercel.app/' },
      { id: 'logo-44', name: 'Game Atlas', file: '44-game-atlas.png', pt: 'Diário Gamer & Backlog', es: 'Diario Gamer & Backlog', en: 'Gamer Journal', demoUrl: 'https://game-atlas.vercel.app/' },
      { id: 'logo-45', name: 'Cinematheque Atlas', file: '45-cinematheque-atlas.png', pt: 'Catálogo de Cinema', es: 'Catálogo de Cine', en: 'Film Archive', demoUrl: 'https://github.com/daniloliveira89/cinematheque-atlas' },
      { id: 'logo-46', name: 'Bookshelf Atlas', file: '46-bookshelf-atlas.png', pt: 'Biblioteca & Diário Literário', es: 'Biblioteca Literaria', en: 'Literary Library', demoUrl: 'https://github.com/daniloliveira89/bookshelf-atlas' },
      { id: 'logo-47', name: 'Neon Synapse', file: '47-neon-synapse.png', pt: 'Jogo Tático Cyberpunk', es: 'Juego Táctico Cyberpunk', en: 'Cyberpunk Game', demoUrl: 'https://daniloliveira89.github.io/jogo---Neon-Synapse-Card-Game/' },
      { id: 'logo-48', name: 'Prancheta Tática', file: '48-prancheta-tatica.png', pt: 'Simulador Tático de Futebol', es: 'Pizarra Táctica de Fútbol', en: 'Tactical Board', demoUrl: 'https://daniloliveira89.github.io/site---prancheta-tatica-futebol/' }
    ];
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

// 3. Redesign renderProjects with LOGOS TAB included
const oldRenderRegex = /function renderProjects\(\) \{[\s\S]*?\}\s*function openProjectDemo\(projId\) \{[\s\S]*?\}\s*\/\/ =========================================================================\s*\/\/ 6\. COMMAND PALETTE/;

const newRenderCode = `function renderProjects() {
      const cats = [
        { label: 'Todos', key: 'Todos', count: PROJECTS.length },
        { label: 'Layouts & Sites', key: 'Layouts & Sites', count: PROJECTS.filter(p => p.cat === 'Layouts & Sites').length },
        { label: 'Logos', key: 'Logos', count: LOGOS_DATA.length },
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
      if (state.techFilter && state.projectCat !== 'Logos') {
        banner.classList.remove('hidden'); banner.classList.add('inline-flex');
        document.getElementById('active-tech-label').textContent = \`Tech: \${state.techFilter}\`;
      } else {
        banner.classList.add('hidden'); banner.classList.remove('inline-flex');
      }

      const grid = document.getElementById('projects-grid');
      const curLang = state.lang || 'pt';

      // RENDER LOGOS TAB
      if (state.projectCat === 'Logos') {
        grid.innerHTML = LOGOS_DATA.map(l => {
          const siteType = l[curLang] || l.pt;
          const openUrl = l.demoUrl || ('/assets/images/logos-ia/' + l.file);
          return \`
          <a href="\${openUrl}" target="_blank" rel="noopener noreferrer" class="clean-proj-card spotlight-card rounded-2xl overflow-hidden block relative aspect-[16/10] bg-slate-950 border b-subtle group cursor-pointer shadow-md">
            <!-- 1. Imagem de Alta Resolução da Logo -->
            <img src="/assets/images/logos-ia/\${l.file}" alt="\${l.name}" class="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105" loading="lazy" />
            
            <!-- 2. Overlay Suave com Gradiente -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300"></div>

            <!-- 3. Nome da Marca e Nicho por Cima da Imagem -->
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span class="px-3 py-1.5 rounded-xl text-xs sm:text-[13px] font-semibold tracking-wide text-white bg-slate-950/80 backdrop-blur-md border border-white/15 shadow-lg group-hover:border-cyan-400/60 group-hover:text-cyan-300 transition-all duration-200 truncate max-w-[85%]">
                \${l.name} • \${siteType}
              </span>
              <span class="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm shrink-0">
                ↗
              </span>
            </div>
          </a>\`;
        }).join('');
        return;
      }

      // RENDER WEBSITES / PROJECTS TABS
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

      if (!list.length) {
        grid.innerHTML = \`<div class="col-span-full text-center py-12 rounded-2xl border b-subtle text-sm t-muted">Nenhum projeto encontrado com os filtros selecionados.</div>\`;
        return;
      }

      grid.innerHTML = list.map(p => {
        const openUrl = (p.links && p.links.demo) ? p.links.demo : ((p.links && p.links.github) ? p.links.github : '#');
        const siteTypeInfo = SITE_TYPE_DICT[p.id];
        const siteType = (siteTypeInfo && siteTypeInfo[curLang]) ? siteTypeInfo[curLang] : (p.title.split('—')[0].trim());

        return \`
        <a href="\${openUrl}" target="_blank" rel="noopener noreferrer" class="clean-proj-card spotlight-card rounded-2xl overflow-hidden block relative aspect-[16/10] bg-slate-950 border b-subtle group cursor-pointer shadow-md">
          <!-- 1. Miniatura em Tela Cheia do Card -->
          <img src="\${p.image}" alt="\${siteType}" class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" onerror="this.onerror=null; this.src='/assets/images/radar-ia-real.png';" />
          
          <!-- 2. Overlay Suave com Gradiente -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300"></div>

          <!-- 3. Estilo do Site por Cima da Miniatura (Sem Botão Abrir) -->
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span class="px-3 py-1.5 rounded-xl text-xs sm:text-[13px] font-semibold tracking-wide text-white bg-slate-950/80 backdrop-blur-md border border-white/15 shadow-lg group-hover:border-cyan-400/60 group-hover:text-cyan-300 transition-all duration-200">
              \${siteType}
            </span>
            <span class="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
              ↗
            </span>
          </div>
        </a>\`;
      }).join('');
    }

    // =========================================================================
    // 6. COMMAND PALETTE`;

if (oldRenderRegex.test(html)) {
  html = html.replace(oldRenderRegex, newRenderCode);
} else {
  console.log('WARNING: oldRenderRegex did not match!');
}

// 4. Update applyTranslations to cleanly toggle .active without overwriting SVG flags
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

    // Explicit scroll-to-top binding
    document.addEventListener('DOMContentLoaded', () => {
      const btnHome = document.getElementById('btn-brand-home');
      if (btnHome) {
        btnHome.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    });

    document.addEventListener('click'`;

if (oldApplyTranslationsRegex.test(html)) {
  html = html.replace(oldApplyTranslationsRegex, newApplyTranslationsCode);
} else {
  console.log('WARNING: oldApplyTranslationsRegex did not match!');
}

console.log('Final HTML length:', html.length);

// Write index.html
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully wrote index.html');

// Create Spanish version for /es/index.html
let esHtml = html
  .replace('<html lang="pt-BR"', '<html lang="es-ES"')
  .replace("lang: 'pt',", "lang: 'es',")
  .replace('data-lang="pt" class="lang-btn active"', 'data-lang="pt" class="lang-btn"')
  .replace('data-lang="es" class="lang-btn"', 'data-lang="es" class="lang-btn active"');

if (!fs.existsSync('es')) fs.mkdirSync('es', { recursive: true });
fs.writeFileSync('es/index.html', esHtml, 'utf8');
console.log('Successfully wrote es/index.html');

// Create English version for /en/index.html
let enHtml = html
  .replace('<html lang="pt-BR"', '<html lang="en-US"')
  .replace("lang: 'pt',", "lang: 'en',")
  .replace('data-lang="pt" class="lang-btn active"', 'data-lang="pt" class="lang-btn"')
  .replace('data-lang="en" class="lang-btn"', 'data-lang="en" class="lang-btn active"');

if (!fs.existsSync('en')) fs.mkdirSync('en', { recursive: true });
fs.writeFileSync('en/index.html', enHtml, 'utf8');
console.log('Successfully wrote en/index.html');
