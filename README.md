# Astro Blog

A simple blog made using Astro. The blog is for learning purpose only, and the output of the astro blog tutorial.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
|   └── components/
|   |   └── *.astro # astro components
|   |   └── *.jsx  # react components
|   |   └── *.svelte # svelte components
|   |   └── ...
|   └── layouts/
|   |   └── BaseLayout.astro
|   |   └── MarkdownPostLayout.astro
│   └── pages/
|   |   └── posts/
|   |   |   └── post-1.md
|   |   |   └── ...
|   |   └── tags/
|   |   |   └── [tag].astro
|   |   |   └── index.astro
│   |   └── about.astro
|   |   └── blog.astro
|   |   └── index.astro
|   |   └── rss.xml.js
|   └── scripts/
|   |   └── menu.js
|   └── styles/
|   |   └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
