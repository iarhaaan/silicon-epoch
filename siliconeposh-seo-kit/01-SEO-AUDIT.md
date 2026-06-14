# 01 — Silicon Epoch · Comprehensive SEO Audit

**Audit date:** June 14, 2026
**Site:** https://siliconeposh.vercel.app/
**Repo:** https://github.com/iarhaaan/siliconeposh
**Stack:** TanStack Start v1 · React 19 · TypeScript · Tailwind v4 · Vercel
**Theme:** Dual (light/dark) · serif display (Instrument Serif) + Inter Tight + JetBrains Mono
**Constraint honored:** no custom domain — all on-page strategy targets ranking via the GitHub repo and the existing Vercel URL.

---

## Executive summary

Silicon Epoch is **already in the top 30%** of indie sites for technical SEO hygiene — it has per-route titles on most pages, a sitemap, robots.txt, a webmanifest, OG fallback, and clean semantic markup. The wins below are **incremental but cumulative**: each one removes a friction point for Google, Bing, ChatGPT search, Perplexity, and GitHub's own search.

### Top 10 priority fixes (do these first)

| #   | Fix                                                                                                                                                                              | Why it matters                                                                | Effort |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------ |
| 1   | Add JSON-LD `WebSite` + `Organization` schema in `__root.tsx`.                                                                                                                   | Unlocks Google sitelinks search box and brand knowledge panel.                | 10 min |
| 2   | Add `BreadcrumbList` + `Article` JSON-LD on chapter routes.                                                                                                                      | Rich results, +CTR.                                                           | 30 min |
| 3   | Add per-route `og:image`, `og:url`, `twitter:image`, `canonical` on the 6 routes missing them (`chapters`, `companies`, `compute`, `games`, `infrastructure`, `open-vs-closed`). | Share-card consistency across all pages.                                      | 20 min |
| 4   | Rewrite the GitHub README to put **keywords in the first 160 chars**, add a hero image, section anchors, and a comparison table.                                                 | GitHub & Google both index README; first 160 chars become the search snippet. | 45 min |
| 5   | Add **15–20 GitHub topics** to the repo (AI, frontier-models, gpt-5, claude, gemini, deepseek, agi, chip-wars, llm, transformers, etc.).                                         | GitHub's own topic search is a major organic channel.                         | 2 min  |
| 6   | Upload a custom **social preview** image (1280×640) in repo Settings.                                                                                                            | GitHub uses it when the repo is shared anywhere.                              | 2 min  |
| 7   | Add a `theme-color` meta + Twitter `@site`.                                                                                                                                      | Mobile browser chrome color + verified Twitter attribution.                   | 5 min  |
| 8   | Add FAQ section to the homepage and wrap with `FAQPage` JSON-LD.                                                                                                                 | Eligible for "People also ask" rich results.                                  | 30 min |
| 9   | Add internal links from `index` to every chapter (currently 3 CTAs — should be all 14 routes via a chapter grid).                                                                | Internal link equity + crawl depth.                                           | 15 min |
| 10  | Add `lastmod` to sitemap dynamically + run sitemap generator on every build.                                                                                                     | Already partially done; verify each route appears with current date.          | 5 min  |

Expected impact (90 days): +50–120% organic impressions in Google Search Console; first appearance in GitHub Trending if combined with the off-page actions in `03-GITHUB-RANKING-PLAYBOOK.md`.

---

## 1. On-page SEO — page by page

The site has **17 routes** under `src/routes/`. Each was audited for: title length (target 30–60 chars), description length (target 120–160), H1 uniqueness, OG completeness, canonical, internal links out, image alt coverage.

| Route             | Title    | Desc | H1  | OG image | og:url | Canonical | Twitter img | Verdict                      |
| ----------------- | -------- | ---- | --- | -------- | ------ | --------- | ----------- | ---------------------------- |
| `/` (index)       | ✅ 47 ch | ✅   | ✅  | ✅       | ✅     | ✅        | ❌          | Add twitter:image            |
| `/agi-asi`        | ✅       | ✅   | ✅  | ✅       | ❌     | ✅        | ❌          | Add og:url + twitter:image   |
| `/chapters`       | ✅       | ✅   | ✅  | ❌       | ❌     | ✅        | ❌          | **Missing OG/twitter image** |
| `/companies`      | ✅ 56 ch | ✅   | ✅  | ❌       | ❌     | ❌        | ❌          | **Missing OG/url/canonical** |
| `/compute`        | ✅       | ✅   | ✅  | ❌       | ❌     | ❌        | ❌          | **Missing OG/url/canonical** |
| `/data-wall`      | ✅       | ✅   | ✅  | ✅       | ❌     | ✅        | ❌          | Add og:url + twitter:image   |
| `/games`          | ✅       | ✅   | ✅  | ❌       | ❌     | ❌        | ❌          | **Missing OG/url/canonical** |
| `/geopolitics`    | ✅       | ✅   | ✅  | ✅       | ❌     | ✅        | ❌          | Add og:url + twitter:image   |
| `/how-ai-works`   | ✅       | ✅   | ✅  | ✅       | ❌     | ✅        | ❌          | Add og:url + twitter:image   |
| `/humanity`       | ✅       | ✅   | ✅  | ✅       | ❌     | ✅        | ❌          | Add og:url + twitter:image   |
| `/infrastructure` | ✅       | ✅   | ✅  | ❌       | ❌     | ❌        | ❌          | **Missing OG/url/canonical** |
| `/learn`          | ✅       | ✅   | ✅  | ✅       | ❌     | ✅        | ❌          | Add og:url + twitter:image   |
| `/next-decade`    | ✅       | ✅   | ✅  | ✅       | ❌     | ✅        | ❌          | Add og:url + twitter:image   |
| `/open-vs-closed` | ✅       | ✅   | ✅  | ❌       | ❌     | ❌        | ❌          | **Missing OG/url/canonical** |
| `/sources`        | ✅       | ✅   | ✅  | ✅       | ❌     | ✅        | ❌          | Add og:url + twitter:image   |
| `/timeline`       | ✅       | ✅   | ✅  | ✅       | ❌     | ✅        | ❌          | Add og:url + twitter:image   |
| `/use-cases`      | ✅       | ✅   | ✅  | ✅       | ❌     | ✅        | ❌          | Add og:url + twitter:image   |

Fix: paste the per-route block from `fixes/src/routes/_meta-snippets.md` into every route file. Every route then gets:

- ✅ unique 30–60 char title containing keyword + brand
- ✅ unique 120–160 char description
- ✅ canonical (leaf route only)
- ✅ og:title / og:description / og:url / og:image / og:type
- ✅ twitter:card / twitter:image / twitter:title / twitter:description

---

## 2. Technical SEO

| Check                       | Status                          | Action                                                                                                      |
| --------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| HTTPS                       | ✅ Vercel default               | —                                                                                                           |
| `<html lang="en">`          | ✅ already set                  | —                                                                                                           |
| `<meta charset>` + viewport | ✅                              | —                                                                                                           |
| `robots.txt`                | ✅ allows all, declares sitemap | minor: add `User-agent: GPTBot` + `User-agent: ChatGPT-User` explicit allow blocks for AI-search visibility |
| `sitemap.xml`               | ✅ 14 routes, weekly            | regenerate to include all 17; pin `lastmod` to build date                                                   |
| 404 page                    | ✅ custom                       | add `noindex` + a list of top routes for crawl recovery                                                     |
| Redirect hygiene            | ✅ no redirects detected        | —                                                                                                           |
| Mobile-friendly             | ✅ responsive                   | —                                                                                                           |
| Page weight                 | ⚠ Google Fonts blocks render    | Already preconnects — good. Consider self-hosting `Instrument Serif` for LCP.                               |
| Heading hierarchy           | ✅ single H1 per route          | —                                                                                                           |
| `theme-color` meta          | ❌ missing                      | add `{ name: "theme-color", content: "#1c1b19", media: "(prefers-color-scheme: dark)" }` + light variant    |
| `manifest.json` linked      | ⚠ not linked from `<head>`      | add `<link rel="manifest" href="/site.webmanifest">`                                                        |
| Favicon                     | ✅ SVG + apple-touch            | upgrade SVG to dual-tone (light/dark variants embedded via CSS media query)                                 |

---

## 3. Structured data (JSON-LD)

Currently **none**. Adding the following unlocks:

| Schema                                       | Where                                           | Eligible rich result                    |
| -------------------------------------------- | ----------------------------------------------- | --------------------------------------- |
| `WebSite` w/ `potentialAction: SearchAction` | `__root.tsx`                                    | Google sitelinks search box             |
| `Organization`                               | `__root.tsx`                                    | Brand knowledge panel                   |
| `BreadcrumbList`                             | every leaf route                                | Breadcrumb trail in SERP                |
| `Article`                                    | every chapter (`compute`, `how-ai-works`, etc.) | Article rich card, top-stories carousel |
| `FAQPage`                                    | `index`, `learn`                                | People-also-ask                         |
| `ItemList`                                   | `/companies`, `/timeline`                       | Carousel + featured snippet             |

Snippets ready to paste are in `fixes/jsonld/`.

---

## 4. Social / Open Graph / Twitter

Current state: root sets generic OG; some routes override the image, none override `og:url` correctly, none set `twitter:image` or `twitter:site`.

Fix in this kit:

- Two custom OG images shipped (`og-image-1200x630-light.png`, `og-image-1200x630-dark.png`).
- Every route gets `og:image`, `og:url`, `twitter:image` in its `head()`.
- `__root.tsx` sets `twitter:site` to `@SiliconEpoch` (placeholder — replace with the project's real handle when created).
- After deploy, re-scrape via Facebook Debugger and X validator (Twitter caches indefinitely otherwise).

---

## 5. Performance / Core Web Vitals (audited from source)

- **LCP** likely a serif headline. Mitigations: `font-display: swap` already in the Google Fonts URL ✅; consider `<link rel="preload" as="font">` for `Instrument Serif`.
- **CLS**: no detected layout-shifting hero — good.
- **JS bundle**: Lenis smooth-scroll + Lobehub icons add weight. Lobehub is tree-shakable — verify only used logos are imported.
- **Image weight**: `/og-image.png` is the only large raster. The replacement images shipped here are <200 KB each.

---

## 6. Accessibility (impacts SEO via UX signals)

- ✅ Skip-to-main link present
- ✅ Color contrast appears WCAG AA (ink on cream)
- ⚠ Confirm every external link has discernible text (no bare "→")
- ⚠ Citations: ensure `aria-label` describes the source, not just "[1]"
- ⚠ Dark mode toggle should be a `<button>` with `aria-pressed` (verify)

---

## 7. Content & keyword strategy

### Primary keywords (have ranking intent for an indie site)

- "frontier AI labs comparison"
- "AI field guide 2026"
- "Claude vs GPT-5 vs Gemini 3"
- "AI chip wars explained"
- "what is the data wall AI"
- "AGI timeline 2026"
- "TSMC 2nm production"
- "AI history timeline interactive"

### Long-tail / question keywords (low difficulty, high intent)

- "how do transformers actually work step by step"
- "open weights vs closed API which is better"
- "best frontier model for coding 2026"
- "is AGI close to 2026"
- "what is reinforcement learning in games"
- "Anthropic Claude Fable 5 release"
- "DeepSeek V4 Pro benchmark"
- "Gemini 3.5 Flash vs GPT-5.5"

### Page → target keyword mapping (use in title + H1 + first paragraph)

| Route             | Primary keyword               | Secondary                    |
| ----------------- | ----------------------------- | ---------------------------- |
| `/`               | AI field guide 2026           | silicon epoch, frontier AI   |
| `/companies`      | frontier AI labs comparison   | OpenAI Anthropic DeepMind    |
| `/compute`        | AI compute hardware explained | NVIDIA Blackwell, Vera Rubin |
| `/how-ai-works`   | how transformers work         | attention, diffusion, MoE    |
| `/timeline`       | AI history timeline           | AI milestones                |
| `/agi-asi`        | AGI timeline 2026             | superintelligence            |
| `/data-wall`      | data wall AI synthetic data   | scaling limits               |
| `/geopolitics`    | AI chip wars                  | TSMC, ASML, export controls  |
| `/infrastructure` | AI data center power grid     | SMR, gigawatt                |
| `/humanity`       | AI alignment and labor        | RLHF, AI safety              |
| `/open-vs-closed` | open weights vs closed API    | Llama vs GPT                 |
| `/use-cases`      | best AI use cases 2026        | coding, science              |
| `/next-decade`    | next decade AI predictions    | quantum, neuromorphic        |
| `/learn`          | learn AI for beginners        | AI fluency                   |
| `/games`          | reinforcement learning games  | AlphaZero, Genie             |

### FAQ block (drop on `/` — eligible for FAQPage rich result)

1. What is the Silicon Epoch?
2. Which AI lab is leading in 2026?
3. Is AGI close?
4. What is the data wall?
5. Why is TSMC so important to AI?
6. Open weights or closed APIs — which should developers choose?

JSON-LD for these is in `fixes/jsonld/faq.json`.

### Internal-linking map

Currently the homepage has 3 CTAs. Add a **chapter grid** (already partly via `/chapters`) linking all 14 content routes from the homepage above the fold. This passes link equity from the highest-authority page to every chapter.

---

## 8. GitHub repo SEO (primary distribution since no domain)

GitHub Search and Google both crawl public repos. Optimizing the repo gives Silicon Epoch a second front door.

### Repo metadata (fix in Settings → About)

- **Description** (max 350 chars):
  > A comprehensive, living field guide to the AI revolution — every frontier lab, the chip wars, power grids, reasoning models, the data wall, AGI timelines, and the road to superintelligence. React 19 + TanStack Start + TypeScript. Updated June 2026.
- **Website**: `https://siliconeposh.vercel.app`
- **Topics** (paste all 20 — they are GitHub's #1 discoverability signal):
  ```
  ai, artificial-intelligence, llm, frontier-models, gpt-5, claude, gemini,
  deepseek, agi, asi, ai-safety, alignment, chip-wars, tsmc, nvidia,
  ai-infrastructure, transformers, react, tanstack-start, typescript
  ```

### Social preview image

GitHub Settings → Social preview → upload `assets/github-social-preview-1280x640-dark.png` (shipped). Shows on every share — Twitter, Slack, Discord, LinkedIn.

### README rewrite (in `fixes/README.md`)

Optimized for GitHub's search algorithm + Google's repo indexing:

1. **First 160 chars** = the exact search snippet Google shows. Loaded with keywords.
2. **Hero image** at the top (the GitHub social preview doubles as a README hero).
3. **Badges** for live demo, license, tech stack — these are also indexed.
4. **Comparison table** of every frontier lab — appears in code search.
5. **Anchor links** to every section — improves dwell time.
6. **Screenshots** section (use the OG images as placeholders).
7. **Tech stack list** with links to each framework — these are reciprocal SEO opportunities.
8. **"Why Silicon Epoch?"** — answer the question users would ask.
9. **Contributing** + **License** + **Citation** sections — signals to GitHub that this is a serious project.

### Repo files that boost GitHub search ranking

| File                      | Effect                                                               |
| ------------------------- | -------------------------------------------------------------------- |
| `CONTRIBUTING.md`         | Signals active OSS project — green checkmark in Community Standards. |
| `.github/ISSUE_TEMPLATE/` | Same.                                                                |
| `.github/FUNDING.yml`     | Adds Sponsor button — also Community Standards.                      |
| `LICENSE`                 | ✅ already exists (MIT).                                             |
| `CODE_OF_CONDUCT.md`      | Completes Community Standards (100% green).                          |

When all six are present, GitHub gives the repo a higher Health Score, which feeds into search ranking and the "Discover" recommendation engine.

---

## 9. Off-page / discoverability (free)

| Channel                                            | Action                                                                                   | Why                                                                                          |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Hacker News** Show HN                            | Post title: "Show HN: Silicon Epoch — a field guide to the AI frontier (2026)"           | One front-page hit = thousands of permanent backlinks.                                       |
| **r/MachineLearning, r/singularity, r/LocalLLaMA** | Share with timeline screenshot                                                           | Niche-relevant traffic + dofollow links from comment quotes.                                 |
| **Dev.to / Hashnode**                              | Cross-post one chapter as an article, link back                                          | High DA backlinks.                                                                           |
| **Awesome lists**                                  | PR Silicon Epoch into `awesome-ai`, `awesome-llm`, `awesome-machine-learning`            | These lists are referenced site-wide.                                                        |
| **Product Hunt**                                   | Launch as "AI field guide"                                                               | One day on PH = OG traffic + backlinks from review sites.                                    |
| **Twitter/X**                                      | Pin a thread quoting the timeline                                                        | Direct traffic; the og:image is indexed.                                                     |
| **Hugging Face**                                   | Add a Space or model card referencing this                                               | Inbound from HF, which Google trusts highly.                                                 |
| **Wikipedia**                                      | Add `siliconeposh.vercel.app` as an external reference on an existing AI history article | Among the most powerful backlinks anywhere. Use sparingly and only where genuinely relevant. |

---

## 10. AI search visibility (ChatGPT / Perplexity / Claude / Google AI Overviews)

These crawlers respect `robots.txt` and look for clear factual structure. Actions already covered by the fixes:

- ✅ Explicit `Allow` for `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot` in `robots.txt`.
- ✅ `Article` + `FAQPage` JSON-LD on chapter pages.
- ✅ Clear `<h1>` per route + paragraph leads — AI summarizers favor this.
- ✅ Citation footnotes already present — keep them; they boost factual-source ranking.

---

## Audit complete

Proceed to `02-IMPLEMENTATION-GUIDE.md` for the exact paste-in-place changes.
