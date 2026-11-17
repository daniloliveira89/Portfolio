// Gerenciamento e Interatividade do Portfólio

let activeCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderProjects();
  setupFilterListeners();
  setupSearchListener();
  setupModalHandlers();
});

// Atualiza contadores do cabeçalho
function renderStats() {
  const statProjects = document.getElementById('stat-total-projects');
  const statDemos = document.getElementById('stat-live-demos');
  const statCategories = document.getElementById('stat-categories');

  if (statProjects) statProjects.textContent = PROJECTS_DATA.length;
  if (statDemos) statDemos.textContent = PORTFOLIO_STATS.liveDemos;
  if (statCategories) statCategories.textContent = PORTFOLIO_STATS.totalCategories;

  // Atualiza contadores nos botões de filtro
  document.querySelectorAll('[data-category]').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    const badge = btn.querySelector('.filter-count');
    if (badge) {
      if (cat === 'all') {
        badge.textContent = PROJECTS_DATA.length;
      } else {
        const count = PROJECTS_DATA.filter(p => p.category === cat).length;
        badge.textContent = count;
      }
    }
  });
}

// Renderiza a lista de projetos na grade
function renderProjects() {
  const container = document.getElementById('projects-grid');
  const emptyState = document.getElementById('empty-state');
  if (!container) return;

  const filtered = PROJECTS_DATA.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
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

  container.innerHTML = filtered.map(project => `
    <article class="group relative flex flex-col bg-slate-900/80 rounded-2xl border border-slate-800/80 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 overflow-hidden transform hover:-translate-y-1.5">
      <!-- Imagem de Apresentação -->
      <div class="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950 cursor-pointer" onclick="openProjectModal('${project.id}')">
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onerror="this.src='assets/images/radar-ia.jpg'"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
        
        <!-- Badge Superior -->
        <div class="absolute top-3 left-3 flex items-center gap-2">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
            project.badge.includes('Live') 
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
              : project.badge.includes('Jogo')
              ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30'
              : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
          }">
            ${project.badge.includes('Live') ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>' : ''}
            ${project.badge}
          </span>
        </div>

        <!-- Categoria Flutuante -->
        <div class="absolute top-3 right-3">
          <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900/80 backdrop-blur-md text-slate-300 border border-slate-700/60">
            ${project.categoryLabel}
          </span>
        </div>

        ${project.gallery && project.gallery.length > 1 ? `
          <span class="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md text-[10px] font-mono bg-black/70 text-slate-200 border border-white/10">
            📷 ${project.gallery.length} telas
          </span>
        ` : ''}
      </div>

      <!-- Conteúdo do Card -->
      <div class="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 
            class="text-xl font-bold text-white group-hover:text-sky-400 transition-colors cursor-pointer line-clamp-1 mb-2.5"
            onclick="openProjectModal('${project.id}')"
          >
            ${project.title}
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
            ${project.shortDescription}
          </p>

          <!-- Tags Tecnológicas -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${project.tags.slice(0, 4).map(tag => `
              <span class="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/50">
                ${tag}
              </span>
            `).join('')}
            ${project.tags.length > 4 ? `
              <span class="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-800/50 text-slate-400">
                +${project.tags.length - 4}
              </span>
            ` : ''}
          </div>
        </div>

        <!-- Botões de Ação -->
        <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <button 
            onclick="openProjectModal('${project.id}')"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors py-1.5"
          >
            <span>Ver Detalhes</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <div class="flex items-center gap-2">
            ${project.links.demo ? `
              <a 
                href="${project.links.demo}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-colors shadow-sm shadow-sky-500/20"
                title="Acessar demonstração online"
              >
                <span>Demo</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            ` : ''}

            ${project.links.github ? `
              <a 
                href="${project.links.github}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/60 transition-colors"
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
  `).join('');
}

// Configura filtros de categoria
function setupFilterListeners() {
  const buttons = document.querySelectorAll('[data-category]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-sky-500', 'text-slate-950', 'font-bold');
        b.classList.add('bg-slate-900', 'text-slate-400', 'hover:text-white', 'hover:bg-slate-800');
      });

      btn.classList.remove('bg-slate-900', 'text-slate-400', 'hover:text-white', 'hover:bg-slate-800');
      btn.classList.add('bg-sky-500', 'text-slate-950', 'font-bold');

      activeCategory = btn.getAttribute('data-category');
      renderProjects();
    });
  });
}

// Configura busca em tempo real
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

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        clearBtn.classList.add('hidden');
        renderProjects();
      }
    });
  }
}

// Abre o Modal de Detalhes do Projeto
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');

  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Header com Banner -->
    <div class="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
      <img 
        id="modal-main-img"
        src="${project.image}" 
        alt="${project.title}" 
        class="w-full h-full object-cover object-center"
        onerror="this.src='assets/images/radar-ia-real.png'"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      
      <!-- Botão Fechar -->
      <button 
        onclick="closeProjectModal()" 
        class="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/60 backdrop-blur-md transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Badges no Banner -->
      <div class="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 backdrop-blur-md">
            ${project.categoryLabel}
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
            ${project.badge}
          </span>
        </div>
      </div>
    </div>

    <!-- Miniaturas da Galeria -->
    ${project.gallery && project.gallery.length > 1 ? `
      <div class="flex gap-2 px-6 pt-3 pb-2 overflow-x-auto bg-slate-950/90 border-b border-slate-800/80">
        ${project.gallery.map((imgSrc, idx) => `
          <button type="button" onclick="document.getElementById('modal-main-img').src='${imgSrc}'"
                  class="w-20 h-12 rounded-lg overflow-hidden border-2 border-slate-700 hover:border-sky-400 flex-shrink-0 transition">
            <img src="${imgSrc}" alt="Screenshot ${idx + 1}" class="w-full h-full object-cover"
                 onerror="this.src='assets/images/radar-ia-real.png'">
          </button>
        `).join('')}
      </div>
    ` : ''}

    <!-- Corpo do Modal -->
    <div class="p-6 sm:p-8 space-y-6">
      <div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">
          ${project.title}
        </h2>
        <p class="text-slate-300 leading-relaxed text-base whitespace-pre-line">
          ${project.fullDescription}
        </p>
      </div>

      <!-- Recursos & Funcionalidades Principais -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
          Principais Recursos & Arquitetura
        </h4>
        <ul class="space-y-2.5">
          ${project.features.map(f => `
            <li class="flex items-start gap-2.5 text-sm text-slate-300">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Tecnologias Utilizadas -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
          Stack Tecnológico
        </h4>
        <div class="flex flex-wrap gap-2">
          ${project.tags.map(tag => `
            <span class="px-3 py-1 text-xs font-medium rounded-lg bg-slate-800 text-sky-300 border border-slate-700">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Links & Ações -->
      <div class="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          ${project.links.demo ? `
            <a 
              href="${project.links.demo}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-lg shadow-sky-500/25"
            >
              <span>Acessar Demo Online</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          ` : ''}

          ${project.links.github ? `
            <a 
              href="${project.links.github}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>Ver Código no GitHub</span>
            </a>
          ` : ''}
        </div>

        <button 
          onclick="closeProjectModal()" 
          class="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function setupModalHandlers() {
  const modal = document.getElementById('project-modal');
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

// Compartilhar / Copiar link
function copyPortfolioLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.remove('translate-y-20', 'opacity-0');
      setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 3000);
    }
  });
}
