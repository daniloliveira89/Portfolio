# Áuria — demonstração de clínica odontológica

Site responsivo em português, feito em HTML, CSS e JavaScript. A pasta `dist` contém o site completo e funciona sem compilação ou dependências.

## Abrir

Abra `dist/index.html` ou, nesta pasta, execute `python -m http.server 4173 --directory dist`. Acesse http://localhost:4173.

## Publicar na Netlify ou Vercel

Na Netlify, é possível arrastar a pasta `dist` para a publicação manual. Para importar o repositório, o arquivo `netlify.toml` já define a pasta de publicação. Na Vercel, importe o projeto como Other, sem comando de build, com a saída `dist`; a configuração está em `vercel.json`.

## Personalizar antes de usar com uma clínica real

Substitua a marca fictícia, imagens de referência, textos, equipe, registros profissionais e dados de contato por informações verificadas da clínica. Configure um canal real para os pedidos de contato e a política de privacidade correspondente. Não há agenda, banco de dados ou backend nesta demonstração.

Os cartões de tratamentos abrem detalhes, o menu se adapta ao celular e as perguntas são expansíveis. O formulário valida campos e apresenta uma simulação; não armazena nem envia dados. Google Fonts fornece as fontes; as fotografias de referência foram obtidas no Unsplash.
