# 🚀 Portfólio Danilo Oliveira — Versão 2 (Editorial & Dark Blue)

Segunda versão visual e arquitetural da vitrine de projetos de **Danilo Oliveira** (`@daniloliveira89`), desenvolvida com inspiração direta no design system do repositório de referência [`mahmudpial/my-protfolio-app`](https://github.com/mahmudpial/my-protfolio-app), mantendo a sua versão original completamente intacta.

---

## ✨ Características Desta Versão (v2)

### 1. Design System & Identidade Visual
* **Paleta Dark Blue / Obsidian:**
  * Fundo profundo: `#05080F` (void)
  * Cartões & Superfícies: `#0D1220` (surface)
  * Containers & Inputs: `#141B2D` (panel)
  * Acentos Elétricos: `#3B82F6` (electric) e `#60A5FA` (glow)
  * Textos: `#A8C4E8` (frost) e `#6B7280` (smoke)
* **Tipografia Editorial:**
  * Títulos e cabeçalhos em **Playfair Display** (serifa refinada de alta sofisticação).
  * Textos de leitura e dados em **DM Sans** (alta legibilidade e estética moderna).
* **Grid Blueprint & Brilhos Radiais:** Malha de linhas sutis de 48px e orbes difusas azuis em pulso atmosférico.
* **Barra de Navegação em Vidro (Nav-Glass):** Efeito glassmorphic com desfoque de 16px, monograma `DO` com ponto pulsante animado e links com linha luminosa em hover.

### 2. Seções & Funcionalidades
1. **Hero com Efeito Typewriter:** Alternância automática de papéis técnicos (*Engenheiro de Software & I.A., Full-Stack Web Developer, Desenvolvedor de Jogos WebGL, Criador de Extensões Chrome MV3*), badge com sinalizador verde pulsante (*"Disponível para projetos & contratos"*), botões luminosos com sombra elétrica e o **Profile Card** com métricas e badges flutuantes (*Clean Code, Open to Work, WebGL & I.A.*).
2. **Serviços que Ofereço:** Grade com 6 especialidades com ícones elétricos em cards com relevo e hover azul.
3. **Tecnologias & Proficiência (Skills):** Filtro por categoria (Todas, Frontend & WebGL, I.A. & Backend, Extensões & DevOps) com barras de progresso iluminadas e porcentagens de proficiência.
4. **Catálogo de Projetos (Portfolio):**
   * Contadores dinâmicos (17+ Projetos, 3+ Demos Online, 10+ Extensões).
   * Busca instantânea por digitação (nome, tecnologia ou descrição).
   * Pílulas de filtro por categoria (Todos, Web Apps & I.A., Jogos & WebGL, Atlas Suite, Extensões Chrome, Desktop & Automação).
   * Cards com badges de status, tags e ações diretas.
5. **Modal Interativo de Detalhes:** Visualização ampliada do projeto, imagem de alta definição, checklist de destaques de arquitetura e links diretos para GitHub e Demonstração Online.
6. **Sobre o Desenvolvedor:** Filosofia técnica, dados de atuação remota e os 3 pilares de engenharia (*Performance, Autonomia, Usabilidade*).
7. **Formulário de Contato Interativo:** Painel de canais diretos + formulário com feedback visual imediato via Toast notification.

---

## 🛠 Arquitetura & Vantagens

Diferente do repositório original de referência (que depende de PHP 8.4, Laravel 12 e servidor MySQL ativo), esta versão foi concebida sob o padrão **Jamstack Estático de Alta Fidelidade**:
* **Zero Latência / Sem Cold Starts:** Carrega instantaneamente em qualquer navegador ou CDN.
* **Custo Zero de Hospedagem:** Pronto para publicação gratuita no **GitHub Pages**, **Vercel** ou **Netlify** (já inclui `vercel.json` e `netlify.toml`).
* **Zero Vulnerabilidades de Servidor:** Sem risco de injeção em banco de dados ou problemas com versões de runtime backend.

---

## 📁 Estrutura de Arquivos

```
danilo-portfolio-v2/
├── index.html                  # Página principal completa
├── netlify.toml                # Configurações de cache e SPA para Netlify
├── vercel.json                 # Configurações de cache para Vercel
├── README.md                   # Documentação da versão v2
└── assets/
    ├── images/                 # Todas as 50 capturas, mockups e ícones
    └── js/
        ├── projects-data.js    # Base de dados dos 17 projetos catalogados
        └── app.js              # Typewriter, filtros, busca, modal e formulário
```

---

## 🚀 Como Visualizar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador:
* Pelo Windows Explorer: Dois cliques em `index.html`.
* Pelo VS Code / Cursor: Extensão *Live Server*.
* Por comando Python: `python -m http.server 8080` dentro da pasta do projeto.
