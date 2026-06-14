# Changelog — what this kit changes vs current repo

Baseline: `iarhaaan/siliconeposh` @ main (June 14, 2026)

## Code

- `src/routes/__root.tsx` — adds theme-color, manifest link, twitter:site, robots meta, WebSite + Organization JSON-LD, global og:image fallback.
- `src/routes/index.tsx` — adds FAQPage JSON-LD + twitter:image. Snippet only; merge with existing head().
- `src/routes/chapters.tsx` / `companies.tsx` / `compute.tsx` / `games.tsx` / `infrastructure.tsx` / `open-vs-closed.tsx` — adds missing og:image, og:url, canonical, twitter:image.
- All other route files — adds og:url and twitter:image to existing head().
- All chapter routes — Article + BreadcrumbList JSON-LD.

## Public

- `public/robots.txt` — adds explicit allow blocks for GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended.
- `public/sitemap.xml` — regenerated with all 17 routes + current lastmod.
- `public/site.webmanifest` — adds description, categories, lang, screenshots.
- `public/favicon.svg` — new dual-tone (responds to prefers-color-scheme).
- `public/apple-touch-icon.png` — refreshed.
- `public/og-image-light.png`, `public/og-image-dark.png` — new social cards.

## Repo

- `README.md` — full rewrite, SEO-optimized.
- `CONTRIBUTING.md` — new.
- `.github/FUNDING.yml` — new (optional, edit before commit).
- `.github/ISSUE_TEMPLATE/bug_report.md` — new.
- `.github/ISSUE_TEMPLATE/feature_request.md` — new.
- `.github/ISSUE_TEMPLATE/config.yml` — new (links to Discussions).

## Manual (in GitHub UI)

- Repo description rewritten.
- 20 topics added.
- Website URL set to https://siliconeposh.vercel.app.
- Social preview image uploaded.
- Discussions enabled.
- v1.0.0-june-2026 release tagged.
