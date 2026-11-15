// ============================================================
// Danilo Oliveira Portfolio — v2 (Dark Blue / Editorial Ref)
// Interatividade, Filtros, Busca, Modal e Efeitos Visuais
// ============================================================

let activeCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  renderStats();
  renderSkills('all');
  renderProjects();
  setupFilterListeners();
  setupSearchListener();
  setupModalHandlers();
  setupContactForm();
  setupMobileMenu();
  setupSmoothScroll();
});

// ------------------------------------------------------------
// 1. Efeito Typewriter no Hero
// ------------------------------------------------------------
function initTypewriter() {
  const target = document.getElementById('typed-role');
  if (!target) return;

  const roles = [
    'Engenheiro de Software & I.A.',
    'Full-Stack Web Developer',
    'Desenvolvedor de Jogos WebGL',
    'Criador de Extensões Chrome MV3',
    'Arquiteto de Soluções PWA & Cloudflare'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const current = roles[roleIdx];
    
    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      typingSpeed = 1800; // pausa ao terminar a palavra
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // pausa antes de começar a próxima
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ------------------------------------------------------------
// 2. Estatísticas e Contadores
// ------------------------------------------------------------
function renderStats() {
  if (typeof PROJECTS_DATA === 'undefined') return;

  const total = PROJECTS_DATA.length;
  const demos = PROJECTS_DATA.filter(p => p.links && p.links.demo).length;
  const extensions = PROJECTS_DATA.filter(p => p.category === 'extensions').length;

  const elTotal = document.getElementById('stat-total-projects');
  const elCardTotal = document.getElementById('stat-card-projects');
  const elDemos = document.getElementById('stat-live-demos');
  const elExtensions = document.getElementById('stat-extensions');

  if (elTotal) elTotal.textContent = `${total}+`;
  if (elCardTotal) elCardTotal.textContent = `${total}+`;
  if (elDemos) elDemos.textContent = `${demos}+`;
  if (elExtensions) elExtensions.textContent = `${extensions}+`;

  // Atualiza badges numéricas nos botões de filtro
  document.querySelectorAll('.filter-btn[data-category]').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    const badge = btn.querySelector('.filter-count');
    if (badge) {
      if (cat === 'all') {
        badge.textContent = total;
      } else {
        const count = PROJECTS_DATA.filter(p => p.category === cat).length;
        badge.textContent = count;
      }
    }
  });
}

// ------------------------------------------------------------
// 3. Renderização Dinâmica de Skills
// ------------------------------------------------------------
const SKILLS_DATA = [
  // Frontend & WebGL
  { name: 'TypeScript', category: 'frontend', level: 'Expert', pct: 95 },
  { name: 'React & Next.js', category: 'frontend', level: 'Expert', pct: 92 },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Expert', pct: 95 },
  { name: 'PixiJS & WebGL', category: 'frontend', level: 'Advanced', pct: 88 },
  { name: 'HTML5 & Canvas API', category: 'frontend', level: 'Expert', pct: 96 },
  { name: 'Progressive Web Apps (PWA)', category: 'frontend', level: 'Advanced', pct: 90 },

  // Inteligência Artificial & Backend
  { name: 'Prompt Engineering & LLMs', category: 'ai-backend', level: 'Expert', pct: 96 },
  { name: 'Python & Automações', category: 'ai-backend', level: 'Advanced', pct: 90 },
  { name: 'Cloudflare Workers (Edge)', category: 'ai-backend', level: 'Advanced', pct: 86 },
  { name: 'REST APIs & Webhooks', category: 'ai-backend', level: 'Advanced', pct: 92 },
  { name: 'Model Benchmarking & Evaluation', category: 'ai-backend', level: 'Advanced', pct: 89 },

  // Extensões & Ferramentas
  { name: 'Chrome Extensions (MV3)', category: 'tools', level: 'Expert', pct: 95 },
  { name: 'GitHub Actions (CI/CD)', category: 'tools', level: 'Advanced', pct: 90 },
  { name: 'Git & Version Control', category: 'tools', level: 'Advanced', pct: 92 },
  { name: 'Notion & Google Sheets APIs', category: 'tools', level: 'Advanced', pct: 88 },
  { name: 'Vite & Modern Tooling', category: 'tools', level: 'Advanced', pct: 90 },
];

function renderSkills(selectedCategory = 'all') {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const filtered = selectedCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === selectedCategory);

  container.innerHTML = filtered.map(skill => {
    const isExpert = skill.level === 'Expert';
    const badgeColor = isExpert 
      ? 'text-yellow-300 border-yellow-400/30 bg-yellow-400/10'
      : 'text-glow border-electric/30 bg-electric/10';
    const barGradient = isExpert
      ? 'from-blue-500 via-sky-400 to-yellow-300'
      : 'from-blue-600 to-blue-400';

    return `
      <div class="group rounded-2xl p-5 border border-electric/15 hover:border-electric/40 transition-all duration-300"
           style="background: rgba(13,18,32,0.85); backdrop-filter: blur(8px);">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-display text-xs font-bold text-white border border-electric/25"
                 style="background: linear-gradient(135deg, rgba(59,130,246,0.3), rgba(29,78,216,0.15));">
              ${skill.name.charAt(0)}
            </div>
            <h4 class="font-display text-sm font-semibold text-white group-hover:text-glow transition-colors">${skill.name}</h4>
          </div>
          <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full border ${badgeColor}">
            ${skill.level}
          </span>
        </div>

        <div class="flex items-center justify-between text-xs text-frost mb-1.5">
          <span class="text-smoke text-[11px]">Proficiência</span>
          <span class="font-mono font-semibold text-glow">${skill.pct}%</span>
        </div>

        <div class="w-full h-1.5 rounded-full bg-void overflow-hidden border border-electric/10">
          <div class="h-full rounded-full bg-gradient-to-r ${barGradient} transition-all duration-700 ease-out"
               style="width: ${skill.pct}%;"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ------------------------------------------------------------
// 4. Renderização Dinâmica de Projetos
// ------------------------------------------------------------
function renderProjects() {
  const container = document.getElementById('projects-grid');
  const emptyState = document.getElementById('empty-state');
  if (!container || typeof PROJECTS_DATA === 'undefined') return;

  const query = searchQuery.toLowerCase().trim();

  const filtered = PROJECTS_DATA.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = !query || 
      project.title.toLowerCase().includes(query) ||
      project.shortDescription.toLowerCase().includes(query) ||
      project.categoryLabel.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  container.innerHTML = filtered.map(project => {
    const hasLiveDemo = project.links && project.links.demo;
    const hasGithub = project.links && project.links.github;

    return `
      <article class="group relative rounded-2xl overflow-hidden border border-electric/15 hover:border-electric/40 transition-all duration-300 flex flex-col justify-between"
               style="background: rgba(13,18,32,0.85); backdrop-filter: blur(10px);">
        
        <!-- Header da Imagem -->
        <div class="relative h-52 w-full overflow-hidden bg-void cursor-pointer" onclick="openProjectModal('${project.id}')">
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onerror="this.src='assets/images/radar-ia.jpg'"
          />
          <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(13,18,32,0.95) 0%, rgba(13,18,32,0.2) 60%, transparent 100%);"></div>

          <!-- Badge de Categoria (Estilo Pial) -->
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white"
                style="background: rgba(59,130,246,0.85); backdrop-filter: blur(6px); box-shadow: 0 0 12px rgba(59,130,246,0.35);">
            ${project.categoryLabel}
          </span>

          <!-- Badge de Status -->
          <div class="absolute top-3 right-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
              hasLiveDemo 
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' 
                : project.badge.includes('Jogo')
                ? 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30'
                : 'bg-electric/15 text-frost border-electric/30'
            }" style="backdrop-filter: blur(6px);">
              ${hasLiveDemo ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>' : ''}
              ${project.badge}
            </span>
          </div>
        </div>

        <!-- Conteúdo do Card -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-display text-lg font-bold text-white group-hover:text-glow transition-colors duration-200 mb-2 cursor-pointer leading-snug"
                onclick="openProjectModal('${project.id}')">
              ${project.title}
            </h3>
            <p class="text-xs text-frost leading-relaxed line-clamp-3 mb-5">
              ${project.shortDescription}
            </p>

            <!-- Tags de Tecnologia -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${project.tags.slice(0, 4).map(tag => `
                <span class="px-2.5 py-1 text-[11px] font-medium rounded-lg border border-electric/20 text-frost"
                      style="background: rgba(59,130,246,0.08);">
                  ${tag}
                </span>
              `).join('')}
              ${project.tags.length > 4 ? `
                <span class="px-2 py-1 text-[11px] font-medium rounded-lg text-smoke border border-electric/10"
                      style="background: rgba(13,18,32,0.6);">
                  +${project.tags.length - 4}
                </span>
              ` : ''}
            </div>
          </div>

          <!-- Barra de Ações Inferior -->
          <div class="pt-4 border-t border-electric/15 flex items-center justify-between gap-3">
            <button 
              onclick="openProjectModal('${project.id}')"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-glow hover:text-white transition-colors"
            >
              <span>Ver Detalhes</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <div class="flex items-center gap-2">
              ${hasLiveDemo ? `
                <a 
                  href="${project.links.demo}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-electric hover:bg-blue-500 transition-all shadow-sm"
                  style="box-shadow: 0 0 14px rgba(59,130,246,0.35);"
                  title="Acessar demonstração online"
                >
                  <span>Demo</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              ` : ''}

              ${hasGithub ? `
                <a 
                  href="${project.links.github}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-flex items-center justify-center p-2 rounded-lg text-frost hover:text-white border border-electric/25 hover:border-electric hover:bg-electric/10 transition-all"
                  title="Ver repositório no GitHub"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ------------------------------------------------------------
// 5. Configuração dos Filtros
// ------------------------------------------------------------
function setupFilterListeners() {
  // Filtros de Projetos
  const projectBtns = document.querySelectorAll('.filter-btn[data-category]');
  projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectBtns.forEach(b => {
        b.classList.remove('bg-electric', 'border-electric', 'text-white');
        b.classList.add('border-electric/25', 'text-frost', 'hover:border-electric', 'hover:text-white');
      });

      btn.classList.remove('border-electric/25', 'text-frost', 'hover:border-electric', 'hover:text-white');
      btn.classList.add('bg-electric', 'border-electric', 'text-white');

      activeCategory = btn.getAttribute('data-category');
      renderProjects();
    });
  });

  // Filtros de Skills
  const skillBtns = document.querySelectorAll('.skill-filter-btn');
  skillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillBtns.forEach(b => {
        b.classList.remove('bg-electric', 'border-electric', 'text-white');
        b.classList.add('border-electric/25', 'text-frost', 'hover:border-electric', 'hover:text-white');
      });

      btn.classList.remove('border-electric/25', 'text-frost', 'hover:border-electric', 'hover:text-white');
      btn.classList.add('bg-electric', 'border-electric', 'text-white');

      const cat = btn.getAttribute('data-skill-filter');
      renderSkills(cat);
    });
  });
}

// ------------------------------------------------------------
// 6. Busca em Tempo Real
// ------------------------------------------------------------
function setupSearchListener() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        if (searchQuery.length > 0) {
          clearBtn.classList.remove('hidden');
        } else {
          clearBtn.classList.add('hidden');
        }
      }
      renderProjects();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.classList.add('hidden');
      renderProjects();
      searchInput.focus();
    });
  }
}

// ------------------------------------------------------------
// 7. Modal de Detalhes do Projeto
// ------------------------------------------------------------
function setupModalHandlers() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-modal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  if (typeof PROJECTS_DATA === 'undefined') return;
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  if (!modal) return;

  // Imagem
  const imgEl = document.getElementById('modal-image');
  if (imgEl) {
    imgEl.src = project.image;
    imgEl.alt = project.title;
    imgEl.onerror = () => { imgEl.src = 'assets/images/radar-ia.jpg'; };
  }

  // Títulos e Badges
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-category').textContent = project.categoryLabel;
  document.getElementById('modal-badge').textContent = project.badge;
  document.getElementById('modal-description').textContent = project.fullDescription || project.shortDescription;

  // Features
  const featuresContainer = document.getElementById('modal-features');
  if (featuresContainer && project.features) {
    featuresContainer.innerHTML = project.features.map(f => `
      <li class="flex items-start gap-3 text-xs text-frost">
        <svg class="w-4 h-4 text-glow mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Tags
  const tagsContainer = document.getElementById('modal-tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = project.tags.map(t => `
      <span class="px-2.5 py-1 text-xs rounded-lg border border-electric/25 text-frost" style="background: rgba(59,130,246,0.1);">
        ${t}
      </span>
    `).join('');
  }

  // Links
  const demoLink = document.getElementById('modal-demo-link');
  const githubLink = document.getElementById('modal-github-link');

  if (demoLink) {
    if (project.links && project.links.demo) {
      demoLink.href = project.links.demo;
      demoLink.classList.remove('hidden');
    } else {
      demoLink.classList.add('hidden');
    }
  }

  if (githubLink) {
    if (project.links && project.links.github) {
      githubLink.href = project.links.github;
      githubLink.classList.remove('hidden');
    } else {
      githubLink.classList.add('hidden');
    }
  }

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// ------------------------------------------------------------
// 8. Formulário de Contato Interativo com Toast
// ------------------------------------------------------------
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('feedback-toast');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Enviando...
        `;
      }

      // Simulação de envio com feedback visual imediato
      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        if (toast) {
          toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
          setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
          }, 4500);
        }
      }, 700);
    });
  }
}

// ------------------------------------------------------------
// 9. Menu Mobile
// ------------------------------------------------------------
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// ------------------------------------------------------------
// 10. Copiar Link do Portfólio
// ------------------------------------------------------------
function copyPortfolioLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const toast = document.getElementById('copy-toast');
    if (toast) {
      toast.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-2');
      setTimeout(() => {
        toast.classList.add('opacity-0', 'pointer-events-none', '-translate-y-2');
      }, 2500);
    }
  });
}

// ------------------------------------------------------------
// 11. Rolagem Suave
// ------------------------------------------------------------
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
