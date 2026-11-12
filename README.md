# 🚀 Portfólio & Vitrine de Projetos — Danilo Oliveira

Site de apresentação moderno, veloz e responsivo desenvolvido para exibir todo o ecossistema de projetos de **Danilo Oliveira** (`@daniloliveira89`).

A interface foi projetada com estética dark moderna (estilo obsidian com tons de azul e roxo néon), cards visuais de alta definição para cada projeto, filtros interativos por categoria, busca em tempo real e modal de detalhes.

---

## 📸 Recursos Visuais & Categorias Incluídas

O portfólio já vem catalogado com todos os projetos do seu GitHub e ambiente local:

1. **Web Apps & Inteligência Artificial:**
   - **Radar IA:** Observatório global de modelos e benchmarks de IA (*com link de Demo Online*).
   - **Prompt Studio AI:** Estúdio visual para engenharia de prompts e estilos de IA generativa (*com link de Demo Online*).
   - **Calculadora de Juros Compostos Global:** Simulador financeiro com curvas interativas (CDI, Tesouro, Ouro, Bitcoin) em Plotly.js.
   - **IVFR (Índice de Custo de Vida):** Calculador econômico de viabilidade e poder de compra real.

2. **Jogos & WebGL:**
   - **Neon Synapse (Chrome & Neon):** Card game tático cyberpunk com mecânicas de 3 fileiras (estilo Gwent), implantes, cyberpsicose e renderização acelerada por WebGL via PixiJS.

3. **Atlas Suite (Ecossistema de Mídia PWA):**
   - **Music Atlas:** Streaming musical PWA com backend serverless em Cloudflare Workers e reprodução contínua em segundo plano no iPhone.
   - **Bookshelf Atlas:** Gestão de biblioteca pessoal integrando Notion e Google Sheets.
   - **Cinematheque Atlas:** Acervo de cinema, coleções e diretores.
   - **Game Atlas:** Hub de backlog e tempo de jogo.

4. **Extensões de Navegador (Chrome MV3):**
   - **Universal Music & OST Downloader:** Download inteligente em lote (KHInsider e fontes genéricas) com organização automática de pastas e suporte a FLAC.
   - **YouTube Power Tools Suite:** Conjunto de 6 extensões (Transcrição limpa, Return Dislike, Volume Booster 600%, Speed Video granular, Watch Time e Auto-Like).
   - **Prompt Studio AI Extension:** Extensão para criação ágil de prompts direto nas abas de IA.
   - **Sync to Notion / Music to Notion:** Envio de mídias para bases de dados no Notion.

5. **Desktop & Automações:**
   - **Torrent Rename & Media Normalizer:** Utilitário Python com regex para renomeação em massa de séries e filmes.
   - **RClone Manager Desktop:** Interface gráfica em C#/.NET para gerenciamento de múltiplos remotes em nuvem.
   - **Cinema Sync:** Pipeline ETL Python entre Notion e Google Sheets.
   - **Nuvem Sync CLI:** Scripts de backup e espelhamento em nuvem.

---

## 💻 Como Visualizar Localmente no Computador

Você não precisa instalar dependências pesadas nem compilar nada. O site foi projetado em HTML5, JavaScript moderno e Tailwind CSS.

### Opção 1: Direto no navegador
Basta dar **duplo clique** no arquivo `index.html`!

### Opção 2: Servidor local rápido (Python)
Se preferir rodar com um servidor local:
```bash
cd "C:\Users\Zombie PC\.gemini\antigravity\scratch\danilo-portfolio"
python -m http.server 3000
```
E abra `http://localhost:3000` no seu navegador.

---

## 🌐 Como Publicar (Deploy)

O projeto já inclui todos os arquivos de configuração para as 3 principais plataformas gratuitas:

### 1. Vercel (Recomendado)
- **Método 1 (Via GitHub):** Crie um repositório no seu GitHub com estes arquivos. Acesse [vercel.com](https://vercel.com), clique em **Add New Project**, selecione o repositório e clique em **Deploy**.
- **Método 2 (Via CLI):**
  ```bash
  npm i -g vercel
  vercel
  ```
*(O arquivo `vercel.json` incluso já cuida dos headers de cache e roteamento).*

### 2. Netlify
- **Método Drag-and-Drop:** Acesse [app.netlify.com/drop](https://app.netlify.com/drop) e simplesmente arraste a pasta `danilo-portfolio` para a janela do navegador. Em 5 segundos seu site estará no ar!
- *(O arquivo `netlify.toml` incluso já está configurado).*

### 3. GitHub Pages
1. Crie um repositório no GitHub (por exemplo: `danilo-portfolio` ou `daniloliveira89.github.io`).
2. Suba os arquivos para a branch `main`:
   ```bash
   git init
   git add .
   git commit -m "feat: site de apresentação de projetos"
   git branch -M main
   git remote add origin https://github.com/daniloliveira89/SEU-REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**. O workflow `.github/workflows/deploy.yml` incluso fará a publicação automática!

---

## ✏️ Como Adicionar Novos Projetos

Para incluir ou alterar projetos, basta abrir o arquivo [`assets/js/projects-data.js`](assets/js/projects-data.js). Cada projeto é um objeto simples:

```javascript
{
  id: "meu-novo-projeto",
  title: "Nome do Projeto",
  category: "web-ai", // ou 'games', 'atlas', 'extensions', 'desktop'
  categoryLabel: "Web Apps & I.A.",
  badge: "Destaque • Live",
  shortDescription: "Descrição curta para o card...",
  fullDescription: "Descrição completa exibida ao abrir o modal...",
  image: "assets/images/minha-imagem.jpg",
  tags: ["TypeScript", "Next.js"],
  links: {
    github: "https://github.com/daniloliveira89/...",
    demo: "https://..." // ou null se não houver
  },
  features: [
    "Recurso 1...",
    "Recurso 2...",
    "Recurso 3..."
  ]
}
```

As estatísticas, contadores de filtros e filtros de busca se atualizam **automaticamente**!
