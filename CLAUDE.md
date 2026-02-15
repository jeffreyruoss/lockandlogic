# Lock & Logic

Escape room website project.

## Project Structure

- **Root** (`/`) — Astro site (main website), repo: `jeffreyruoss/lockandlogic`
- **`docs/`** — Markdown project documents (client briefs, estimates, questionnaires, competitor analysis)
- **`docs-site/`** — Separate git repo (`jeffreyruoss/lockandlogic-docs`), VitePress docs site that renders `docs/` files with password protection

## Docs Site (`docs-site/`)

- VitePress with `srcDir: 'docs'`, `base: '/lockandlogic-docs/'`
- Config at `.vitepress/config.mts`, custom theme at `.vitepress/theme/`
- Client-side password gate (password in `PasswordGate.vue`, default: `lockandlogic2026`, stored in `localStorage` as `ll-docs-auth`)
- Markdown files are **copied** from `../docs/` — run `npm run sync` (or `bash sync-docs.sh`) to update
- Dev server: `npm run docs:dev` (serves at `http://localhost:5173/lockandlogic-docs/`)
- Sidebar: Client-Facing group (6 docs) + Internal group (5 docs)
- GitHub Pages deployment via `.github/workflows/deploy.yml`

## Commands

- `npm run docs:dev` — Start VitePress dev server (from `docs-site/`)
- `npm run docs:build` — Build static site (from `docs-site/`)
- `npm run sync` — Copy markdown files from `../docs/` into `docs-site/docs/`
