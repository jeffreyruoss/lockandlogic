# Lock & Logic

Escape room website project.

## Project Structure

- **Root** (`/`) — Astro site (main website), repo: `jeffreyruoss/lockandlogic`
- **`docs-site/`** — Separate git repo (`jeffreyruoss/lockandlogic-docs`), VitePress docs site with password protection. All markdown docs live in `docs-site/docs/`.
- **`coming-soon/`** — Separate git repo, static HTML coming-soon page (currently at lockandlogic.com)

## Hosting & Deployment

- **Vercel** — main site deploys via Vercel (Astro SSR with `@astrojs/vercel` adapter)
- Previously on GitHub Pages; migrated to Vercel for private repo support and serverless functions
- Coming-soon page is a separate Vercel project

## Forms System

Three forms, all using the same server-side pipeline: honeypot → Turnstile → rate limit → validate → log → action.

| Form | Page | API Route | Action |
|------|------|-----------|--------|
| Contact | `/contact` | `/api/contact` | Logs to Supabase + emails via Resend |
| Group Inquiry | `/groups` | `/api/group-inquiry` | Logs to Supabase + emails via Resend |
| Newsletter | Homepage | `/api/newsletter` | Logs to Supabase + subscribes via Mailchimp |

### Stack
- **Supabase** — Postgres (`form_submissions` table), project ref: `yfsnhellrgjpjjkgoqry`
- **Resend** — transactional email from `noreply@lockandlogic.com`
- **Cloudflare Turnstile** — spam protection (managed challenge)
- **Mailchimp** — newsletter subscriptions

### Key Files
- `src/lib/` — server utilities (supabase, resend, turnstile, rate-limit, validate, mailchimp, email-templates)
- `src/pages/api/` — API routes (contact, group-inquiry, newsletter)
- `.env` has Turnstile test keys for local dev (always pass)

### Environment Variables
- `PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile public key (test key in `.env` for dev)
- `TURNSTILE_SECRET_KEY` — Cloudflare Turnstile server key
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` — Supabase connection (service_role key is the legacy JWT format, still required by supabase-js v2)
- `RESEND_API_KEY` — Resend email service
- `MAILCHIMP_API_KEY`, `MAILCHIMP_SERVER_PREFIX`, `MAILCHIMP_LIST_ID` — Mailchimp newsletter
- `NOTIFICATION_EMAIL` — where form notifications go (info@lockandlogic.com)

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

- `npm run dev` — Start Astro dev server
- `npm run build` — Build for Vercel
- `npm run docs:dev` — Start VitePress dev server (from `docs-site/`)
- `npm run docs:build` — Build static site (from `docs-site/`)

## MCP Image Tools (`.mcp.json`)

- Gemini key is hardcoded; Unsplash, Pexels, and Pixabay keys are still `${ENV_VAR}` references
- Those 3 stock-photo keys need to be either hardcoded in `.mcp.json` or exported in the shell — they previously worked (likely via temporary `export` in a past session)
- Keys needed: `UNSPLASH_ACCESS_KEY`, `PEXELS_API_KEY`, `PIXABAY_API_KEY`

## Additional Work Tracking

Extra work beyond the original proposal is tracked in `docs-site/docs/extras.md` on the docs site repo. After committing significant work to the Astro site, remind the user to consider adding it to the extras page on the docs site if it qualifies (new features, setup config, content, design work — not bug fixes, standard dev tasks, or changes to features already in the proposal like rewriting room text).
