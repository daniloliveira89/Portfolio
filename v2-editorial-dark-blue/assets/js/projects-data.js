const PROJECTS_DATA = [
  // ==========================================
  // 1. WEB APPS & INTELIGÊNCIA ARTIFICIAL
  // ==========================================
  {
    id: "radar-ia",
    title: "Radar IA — Observatório Global de Modelos",
    category: "web-ai",
    categoryLabel: "Web Apps & I.A.",
    badge: "Destaque • Live",
    shortDescription: "Observatório em tempo real de lançamentos, benchmarks, preços de tokens e ecossistemas das principais empresas de I.A. (OpenAI, Google, Anthropic, DeepSeek).",
    fullDescription: "Plataforma analítica completa para acompanhamento diário da evolução de modelos de Inteligência Artificial. Conta com feed automatizado de anúncios oficiais, comparador técnico lado a lado, calculadora de custos de APIs e ranking personalizado.",
    image: "assets/images/radar-ia-real.png",
    gallery: [
      "assets/images/radar-ia-real.png",
      "assets/images/radar-ia.jpg"
    ],
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "GitHub Actions", "LLMs"],
    links: {
      github: "https://github.com/daniloliveira89/site---Radar-IA",
      demo: "https://daniloliveira89.github.io/site---Radar-IA/"
    },
    features: [
      "Monitoramento automatizado de lançamentos (Modelos, Imagem, Vídeo, Áudio e Agentes)",
      "Comparativo de preços por milhão de tokens e janela de contexto",
      "Suporte bilíngue (PT/EN) e persistência de artigos salvos e lidos"
    ]
  },
  {
    id: "prompt-studio-ai",
    title: "Prompt Studio AI — Engenharia Visual de Prompts",
    category: "web-ai",
    categoryLabel: "Web Apps & I.A.",
    badge: "Bilíngue • Live",
    shortDescription: "Estúdio interativo para construção de comandos otimizados para geradores modernos de imagem (Flux, SDXL, Midjourney v6 e ChatGPT).",
    fullDescription: "Ferramenta projetada para artistas digitais e engenheiros de prompt. Permite combinar estilos fotográficos, iluminação cinematográfica, lentes, figurinos (Techwear/Cyberpunk) e filtros negativos automáticos com sorteio inteligente (Randomize).",
    image: "assets/images/prompt-studio-real.png",
    gallery: [
      "assets/images/prompt-studio-real.png",
      "assets/images/prompt-studio-pt.png",
      "assets/images/prompt-studio-sample-1.jpg",
      "assets/images/prompt-studio-sample-2.jpg"
    ],
    tags: ["JavaScript", "GenAI", "Flux / Midjourney", "UI/UX", "i18n"],
    links: {
      github: "https://github.com/daniloliveira89/app-StudioAI",
      demo: "https://app-studio-ai.vercel.app"
    },
    features: [
      "Catálogo modular de estilos (Fotografia, Pintura, 3D, Anime e Ilustração)",
      "Gerador aleatório de figurinos, paletas de cores e iluminação de estúdio",
      "Injeção automática de parâmetros de qualidade e negative prompts"
    ]
  },
  {
    id: "ivfr-economia",
    title: "IVFR — Índice de Viabilidade Econômica Global",
    category: "web-ai",
    categoryLabel: "Web Apps & I.A.",
    badge: "103 Cidades • Analytics",
    shortDescription: "Comparador global de poder de compra real, margem líquida mensal e tempo necessário para aquisição de bens (iPhone, automóvel e imóvel) em 103 cidades.",
    fullDescription: "Aplicação analítica financeira que cruza salários líquidos médios e custo de vida fixo em mais de 100 cidades do mundo para calcular o Fator IVFR — revelando onde o trabalho gera maior acumulação real de patrimônio.",
    image: "assets/images/ivfr-real.png",
    gallery: [
      "assets/images/ivfr-real.png"
    ],
    tags: ["React", "TypeScript", "Data Visualization", "Economia", "Multi-Moeda"],
    links: {
      github: "https://github.com/daniloliveira89/indice-custo-vida",
      demo: null
    },
    features: [
      "Base com 103 cidades globais (EUA, Suíça, Luxemburgo, Brasil e mais)",
      "Cálculo automático de meses de sobra líquida para compra de carro e entrada de imóvel",
      "Adição e edição customizada de cidades com conversão cambial dinâmica"
    ]
  },
  {
    id: "calculadora-juros-compostos",
    title: "Simulador Patrimonial & Juros Compostos",
    category: "web-ai",
    categoryLabel: "Web Apps & I.A.",
    badge: "Finanças • Plotly.js",
    shortDescription: "Simulador financeiro multi-moeda (BRL, USD, EUR) com dedução de IR, inflação real e comparativo de curvas patrimoniais (Tesouro, CDI e Bitcoin).",
    fullDescription: "Calculadora financeira avançada que demonstra passo a passo a fórmula matemática de capitalização mensal com aportes (PMT), descontando alíquotas de Imposto de Renda e projetando o poder de compra real ajustado pela inflação.",
    image: "assets/images/juros-compostos-real.png",
    gallery: [
      "assets/images/juros-compostos-real.png",
      "assets/images/juros-compostos.jpg"
    ],
    tags: ["JavaScript", "Plotly.js", "Matemática Financeira", "Tailwind CSS"],
    links: {
      github: "https://github.com/daniloliveira89/Juros-Compostos",
      demo: null
    },
    features: [
      "Exibição transparente da equação de Valor Futuro (FV) em tempo real",
      "Gráficos interativos comparando Renda Fixa vs. Ativos de Risco",
      "Cálculo automático de Imposto de Renda retido e patrimônio líquido"
    ]
  },

  // ==========================================
  // 2. JOGOS & INTERATIVIDADE (WEBGL / CANVAS)
  // ==========================================
  {
    id: "neon-synapse",
    title: "Neon Synapse (Chrome & Neon) — Card Game",
    category: "games",
    categoryLabel: "Jogos & WebGL",
    badge: "WebGL • PixiJS",
    shortDescription: "Card game tático cyberpunk com campo de batalha em 3 fileiras, protocolo Overclock (risco vs. energia) e IA corporativa local.",
    fullDescription: "Jogo de cartas colecionáveis e estratégia tática ambientado no Distrito 07. O jogador enfrenta a IA Corporativa (Nexus-07) gerenciando energia neural, posicionamento em 3 setores e o nível de sobrecarga cibernética (Overclock) para não sofrer dano de integridade.",
    image: "assets/images/neon-synapse-real-2.png",
    gallery: [
      "assets/images/neon-synapse-real-2.png",
      "assets/images/chrome-and-neon-board.png",
      "assets/images/neon-synapse-hero.jpg",
      "assets/images/neon-synapse-card.png",
      "assets/images/neon-synapse-bg.png"
    ],
    tags: ["TypeScript", "PixiJS", "WebGL", "Game AI", "Cyberpunk UI"],
    links: {
      github: "https://github.com/daniloliveira89/GAME---Gwent-Cyberpunk",
      demo: null
    },
    features: [
      "Duas interfaces táticas: Modo Tabuleiro Clássico (Chrome & Neon) e Terminal Neural v0.3 HD",
      "Mecânica exclusiva de Overclock (+1 Energia em troca de +2 Sobrecarga Neural)",
      "Artes autorais em Pixel Art Cyberpunk de alta definição e log de combate detalhado"
    ]
  },
  {
    id: "prancheta-tatica",
    title: "Prancheta Tática — Simulador de Futebol",
    category: "games",
    categoryLabel: "Jogos & WebGL",
    badge: "Esportes • Canvas Interativo",
    shortDescription: "Quadro tático interativo para análise de futebol com transições entre fases do jogo (Defesa, Neutra e Ataque) e gravação de jogadas.",
    fullDescription: "Aplicação web interativa para treinadores, analistas de desempenho e entusiastas de tática esportiva. Permite configurar esquemas táticos (4-4-2, 4-3-3, 3-5-2) para dois times simultaneamente e gravar a movimentação de cada fase da partida.",
    image: "assets/images/prancheta-tatica-real.png",
    gallery: [
      "assets/images/prancheta-tatica-real.png"
    ],
    tags: ["JavaScript", "HTML5 Drag & Drop", "Análise Tática", "UI Responsiva"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: null
    },
    features: [
      "Alternância rápida de posicionamento entre Fase Defensiva, Neutra e Ofensiva",
      "Seletor dinâmico de formações para Time A e Time B",
      "Gravação de fases para reprodução de movimentações ensaiadas"
    ]
  },

  // ==========================================
  // 3. ATLAS SUITE (MÍDIA, NOTION & PWA)
  // ==========================================
  {
    id: "music-atlas",
    title: "Music Atlas — Streaming PWA & Listening Room",
    category: "atlas",
    categoryLabel: "Atlas Suite (PWA)",
    badge: "PWA • iOS Background Audio",
    shortDescription: "Plataforma pessoal de streaming musical integrada ao Google Drive e Notion, com reprodução contínua em tela bloqueada no iPhone.",
    fullDescription: "Parte central da suíte Atlas. Conecta sua biblioteca de áudio no Google Drive a um diário de audição sincronizado com o Notion (mais de 2.170 álbuns catalogados), oferecendo experiência de aplicativo nativo no celular e desktop.",
    image: "assets/images/music-atlas-real.png",
    gallery: [
      "assets/images/music-atlas-real.png",
      "assets/images/music-atlas-mobile-1.jpg",
      "assets/images/music-atlas-mobile-2.jpg"
    ],
    tags: ["PWA", "Cloudflare Workers", "Web Audio API", "Notion API", "Google Drive"],
    links: {
      github: "https://github.com/daniloliveira89/Music-Atlas",
      demo: null
    },
    features: [
      "Streaming direto da nuvem pessoal com suporte a MediaSession API no iOS/Android",
      "Visualização mobile dedicada por Artistas, Discografias e Favoritos",
      "Sincronização automática de status (Ouvido / Para Ouvir) com o Notion"
    ]
  },
  {
    id: "bookshelf-atlas",
    title: "Bookshelf Atlas — Diário Literário & Biblioteca",
    category: "atlas",
    categoryLabel: "Atlas Suite (PWA)",
    badge: "768 Obras • Notion Sync",
    shortDescription: "Painel editorial para gestão de biblioteca pessoal, metas anuais de leitura, contagem de páginas lidas e comparativo com o Goodreads.",
    fullDescription: "Interface refinada em tons sépia/dark para leitores ávidos. Consolida livros, contos, HQs/Mangás e poesia em estatísticas visuais de progresso ('Onde você está na leitura') e sorteador inteligente da próxima leitura ('Pick a Book').",
    image: "assets/images/bookshelf-atlas-real.png",
    gallery: [
      "assets/images/bookshelf-atlas-real.png",
      "assets/images/bookshelf-atlas.jpg"
    ],
    tags: ["JavaScript", "Notion API", "Google Sheets", "Editorial UI"],
    links: {
      github: "https://github.com/daniloliveira89/bookshelf-atlas",
      demo: null
    },
    features: [
      "Métricas em tempo real: 768 obras no acervo, 220 concluídas e 55.900 páginas lidas",
      "Barra de distribuição visual (Para ler, Próximos, Lendo, Lidos e Abandonados)",
      "Módulo comparativo de notas pessoais vs. média da comunidade Goodreads"
    ]
  },
  {
    id: "cinematheque-atlas",
    title: "Cinematheque Atlas — Acervo & Diário de Cinema",
    category: "atlas",
    categoryLabel: "Atlas Suite (PWA)",
    badge: "1.894 Filmes • IMDb Top 250",
    shortDescription: "Catálogo cinematográfico pessoal com estatísticas por país de origem, diretores favoritos, gêneros e progresso no IMDb Top 250.",
    fullDescription: "Transforma sua base de filmes assistidos em uma cinemateca interativa. Analisa quase 1.900 filmes avaliados por nacionalidade (48 países catalogados), diretores mais assistidos e cumprimento da meta anual de cinema.",
    image: "assets/images/cinematheque-real-2.png",
    gallery: [
      "assets/images/cinematheque-real-2.png",
      "assets/images/cinematheque-atlas.jpg"
    ],
    tags: ["TypeScript", "Notion Sync", "Data Analytics", "Cinema UI"],
    links: {
      github: "https://github.com/daniloliveira89/Cinematheque-Atlas",
      demo: null
    },
    features: [
      "Painel de métricas: 1.894 filmes assistidos em 48 cinematografias mundiais",
      "Abas dedicadas para Panorama, Gêneros & Gosto, Diretores e checklist IMDb Top 250",
      "Pipeline de sincronização rápida com planilhas e Notion"
    ]
  },
  {
    id: "game-atlas",
    title: "Game Atlas — Player Journal & Backlog",
    category: "atlas",
    categoryLabel: "Atlas Suite (PWA)",
    badge: "511 Jogos • You × IGN",
    shortDescription: "Hub central de jornada gamer: controle de backlog, jogos zerados, linha do tempo anual e comparativo de notas com a IGN.",
    fullDescription: "Diário definitivo do jogador integrado ao Notion e Google Sheets. Organiza mais de 500 jogos entre Jogados, Jogando, Watchlist e Abandonados, com gráficos de distribuição por ano de lançamento e sorteador de backlog.",
    image: "assets/images/game-atlas-real.png",
    gallery: [
      "assets/images/game-atlas-real.png",
      "assets/images/game-atlas.jpg"
    ],
    tags: ["JavaScript", "Notion API", "Gaming UI", "Dashboard"],
    links: {
      github: "https://github.com/daniloliveira89/Game-Atlas",
      demo: null
    },
    features: [
      "Acompanhamento de metas mensais e anuais de jogos finalizados",
      "Aba exclusiva 'You × IGN' comparando suas avaliações com a crítica especializada",
      "Filtros avançados por plataforma, gênero e status na coleção"
    ]
  },  // ==========================================
  // 4. LAYOUTS & SITES COMERCIAIS (UI/UX LAB)
  // ==========================================
  {
    id: "layout-ecommerce",
    title: "Luxury Techwear & Audio Store",
    category: "layouts",
    categoryLabel: "Loja Virtual (E-commerce)",
    badge: "Carrinho Real • Store",
    shortDescription: "Loja virtual minimalista inspirada em SSENSE e Rimowa, com filtro instantâneo por categoria e sacola de compras lateral (slide-over) funcional.",
    fullDescription: "Experiência completa de e-commerce front-end. Permite filtrar produtos entre Áudio, Techwear e Hardware, adicionar itens à sacola, remover produtos e calcular automaticamente o subtotal do pedido.",
    image: "assets/images/layout-ecommerce.png",
    gallery: [
      "assets/images/layout-ecommerce.png"
    ],
    tags: ["E-commerce", "Shopping Cart JS", "Minimalist UI", "Tailwind CSS"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-ecommerce/index.html"
    },
    features: [
      "Drawer lateral de sacola de compras com cálculo de quantidade e valor total",
      "Filtro instantâneo de catálogo sem recarregar a página",
      "Cards de produto com zoom suave e badges de série limitada"
    ]
  },
  {
    id: "layout-omakase",
    title: "Omakase & Alta Gastronomia",
    category: "layouts",
    categoryLabel: "Restaurante",
    badge: "Gastronomia • Drawer Interativo",
    shortDescription: "Site de alta gastronomia japonesa com menu degustação em 16 tempos, estética minimalista escura e drawer lateral de reservas.",
    fullDescription: "Experiência digital premium para restaurantes conceituais e hospitalidade. Apresenta tipografia Cinzel e Noto Serif JP, detalhamento poético dos pratos sazonais e sistema interativo de reserva com seleção de turnos.",
    image: "assets/images/layout-omakase.png",
    gallery: [
      "assets/images/layout-omakase.png"
    ],
    tags: ["Luxury Hospitality", "Interactive Drawer", "Minimalism", "Tailwind CSS"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-gastronomia-reserva/index.html"
    },
    features: [
      "Menu degustação dividido por tempos culinários tradicionais (Sakizuke a Mizumono)",
      "Drawer lateral de agendamento com validação instantânea",
      "Direção de arte contemplativa com paleta preta, carvão e dourado imperial"
    ]
  },
  {
    id: "layout-odontologia",
    title: "Odontologia Digital & Facetas",
    category: "layouts",
    categoryLabel: "Clínica Odontológica",
    badge: "Slider Antes / Depois",
    shortDescription: "Clínica odontológica de alta tecnologia com simulador visual interativo de Antes e Depois (slider split-screen) e avaliação 3D.",
    fullDescription: "Plataforma digital para clínicas de odontologia estética e reabilitação oral. Destaque para o componente interativo de arrasto (Before/After) que demonstra a transformação de sorriso com facetas cerâmicas e lentes de contato.",
    image: "assets/images/layout-odontologia.png",
    gallery: [
      "assets/images/layout-odontologia.png"
    ],
    tags: ["Dental UI", "Before-After Slider", "Split-Screen", "Interactive Healthcare"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-odontologia/index.html"
    },
    features: [
      "Simulador interativo Antes/Depois com puxador de arrasto responsivo",
      "Detalhamento de tecnologias de ponta (Scanner Intraoral iTero® 5D e Implantes Suíços)",
      "Agendamento direto para avaliação digital e escaneamento 3D"
    ]
  },
  {
    id: "layout-clinica-medica",
    title: "Centro Médico & Check-up Executivo",
    category: "layouts",
    categoryLabel: "Clínica Médica",
    badge: "Filtro Especialidades",
    shortDescription: "Portal para centros médicos, hospital-dia e clínicas com filtro por especialidades clínicas e agendamento de consultas.",
    fullDescription: "Interface limpa e confiável em tons verde-petróleo e branco hospitalar. Possui catálogo de especialistas médicos (Cardiologia, Neurologia, Ortopedia) e agendamento instantâneo com canais de pronto atendimento.",
    image: "assets/images/layout-clinica-medica.png",
    gallery: [
      "assets/images/layout-clinica-medica.png"
    ],
    tags: ["Healthcare UI", "Medical Portal", "Doctor Filter", "Clean Design"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-clinica-medica/index.html"
    },
    features: [
      "Filtro instantâneo por especialidades médicas sem recarregamento",
      "Cards de profissionais com titulações e CRM auditado",
      "Acesso direto para telemedicina 24h e check-up executivo"
    ]
  },
  {
    id: "layout-real-estate",
    title: "Luxury Real Estate & Villas",
    category: "layouts",
    categoryLabel: "Imobiliária",
    badge: "Multi-Moeda • Imobiliária",
    shortDescription: "Portal de imóveis de altíssimo padrão (Coberturas e Villas) com conversão instantânea de preços entre R$ BRL e US$ USD e filtro por tipologia.",
    fullDescription: "Plataforma elegante para imobiliárias boutique e private brokers. Exibe metragem, suítes, heliponto/vagas e permite ao comprador internacional alternar todos os valores para dólar americano com 1 clique.",
    image: "assets/images/layout-real-estate.png",
    gallery: [
      "assets/images/layout-real-estate.png"
    ],
    tags: ["Real Estate UI", "Multi-Currency JS", "Property Filter", "Luxury Portal"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-real-estate/index.html"
    },
    features: [
      "Conversor cambial global (BRL ⇄ USD) atualizando todo o catálogo em tempo real",
      "Filtro instantâneo entre Coberturas Triplex e Villas de Litoral/Campo",
      "Agendamento direto de visita privada com Private Broker"
    ]
  },
  {
    id: "layout-corporate",
    title: "Escritório de Advocacia & Corporate Law",
    category: "layouts",
    categoryLabel: "Escritório de Advocacia",
    badge: "Direito Societário • M&A",
    shortDescription: "Website institucional para escritórios de advocacia societária, Private Equity e consultoria executiva com abas de prática e agendamento sob NDA.",
    fullDescription: "Layout corporativo de alto padrão com estética suíça/editorial em tons marinho profundo e ouro fosco. Inclui painel de indicadores auditados, alternador interativo de áreas de atuação e modal de reunião confidencial.",
    image: "assets/images/layout-corporate.png",
    gallery: [
      "assets/images/layout-corporate.png"
    ],
    tags: ["Corporate UI", "Tailwind CSS", "Executive Design", "Interactive Tabs"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-corporate/index.html"
    },
    features: [
      "Abas dinâmicas para Fusões & Aquisições, Blindagem Patrimonial e Arbitragem",
      "Seção de indicadores institucionais (US$ 18.4 Bi transacionados)",
      "Modal de solicitação de reunião executiva sob protocolo de sigilo"
    ]
  },
  {
    id: "layout-barbearia",
    title: "Barbearia & Visagismo",
    category: "layouts",
    categoryLabel: "Salão de Beleza / Barbearia",
    badge: "Ritual & Agendamento",
    shortDescription: "Experiência digital premium para barbearias tradicionais e visagismo masculino com seletor de serviços e cálculo dinâmico de tempo e valor.",
    fullDescription: "Layout vintage e sofisticado com tipografia Cinzel e paleta âmbar/whisky. Permite ao cliente montar seu ritual de atendimento escolhendo corte, barba e visagismo, calculando o tempo de cadeira e gerando agendamento direto.",
    image: "assets/images/layout-barbearia.png",
    gallery: [
      "assets/images/layout-barbearia.png"
    ],
    tags: ["Barbershop UI", "Interactive Booking", "Price Calculator", "Luxury Design"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-barbearia/index.html"
    },
    features: [
      "Seletor interativo de serviços combinados (Corte, Barba na Toalha Quente, Visagismo)",
      "Cálculo instantâneo de duração e valor total da sessão",
      "Integração de agendamento rápido via WhatsApp com resumo pré-formatado"
    ]
  },
  {
    id: "layout-academia",
    title: "High-Performance Gym & Studio",
    category: "layouts",
    categoryLabel: "Academia",
    badge: "Calculadora IMC • Studio",
    shortDescription: "Plataforma de alta performance para academias e centros de treinamento funcional com diagnóstico físico e calculadora de IMC integrada.",
    fullDescription: "Website dinâmico em estética dark/neon lime voltado para academias e estúdios de Crossfit/HIIT. Inclui calculadora interativa de índice de massa corporal (IMC) com diagnóstico em tempo real e formulário de passe livre.",
    image: "assets/images/layout-academia.png",
    gallery: [
      "assets/images/layout-academia.png"
    ],
    tags: ["Fitness UI", "IMC Calculator", "Tailwind CSS", "High Performance"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-academia/index.html"
    },
    features: [
      "Calculadora de IMC e diagnóstico físico instantâneo",
      "Design de alto impacto com tipografia Anton e paleta neon lime",
      "Seção de modalidades integradas: Hyrox, HIIT, Boxe e Criogenia"
    ]
  },
  {
    id: "layout-concessionaria",
    title: "Superesportivos & Blindados",
    category: "layouts",
    categoryLabel: "Concessionária / Carros",
    badge: "Simulador Financiamento",
    shortDescription: "Showroom automotivo para superesportivos e blindados com catálogo de pronta-entrega e simulador financeiro de parcelas com slider.",
    fullDescription: "Conceito de alta voltagem para lojas de veículos premium. Inclui acervo com ficha técnica de 0-100 km/h e potência, além de um simulador de financiamento interativo com ajuste de percentual de entrada e prazos.",
    image: "assets/images/layout-concessionaria.png",
    gallery: [
      "assets/images/layout-concessionaria.png"
    ],
    tags: ["Automotive UI", "Loan Calculator", "Luxury Showroom", "Supercars"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-concessionaria/index.html"
    },
    features: [
      "Simulador financeiro em tempo real com slider de entrada (20% a 80%)",
      "Cálculo de parcelas mensais e valor financiado instantâneo",
      "Cards com especificações técnicas (0-100 km/h, Potência e Blindagem Nível III-A)"
    ]
  },
  {
    id: "layout-estetica",
    title: "Estética Avançada & Laser",
    category: "layouts",
    categoryLabel: "Clínica de Estética",
    badge: "Protocolos Clínicos",
    shortDescription: "Website sofisticado em estética 'Quiet Beauty' com alternador interativo de protocolos a laser, indicação clínica e durabilidade.",
    fullDescription: "Projetado para clínicas de dermatologia e estética regenerativa. Permite ao paciente explorar protocolos avançados (Ultraformer MPT, Laser Lavieen, Sculptra) conhecendo o tempo de recuperação (downtime), duração e investimento.",
    image: "assets/images/layout-estetica.png",
    gallery: [
      "assets/images/layout-estetica.png"
    ],
    tags: ["Aesthetics UI", "Quiet Beauty", "Laser Protocols", "Interactive Treatments"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-estetica/index.html"
    },
    features: [
      "Seletor dinâmico de tecnologias estéticas (Ultraformer MPT®, Lavieen® e Sculptra®)",
      "Quadro explicativo com tempo de recuperação (*downtime*) e durabilidade média",
      "Tipografia editorial elegante Cormorant Garamond em paleta nude/rosewood"
    ]
  },
  {
    id: "layout-hotel-resort",
    title: "Luxury Eco-Resort & Villas",
    category: "layouts",
    categoryLabel: "Hotel / Resort",
    badge: "Reserva de Suítes • Eco",
    shortDescription: "Eco-resort de luxo integrado à natureza com motor de reservas de chalés, passeios ecológicos e gastronomia farm-to-table.",
    fullDescription: "Site institucional de hotelaria de alto luxo. Permite selecionar datas, escolher categorias de bangalôs privativos com piscina infinita e reservar experiências exclusivas.",
    image: "assets/images/layout-hotel-resort.png",
    gallery: [
      "assets/images/layout-hotel-resort.png"
    ],
    tags: ["Hospitality UI", "Eco Resort", "Suite Booking", "Luxury Experience"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-hotel-resort/index.html"
    },
    features: [
      "Motor visual de seleção de acomodações com fotos panorâmicas",
      "Detalhamento de experiências: Spa natural, trilhas e mergulho",
      "Reserva direta com confirmação imediata e serviços de transfer"
    ]
  },
  {
    id: "layout-agencia-viagens",
    title: "Expedições & Roteiros Sob Medida",
    category: "layouts",
    categoryLabel: "Agência de Viagens",
    badge: "Roteiros VIP • Luxury",
    shortDescription: "Agência de turismo boutique especializada em viagens de luxo e expedições remotas com construtor interativo de itinerários.",
    fullDescription: "Plataforma imersiva para viajantes exigentes. Conta com galeria de destinos exóticos (Islândia, Patagônia, Safari Serengeti) e planejador de roteiros personalizados com concierge privativo.",
    image: "assets/images/layout-agencia-viagens.png",
    gallery: [
      "assets/images/layout-agencia-viagens.png"
    ],
    tags: ["Luxury Travel", "Tour Planner", "Editorial Destinations", "Concierge"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-agencia-viagens/index.html"
    },
    features: [
      "Construtor de expedições sob medida com cálculo estimado de dias",
      "Galeria imersiva com mapas interativos e guias de temporadas",
      "Botão de solicitação de consultor privativo 24h"
    ]
  },
  {
    id: "layout-arquitetura",
    title: "Arquitetura & Design Editorial",
    category: "layouts",
    categoryLabel: "Escritório de Arquitetura",
    badge: "Minimalista • Luxury UI",
    shortDescription: "Layout editorial em tons de pedra e tipografia serifada Cormorant Garamond, com galeria em acordeão horizontal expansível.",
    fullDescription: "Template voltado para escritórios de arquitetura, design de interiores e marcas de luxo. Substitui carrosséis tradicionais por um acordeão fluido em CSS cubic-bezier que expande as obras arquitetônicas ao toque do cursor.",
    image: "assets/images/layout-arquitetura.png",
    gallery: [
      "assets/images/layout-arquitetura.png"
    ],
    tags: ["Editorial Design", "Cormorant Garamond", "CSS Flex Accordion", "Luxury"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-arquitetura-editorial/index.html"
    },
    features: [
      "Galeria de 4 painéis com expansão suave e transição de filtro P&B para colorido",
      "Grid tipográfico inspirado em monografias impressas de arquitetura",
      "100% responsivo para telas ultrawide e smartphones"
    ]
  },
  {
    id: "layout-construtora",
    title: "Construtora & Incorporação Imobiliária",
    category: "layouts",
    categoryLabel: "Construtora",
    badge: "Incorporação • Obras",
    shortDescription: "Construtora e incorporadora de empreendimentos verticais de alto padrão com acompanhamento de obras e tour virtual.",
    fullDescription: "Portal institucional para grandes incorporadoras. Apresenta estágio percentual de obras em tempo real, memorial descritivo dos edifícios e plantas baixas interativas.",
    image: "assets/images/layout-construtora.png",
    gallery: [
      "assets/images/layout-construtora.png"
    ],
    tags: ["Construction UI", "Real Estate Dev", "Project Status", "Architecture"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-construtora/index.html"
    },
    features: [
      "Status dinâmico do avanço físico das obras (Fundação a Acabamento)",
      "Galeria de plantas inteligentes e perspectivas 3D",
      "Agendamento de visita ao decorado com corretor credenciado"
    ]
  },
  {
    id: "layout-petshop",
    title: "Pet Boutique, Spa & Banho e Tosa",
    category: "layouts",
    categoryLabel: "Pet Shop",
    badge: "Agendamento Pet • Spa",
    shortDescription: "Centro de estética pet e boutique de rações super premium com agendamento online de banho, tosa na tesoura e táxi dog.",
    fullDescription: "Ambiente acolhedor e dinâmico para pet shops modernos. Permite ao tutor escolher o porte do pet, selecionar tratamentos de hidratação e agendar data e horário.",
    image: "assets/images/layout-petshop.png",
    gallery: [
      "assets/images/layout-petshop.png"
    ],
    tags: ["Pet Shop UI", "Grooming Booking", "Pet Care", "Friendly Design"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-petshop/index.html"
    },
    features: [
      "Seletor de porte do pet (Pequeno, Médio, Grande) para cálculo de serviços",
      "Agendamento de tosa higiênica, hidratação de ozônio e banho relaxante",
      "Opção de Táxi Dog com busca e entrega domiciliar"
    ]
  },
  {
    id: "layout-cafeteria",
    title: "Microtorrefação & Cafés Especiais",
    category: "layouts",
    categoryLabel: "Cafeteria",
    badge: "Specialty Coffee • Torra",
    shortDescription: "Cafeteria e torrefação artesanal com perfil sensorial de grãos especiais (85+ pontos SCA) e guia de métodos de extração.",
    fullDescription: "Experiência sensorial completa para apreciadores de café. Detalha notas sensoriais, altitude e origem dos microlotes da Serra da Mantiqueira, além de clube de assinatura mensal de grãos.",
    image: "assets/images/layout-cafeteria.png",
    gallery: [
      "assets/images/layout-cafeteria.png"
    ],
    tags: ["Specialty Coffee", "Sensory Profile", "Artisanal Food", "Subscription"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-cafeteria/index.html"
    },
    features: [
      "Guia interativo de métodos de extração (V60, Aeropress, Prensa Francesa e Espresso)",
      "Roda de sabores e notas sensoriais para cada lote de café",
      "Clube de assinatura com entrega de grãos recém-torrados"
    ]
  },
  {
    id: "layout-escola-cursos",
    title: "Cursos Tech & Inteligência Artificial",
    category: "layouts",
    categoryLabel: "Escola / Cursos Online",
    badge: "Formação Tech • EAD",
    shortDescription: "Escola de tecnologia com trilhas práticas em IA, Engenharia de Software e Cloud com mentoria ao vivo e grade curricular dinâmica.",
    fullDescription: "Template de educação imersiva estilo bootcamps internacionais. Apresenta grade horária, projetos de portfólio práticos, depoimentos de ex-alunos e seletor de bolsas.",
    image: "assets/images/layout-escola-cursos.png",
    gallery: [
      "assets/images/layout-escola-cursos.png"
    ],
    tags: ["EdTech UI", "Online Courses", "Software Bootcamp", "Curriculum Grid"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-escola-cursos/index.html"
    },
    features: [
      "Trilhas de formação profissional com ementa detalhada por módulos",
      "Seção de mentores com experiência em Big Techs globais",
      "Inscrição com teste de nivelamento técnico em tempo real"
    ]
  },
  {
    id: "layout-saas-ai",
    title: "SaaS & AI Gateway Landing Page",
    category: "layouts",
    categoryLabel: "Empresa de Software / Startup",
    badge: "Template B2B • Bento Grid",
    shortDescription: "Landing page de alta conversão estilo Linear/Vercel para startups de IA, com Bento Grid iluminado por spotlight e tabela de preços dinâmica.",
    fullDescription: "Modelo de página comercial para produtos SaaS e ferramentas de desenvolvedor. Conta com preview de código em sintaxe colorida, cards com iluminação radial que reage à posição do mouse e alternador de planos Mensal/Anual.",
    image: "assets/images/layout-saas-ai.png",
    gallery: [
      "assets/images/layout-saas-ai.png"
    ],
    tags: ["Tailwind CSS", "Bento Grid", "Mouse Spotlight", "SaaS Conversion"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-saas-ai/index.html"
    },
    features: [
      "Efeito Spotlight dinâmico via variáveis CSS (--mouse-x, --mouse-y)",
      "Bloco de código interativo com botão de cópia rápida",
      "Calculadora de preços Mensal vs. Anual com desconto automático"
    ]
  },
  {
    id: "layout-agencia-publicidade",
    title: "Creative Growth & Branding Agency",
    category: "layouts",
    categoryLabel: "Agência de Publicidade",
    badge: "Creative Growth • B2B",
    shortDescription: "Agência de branding e growth com estética editorial suíça, portfólio de campanhas e simulador de ROI de marketing.",
    fullDescription: "Conceito de presença digital para agências de publicidade e estúdios de design estratégico. Apresenta cases com métricas de crescimento, grid de projetos autorais e cálculo de retorno de investimento.",
    image: "assets/images/layout-agencia-publicidade.png?v=3",
    gallery: [
      "assets/images/layout-agencia-publicidade.png?v=3"
    ],
    tags: ["Advertising UI", "Creative Agency", "Branding B2B", "ROI Simulator"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-agencia-publicidade/index.html"
    },
    features: [
      "Showcase de campanhas em grid visual dinâmico com métricas de impacto",
      "Calculadora de retorno sobre investimento publicitário (ROAS)",
      "Formulário direto para concorrência de contas e projetos estratégicos"
    ]
  },
  {
    id: "layout-contabilidade",
    title: "Contabilidade Consultiva & Tributário",
    category: "layouts",
    categoryLabel: "Escritório de Contabilidade",
    badge: "Planejamento Tributário",
    shortDescription: "Escritório contábil moderno e BPO financeiro especializado em redução legal de carga tributária e migração de regime fiscal.",
    fullDescription: "Interface clean e transparente voltada para serviços de contabilidade consultiva. Possui simulador de economia fiscal (Simples x Lucro Presumido x Lucro Real) e onboarding digital.",
    image: "assets/images/layout-contabilidade.png",
    gallery: [
      "assets/images/layout-contabilidade.png"
    ],
    tags: ["Accounting UI", "Tax Advisory", "BPO Finance", "Corporate Taxes"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-contabilidade/index.html"
    },
    features: [
      "Simulador de regime fiscal mais vantajoso por faixa de faturamento",
      "Apresentação de serviços de BPO Financeiro e Folha de Pagamento",
      "Portal integrado para migração de contabilidade sem burocracia"
    ]
  },
  {
    id: "layout-logistica",
    title: "Supply Chain & Frete Expresso",
    category: "layouts",
    categoryLabel: "Transportadora / Logística",
    badge: "Rastreamento • Cargas",
    shortDescription: "Operador logístico e transporte rodoviário expresso com rastreador de encomendas e cotação de frete fracionado ou lotação.",
    fullDescription: "Portal dinâmico para transportadoras e supply chain. Inclui rastreamento de cargas por código em tempo real, malha de centros de distribuição e solicitação de cotação corporativa.",
    image: "assets/images/layout-logistica.png",
    gallery: [
      "assets/images/layout-logistica.png"
    ],
    tags: ["Logistics UI", "Package Tracking", "Freight Quote", "Supply Chain"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-logistica/index.html"
    },
    features: [
      "Campo de busca de rastreamento com atualização de status de entrega",
      "Simulador rápido de frete por cubagem e CEP de destino",
      "Mapa da rede nacional de centros logísticos e frota rastreada"
    ]
  },
  {
    id: "layout-energia-solar",
    title: "Engenharia Fotovoltaica & Usinas",
    category: "layouts",
    categoryLabel: "Empresa de Energia Solar",
    badge: "Calculadora Solar • Payback",
    shortDescription: "Instalação de painéis solares para residências, indústrias e agronegócio com calculadora instantânea de economia e payback.",
    fullDescription: "Landing page comercial para integradores e usinas solares. O visitante informa o valor da conta de luz e o simulador calcula a potência dos painéis, economia anual e tempo de amortização.",
    image: "assets/images/layout-energia-solar.png",
    gallery: [
      "assets/images/layout-energia-solar.png"
    ],
    tags: ["Solar Energy", "Solar Calculator", "Sustainability", "Engineering"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-energia-solar/index.html"
    },
    features: [
      "Calculadora solar que projeta economia mensal e redução de até 95%",
      "Estimativa de amortização do investimento (tempo de payback)",
      "Projetos turn-key para residências, condomínios e usinas rurais"
    ]
  },
  {
    id: "layout-fotografo",
    title: "Fine Art & Editorial Photography",
    category: "layouts",
    categoryLabel: "Fotógrafo Profissional",
    badge: "Dark Masonry • Ensaios",
    shortDescription: "Portfólio fotográfico minimalista em tema dark com galeria de alta resolução para moda, arquitetura e fine art.",
    fullDescription: "Experiência contemplativa para fotógrafos autorais. Grid de fotos em masonry fluido com lightbox em tela cheia e agendamento de ensaios sob direção artística.",
    image: "assets/images/layout-fotografo.png",
    gallery: [
      "assets/images/layout-fotografo.png"
    ],
    tags: ["Photography Portfolio", "Fine Art", "Dark Gallery", "Visual Artist"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-fotografo/index.html"
    },
    features: [
      "Galeria fotográfica de alta fidelidade visual com carregamento progressivo",
      "Séries autorais organizadas por ensaios conceituais e editoriais",
      "Orçamento online para campanhas de moda e publicações impressas"
    ]
  },
  {
    id: "layout-consultoria",
    title: "Consultoria de Gestão & EBITDA",
    category: "layouts",
    categoryLabel: "Consultoria Empresarial",
    badge: "Eficiência EBITDA • M&A",
    shortDescription: "Consultoria executiva focada em reestruturação operacional, expansão de margem EBITDA e governança para médias e grandes empresas.",
    fullDescription: "Design corporativo austero para firmas de consultoria e turnaround. Inclui matriz de alavancas de valor, cases com retorno auditado e solicitação de diagnóstico confidencial.",
    image: "assets/images/layout-consultoria.png",
    gallery: [
      "assets/images/layout-consultoria.png"
    ],
    tags: ["Management Consulting", "EBITDA Growth", "Turnaround", "Corporate Advisory"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-consultoria/index.html"
    },
    features: [
      "Matriz de áreas de atuação: Otimização de Custos, M&A e Governança",
      "Painel de métricas e ROI gerado para conselhos administrativos",
      "Formulário confidencial de diagnóstico de prontidão estratégica"
    ]
  },
  {
    id: "layout-marca-roupas",
    title: "Heavyweight Streetwear & Moda",
    category: "layouts",
    categoryLabel: "Marca de Roupas",
    badge: "Drops Limitados • Fashion",
    shortDescription: "Marca de vestuário independente inspirada na alfaiataria militar e techwear com catálogo de drops numerados.",
    fullDescription: "Conceito de e-commerce e lookbook para marcas de moda autoral. Focado em fotografia editorial, tabela de medidas interativa e contagem regressiva para lançamentos.",
    image: "assets/images/layout-marca-roupas.png",
    gallery: [
      "assets/images/layout-marca-roupas.png"
    ],
    tags: ["Streetwear Store", "Lookbook UI", "Limited Drops", "Fashion Editorial"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-marca-roupas/index.html"
    },
    features: [
      "Lookbook imersivo com fotos conceituais de peças e costuras",
      "Contagem regressiva dinâmica para o próximo drop exclusivo",
      "Tabela inteligente de medidas e ajuste de modelagem"
    ]
  },
  {
    id: "layout-clinica-veterinaria",
    title: "UTI Veterinária & Planos Pet",
    category: "layouts",
    categoryLabel: "Clínica Veterinária",
    badge: "Hospital 24h • UTI Pet",
    shortDescription: "Centro hospitalar veterinário com emergência 24h, diagnóstico por imagem avançado e planos de saúde preventivos para pets.",
    fullDescription: "Layout humanizado para hospitais veterinários. Exibe estrutura de internação, corpo cirúrgico e simulador de planos de cobertura médica com botão de emergência rápida.",
    image: "assets/images/layout-clinica-veterinaria.png",
    gallery: [
      "assets/images/layout-clinica-veterinaria.png"
    ],
    tags: ["Veterinary UI", "Emergency 24h", "Pet Healthcare", "Interactive Hospital"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-clinica-veterinaria/index.html"
    },
    features: [
      "Linha direta com botão de plantão e triagem de emergência 24h",
      "Apresentação da UTI com monitorização contínua e oxigenoterapia",
      "Comparador de planos de saúde preventivos para cães e gatos"
    ]
  },
  {
    id: "layout-spa-massagem",
    title: "Massagens Terapêuticas & Ofurô",
    category: "layouts",
    categoryLabel: "Spa / Casa de Massagem",
    badge: "Day Spa • Rituais",
    shortDescription: "Oásis de bem-estar e relaxamento com rituais de massoterapia ayurvédica, drenagem linfática, ofurô e aromaterapia.",
    fullDescription: "Design orgânico e sereno em tons terra e texturas naturais. Permite montar pacotes de Day Spa para casais ou individuais, detalhando benefícios e óleos essenciais utilizados.",
    image: "assets/images/layout-spa-massagem.png",
    gallery: [
      "assets/images/layout-spa-massagem.png"
    ],
    tags: ["Spa & Wellness", "Massage Therapy", "Relaxation UI", "Aromatherapy"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-spa-massagem/index.html"
    },
    features: [
      "Catálogo interativo de rituais de massagem com duração e óleos essenciais",
      "Combos personalizados de Day Spa com banho de imersão em ofurô",
      "Agendamento com opção de Vale-Presente digital imediato"
    ]
  },
  {
    id: "layout-motel",
    title: "Motel Boutique 5 Estrelas",
    category: "layouts",
    categoryLabel: "Motel",
    badge: "Reserva Privativa • 24h",
    shortDescription: "Motel boutique premium com suítes temáticas, piscina aquecida, teto solar retrátil e reserva com check-in anônimo.",
    fullDescription: "Experiência digital discreta e elegante para hotelaria erótica e casais. Mostra fotos em alta definição de cada suíte, tabela de períodos e reserva antecipada com total sigilo.",
    image: "assets/images/layout-motel.png",
    gallery: [
      "assets/images/layout-motel.png"
    ],
    tags: ["Motel Boutique", "Private Suites", "Anonymous Booking", "Luxury Hospitality"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-motel/index.html"
    },
    features: [
      "Galeria privativa de suítes com piscina privativa, sauna e hidro",
      "Calculadora de períodos (2h, 4h, 12h ou Pernoite com café)",
      "Sistema de reserva discreta com garantia de privacidade absoluta"
    ]
  },
  {
    id: "layout-produtora-eventos",
    title: "Produtora de Eventos, Shows & AV",
    category: "layouts",
    categoryLabel: "Produtora de Eventos",
    badge: "Cenografia & Palco • Live",
    shortDescription: "Produtora executiva de festivais, convenções corporativas e shows com portfólio de palcos, iluminação e riders técnicos.",
    fullDescription: "Interface vibrante e enérgica para produtoras de eventos e audiovisual. Apresenta vídeos de cases, dimensões de palcos e formulário de orçamento técnico para megaeventos.",
    image: "assets/images/layout-produtora-eventos.png",
    gallery: [
      "assets/images/layout-produtora-eventos.png"
    ],
    tags: ["Live Events UI", "Stage Design", "Audiovisual", "Festival Production"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-produtora-eventos/index.html"
    },
    features: [
      "Showcase de palcos monumentais e estrutura de iluminação cênica",
      "Detalhamento de riders técnicos para festivais e convenções",
      "Formulário direto para contratação de produção executiva"
    ]
  },
  {
    id: "layout-engenharia",
    title: "Projetos Estruturais BIM",
    category: "layouts",
    categoryLabel: "Empresa de Engenharia",
    badge: "Projetos BIM • Galpões",
    shortDescription: "Escritório de cálculo estrutural e engenharia civil com modelagem BIM compatibilizada para galpões logísticos e estruturas industriais.",
    fullDescription: "Plataforma técnica para engenharia civil. Apresenta projetos em concreto armado, estruturas metálicas e fundações com controle de qualidade e redução de perdas na obra.",
    image: "assets/images/layout-engenharia.png",
    gallery: [
      "assets/images/layout-engenharia.png"
    ],
    tags: ["Civil Engineering", "BIM Modeling", "Structural Analysis", "Industrial Buildings"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-engenharia/index.html"
    },
    features: [
      "Apresentação de projetos modelados em metodologia BIM 5D",
      "Detalhamento de especialidades: Estruturas Metálicas e Pré-Moldados",
      "Solicitação de compatibilização e cálculo estrutural para construtoras"
    ]
  },
  {
    id: "layout-moveis-decoracao",
    title: "Mobiliário Autoral & Design Escandinavo",
    category: "layouts",
    categoryLabel: "Loja de Móveis e Decoração",
    badge: "Marcenaria Fina • Madeira Maciça",
    shortDescription: "Showroom digital de móveis autorais e peças de design em madeira nobre certificada, unindo estética nórdica minimalista e marcenaria artesanal.",
    fullDescription: "Experiência de alta classe com tipografia editorial, fotografia de catálogo em alta definição, especificações de madeira de reflorestamento e consultoria personalizada para projetos de interiores.",
    image: "assets/images/layout-moveis-decoracao.png",
    gallery: [
      "assets/images/layout-moveis-decoracao.png"
    ],
    tags: ["Design Autoral", "Mobiliário Nórdico", "Madeira Maciça", "Minimalismo", "Interiores"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-moveis-decoracao/index.html"
    },
    features: [
      "Vitrine minimalista de peças autorais com visualização 360 e acabamentos",
      "Contador de tiragem limitada e numeração de série para colecionadores",
      "Agendamento de visita privativa ao showroom físico ou atendimento com arquiteto"
    ]
  },
  {
    id: "layout-produtora-audiovisual",
    title: "Produtora Cinematográfica & Pós-Produção",
    category: "layouts",
    categoryLabel: "Produtora Audiovisual",
    badge: "Cinema • Commercial & Reels",
    shortDescription: "Portfólio cinematográfico para produtora de filmes publicitários, clipes musicais, séries documentais e pós-produção em escala de cinema.",
    fullDescription: "Visual widescreen impactante em tons pretos e acentos escarlate, com showreel dinâmico em tela cheia, ficha técnica por projeto (direção, fotografia, montagem) e premiações em festivais internacionais.",
    image: "assets/images/layout-produtora-audiovisual.png",
    gallery: [
      "assets/images/layout-produtora-audiovisual.png"
    ],
    tags: ["Cinema", "Audiovisual", "Showreel", "Publicidade", "Direção de Arte", "Pós-Produção"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-produtora-audiovisual/index.html"
    },
    features: [
      "Showreel dinâmico em destaque com controle de volume e imersão fullscreen",
      "Filtro de obras por gênero: Publicidade, Documentário, Moda e Videoclipes",
      "Workflow detalhado da pré-produção ao color grading e entrega master"
    ]
  },
  {
    id: "layout-limpeza-manutencao",
    title: "Limpeza Pós-Obra & Manutenção",
    category: "layouts",
    categoryLabel: "Serviços de Limpeza e Manutenção",
    badge: "Pós-Obra • Corporativo",
    shortDescription: "Soluções completas de facilities para empresas e condomínios, incluindo limpeza técnica pós-obra, sanitização hospitalar e zeladoria predial.",
    fullDescription: "Design claro, profissional e confiável com calculador interativo de metragem quadrada, equipe treinada NR-35/NR-10, produtos ecológicos com laudo ANVISA e contratação recorrente.",
    image: "assets/images/layout-limpeza-manutencao.png",
    gallery: [
      "assets/images/layout-limpeza-manutencao.png"
    ],
    tags: ["Facilities", "Limpeza Corporativa", "Pós-Obra", "Manutenção Predial", "Orçamento Online"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-limpeza-manutencao/index.html"
    },
    features: [
      "Calculadora de escopo por m² para limpeza residencial, empresarial ou industrial",
      "Apresentação de protocolos de segurança e certificações de conformidade técnica",
      "Canal direto para atendimento emergencial e escala de terceirização contínua"
    ]
  },
  {
    id: "layout-psicologia",
    title: "Psicologia Clínica & TCC",
    category: "layouts",
    categoryLabel: "Consultório Psicológico",
    badge: "Terapia Cognitiva • Presencial & Online",
    shortDescription: "Consultório de psicoterapia humanizada baseada em evidências, com foco em Terapia Cognitivo-Comportamental (TCC) para ansiedade, estresse e desenvolvimento pessoal.",
    fullDescription: "Ambiente digital acolhedor e seguro com tons naturais e tipografia serena. Apresenta abordagens terapêuticas, funcionamento de sessões online com criptografia ponta a ponta e agendamento via WhatsApp.",
    image: "assets/images/layout-psicologia.png",
    gallery: [
      "assets/images/layout-psicologia.png"
    ],
    tags: ["Psicologia Clínica", "Saúde Mental", "Terapia TCC", "Atendimento Online", "Bem-Estar"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-psicologia/index.html"
    },
    features: [
      "Exposição clara das linhas de tratamento (Ansiedade, Burnout, Transição de Carreira)",
      "Guia informativo de como funciona a consulta online para novos pacientes",
      "Agendamento simplificado e humanizado com integração direta ao WhatsApp da clínica"
    ]
  },
  {
    id: "layout-banda-gravadora",
    title: "Banda & Gravadora Musical",
    category: "layouts",
    categoryLabel: "Banda / Gravadora",
    badge: "Synthwave • Music Player",
    shortDescription: "Landing page e hub digital para banda independente de synthwave e selo musical com player de faixas integrado, discografia e datas de turnê.",
    fullDescription: "Estética retrofuturista neon com visualizador de faixas, loja de vinis exclusivos, agenda mundial de shows com compra de ingressos e formulário para imprensa e bookings.",
    image: "assets/images/layout-banda-gravadora.png",
    gallery: [
      "assets/images/layout-banda-gravadora.png"
    ],
    tags: ["Music Streaming", "Synthwave UI", "Tour Dates", "Record Label", "Dark Neon"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-banda-gravadora/index.html"
    },
    features: [
      "Player de streaming imersivo com controle de reprodução e faixas em destaque",
      "Agenda de turnê internacional com integração para reserva de ingressos",
      "Catálogo de discografia com merchandising oficial e venda de vinis limitados"
    ]
  },
  {
    id: "layout-ferramentaria-caldeiraria",
    title: "Usinagem CNC & Caldeiraria Industrial",
    category: "layouts",
    categoryLabel: "Ferramentaria & Caldeiraria",
    badge: "CNC 5 Eixos • Caldeiraria",
    shortDescription: "Portal técnico para indústria de ferramentaria pesada, fabricação de moldes plásticos, usinagem CNC de precisão e estruturas metálicas.",
    fullDescription: "Layout corporativo robusto com detalhamento de parque de máquinas de 5 eixos, certificações ISO 9001, galeria de peças com tolerância micrométrica e formulário de cotação com upload de projetos em CAD/STEP.",
    image: "assets/images/layout-ferramentaria-caldeiraria.png",
    gallery: [
      "assets/images/layout-ferramentaria-caldeiraria.png"
    ],
    tags: ["Indústria Pesada", "Usinagem CNC", "Caldeiraria", "B2B Industrial", "Engenharia Mecânica"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-ferramentaria-caldeiraria/index.html"
    },
    features: [
      "Apresentação do parque industrial com centros de usinagem e tornos verticais CNC",
      "Solicitação expressa de cotação técnica B2B com suporte a especificações técnicas",
      "Seção de garantia de qualidade metrológica com rastreabilidade dimensional"
    ]
  },
  {
    id: "layout-meridian-wave",
    title: "Fintech & Liquid Wave Canvas",
    category: "layouts",
    categoryLabel: "Fintech & WebGL",
    badge: "Simplex 3D • Fintech",
    shortDescription: "Landing page em tema obsidian com simulação física de onda líquida em Canvas 2D (Simplex 3D + Gerstner) e simulador cambial interativo.",
    fullDescription: "Layout de alta performance desenvolvido para fintechs e infraestruturas de pagamentos globais. Combina um fundo de partículas reativas ao cursor em 60fps com um simulador cambial glassmorphic funcional.",
    image: "assets/images/layout-meridian-wave.png",
    gallery: [
      "assets/images/layout-meridian-wave.png"
    ],
    tags: ["HTML5 Canvas", "Simplex 3D Noise", "Glassmorphism", "Fintech UI"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site-meridian-wave/index.html"
    },
    features: [
      "Motor matemático de ondas orgânicas em 60fps com controle em tempo real",
      "Simulador funcional de conversão USD → BRL / EUR / GBP com cálculo de taxa",
      "Design responsivo com suporte a toque (touchmove) no celular"
    ]
  },
  {
    id: "layout-site-face",
    title: "Gold Mask Reveal — Portfolio Editorial",
    category: "layouts",
    categoryLabel: "Creative Mask Reveal",
    badge: "Awwwards Style • CSS Mask",
    shortDescription: "Hero section experimental para portfólios de fotografia e direção de arte com revelação de escultura dourada guiada pelo cursor.",
    fullDescription: "Estudo de interface editorial inspirado em estúdios de fotografia europeus. Utiliza uma pilha de 4 camadas com CSS radial-gradient mask-image e interpolação física (Lerp) para revelar uma textura de estátua barroca dourada sob a pele humana.",
    image: "assets/images/layout-site-face.png",
    gallery: [
      "assets/images/layout-site-face.png",
      "../layouts para sites/site face/image.png"
    ],
    tags: ["CSS Mask-Image", "Lerp Physics", "Editorial Typography", "Interactive Hero"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site face/index.html"
    },
    features: [
      "Efeito de lupa orgânica em 60fps com suavização matemática (requestAnimationFrame)",
      "Tipografia brutalista refinada com a família Archivo",
      "Suporte híbrido para cursor desktop e toque mobile"
    ]
  },
  {
    id: "layout-site-tattoo",
    title: "Full Body X-Ray Reveal — Tattoo Studio",
    category: "layouts",
    categoryLabel: "Creative X-Ray Reveal",
    badge: "Interactive • Dual Layer",
    shortDescription: "Conceito interativo para estúdios de tatuagem e moda que revela a arte corporal oculta sob a roupa ao passar o cursor.",
    fullDescription: "Layout interativo de alto impacto visual pensado para artistas de tatuagem e campanhas de moda. O visitante vê o retrato formal com roupa e, ao explorar a imagem com o mouse, revela a camada subjacente com o fechamento completo de tatuagens.",
    image: "assets/images/layout-site-tattoo.png",
    gallery: [
      "assets/images/layout-site-tattoo.png",
      "../layouts para sites/site tattoo/tatuado.jpg",
      "../layouts para sites/site tattoo/com-roupa.jpg"
    ],
    tags: ["UI/UX Concept", "FileReader API", "CSS Masking", "Creative Coding"],
    links: {
      github: "https://github.com/daniloliveira89",
      demo: "../layouts para sites/site tattoo/index.html"
    },
    features: [
      "Alinhamento milimétrico de corpo inteiro com object-fit contain",
      "Barra de teste em tempo real para o cliente carregar suas próprias fotos Antes/Depois",
      "Transição suave de opacidade e borda difusa"
    ]
  },

  // ==========================================
  // 5. EXTENSÕES CHROME (MANIFEST V3)
  // ==========================================
  {
    id: "universal-music-downloader",
    title: "Universal Music & Soundtrack Downloader v3.3",
    category: "extensions",
    categoryLabel: "Extensões Chrome",
    badge: "Manifest V3 • FLAC & MP3",
    shortDescription: "Extensão Chrome para captura e download automatizado em lote de álbuns e trilhas sonoras em formato FLAC ou MP3 com organização de pastas.",
    fullDescription: "Ferramenta avançada para arquivamento de áudio e soundtracks. Analisa links de álbuns, identifica todos os arquivos de áudio disponíveis, permite escolher entre FLAC lossless ou MP3 e gerencia filas de downloads simultâneos.",
    image: "assets/images/universal-music-downloader-real.png",
    gallery: [
      "assets/images/universal-music-downloader-real.png",
      "assets/images/universal-music-downloader.jpg"
    ],
    tags: ["Chrome MV3", "Downloads API", "JavaScript", "Audio FLAC/MP3"],
    links: {
      github: "https://github.com/daniloliveira89/extension---Universal-Downloader",
      demo: null
    },
    features: [
      "Painel completo de preparação de lote com criação automática de subpastas ('Ano - Álbum')",
      "Controle de concorrência (Download Sequencial ou Multi-thread)",
      "Seleção granular de faixas com barra de progresso em tempo real"
    ]
  },
  {
    id: "youtube-power-tools",
    title: "YouTube Power Tools Suite (6 Extensões MV3)",
    category: "extensions",
    categoryLabel: "Extensões Chrome",
    badge: "Suíte 6-em-1 • Produtividade",
    shortDescription: "Ecossistema com 6 extensões dedicadas para o YouTube: Watch Time Analytics, Speed Controller, Volume Booster 500%, Return Dislike e Copy Transcript.",
    fullDescription: "Conjunto modular de extensões leves em Manifest V3 criadas para aprimorar a experiência de estudo e entretenimento no YouTube sem rastreadores ou peso no navegador.",
    image: "assets/images/youtube-power-tools-combo.png",
    gallery: [
      "assets/images/youtube-power-tools-combo.png",
      "assets/images/watch-time-real.png",
      "assets/images/volume-booster-real.png",
      "assets/images/speed-video-real.png",
      "assets/images/return-dislike-real.png"
    ],
    tags: ["Chrome MV3", "Web Audio API", "YouTube DOM", "Produtividade"],
    links: {
      github: "https://github.com/daniloliveira89/extension---Copy-Transcription",
      demo: null
    },
    features: [
      "Watch Time: Dashboard de tempo assistido por dia, semana, mês, Shorts vs. Lives e canais",
      "Speed Video: Controle de velocidade com Shift+Scroll e cálculo de 'Total Time Saved'",
      "Volume Booster: Amplificação sonora de até 5x (500%) via GainNode da Web Audio API"
    ]
  },
  {
    id: "sync-to-notion-suite",
    title: "Sync to Notion & Music to Notion Extensions",
    category: "extensions",
    categoryLabel: "Extensões Chrome",
    badge: "Notion API • 1-Click Save",
    shortDescription: "Dupla de extensões para conectar e catalogar mídias, álbuns e páginas da web diretamente em databases do Notion em menos de 2 minutos.",
    fullDescription: "Extensões com assistente passo a passo (onboarding guiado) para validação de tokens `ntn_` / `secret_` do Notion e envio instantâneo de metadados de filmes, séries, jogos e músicas direto do navegador.",
    image: "assets/images/sync-to-notion-combo.png",
    gallery: [
      "assets/images/sync-to-notion-combo.png",
      "assets/images/sync-to-notion-real.png",
      "assets/images/music-to-notion-real.png"
    ],
    tags: ["Chrome MV3", "Notion API", "OAuth / Token", "Automação"],
    links: {
      github: "https://github.com/daniloliveira89/extension---Sync-to-Notion",
      demo: null
    },
    features: [
      "Onboarding simplificado em 1 clique para criação e validação de integração Notion",
      "Suporte a múltiplos idiomas (Português / Inglês) e modo claro/escuro",
      "Preenchimento automático de capas, anos de lançamento e links"
    ]
  },

  // ==========================================
  // 6. DESKTOP & AUTOMAÇÃO
  // ==========================================
  {
    id: "rclone-manager-desktop",
    title: "RClone Manager Desktop — Multi-Cloud GUI",
    category: "desktop",
    categoryLabel: "Desktop & Automação",
    badge: "C# / .NET • Cloud Backup",
    shortDescription: "Interface gráfica desktop para orquestração de backups criptografados e sincronização entre Google Drive, OneDrive, AWS S3 e Mega.",
    fullDescription: "Aplicação nativa para Windows que encapsula o poder do Rclone CLI em um painel visual intuitivo, monitorando cotas de armazenamento, filas de transferência e agendamentos diários.",
    image: "assets/images/rclone-manager.jpg",
    gallery: [
      "assets/images/rclone-manager.jpg"
    ],
    tags: ["C#", ".NET", "Rclone", "Cloud Storage", "Windows Desktop"],
    links: {
      github: "https://github.com/daniloliveira89/app---RClone-manager",
      demo: null
    },
    features: [
      "Monitoramento simultâneo de múltiplos remotes (Google Drive, OneDrive, S3)",
      "Execução silenciosa em bandeja do sistema (System Tray) com logs de integridade",
      "Prevenção de duplicidade e verificação de checksum"
    ]
  },
  {
    id: "torrent-rename-normalizer",
    title: "Media Rename & Series Normalizer",
    category: "desktop",
    categoryLabel: "Desktop & Automação",
    badge: "Python • Regex Engine",
    shortDescription: "Utilitário em Python para higienização em lote de nomes de arquivos de vídeo, removendo tags poluídas de release e padronizando episódios (S01E01).",
    fullDescription: "Automação essencial para servidores de mídia (Plex, Jellyfin, Emby). Analisa pastas inteiras via expressões regulares, remove códigos de codecs/grupos e renomeia séries e legendas no padrão limpo.",
    image: "assets/images/torrent-rename.jpg",
    gallery: [
      "assets/images/torrent-rename.jpg"
    ],
    tags: ["Python 3", "Regex", "Automação de Arquivos", "Plex / Jellyfin"],
    links: {
      github: "https://github.com/daniloliveira89/app---Torrrent-Rename",
      demo: null
    },
    features: [
      "Detecção automática de temporada e episódio (SxxExx) com preservação de extensão",
      "Modo Dry-Run (pré-visualização segura antes de aplicar a renomeação no disco)",
      "Sincronização automática de arquivos de legenda (.srt) correspondentes"
    ]
  }
];

// Estatísticas globais
const PORTFOLIO_STATS = {
  totalProjects: PROJECTS_DATA.length,
  totalCategories: 6,
  liveDemos: PROJECTS_DATA.filter(p => p.links && p.links.demo).length,
  openSource: PROJECTS_DATA.filter(p => p.links && p.links.github).length
};
