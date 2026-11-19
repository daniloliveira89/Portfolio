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
      box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.7), 0 0 24px rgba(245, 158, 11, 0.25);
      border-color: rgba(245, 158, 11, 0.5);
    }
    body[data-theme="light"] .clean-proj-card:hover {
      box-shadow: 0 16px 32px -8px rgba(15, 23, 42, 0.14), 0 0 20px rgba(217, 119, 6, 0.25);
      border-color: rgba(217, 119, 6, 0.45);
    }

    /* === LUXURY GOLD FLOATING BADGE === */
    .badge-gold {
      background: linear-gradient(135deg, #D97706 0%, #F59E0B 35%, #FBBF24 70%, #B45309 100%) !important;
      color: #090B12 !important;
      font-weight: 800 !important;
      letter-spacing: 0.02em;
      border: 1px solid rgba(254, 243, 199, 0.85) !important;
      box-shadow: 0 4px 18px -1px rgba(217, 119, 6, 0.5), 0 2px 6px rgba(0, 0, 0, 0.4) !important;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .clean-proj-card:hover .badge-gold {
      background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 35%, #FDE047 70%, #D97706 100%) !important;
      box-shadow: 0 6px 24px rgba(245, 158, 11, 0.7), 0 0 18px rgba(253, 224, 71, 0.5) !important;
      transform: translateY(-1px);
    }

    .arrow-gold {
      background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%) !important;
      color: #090B12 !important;
      font-weight: 800 !important;
      border: 1px solid rgba(254, 243, 199, 0.85) !important;
      box-shadow: 0 3px 12px rgba(217, 119, 6, 0.5) !important;
      transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .clean-proj-card:hover .arrow-gold {
      transform: translate(2px, -2px) scale(1.08);
      box-shadow: 0 4px 18px rgba(245, 158, 11, 0.7) !important;
    }

    /* === CUSTOM CURSOR COM TRAILING RING === */
    @media (hover: hover) and (pointer: fine) {
      body, a, button, input, select, textarea, [data-cursor="pointer"], label, [role="button"] {
        cursor: none !important;
      }

      .custom-cursor-dot {
        position: fixed;
        top: 0;
        left: 0;
        width: 6px;
        height: 6px;
        background-color: #D4AF37;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.9), 0 0 4px rgba(245, 158, 11, 0.8);
        transition: opacity 0.3s ease;
        will-change: transform;
      }

      .custom-cursor-ring {
        position: fixed;
        top: 0;
        left: 0;
        width: 34px;
        height: 34px;
        border: 1.5px solid rgba(212, 175, 55, 0.75);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 14px rgba(212, 175, 55, 0.28);
        transition: opacity 0.3s ease, border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
        will-change: transform;
      }

      .custom-cursor-ring.cursor-hover {
        border-color: rgba(245, 158, 11, 0.95);
        background-color: rgba(212, 175, 55, 0.18);
        box-shadow: 0 0 22px rgba(245, 158, 11, 0.45);
      }

      .custom-cursor-ring.cursor-active {
        border-color: #FBBF24;
        background-color: rgba(251, 191, 36, 0.32);
        box-shadow: 0 0 16px rgba(251, 191, 36, 0.6);
      }

      .custom-cursor-hidden {
        opacity: 0 !important;
      }
    }

    @media (hover: none) or (pointer: coarse) {
      .custom-cursor-dot, .custom-cursor-ring {
        display: none !important;
      }
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

// 3. Update Hero Bio and 3D card stats to focus on Webdesign
html = html
  .replace(
    'Desenvolvo aplicações modernas de alta performance — desde observatórios inteligentes e pipelines de I.A. Generativa até jogos táticos em WebGL e extensões ultrarrápidas de navegador.',
    'Desenvolvo websites comerciais modernos, landing pages de alta conversão e identidades visuais exclusivas com performance impecável e foco total em vendas.'
  )
  .replace(
    'Desarrollo aplicaciones modernas de alto rendimiento — desde observatorios inteligentes y pipelines de I.A. Generativa hasta juegos tácticos en WebGL.',
    'Desarrollo sitios web comerciales modernos, landing pages de alta conversión e identidades visuales exclusivas con alto rendimiento y enfoque en ventas.'
  )
  .replace(
    'I build high-performance modern applications — from Generative AI observatories and LLM pipelines to tactical WebGL games and fast Chrome extensions.',
    'I design and build modern commercial websites, high-conversion landing pages, and distinctive visual identities with peak performance and business results.'
  );

// Update 3D card stats: 39+ Sites, 100% Responsivo, 48+ Logos
html = html
  .replace('<p class="font-display font-bold text-xl t-heading">54+</p>', '<p class="font-display font-bold text-xl t-heading">39+</p>')
  .replace('<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5">Projetos</p>', '<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5">Sites</p>')
  .replace('<p class="font-display font-bold text-xl t-cyan">5</p>', '<p class="font-display font-bold text-xl t-cyan">100%</p>')
  .replace('<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5">Áreas</p>', '<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5">Responsivo</p>')
  .replace('<p class="font-display font-bold text-xl t-orchid">10+</p>', '<p class="font-display font-bold text-xl t-orchid">48+</p>')
  .replace('<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5">Extensões</p>', '<p class="text-[10px] t-muted uppercase font-mono-code mt-0.5">Logos</p>')
  .replace('Software Engineer & AI Architect', 'Web Designer & Frontend Specialist');

// Update Rotating Roles in Hero
html = html.replace(
  /const ROLES = \[[\s\S]*?\];/,
  `const ROLES = [
      'Web Designer & UI/UX',
      'Especialista em Sites Comerciais',
      'Landing Pages de Alta Conversão',
      'Identidade Visual & Branding'
    ];`
);

// Update Terminal simulator commands
html = html
  .replace(
    "whoami: 'Danilo Oliveira — Engenheiro de Software, I.A. Generativa & WebGL.'",
    "whoami: 'Danilo Oliveira — Web Designer & Especialista em Websites Comerciais.'"
  )
  .replace(
    "stack: 'TypeScript • React/Next.js • PixiJS/WebGL • LLMs • Cloudflare Workers • Chrome V3.'",
    "stack: 'UI/UX Design • Landing Pages • Tailwind CSS • React/Next.js • Identidade Visual • SEO & Performance.'"
  )
  .replace(
    "projetos: 'Radar IA, Prompt Studio AI, IVFR Economia, Vanguard WebGL, Atlas PWA.'",
    "projetos: '39 Websites Comerciais em produção (Restaurantes, Clínicas, Hotelaria, E-commerce, Advocacia) e 48 Logos.'"
  );

// Update SERVICES to match Web Design focus
const oldServicesRegex = /const SERVICES = \[[\s\S]*?\];\s*const DIFFERENTIALS = \[/;
const newServicesCode = `const SERVICES = [
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
    ];

    const DIFFERENTIALS = [`;

html = html.replace(oldServicesRegex, newServicesCode);

// Define comprehensive mapping for Site Types in PT, ES, EN + LOGOS_DATA
const siteTypeDictCode = `
    const SITE_TYPE_DICT = {
      // 39 Commercial Web Design Sites
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
      'layout-pet-shop': { pt: 'Pet Shop & Spa Pet', es: 'Pet Shop & Spa Canino', en: 'Pet Shop & Spa' },
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
      'layout-eventos': { pt: 'Produtora de Eventos & Shows', es: 'Productora de Eventos', en: 'Events Production' },
      'layout-cinema': { pt: 'Produtora de Cinema & Vídeo', es: 'Productora Audiovisual', en: 'Film Production' },
      'layout-tattoo': { pt: 'Estúdio de Tatuagem', es: 'Estudio de Tatuajes', en: 'Tattoo Studio' },
      'layout-banda': { pt: 'Banda & Gravadora Musical', es: 'Banda & Sello Musical', en: 'Band & Record Label' },
      'layout-arte': { pt: 'Portfólio de Arte Editorial', es: 'Portafolio de Arte Editorial', en: 'Art Portfolio' }
    };

    const LOGOS_DATA = [
      { id: 'logo-01', name: 'Aurum Omakase', file: '01-aurum.png', pt: 'Restaurante Japonês', es: 'Restaurante Japonés', en: 'Japanese Restaurant', demoUrl: 'https://daniloliveira89.github.io/site---omakase-japan/' },
      { id: 'logo-02', name: 'OrtoLuxe', file: '02-ortoluxe.png', pt: 'Clínica Odontológica', es: 'Clínica Dental', en: 'Dental Clinic', demoUrl: 'https://daniloliveira89.github.io/site---odontologia-estetica/' },
      { id: 'logo-03', name: 'VitaMed', file: '03-vitamed.png', pt: 'Centro Médico & Hospital', es: 'Centro Médico', en: 'Medical Center', demoUrl: 'https://daniloliveira89.github.io/site---clinica-medica-especialidades/' },
      { id: 'logo-04', name: 'Vanguard Realty', file: '04-vanguard.png', pt: 'Imobiliária de Luxo', es: 'Inmobiliaria de Lujo', en: 'Luxury Real Estate', demoUrl: 'https://daniloliveira89.github.io/site---real-estate-investments/' },
      { id: 'logo-05', name: 'Lex Corporate', file: '05-lex-corporate.png', pt: 'Escritório de Advocacia', es: 'Bufete de Abogados', en: 'Law Firm', demoUrl: 'https://daniloliveira89.github.io/site---corporate-law-tax/' },
      { id: 'logo-06', name: 'Navalha Real', file: '06-navalha-real.png', pt: 'Barbearia & Visagismo', es: 'Barbería & Visagismo', en: 'Barbershop', demoUrl: 'https://daniloliveira89.github.io/site---barbearia-classic-cuts/' },
      { id: 'logo-07', name: 'Titan Force Gym', file: '07-titan-force.png', pt: 'Academia & Fitness', es: 'Gimnasio & Fitness', en: 'Gym & Fitness', demoUrl: 'https://daniloliveira89.github.io/site---academia-performance/' },
      { id: 'logo-08', name: 'Apex Motors', file: '08-apex-motors.png', pt: 'Concessionária & Blindados', es: 'Concesionaria & Blindados', en: 'Car Dealership', demoUrl: 'https://daniloliveira89.github.io/site---concessionaria-veiculos-premium/' },
      { id: 'logo-09', name: 'Dermacare Estética', file: '09-dermacare.png', pt: 'Clínica de Estética & Laser', es: 'Clínica de Estética & Láser', en: 'Aesthetic Clinic', demoUrl: 'https://daniloliveira89.github.io/site---clinica-estetica-dermatologia/' },
      { id: 'logo-10', name: 'Botanique Eco Resort', file: '10-botanique.png', pt: 'Hotel & Eco-Resort', es: 'Hotel & Eco-Resort', en: 'Hotel & Eco-Resort', demoUrl: 'https://daniloliveira89.github.io/site---hotel-resort-spa/' },
      { id: 'logo-11', name: 'Horizonte Viagens', file: '11-horizonte.png', pt: 'Agência de Turismo', es: 'Agencia de Viajes', en: 'Travel Agency', demoUrl: 'https://daniloliveira89.github.io/site---agencia-viagens-turismo/' },
      { id: 'logo-12', name: 'Atelier Arquitetura', file: '12-atelier.png', pt: 'Escritório de Arquitetura', es: 'Estudio de Arquitectura', en: 'Architecture Studio', demoUrl: 'https://daniloliveira89.github.io/site---arquitetura-urbanismo/' },
      { id: 'logo-13', name: 'Nexus Coworking', file: '13-nexus.png', pt: 'Coworking & Hub de Inovação', es: 'Coworking & Espacio Flexible', en: 'Coworking Hub', demoUrl: 'https://daniloliveira89.github.io/site---coworking-spaces/' },
      { id: 'logo-14', name: 'Pet Majesty', file: '14-pet-majesty.png', pt: 'Pet Shop & Spa Pet', es: 'Pet Shop & Spa Canino', en: 'Pet Shop & Spa', demoUrl: 'https://daniloliveira89.github.io/site---pet-boutique-spa/' },
      { id: 'logo-15', name: 'Vet Life 24h', file: '15-vet-life-24h.png', pt: 'Hospital Veterinário 24h', es: 'Hospital Veterinario 24h', en: 'Veterinary Hospital', demoUrl: 'https://daniloliveira89.github.io/site---uti-veterinaria-planos-pet/' },
      { id: 'logo-16', name: 'Valoris Law', file: '16-valoris.png', pt: 'Escritório de Advocacia', es: 'Bufete de Abogados', en: 'Law Firm', demoUrl: 'https://daniloliveira89.github.io/site---advocacia-corporate-law/' },
      { id: 'logo-17', name: 'ContaFlow', file: '17-contaflow.png', pt: 'Escritório de Contabilidade', es: 'Estudio Contable & BPO', en: 'Accounting Firm', demoUrl: 'https://daniloliveira89.github.io/site---contabilidade-consultiva-tributario/' },
      { id: 'logo-18', name: 'Apex Consulting', file: '18-apex.png', pt: 'Consultoria Empresarial', es: 'Consultoría Estratégica', en: 'Business Consulting', demoUrl: 'https://daniloliveira89.github.io/site---consultoria-gestao-ebitda/' },
      { id: 'logo-19', name: 'Pulse Pay', file: '19-pulse-pay.png', pt: 'Fintech & Câmbio Global', es: 'Fintech & Cambio Global', en: 'Fintech & Currency', demoUrl: 'https://daniloliveira89.github.io/site---fintech-liquid-wave/' },
      { id: 'logo-20', name: 'Prime Villas', file: '20-prime-villas.png', pt: 'Imobiliária de Luxo', es: 'Inmobiliaria de Lujo', en: 'Luxury Real Estate', demoUrl: 'https://daniloliveira89.github.io/site---luxury-real-estate/' },
      { id: 'logo-21', name: 'Origem Café', file: '21-origem-cafe.png', pt: 'Cafeteria & Grãos Especiais', es: 'Cafetería de Especialidad', en: 'Specialty Coffee', demoUrl: 'https://daniloliveira89.github.io/site---cafeteria-artesanal/' },
      { id: 'logo-22', name: 'Vértice Construtora', file: '22-vertice.png', pt: 'Construtora & Incorporadora', es: 'Constructora & Inmobiliaria', en: 'Construction Company', demoUrl: 'https://daniloliveira89.github.io/site---construtora-incorporacao/' },
      { id: 'logo-23', name: 'BIM Struct', file: '23-bim-struct.png', pt: 'Engenharia Estrutural BIM', es: 'Ingeniería Estructural BIM', en: 'Structural Engineering', demoUrl: 'https://daniloliveira89.github.io/site---projetos-estruturais-bim/' },
      { id: 'logo-24', name: 'Solaris Energia', file: '24-solaris.png', pt: 'Energia Solar & Fotovoltaica', es: 'Energía Solar Fotovoltaica', en: 'Solar Energy', demoUrl: 'https://daniloliveira89.github.io/site---engenharia-fotovoltaica-usinas/' },
      { id: 'logo-25', name: 'Smash & Beer', file: '25-smash-beer.png', pt: 'Hamburgueria Artesanal', es: 'Hamburguesería Artesanal', en: 'Artisan Burger Bar', demoUrl: 'https://daniloliveira89.github.io/site---hamburgueria-artesanal-delivery/' },
      { id: 'logo-26', name: 'Don Forno Pizza', file: '26-don-forno.png', pt: 'Pizzaria Napolitana', es: 'Pizzería Napolitana', en: 'Neapolitan Pizzeria', demoUrl: 'https://daniloliveira89.github.io/site---pizzaria-forno-lenha/' },
      { id: 'logo-27', name: 'Dolce Arte', file: '27-dolce-arte.png', pt: 'Confeitaria & Chocolateria', es: 'Pastelería & Chocolatería', en: 'Artisan Bakery', demoUrl: 'https://daniloliveira89.github.io/site---confeitaria-doceria-fina/' },
      { id: 'logo-28', name: 'Velocita Express', file: '28-velocita.png', pt: 'Transportadora & Logística', es: 'Operador Logístico', en: 'Logistics & Freight', demoUrl: 'https://daniloliveira89.github.io/site---logistica-cargas-expressas/' },
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

// Replace PROJECTS declaration with Web Design filtered projects (39 Layouts & Sites)
const oldProjectsRegex = /const PROJECTS = \[[\s\S]*?const state = \{[\s\S]*?\};/;
const newProjectsCode = `${siteTypeDictCode}

    const DEFAULT_PROJECTS = [
      { id: 'layout-ecommerce', title: 'Techwear Luxury Store', badge: 'Loja Virtual & E-commerce', cat: 'Layouts & Sites', desc: 'Loja virtual minimalista de alta conversão.', tags: ['E-commerce', 'Tailwind CSS'] },
      { id: 'layout-omakase', title: 'Aurum Omakase', badge: 'Restaurante Japonês', cat: 'Layouts & Sites', desc: 'Restaurante contemporâneo com menu degustação.', tags: ['Gastronomia', 'UI/UX'] },
      { id: 'layout-hotel-resort', title: 'Botanique Eco Resort', badge: 'Hotel & Eco-Resort', cat: 'Layouts & Sites', desc: 'Hotel boutique e spa nas montanhas.', tags: ['Hotelaria', 'Next.js'] },
      { id: 'layout-odontologia', title: 'OrtoLuxe Odontologia', badge: 'Clínica Odontológica', cat: 'Layouts & Sites', desc: 'Clínica estética de alta tecnologia.', tags: ['Saúde', 'Tailwind CSS'] }
    ];

    // Filter ONLY webdesign layout sites (39 total commercial sites)
    const PROJECTS = (typeof PROJECTS_DATA !== 'undefined' && Array.isArray(PROJECTS_DATA))
      ? PROJECTS_DATA
          .filter(p => p.category === 'layouts')
          .map(p => {
            return {
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
            };
          })
      : DEFAULT_PROJECTS;

    const state = {
      theme: 'dark',
      lang: 'pt',
      skillCat: 'Todas',
      projectCat: 'Layouts & Sites',
      techFilter: null,
      expandedService: null,
      selectedScopes: new Set(),
      fxEnabled: true
    };`;
html = html.replace(oldProjectsRegex, newProjectsCode);

// 4. Redesign renderProjects with ONLY "Layouts & Sites (39)" and "Logos (48)"
const oldRenderRegex = /function renderProjects\(\) \{[\s\S]*?\}\s*function openProjectDemo\(projId\) \{[\s\S]*?\}\s*\/\/ =========================================================================\s*\/\/ 6\. COMMAND PALETTE/;

const newRenderCode = `function renderProjects() {
      // Clean 2-tab system focused exclusively on Web Design deliverables
      const cats = [
        { label: 'Layouts & Sites', key: 'Layouts & Sites', count: PROJECTS.length },
        { label: 'Logos', key: 'Logos', count: LOGOS_DATA.length }
      ];

      // Normalize active tab
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
          const openUrl = l.demoUrl || ('/assets/images/logos-ia/' + l.file);
          return \`
          <a href="\${openUrl}" target="_blank" rel="noopener noreferrer" class="clean-proj-card spotlight-card rounded-2xl overflow-hidden block relative aspect-[16/10] bg-slate-950 border b-subtle group cursor-pointer shadow-md">
            <!-- Imagem de Alta Resolução da Logo -->
            <img src="/assets/images/logos-ia/\${l.file}" alt="\${l.name}" class="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105" loading="lazy" />
            
            <!-- Overlay Suave com Gradiente -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300"></div>

            <!-- Nome da Marca e Nicho por Cima da Imagem em Dourado -->
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

      // 2. RENDER WEBSITES / LAYOUTS (39 Commercial Sites)
      let list = PROJECTS;

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
          <!-- Miniatura em Tela Cheia do Card -->
          <img src="\${p.image}" alt="\${siteType}" class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" onerror="this.onerror=null; this.src='/assets/images/radar-ia-real.png';" />
          
          <!-- Overlay Suave com Gradiente -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300"></div>

          <!-- Estilo do Site por Cima da Miniatura em Dourado -->
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

if (oldRenderRegex.test(html)) {
  html = html.replace(oldRenderRegex, newRenderCode);
} else {
  console.log('WARNING: oldRenderRegex did not match!');
}

// 5. Update applyTranslations to cleanly toggle .active without overwriting SVG flags
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

// 6. Custom Cursor (Trailing Ring com lerp via requestAnimationFrame)
const cursorElementsHtml = `
  <!-- Custom Cursor (Trailing Ring) -->
  <div id="cursor-dot" class="custom-cursor-dot custom-cursor-hidden" aria-hidden="true"></div>
  <div id="cursor-ring" class="custom-cursor-ring custom-cursor-hidden" aria-hidden="true"></div>
`;
html = html.replace('</body>', `${cursorElementsHtml}\n</body>`);

const cursorScript = `
    // =========================================================================
    // CUSTOM CURSOR COM TRAILING RING (LERP VIA RAF)
    // =========================================================================
    (() => {
      // 5. Mobile check: activate only on devices with fine pointer and hover
      if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

      const dot = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');
      if (!dot || !ring) return;

      let mouseX = -100;
      let mouseY = -100;
      let ringX = -100;
      let ringY = -100;
      let targetScale = 1;
      let currentScale = 1;
      let isVisible = false;
      let isHovered = false;

      // Linear interpolation helper
      const lerp = (a, b, n) => (1 - n) * a + n * b;

      // Real-time mouse position tracking for central dot (6px)
      window.addEventListener('mousemove', (e) => {
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

      // Smooth trailing ring via linear interpolation (lerp) inside RAF
      function renderCursor() {
        if (isVisible) {
          ringX = lerp(ringX, mouseX, 0.16);
          ringY = lerp(ringY, mouseY, 0.16);
          currentScale = lerp(currentScale, targetScale, 0.2);
          ring.style.transform = \`translate3d(\${ringX}px, \${ringY}px, 0) translate(-50%, -50%) scale(\${currentScale})\`;
        }
        requestAnimationFrame(renderCursor);
      }
      requestAnimationFrame(renderCursor);

      // Interactive hover states on clickable elements
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

      // Click states (mousedown contracts to 0.85, mouseup restores)
      window.addEventListener('mousedown', () => {
        targetScale = 0.85;
        ring.classList.add('cursor-active');
      });

      window.addEventListener('mouseup', () => {
        ring.classList.remove('cursor-active');
        targetScale = isHovered ? 1.6 : 1;
      });

      // Hide cursor smoothly on mouseleave window
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

html = html.replace('</script>\n</body>', `${cursorScript}\n  </script>\n</body>`);

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
