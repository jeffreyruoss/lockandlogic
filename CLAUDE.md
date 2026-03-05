# Lock & Logic

Escape room website project.

## Project Structure

- **Root** (`/`) — Astro site (main website), repo: `jeffreyruoss/lockandlogic`
- **`docs-site/`** — Separate git repo (`jeffreyruoss/lockandlogic-docs`), VitePress docs site with password protection. All markdown docs live in `docs-site/docs/`.

## Docs Site (`docs-site/`)

- VitePress with `srcDir: 'docs'`, `base: '/lockandlogic-docs/'`
- Config at `.vitepress/config.mts`, custom theme at `.vitepress/theme/`
- Client-side password gate (password in `PasswordGate.vue`, default: `SiL$C6$Td4*wA6se`, stored in `localStorage` as `ll-docs-auth`)
- All markdown docs live directly in `docs-site/docs/` (single source of truth)
- Dev server: `npm run docs:dev` (serves at `http://localhost:5173/lockandlogic-docs/`)
- Sidebar: 5 client-facing docs by default; admin IP sees all docs grouped by Client-Facing / Internal
- `feature-estimator.md` uses a Vue component
- GitHub Pages deployment via `.github/workflows/deploy.yml`

## Commands

- `npm run docs:dev` — Start VitePress dev server (from `docs-site/`)
- `npm run docs:build` — Build static site (from `docs-site/`)
