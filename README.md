# 🚀 Hub de Portfólios — Danilo Oliveira (`@daniloliveira89`)

Este repositório centraliza as duas versões conceituais do portfólio e vitrine de projetos de **Danilo Oliveira**, organizadas em subpastas independentes para diferentes objetivos estratégicos (prospecção B2B de clientes, candidaturas internacionais e catálogo técnico completo).

---

## ⚖️ Comparativo Conceitual & Técnico

| Característica | ⚡ **Versão 1 — Vitrine & Catálogo Direto** (`v1-vitrine-dark-neon`) | 🏛️ **Versão 2 — Editorial & Dark Blue** (`v2-editorial-dark-blue`) |
| :--- | :--- | :--- |
| **Conceito / Proposta** | **Vitrine de Projetos Direta** (Foco exclusivo em exibir os 17 projetos, extensões e demos). | **Site Pessoal Editorial Completo** (Estilo agência / estúdio internacional de engenharia). |
| **Referência Visual** | Estética Obsidian Dark com tons de azul e roxo néon. | Inspirado no design system da referência [`mahmudpial/my-protfolio-app`](https://github.com/mahmudpial/my-protfolio-app). |
| **Tipografia** | `Inter` + `JetBrains Mono`. | `Playfair Display` (serifa editorial refinada) + `DM Sans` + `JetBrains Mono`. |
| **Paleta de Cores** | Preto `#0B0F19`, Roxo Néon `#8B5CF6`, Azul `#3B82F6`. | Dark Blue profundo (`#05080F`, `#0D1220`, `#141B2D`) com acentos elétricos (`#3B82F6` / `#60A5FA`). |
| **Estrutura / Seções** | **2 seções** (487 linhas de código):<br>• Hero com Status ("Disponível para Projetos")<br>• Catálogo de Projetos (`#projetos`) com filtros e busca<br>• Sobre o Autor simples (`#sobre`) | **5 seções completas** (1.043 linhas de código):<br>1. **Hero com Typewriter** dinâmico e Profile Card flutuante<br>2. **Serviços** (`#services`) com 6 especialidades B2B<br>3. **Skills & Tecnologias** (`#skills`) com barras luminosas interativas<br>4. **Portfolio** (`#portfolio`) com contadores, busca e modal<br>5. **Sobre Mim** (`#about`) com pilares de engenharia<br>6. **Contato** (`#contact`) com formulário e Toast notification |
| **Efeitos Visuais** | Cards dark com hover, badges de status e tags. | Malha Blueprint (48px), orbes atmosféricos pulsantes, barra Nav-Glass com monograma `DO` animado. |
| **Base de Dados** | 17 projetos catalogados (`projects-data.js`). | Mesmos 17 projetos catalogados (`projects-data.js`). |
| **Melhor Uso** | Propostas rápidas onde o contratante quer apenas ver links de código e demos funcionais. | **Prospecção de alto ticket e plataformas freelance (Upwork / Contra / Malt)** onde autoridade, apresentação e escopo de serviços contam muito. |

---

## 📁 Estrutura do Diretório

```
Portfolio/
├── v1-vitrine-dark-neon/           # Versão 1: Catálogo objetivo de projetos e extensões
│   ├── index.html                  # Interface principal
│   ├── netlify.toml                # Configurações Netlify
│   ├── vercel.json                 # Configurações Vercel
│   ├── README.md                   # Documentação detalhada da v1
│   └── assets/                     # Imagens dos 17 projetos e scripts
│
├── v2-editorial-dark-blue/         # Versão 2: Site editorial completo com serviços e skills
│   ├── index.html                  # Interface editorial com Typewriter, Serviços, Skills e Contato
│   ├── netlify.toml                # Configurações Netlify
│   ├── vercel.json                 # Configurações Vercel
│   ├── README.md                   # Documentação detalhada da v2
│   └── assets/                     # Mockups, ícones, app.js com typewriter e projects-data.js
│
└── README.md                       # Este arquivo (guia central comparativo)
```

> [!NOTE]
> Este diretório está sincronizado e acessível tanto por `D:\INSTALADOS\CODEX\Portfolio` quanto por `D:\INSTALADOS\CODEX\Business\Portfolio` via Directory Junction do Windows.

---

## 🚀 Como Visualizar Localmente

Ambas as versões são 100% estáticas (HTML5 + CSS + JavaScript puro), sem necessidade de `npm install`, Node.js ou bancos de dados backend.

### Opção 1: Direto no Navegador (Mais Rápido)
* Para abrir a **Versão 1**: Duplo clique em `v1-vitrine-dark-neon/index.html`.
* Para abrir a **Versão 2**: Duplo clique em `v2-editorial-dark-blue/index.html`.

### Opção 2: Servidor Local via Terminal (Python)
Para rodar qualquer uma das versões com servidor HTTP local:

```bash
# Para a Versão 2 (Editorial & Dark Blue):
cd "D:\INSTALADOS\CODEX\Portfolio\v2-editorial-dark-blue"
python -m http.server 8080
# Acesse no navegador: http://localhost:8080

# Para a Versão 1 (Vitrine & Catálogo):
cd "D:\INSTALADOS\CODEX\Portfolio\v1-vitrine-dark-neon"
python -m http.server 3000
# Acesse no navegador: http://localhost:3000
```

---

## 🌐 Publicação Online (Deploy Gratuito)

Ambas as pastas já contêm os arquivos de configuração `vercel.json` e `netlify.toml` pré-configurados:

1. **Vercel:** Conecte o repositório GitHub e selecione `v1-vitrine-dark-neon` ou `v2-editorial-dark-blue` como Root Directory.
2. **Netlify:** Arraste qualquer uma das duas pastas para [app.netlify.com/drop](https://app.netlify.com/drop).
3. **GitHub Pages:** Crie uma branch ou aponte a pasta desejada no painel de configurações do repositório.
