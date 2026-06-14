# 02 — Implementation Guide

Apply in order. Each step links to the file in this kit.

---

## Step 1 — Replace `src/routes/__root.tsx`

Copy `fixes/src/routes/__root.tsx` over the existing file. Diff summary:

- Adds `theme-color` meta (dark + light variants).
- Adds `twitter:site`, `twitter:creator`, `robots` global.
- Adds `<link rel="manifest" href="/site.webmanifest">`.
- Adds JSON-LD `WebSite` (with SearchAction) + `Organization` via the `scripts` array.
- Adds a global `og:image` fallback pointing at `/og-image-dark.png`.
- Keeps `notFoundComponent` and `errorComponent` exactly as they were.
- Adds `meta: [{ name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" }]`.

After saving, run `bun dev` and visit `/`. View source → confirm both JSON-LD blocks appear in `<head>`.

---

## Step 2 — Per-route head() snippets

Open `fixes/src/routes/_meta-snippets.md`. For every route file in `src/routes/` it gives you a full `head: () => ({ ... })` block. Replace the existing `head: () => ({ ... })` in each route file with the snippet for that route.

The 6 routes currently missing OG/canonical (`chapters`, `companies`, `compute`, `games`, `infrastructure`, `open-vs-closed`) will now match the others.

---

## Step 3 — Add JSON-LD to chapter routes

For each chapter route (`compute`, `how-ai-works`, `companies`, `geopolitics`, `infrastructure`, `humanity`, `agi-asi`, `data-wall`, `open-vs-closed`, `use-cases`, `next-decade`, `learn`, `games`, `timeline`, `sources`, `chapters`):

```tsx
head: () => ({
  meta: [ /* ... from snippet ... */ ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/<slug>" }],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "<page title>",
        description: "<page description>",
        image: "https://siliconeposh.vercel.app/og-image-dark.png",
        datePublished: "2026-06-01",
        dateModified: "2026-06-14",
        author: { "@type": "Organization", name: "Silicon Epoch" },
        publisher: {
          "@type": "Organization",
          name: "Silicon Epoch",
          logo: { "@type": "ImageObject", url: "https://siliconeposh.vercel.app/apple-touch-icon.png" }
        },
        mainEntityOfPage: "https://siliconeposh.vercel.app/<slug>"
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://siliconeposh.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "<page name>", item: "https://siliconeposh.vercel.app/<slug>" }
        ]
      }),
    },
  ],
}),
```

Ready-to-paste JSON-LD for the homepage WebSite + Organization, the FAQPage, and one Article example live in `fixes/jsonld/`.

---

## Step 4 — Replace `public/robots.txt`

Copy `fixes/public/robots.txt` over the existing file. Adds explicit allow blocks for major AI crawlers (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended).

---

## Step 5 — Update `public/sitemap.xml`

Copy `fixes/public/sitemap.xml`. Includes all 17 routes with current `lastmod`.

Optional: edit `scripts/generate-sitemap.js` to enumerate the `src/routes/` directory instead of a hardcoded list — keeps the sitemap synced on every `bun run build`.

---

## Step 6 — Update `public/site.webmanifest`

Copy `fixes/public/site.webmanifest`. Adds `description`, `categories`, `lang`, `dir`, and `screenshots` references.

---

## Step 7 — Replace `README.md`

Copy `fixes/README.md` over the repo root. This is the SEO-optimized GitHub README — the most important off-site asset since there is no custom domain.

---

## Step 8 — Add community files

Create these if they don't exist:

```
.github/FUNDING.yml
.github/ISSUE_TEMPLATE/bug_report.md
.github/ISSUE_TEMPLATE/feature_request.md
CONTRIBUTING.md
```

All four are in `fixes/`. They turn the GitHub Community Standards checklist 100% green, which boosts repo discoverability.

---

## Step 9 — Drop brand assets into `public/`

```
assets/favicon.svg                          → public/favicon.svg
assets/apple-touch-icon-180.png             → public/apple-touch-icon.png
assets/og-image-1200x630-light.png          → public/og-image-light.png
assets/og-image-1200x630-dark.png           → public/og-image-dark.png
                                            → public/og-image.png   (copy dark as default)
```

Logos and section icons live under `src/components/brand/` — see `brand-guidelines.md` for usage code.

Example: theme-aware logo in the nav

```tsx
import logoLight from "@/components/brand/logo-horizontal-light.svg?url";
import logoDark from "@/components/brand/logo-horizontal-dark.svg?url";

<img src={logoLight} alt="Silicon Epoch" className="h-7 block dark:hidden" />
<img src={logoDark}  alt="Silicon Epoch" className="h-7 hidden dark:block" />
```

---

## Step 10 — GitHub repo settings (manual, ~5 min)

1. Repo → ⚙ next to **About** → paste the description and topics from `fixes/github-about.md` and `fixes/github-topics.txt`.
2. Repo → **Settings** → scroll to **Social preview** → upload `assets/github-social-preview-1280x640-dark.png`.
3. Confirm Community Standards: Repo → Insights → Community → all items green.

---

## Step 11 — Validate

| Tool                      | URL                                          | What to check                                                        |
| ------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| Rich Results Test         | https://search.google.com/test/rich-results  | WebSite, Organization, Article, FAQPage, BreadcrumbList all detected |
| Schema validator          | https://validator.schema.org/                | No errors                                                            |
| Facebook Sharing Debugger | https://developers.facebook.com/tools/debug/ | Click "Scrape again" — new image + title appears                     |
| X Card validator          | https://cards-dev.twitter.com/validator      | summary_large_image shows                                            |
| LinkedIn Post Inspector   | https://www.linkedin.com/post-inspector/     | Refresh preview                                                      |
| Google Search Console     | (sign in)                                    | Submit `https://siliconeposh.vercel.app/sitemap.xml`                 |
| Bing Webmaster Tools      | (sign in)                                    | Submit sitemap                                                       |
| GTmetrix / PageSpeed      | https://pagespeed.web.dev/                   | Target ≥ 90 mobile                                                   |

---

## Step 12 — Off-page actions

Follow `03-GITHUB-RANKING-PLAYBOOK.md`.
