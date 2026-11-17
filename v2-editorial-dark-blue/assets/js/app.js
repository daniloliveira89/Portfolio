document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. TYPEWRITER EFFECT NO HERO
  // ==========================================
  const roles = [
    "Engenheiro de Software & I.A.",
    "Full-Stack Web Developer",
    "Criador de Layouts & Experiências WebGL",
    "Especialista em Extensões Chrome MV3",
    "Arquiteto de Soluções Serverless & PWA"
  ];
  const typedEl = document.getElementById('typed-role');
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!typedEl) return;
    const currentRole = roles[roleIndex];
    typedEl.textContent = currentRole.substring(0, charIndex);

    let speed = isDeleting ? 35 : 75;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    } else {
      charIndex += isDeleting ? -1 : 1;
    }
    setTimeout(typeEffect, speed);
  }
  typeEffect();

  // ==========================================
  // 2. MATRIZ DE SKILLS COM FILTRO
  // ==========================================
  const SKILLS_DATA = [
    { name: "TypeScript / ESNext", level: 95, category: "frontend" },
    { name: "React & Next.js", level: 92, category: "frontend" },
    { name: "Tailwind CSS & UI/UX Editorial", level: 96, category: "frontend" },
    { name: "PixiJS / WebGL / Canvas 2D", level: 88, category: "frontend" },
    { name: "Engenharia de Prompts & LLMs", level: 95, category: "ai-backend" },
    { name: "Cloudflare Workers (Serverless)", level: 90, category: "ai-backend" },
    { name: "Python 3 & Automação de Dados", level: 90, category: "ai-backend" },
    { name: "Notion API & Google Sheets API", level: 94, category: "ai-backend" },
    { name: "Chrome Extensions (Manifest V3)", level: 96, category: "tools" },
    { name: "PWA & Web Audio / MediaSession", level: 92, category: "tools" },
    { name: "GitHub Actions CI/CD & Vercel", level: 90, category: "tools" },
    { name: "C# / .NET & Rclone CLI", level: 84, category: "tools" }
  ];

  const skillsContainer = document.getElementById('skills-container');
  const skillBtns = document.querySelectorAll('.skill-filter-btn');

  function renderSkills(filter = 'all') {
    if (!skillsContainer) return;
    const filtered = filter === 'all' ? SKILLS_DATA : SKILLS_DATA.filter(s => s.category === filter);
    skillsContainer.innerHTML = filtered.map(skill => `
      <div class="rounded-2xl p-5 border border-electric/15 hover:border-electric/40 transition-all"
           style="background: rgba(13,18,32,0.85);">
        <div class="flex justify-between items-center mb-2.5">
          <span class="text-xs font-semibold text-white">${skill.name}</span>
          <span class="text-xs font-mono text-glow">${skill.level}%</span>
        </div>
        <div class="w-full h-1.5 rounded-full bg-panel overflow-hidden">
          <div class="h-full rounded-full bg-gradient-to-r from-electric to-glow transition-all duration-700"
               style="width: ${skill.level}%; box-shadow: 0 0 10px rgba(59,130,246,0.5);"></div>
        </div>
      </div>
    `).join('');
  }

  skillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillBtns.forEach(b => {
        b.classList.remove('bg-electric', 'border-electric', 'text-white');
        b.classList.add('border-electric/25', 'text-frost');
      });
      btn.classList.add('bg-electric', 'border-electric', 'text-white');
      btn.classList.remove('border-electric/25', 'text-frost');
      renderSkills(btn.dataset.skillFilter);
    });
  });
  renderSkills();

  // ==========================================
  // 3. CATÁLOGO DE PROJETOS, BUSCA E CONTADORES
  // ==========================================
  const grid = document.getElementById('projects-grid');
  const emptyState = document.getElementById('empty-state');
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search');
  const filterBtns = document.querySelectorAll('[data-category]');

  let activeCategory = 'all';
  let searchQuery = '';

  function updateCounters() {
    const totalEl = document.getElementById('stat-total-projects');
    const cardTotalEl = document.getElementById('stat-card-projects');
    const demosEl = document.getElementById('stat-live-demos');
    const extensionsEl = document.getElementById('stat-extensions');

    if (totalEl) totalEl.textContent = `${PROJECTS_DATA.length}+`;
    if (cardTotalEl) cardTotalEl.textContent = `${PROJECTS_DATA.length}+`;
    const demosCount = PROJECTS_DATA.filter(p => p.links && p.links.demo).length;
    if (demosEl) demosEl.textContent = `${demosCount}+`;
    const extensionsCount = PROJECTS_DATA.filter(p => p.category === 'extensions').length;
    if (extensionsEl) extensionsEl.textContent = `${extensionsCount}+`;

    filterBtns.forEach(btn => {
      const cat = btn.dataset.category;
      const countSpan = btn.querySelector('.filter-count');
      if (!countSpan) return;
      const count = cat === 'all'
        ? PROJECTS_DATA.length
        : PROJECTS_DATA.filter(p => p.category === cat).length;
      countSpan.textContent = count;
    });
  }

  function renderProjects() {
    if (!grid) return;
    const filtered = PROJECTS_DATA.filter(project => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.categoryLabel.toLowerCase().includes(q) ||
        project.tags.some(t => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.classList.add('hidden');
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    grid.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map(project => `
      <article class="group rounded-2xl overflow-hidden border border-electric/15 hover:border-electric/45 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 cursor-pointer"
               style="background: rgba(13,18,32,0.88); backdrop-filter: blur(10px);"
               onclick="openProjectModal('${project.id}')">
        <div>
          <!-- Imagem de Capa Real -->
          <div class="relative h-48 overflow-hidden bg-void">
            <img src="${project.image}" alt="${project.title}" loading="lazy"
                 class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                 onerror="this.src='assets/images/radar-ia-real.png'">
            <div class="absolute inset-0 bg-gradient-to-t from-[#0D1220] via-transparent to-transparent opacity-85"></div>
            
            <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-electric text-white shadow">
                ${project.categoryLabel}
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-glow border border-electric/30 bg-void/85 backdrop-blur-md">
                ${project.badge}
              </span>
            </div>

            ${project.gallery && project.gallery.length > 1 ? `
              <span class="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md text-[10px] font-mono bg-black/70 text-frost border border-white/10">
                📷 ${project.gallery.length} telas
              </span>
            ` : ''}
          </div>

          <!-- Corpo do Card -->
          <div class="p-6">
            <h3 class="font-display text-lg font-bold text-white group-hover:text-glow transition-colors line-clamp-1">
              ${project.title}
            </h3>
            <p class="mt-2 text-xs text-frost leading-relaxed line-clamp-3">
              ${project.shortDescription}
            </p>
          </div>
        </div>

        <!-- Rodapé do Card -->
        <div class="px-6 pb-6 pt-2">
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${project.tags.slice(0, 4).map(tag => `
              <span class="px-2 py-0.5 rounded-md text-[10px] font-mono text-frost/90 bg-panel border border-electric/15">
                ${tag}
              </span>
            `).join('')}
          </div>

          <div class="pt-3 border-t border-electric/15 flex items-center justify-between text-xs">
            <span class="text-electric font-semibold group-hover:text-glow flex items-center gap-1">
              <span>Inspecionar Projeto</span>
              <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </span>

            ${project.links && project.links.demo ? `
              <a href="${project.links.demo}" target="_blank" rel="noopener noreferrer"
                 onclick="event.stopPropagation()"
                 class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 transition">
                Abrir Demo ↗
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      filterBtns.forEach(b => {
        b.classList.remove('bg-electric', 'border-electric', 'text-white');
        b.classList.add('border-electric/25', 'text-frost');
      });
      btn.classList.add('bg-electric', 'border-electric', 'text-white');
      btn.classList.remove('border-electric/25', 'text-frost');
      renderProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('hidden', !searchQuery);
      }
      renderProjects();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      renderProjects();
    });
  }

  // ==========================================
  // 4. MODAL COM GALERIA MULTI-FOTO
  // ==========================================
  const modal = document.getElementById('project-modal');
  const closeModalBtn = document.getElementById('close-modal');

  window.openProjectModal = function(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project || !modal) return;

    const modalImg = document.getElementById('modal-image');
    modalImg.src = project.image;
    modalImg.alt = project.title;

    document.getElementById('modal-category').textContent = project.categoryLabel;
    document.getElementById('modal-badge').textContent = project.badge;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.fullDescription;

    // Galeria de miniaturas (se houver mais de 1 foto)
    let galleryContainer = document.getElementById('modal-gallery-thumbs');
    if (!galleryContainer) {
      galleryContainer = document.createElement('div');
      galleryContainer.id = 'modal-gallery-thumbs';
      galleryContainer.className = 'flex gap-2 px-6 pt-4 overflow-x-auto';
      modalImg.parentElement.insertAdjacentElement('afterend', galleryContainer);
    }

    if (project.gallery && project.gallery.length > 1) {
      galleryContainer.classList.remove('hidden');
      galleryContainer.innerHTML = project.gallery.map((imgSrc, idx) => `
        <button type="button" onclick="document.getElementById('modal-image').src='${imgSrc}'"
                class="w-20 h-12 rounded-lg overflow-hidden border-2 border-electric/30 hover:border-glow flex-shrink-0 transition">
          <img src="${imgSrc}" alt="Screenshot ${idx + 1}" class="w-full h-full object-cover"
               onerror="this.src='assets/images/radar-ia-real.png'">
        </button>
      `).join('');
    } else {
      galleryContainer.classList.add('hidden');
    }

    // Features
    document.getElementById('modal-features').innerHTML = project.features.map(f => `
      <li class="flex items-start gap-2.5 text-xs text-frost">
        <span class="w-1.5 h-1.5 rounded-full bg-electric mt-1.5 flex-shrink-0"></span>
        <span>${f}</span>
      </li>
    `).join('');

    // Tags
    document.getElementById('modal-tags').innerHTML = project.tags.map(t => `
      <span class="px-2.5 py-1 rounded-lg text-xs font-mono text-glow bg-panel border border-electric/20">
        ${t}
      </span>
    `).join('');

    // Links
    const ghLink = document.getElementById('modal-github-link');
    const demoLink = document.getElementById('modal-demo-link');

    if (ghLink) ghLink.href = project.links.github || 'https://github.com/daniloliveira89';
    if (demoLink) {
      if (project.links.demo) {
        demoLink.href = project.links.demo;
        demoLink.classList.remove('hidden');
      } else {
        demoLink.classList.add('hidden');
      }
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ==========================================
  // 5. FORMULÁRIO DE CONTATO & COMPARTILHAR
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const feedbackToast = document.getElementById('feedback-toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const textInputs = contactForm.querySelectorAll('input[type="text"]');
      const name = textInputs[0] ? textInputs[0].value : '';
      const email = contactForm.querySelector('input[type="email"]')?.value || '';
      const subject = textInputs[1] ? textInputs[1].value : 'Contato Portfólio Danilo Oliveira';
      const msg = contactForm.querySelector('textarea')?.value || '';

      // Mostra o feedback toast
      if (feedbackToast) {
        feedbackToast.classList.remove('translate-y-20', 'opacity-0');
        setTimeout(() => {
          feedbackToast.classList.add('translate-y-20', 'opacity-0');
        }, 4000);
      }

      // Abre cliente de email com dados preenchidos
      const mailtoUrl = `mailto:danilooliveira.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${msg}`)}`;
      window.open(mailtoUrl, '_blank');

      contactForm.reset();
    });
  }

  window.copyPortfolioLink = function() {
    navigator.clipboard.writeText(window.location.href);
    const copyToast = document.getElementById('copy-toast') || document.getElementById('toast');
    if (copyToast) {
      copyToast.classList.remove('-translate-y-2', 'translate-y-20', 'opacity-0');
      setTimeout(() => {
        copyToast.classList.add('opacity-0');
      }, 2800);
    }
  };

  // Menu Mobile
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }

  updateCounters();
  renderProjects();
});
