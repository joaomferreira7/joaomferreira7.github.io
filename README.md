# João Ferreira — Site

Site pessoal de João Ferreira, para usar como currículo online. HTML, CSS e JS puro.

## Estrutura

```
site/
├── index.html           Página principal (sobre, experiência, projetos, formação, contacto)
├── CV_João_Ferreira.pdf Currículo em PDF (botão "Descarregar CV")
├── css/style.css        Estilos (tema claro/escuro incluído)
├── js/main.js           Toggle de tema, menu mobile, ano no footer
├── assets/img/          Imagens (foto de perfil)
└── blog/
    ├── index.html        Listagem de artigos
    └── template.html      Modelo para criar um novo artigo
```

## Como adicionar um artigo ao blog

1. Duplica `blog/template.html` e renomeia (ex: `blog/o-meu-primeiro-artigo.html`)
2. Edita o título, data e parágrafos dentro do novo ficheiro
3. Abre `blog/index.html` e substitui a mensagem de "sem artigos" (ou adiciona) por um card, seguindo o exemplo comentado no ficheiro:

```html
<a class="blog-card" href="o-meu-primeiro-artigo.html">
  <h3>Título do artigo</h3>
  <p class="blog-meta">Jan 2026</p>
  <p>Resumo curto do artigo.</p>
</a>
```

## Testar localmente

Basta abrir `index.html` diretamente no browser, ou correr um servidor local:

```bash
npx serve .
# ou
python -m http.server 8000
```

## Publicar no GitHub Pages

1. Cria um repositório novo no GitHub (ex: `joaomferreira7.github.io` para ficar no domínio raiz, ou outro nome qualquer para ficar em `/nome-repo`)
2. Dentro desta pasta (`site/`):
   ```bash
   git init
   git add .
   git commit -m "Site inicial"
   git branch -M main
   git remote add origin https://github.com/joaomferreira7/<nome-repo>.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Source → Deploy from branch → main / (root)**
4. O site fica disponível em `https://joaomferreira7.github.io` (se usaste o nome especial) ou `https://joaomferreira7.github.io/<nome-repo>`

## Por editar

- Descrições e links reais dos projetos (Hanabi, Letter Soup, RSS Reader, Cinema Web Application) em `index.html`, secção `#projects`
- Primeiro artigo do blog, quando quiseres publicar