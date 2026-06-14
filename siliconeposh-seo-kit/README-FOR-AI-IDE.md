# Silicon Epoch — SEO Kit (for an AI coding agent)

You are an AI IDE assistant. This kit contains a full SEO audit, ready-to-apply code
fixes, and a brand asset pack for the **Silicon Epoch** project
(`https://github.com/iarhaaan/siliconeposh`, deployed at
`https://siliconeposh.vercel.app/`).

The project is a TanStack Start v1 app (React 19, TypeScript, Tailwind v4) with
file-based routing under `src/routes/`. Apply the changes in the order below.

---

## 0. Read first

1. `01-SEO-AUDIT.md` — full audit and findings (read for context).
2. `02-IMPLEMENTATION-GUIDE.md` — step-by-step instructions for every fix.
3. `03-GITHUB-RANKING-PLAYBOOK.md` — repo-side actions (no domain required).
4. `brand-guidelines.md` — exact colors, fonts, and how to use each asset.

---

## 1. Apply code fixes (in this order)

| #   | Source file in this kit              | Destination in repo                                              | What it does                                                                                                                                                                                                |
| --- | ------------------------------------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `fixes/src/routes/__root.tsx`        | `src/routes/__root.tsx`                                          | Adds `lang`, `theme-color`, Twitter site, robots, JSON-LD WebSite + Organization, global og:image fallback.                                                                                                 |
| 2   | `fixes/src/routes/_meta-snippets.md` | (reference)                                                      | Per-route `head()` blocks. Paste the matching block into each route file (`companies.tsx`, `compute.tsx`, etc.) — every route gets a unique title, description, canonical, og:url, og:image, twitter:image. |
| 3   | `fixes/jsonld/*.json`                | inline via route `head().scripts`                                | Copy each JSON object into the matching route as a `application/ld+json` script. The implementation guide shows how.                                                                                        |
| 4   | `fixes/public/robots.txt`            | `public/robots.txt`                                              | Replaces the existing file.                                                                                                                                                                                 |
| 5   | `fixes/public/sitemap.xml`           | `public/sitemap.xml`                                             | Updated to include every route currently in `src/routes/`.                                                                                                                                                  |
| 6   | `fixes/public/site.webmanifest`      | `public/site.webmanifest`                                        | Expanded with description, categories, screenshots.                                                                                                                                                         |
| 7   | `fixes/README.md`                    | `README.md` (repo root)                                          | SEO-optimized README — hero, badges, keywords, sections, demo.                                                                                                                                              |
| 8   | `fixes/CONTRIBUTING.md`              | `CONTRIBUTING.md`                                                | New file. Signals an active OSS project to GitHub.                                                                                                                                                          |
| 9   | `fixes/.github/FUNDING.yml`          | `.github/FUNDING.yml`                                            | Optional — leave empty if no sponsor links.                                                                                                                                                                 |
| 10  | `fixes/.github/ISSUE_TEMPLATE/*`     | `.github/ISSUE_TEMPLATE/`                                        | Bug + feature templates.                                                                                                                                                                                    |
| 11  | `fixes/github-topics.txt`            | (manual) Apply on GitHub: Repo → ⚙ next to About → paste topics. | Boosts repo discoverability.                                                                                                                                                                                |
| 12  | `fixes/github-about.md`              | (manual) Same About panel — set description and website URL.     |                                                                                                                                                                                                             |

---

## 2. Drop in brand assets

Copy these into `public/` so URLs like `/og-image-light.png` resolve at runtime:

```text
assets/favicon.svg                          → public/favicon.svg              (replace)
assets/apple-touch-icon-180.png             → public/apple-touch-icon.png     (replace)
assets/og-image-1200x630-light.png          → public/og-image-light.png
assets/og-image-1200x630-dark.png           → public/og-image-dark.png        (this is also the new default og-image.png — copy it twice or pick one)
assets/github-social-preview-1280x640-dark.png → upload via GitHub repo Settings → Social preview
assets/logo-icon-light.svg                  → src/components/brand/logo-icon-light.svg
assets/logo-icon-dark.svg                   → src/components/brand/logo-icon-dark.svg
assets/logo-wordmark-light.svg              → src/components/brand/logo-wordmark-light.svg
assets/logo-wordmark-dark.svg               → src/components/brand/logo-wordmark-dark.svg
assets/logo-horizontal-light.svg            → src/components/brand/logo-horizontal-light.svg
assets/logo-horizontal-dark.svg             → src/components/brand/logo-horizontal-dark.svg
assets/section-icons/*.svg                  → src/components/brand/section-icons/
```

The site already supports light/dark via a `.dark` class on `<html>`. Use the
matching asset by reading the theme class or by rendering both with
`dark:hidden` / `hidden dark:block` utilities — examples in
`02-IMPLEMENTATION-GUIDE.md`.

---

## 3. Asset naming convention

Every asset filename describes:

- **What it is** (logo, og-image, favicon, hero, section-icon)
- **Variant** (light / dark / horizontal / icon / wordmark)
- **Dimensions** when raster (e.g. `1200x630`, `1280x640`, `180`)
- **Format** by extension

So `og-image-1200x630-dark.png` is the **Open Graph share image**, **1200×630**,
**dark theme**, PNG. Use this convention if you add more assets.

---

## 4. After applying

1. Run `bun install` (no new deps required).
2. `bun run build` — confirm no broken imports.
3. Push to GitHub.
4. Vercel will redeploy; **re-validate share previews** in:
   - https://developers.facebook.com/tools/debug/
   - https://cards-dev.twitter.com/validator
   - https://www.linkedin.com/post-inspector/
5. In Google Search Console, request indexing of `/sitemap.xml`.
6. Apply the GitHub-side actions in `03-GITHUB-RANKING-PLAYBOOK.md`.

---

## 5. Do NOT

- Do not bake a custom domain anywhere. All canonical/og:url values use
  `https://siliconeposh.vercel.app/` until a domain is purchased.
- Do not duplicate `<link rel="canonical">` in `__root.tsx` — it belongs on
  leaf routes only (TanStack Router concatenates link tags).
- Do not put `og:image` in `__root.tsx` if you want per-page images to win —
  the kit's `__root.tsx` deliberately uses one global fallback because most
  routes are textual; per-route override is included in the snippets.
- Do not edit `src/routeTree.gen.ts` — it is auto-generated.
