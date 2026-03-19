# Lock & Logic

Escape room website project.

## Project Structure

- **Root** (`/`) — Astro site (main website), repo: `jeffreyruoss/lockandlogic`
- **`docs-site/`** — Separate git repo (`jeffreyruoss/lockandlogic-docs`), VitePress docs site with password protection. All markdown docs live in `docs-site/docs/`.

## Docs Site (`docs-site/`)

- VitePress with `srcDir: 'docs'`, `base: '/lockandlogic-docs/'`
- Config at `.vitepress/config.mts`, custom theme at `.vitepress/theme/`
- Client-side password gate (`PasswordGate.vue`, stored in `localStorage` as `ll-docs-auth`)
- All markdown docs live directly in `docs-site/docs/` (single source of truth)
- Dev server: `npm run docs:dev` (serves at `http://localhost:5173/lockandlogic-docs/`)
- Sidebar: 5 client-facing docs by default; admin IP sees all docs grouped by Client-Facing / Internal
- `feature-estimator.md` uses a Vue component
- GitHub Pages deployment via `.github/workflows/deploy.yml`

## Commands

- `npm run docs:dev` — Start VitePress dev server (from `docs-site/`)
- `npm run docs:build` — Build static site (from `docs-site/`)

## MCP Image Tools (`.mcp.json`)

- Gemini key is hardcoded; Unsplash, Pexels, and Pixabay keys are still `${ENV_VAR}` references
- Those 3 stock-photo keys need to be either hardcoded in `.mcp.json` or exported in the shell — they previously worked (likely via temporary `export` in a past session)
- Keys needed: `UNSPLASH_ACCESS_KEY`, `PEXELS_API_KEY`, `PIXABAY_API_KEY`

## Additional Work Tracking

Extra work beyond the original proposal is tracked in `docs-site/docs/extras.md` on the docs site repo. After committing significant work to the Astro site, remind the user to consider adding it to the extras page on the docs site if it qualifies (new features, setup config, content, design work — not bug fixes or standard dev tasks).
