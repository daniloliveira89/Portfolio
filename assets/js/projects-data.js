const PROJECTS_DATA = [
  {
    id: "radar-ia",
    title: "Radar IA — Observatório Global de I.A.",
    category: "web-ai",
    categoryLabel: "Web Apps & I.A.",
    badge: "Destaque • Live Demo",
    featured: true,
    shortDescription: "Plataforma para monitoramento de novos modelos de IA, rankings agregados (Artificial Analysis, Arena Elo, DesignArena, EQ-Bench), comparativo de custo por desempenho e catálogo com +180 ferramentas.",
    fullDescription: "O Radar IA é um observatório inteligente de Inteligência Artificial voltado para desenvolvedores e pesquisadores. A plataforma analisa lançamentos de modelos, métricas de benchmark, custos de inferência de API por milhão de tokens e catálogo editorial de ferramentas. Possui atualização automatizada 4 vezes ao dia via GitHub Actions sem necessidade de servidor centralizado ou custos de infraestrutura.",
    image: "assets/images/radar-ia.jpg",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "GitHub Actions", "GitHub Pages"],
    links: {
      github: "https://github.com/daniloliveira89/site---Radar-IA",
      demo: "https://daniloliveira89.github.io/site---Radar-IA/"
    },
    features: [
      "Integração com 4 fontes de benchmark: Artificial Analysis, LMSYS Arena, DesignArena e EQ-Bench",
      "Comparador de Custo por Ponto de Benchmark com filtros para modelos gratuitos",
      "Pipeline automatizado via GitHub Actions executando coletas 4x ao dia",
      "Catálogo categorizado com mais de 187 ferramentas e ecossistemas de IA",
      "Suporte completo bilíngue (Português / Inglês) e modo PWA para mobile"
    ]
  },
  {
    id: "neon-synapse",
    title: "Neon Synapse — Cyberpunk Card Game",
    category: "games",
    categoryLabel: "Jogos & WebGL",
    badge: "Jogo Tático • PixiJS",
    featured: true,
    shortDescription: "Card game tático futurista inspirado nas mecânicas de três fileiras do Gwent. IA adversária desafiadora, mecânica de implantes neurais, cyberpsicose e efeitos visuais imersivos de chuva e néon.",
    fullDescription: "Neon Synapse transporta a clássica profundidade tática do Gwent para uma distopia cyberpunk implacável. Desenvolvido em TypeScript com PixiJS para aceleração WebGL no navegador, o jogo introduz mecânicas arrojadas: cartas de implantes que concedem poderes imediatos mas acumulam risco de cyberpsicose, estimulantes químicos com penalidades futuras e um sistema de previsão de combate de alta fidelidade.",
    image: "assets/images/neon-synapse.jpg",
    tags: ["TypeScript", "PixiJS", "Vite", "WebGL", "Canvas API"],
    links: {
      github: "https://github.com/daniloliveira89/GAME---Gwent-Cyberpunk",
      demo: null
    },
    features: [
      "Motor de regras tático com 3 fileiras (Vanguarda, Suporte, Retaguarda)",
      "Sistema de IA com árvore de decisão e leitura de vantagem de tabuleiro",
      "Mecânica de Implantes Cibernéticos e acúmulo de risco de Cyberpsicose",
      "Efeitos visuais dinâmicos de clima: chuva ácida, faíscas elétricas e néon",
      "Arquitetura modular em TypeScript com cobertura de testes unitários para regras"
    ]
  },
  {
    id: "studio-ai",
    title: "Prompt Studio AI — Estúdio Visual de Prompts",
    category: "web-ai",
    categoryLabel: "Web Apps & I.A.",
    badge: "Web App • Live Demo",
    featured: true,
    shortDescription: "Plataforma para engenharia e calibração visual de prompts para modelos de imagem e vídeo (Midjourney, Veo, Flux, Imagen). Inclui biblioteca com 22 estilos visuais e 30 paletas com hex.",
    fullDescription: "App Studio AI é uma solução desenvolvida para profissionais que trabalham com criação visual assistida por IA. O estúdio estrutura prompts complexos em camadas semânticas — enquadramento de câmera, iluminação cinematográfica, diretores de cinema, paletas de cores cromáticas e regras para geração de vídeo com Veo (incluindo áudio e proporções nativas).",
    image: "assets/images/studio-ai.jpg",
    tags: ["TypeScript", "React", "Tailwind CSS", "Vercel", "Generative AI"],
    links: {
      github: "https://github.com/daniloliveira89/app-StudioAI",
      demo: "https://app-studio-ai.vercel.app"
    },
    features: [
      "Biblioteca de estilos calibrados (Ghibli, Caravaggio, Moebius, Cyberpunk Noir, etc.)",
      "Seletor cromático com 30 paletas profissionais incluindo códigos hexadecimais",
      "Configuração de lentes, iluminação cinematográfica e composição volumétrica",
      "Suporte a prompts para vídeo generativo no Veo com especificações de áudio",
      "Exportação instantânea formatada e persistência de rascunhos no navegador"
    ]
  },
  {
    id: "music-atlas",
    title: "Music Atlas — Streaming PWA & Player",
    category: "atlas",
    categoryLabel: "Atlas Suite",
    badge: "PWA • Cloudflare Workers",
    featured: true,
    shortDescription: "Player e sistema de streaming musical pessoal PWA com reprodução contínua em segundo plano no iPhone/iOS, fila dinâmica de faixas, sincronização de capas e backend em Cloudflare Workers.",
    fullDescription: "O Music Atlas foi criado para resolver a necessidade de uma biblioteca musical privativa, rápida e independente de assinaturas caras. Executado como um Progressive Web App (PWA) de alto desempenho, conta com backend serverless em Cloudflare Workers, processamento inteligente de metadados de áudio e suporte integral à reprodução em background no Safari iOS.",
    image: "assets/images/music-atlas.jpg",
    tags: ["JavaScript", "Cloudflare Workers", "PWA", "Web Audio API", "iOS Background"],
    links: {
      github: "https://github.com/daniloliveira89/Music-Atlas",
      demo: null
    },
    features: [
      "Reprodução de áudio sem interrupções em segundo plano no iOS e tela bloqueada",
      "Worker serverless de baixa latência hospedado na borda (Edge Cloudflare)",
      "Motor dinâmico de carregamento e exibição de artes de capas e fotos de artistas",
      "Interface responsiva inspirada em apps nativos com gestos e fila dinâmica",
      "Scripts de automação para indexação de tags ID3 e upload em lote"
    ]
  },
  {
    id: "juros-compostos",
    title: "Calculadora de Juros Compostos Global",
    category: "web-ai",
    categoryLabel: "Web Apps & I.A.",
    badge: "Finanças • Plotly.js",
    featured: false,
    shortDescription: "Simulador interativo de investimentos em longo prazo. Compara CDI, Tesouro Direto, Ouro e Bitcoin com conversão em tempo real de moedas (BRL, USD, EUR) e gráficos interativos Plotly.",
    fullDescription: "Ferramenta essencial para planejamento de independência financeira e alocação de ativos. Permite simulações personalizadas com aportes mensais, horizonte de tempo e taxa de juros ajustável. Um dos grandes diferenciais é a projeção comparativa em linha de tempo contra o desempenho histórico e estocástico do Ouro e do Bitcoin.",
    image: "assets/images/juros-compostos.jpg",
    tags: ["JavaScript", "Plotly.js", "CSS Grid", "HTML5"],
    links: {
      github: "https://github.com/daniloliveira89/Juros-Compostos",
      demo: null
    },
    features: [
      "Projeção de curvas de acumulação patrimonial em tempo real com Plotly",
      "Comparador de rentabilidade: Renda Fixa vs. Ouro vs. Bitcoin",
      "Suporte a conversão monetária dinâmica entre Real (R$), Dólar ($) e Euro (€)",
      "Cálculo detalhado de juros nominais, juros reais e valor total investido",
      "Layout clean, focado em responsividade e usabilidade mobile e desktop"
    ]
  },
  {
    id: "ivfr-custo-vida",
    title: "IVFR — Índice de Custo de Vida & Viabilidade",
    category: "web-ai",
    categoryLabel: "Web Apps & I.A.",
    badge: "Indicador Econômico",
    featured: false,
    shortDescription: "Calculador e analisador de poder de compra real e velocidade de acumulação de patrimônio, mensurando viabilidade financeira com base em cestas de consumo e despesas regionais.",
    fullDescription: "O IVFR (Índice de Viabilidade Financeira Real) é uma aplicação web focada em calcular o impacto real da inflação e custo de vida sobre o poder de poupança. A ferramenta calcula métricas como taxa de esforço mensal, meses de reserva e prazo estimado para independência financeira sob diferentes cenários de custo de vida.",
    image: "assets/images/ivfr.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Finanças"],
    links: {
      github: "https://github.com/daniloliveira89/indice-custo-vida",
      demo: null
    },
    features: [
      "Cálculo de índice de esforço financeiro e custo real por hora trabalhada",
      "Simulação de diferentes cidades e perfis de consumo familiar",
      "Métricas claras de acumulação líquida de patrimônio e reserva de emergência",
      "Design minimalista focado em leitura rápida e decisão financeira"
    ]
  },
  {
    id: "bookshelf-atlas",
    title: "Bookshelf Atlas — Biblioteca Pessoal Integrada",
    category: "atlas",
    categoryLabel: "Atlas Suite",
    badge: "Notion + Google Sheets",
    featured: false,
    shortDescription: "Sistema inteligente de catalogação de livros e leituras, com pipeline automático de sincronização entre Notion, Google Sheets e catálogo visual web com capas em alta definição.",
    fullDescription: "Parte da família Atlas, o Bookshelf Atlas integra bancos de dados relacionais do Notion a planilhas analíticas do Google Sheets e gera uma galeria visual com as capas dos livros lidos, metas do ano, páginas lidas por dia e avaliações pessoais.",
    image: "assets/images/bookshelf-atlas.jpg",
    tags: ["Python", "Notion API", "Google Sheets API", "ETL Pipeline"],
    links: {
      github: "https://github.com/daniloliveira89/bookshelf-atlas",
      demo: null
    },
    features: [
      "Sincronização bidirecional entre Notion e Google Sheets via API",
      "Download e armazenamento otimizado de capas de livros em alta qualidade",
      "Controle de status de leitura (Lendo, Lido, Quero Ler, Abandonado)",
      "Métricas analíticas de páginas lidas, autores favoritos e notas por gênero"
    ]
  },
  {
    id: "cinematheque-atlas",
    title: "Cinematheque Atlas — Acervo de Cinema & Séries",
    category: "atlas",
    categoryLabel: "Atlas Suite",
    badge: "Catálogo Cinematográfico",
    featured: false,
    shortDescription: "Plataforma de gerenciamento e curadoria de filmes, diretores e séries. Interface visual para cinéfilos com coleções temáticas e integração com bases de dados.",
    fullDescription: "O Cinematheque Atlas permite organizar e catalogar filmes por diretores, movimentos artísticos, décadas e edições especiais de colecionador. Apresenta interface escura e refinada com foco em posters e metadados de diretores e direções de fotografia.",
    image: "assets/images/cinematheque-atlas.jpg",
    tags: ["TypeScript", "Notion API", "HTML5", "CSS3"],
    links: {
      github: "https://github.com/daniloliveira89/Cinematheque-Atlas",
      demo: null
    },
    features: [
      "Organização de obras por coleções autorais e filmografias completas",
      "Cards visuais de alta definição com estrelas, ano e diretores",
      "Integração contínua com banco de dados Notion e planilhas de apoio",
      "Filtros ágeis por notas pessoais e status de visualização"
    ]
  },
  {
    id: "game-atlas",
    title: "Game Atlas — Registro & Backlog Gamer",
    category: "atlas",
    categoryLabel: "Atlas Suite",
    badge: "Games Tracker",
    featured: false,
    shortDescription: "Hub central para acompanhamento de jogos finalizados, backlog de lançamentos, plataformas, horas dedicadas e conquistas.",
    fullDescription: "Projetado para manter a ordem nas jogatinas, o Game Atlas é um rastreador de progresso em jogos em múltiplas plataformas (PC, consoles). Inclui estatísticas de tempo investido, estimativa de conclusão e galeria de capturas.",
    image: "assets/images/game-atlas.jpg",
    tags: ["JavaScript", "CSS3", "Notion API", "LocalStorage"],
    links: {
      github: "https://github.com/daniloliveira89/Game-Atlas",
      demo: null
    },
    features: [
      "Controle de status: Jogando, Zerado, 100% / Platina, Pausado, Backlog",
      "Registro de horas jogadas e plataformas (Steam, PlayStation, Nintendo)",
      "Visual temático gamer com barras de progresso de conquistas",
      "Exportação e sincronização com banco de dados centralizado"
    ]
  },
  {
    id: "universal-music-downloader",
    title: "Universal Music & OST Downloader",
    category: "extensions",
    categoryLabel: "Extensões Chrome",
    badge: "Chrome MV3 • Multi-Thread",
    featured: true,
    shortDescription: "Extensão para download em lote de trilhas sonoras de jogos e álbuns (KHInsider e fontes genéricas). Organização automática em pastas no disco e suporte a FLAC lossless.",
    fullDescription: "O Universal Music Downloader soluciona a lentidão de baixar álbuns de músicas faixa por faixa. A extensão injeta controles na página permitindo seleção múltipla (Shift, Ctrl, Inverter), downloads simultâneos em até 4 threads, preferência automática por formatos sem perdas (FLAC) e organização estruturada no padrão 'Ano - Nome do Álbum' diretamente na pasta de Downloads.",
    image: "assets/images/universal-downloader.jpg",
    tags: ["JavaScript", "Chrome Extensions API", "MV3", "Downloads API", "Audio"],
    links: {
      github: "https://github.com/daniloliveira89/extension---Universal-Downloader",
      demo: null
    },
    features: [
      "Compatível com KHInsider e extrator genérico de streams de áudio web",
      "Downloads simultâneos paralelos configuráveis (1 a 4 arquivos ao mesmo tempo)",
      "Seleção automática do formato de maior fidelidade disponível (FLAC padrão)",
      "Criação automática e higienização de pastas ('Ano - Nome do Álbum')",
      "Barra de progresso individual por faixa e botão de interrupção segura"
    ]
  },
  {
    id: "youtube-suite",
    title: "YouTube Power Tools Suite",
    category: "extensions",
    categoryLabel: "Extensões Chrome",
    badge: "Suite com 6 Extensões",
    featured: true,
    shortDescription: "Coleção de 6 extensões para transformar a navegação no YouTube: Transcrição Instantânea, Return Dislike, Volume Booster 600%, Speed Video granular, Watch Time e Auto-Like.",
    fullDescription: "Um ecossistema completo de extensões focadas em produtividade e controle no YouTube:\n1. Copy Transcription: Copia transcrições completas eliminando marcas de tempo para uso rápido com IA.\n2. Return Dislike: Traz de volta o contador de dislikes oficial via API comunitária.\n3. Volume Booster: Amplifica o volume além de 100% em vídeos baixos com Web Audio API.\n4. Speed Video: Slider de velocidade precisa de 0.1x até 16x com atalhos de teclado.\n5. Watch Time & Dashboard: Contabiliza o tempo assistido e métricas.\n6. Auto-Like: Curte automaticamente canais favoritos configurados.",
    image: "assets/images/youtube-suite.jpg",
    tags: ["JavaScript", "Web Audio API", "MutationObserver", "Chrome Extensions MV3"],
    links: {
      github: "https://github.com/daniloliveira89/extension---Copy-Transcription",
      demo: null
    },
    features: [
      "Copy Transcription: extração em 1 clique de roteiros sem timestamps",
      "Return Dislike: restauração da contagem original para avaliação de qualidade",
      "Volume Booster: amplificador de áudio com limiter para prevenir distorções",
      "Speed Video: ajuste de velocidade até 16x com incrementos de 0.05x",
      "Auto-Like: reconhecimento instantâneo de canais da lista de confiança"
    ]
  },
  {
    id: "extension-studio-ai",
    title: "Prompt Studio AI — Chrome Extension",
    category: "extensions",
    categoryLabel: "Extensões Chrome",
    badge: "Extensão • Engenharia de Prompt",
    featured: false,
    shortDescription: "Versão extensão do Prompt Studio com popup direto nas páginas de IA generativa (Gemini, ChatGPT, Midjourney, Claude). Seletor visual de paletas e iluminação.",
    fullDescription: "A extensão oficial do Prompt Studio IA permite abrir em uma janela lateral ou popup as 30 paletas de cores, 22 estilos visuais e controles de câmera enquanto você digita no Gemini, ChatGPT ou Midjourney. Conta também com modo de edição determinística de imagens por código (Python/OpenCV/Pillow).",
    image: "assets/images/extension-studio-ai.jpg",
    tags: ["JavaScript", "Chrome Extension MV3", "Tailwind CSS"],
    links: {
      github: "https://github.com/daniloliveira89/extension---Studio-AI",
      demo: null
    },
    features: [
      "Acesso em 1 clique durante conversas com qualquer IA geradora",
      "Biblioteca de estilos fotográficos, cinematográficos e de mestres da pintura",
      "Seletor cromático com visualização de 5 cores e códigos hex",
      "Injeção direta de prompts negativos estruturados e regras de renderização"
    ]
  },
  {
    id: "sync-to-notion",
    title: "Sync to Notion & Music to Notion",
    category: "extensions",
    categoryLabel: "Extensões Chrome",
    badge: "Chrome MV3 • Notion API",
    featured: false,
    shortDescription: "Extensões para envio instantâneo de links, álbuns musicais, mídias e conteúdos da web diretamente para tabelas personalizadas do Notion.",
    fullDescription: "Agiliza o arquivamento de referências e mídias. Com um clique no ícone da extensão, os metadados da página atual (título, autor, capa, data e tags) são formatados e injetados diretamente na base de dados Notion configurada.",
    image: "assets/images/cinematheque-atlas.jpg",
    tags: ["JavaScript", "Notion API", "Chrome Extensions MV3", "REST API"],
    links: {
      github: "https://github.com/daniloliveira89/extension---Sync-to-Notion",
      demo: null
    },
    features: [
      "Integração nativa com a API oficial do Notion através de tokens seguros",
      "Reconhecimento inteligente de capas e metadados de streaming",
      "Mapeamento customizável de campos e propriedades do banco de dados",
      "Feedback visual instantâneo de sincronização concluída"
    ]
  },
  {
    id: "torrent-rename",
    title: "Torrent Rename & Media Normalizer",
    category: "desktop",
    categoryLabel: "Desktop & Automação",
    badge: "Python • Utilitário Desktop",
    featured: false,
    shortDescription: "Aplicação em Python para renomeação em massa e normalização de arquivos de vídeo e séries, limpando tags de release e padronizando formatos.",
    fullDescription: "Utilitário desenvolvido para quem mantém servidores de mídia como Plex ou Jellyfin. Analisa nomes brutos de arquivos baixados com regex avançada, identifica temporada, episódio, ano e título da obra, removendo automaticamente tags de scene como 'x265', '1080p', 'WEB-DL' e nomes de release groups.",
    image: "assets/images/torrent-rename.jpg",
    tags: ["Python", "Regex", "File Management", "OS Automation"],
    links: {
      github: "https://github.com/daniloliveira89/app---Torrrent-Rename",
      demo: null
    },
    features: [
      "Higienização de títulos com reconhecimento inteligente de Padrão S01E01",
      "Remoção cirúrgica de codecs, bitrates e ruídos de nomenclatura",
      "Prévia comparativa (Antes vs. Depois) antes da execução real em disco",
      "Processamento ultrarrápido de pastas inteiras com centenas de arquivos"
    ]
  },
  {
    id: "rclone-manager",
    title: "RClone Manager Desktop GUI",
    category: "desktop",
    categoryLabel: "Desktop & Automação",
    badge: "Desktop GUI • C# .NET",
    featured: false,
    shortDescription: "Interface gráfica amigável para orquestrar e monitorar sincronizações do RClone com múltiplos serviços de nuvem (Google Drive, OneDrive, S3, Mega).",
    fullDescription: "Elimina a necessidade de gerenciar comandos complexos de linha de comando no RClone. Apresenta status em tempo real de cada conexão remota, espaço em disco utilizado, agendamento de tarefas em segundo plano e relatórios de sincronização com tratamento de erros de rede.",
    image: "assets/images/rclone-manager.jpg",
    tags: ["C#", ".NET", "RClone", "Cloud Storage", "Desktop GUI"],
    links: {
      github: "https://github.com/daniloliveira89/app---RClone-manager",
      demo: null
    },
    features: [
      "Painel unificado para gerenciar múltiplos provedores de nuvem",
      "Status visual de conexões ativas, transferências e armazenamento livre",
      "Execução de jobs em segundo plano sem travar a interface",
      "Logs detalhados de transferência e integridade de checksums"
    ]
  },
  {
    id: "cinema-notion-sheets",
    title: "Cinema Sync — Notion para Google Planilhas",
    category: "desktop",
    categoryLabel: "Desktop & Automação",
    badge: "Python ETL • Automação",
    featured: false,
    shortDescription: "Pipeline em Python que extrai o histórico e base de filmes do Notion, processa os campos tabulares e atualiza planilhas no Google Drive.",
    fullDescription: "Pipeline automatizado de dados (ETL). Conecta-se à API do Notion, recupera o banco de dados de cinema pessoal, normaliza listas de gêneros, diretores e notas, e insere os registros tratados em uma planilha do Google Sheets com formatação condicional.",
    image: "assets/images/bookshelf-atlas.jpg",
    tags: ["Python", "Notion API", "Google Sheets API", "OAuth2", "Data Pipeline"],
    links: {
      github: "https://github.com/daniloliveira89/Cinema---Notion-to-Google-Sheets",
      demo: null
    },
    features: [
      "Extração automática de propriedades relacionais e campos de tags do Notion",
      "Mapeamento para colunas estruturadas no Google Sheets",
      "Autenticação segura via Service Account / OAuth2",
      "Histórico de execuções com tratamento de throttling de requisições de API"
    ]
  },
  {
    id: "app-nuvem",
    title: "Nuvem Sync & Backup CLI",
    category: "desktop",
    categoryLabel: "Desktop & Automação",
    badge: "Shell Script • DevOps",
    featured: false,
    shortDescription: "Scripts de automação em Shell para backup contínuo, espelhamento incremental e rotinas de integridade em servidores e nuvem.",
    fullDescription: "Conjunto de rotinas utilitárias em Shell Scripting para backup seguro e idempotente de dados essenciais, gerenciando retenção de cópias, snapshots e compressão eficiente de diretórios.",
    image: "assets/images/radar-ia.jpg",
    tags: ["Shell", "Bash", "Rsync", "Linux / Unix", "DevOps"],
    links: {
      github: "https://github.com/daniloliveira89/app---Nuvem",
      demo: null
    },
    features: [
      "Rotinas de sincronização incremental de alta eficiência com verificação MD5",
      "Gestão de retenção diária, semanal e mensal de arquivos de backup",
      "Execução silenciosa com geração de arquivos de log rotativos",
      "Compatível com ambientes Linux, macOS e WSL"
    ]
  }
];

// Estatísticas globais
const PORTFOLIO_STATS = {
  totalProjects: PROJECTS_DATA.length,
  totalCategories: 5,
  liveDemos: PROJECTS_DATA.filter(p => p.links.demo).length,
  openSource: PROJECTS_DATA.filter(p => p.links.github).length
};
