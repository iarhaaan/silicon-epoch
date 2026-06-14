# 03 — GitHub Ranking Playbook (no-domain edition)

Since you don't have a custom domain, the **GitHub repo IS your SEO surface**.
Google indexes README.md, descriptions, and topics. ChatGPT/Perplexity cite GitHub
repos as authoritative sources. This playbook makes the repo rank.

---

## How GitHub search ranks repos (the unwritten signals)

GitHub's relevance algorithm weights these factors heavily, in roughly this order:

1. **Topic match** — repos with exact topic match for the query rank first.
2. **Stars** — within topic-matched repos, more stars wins.
3. **Recent activity** — commits within the last 30 days get a freshness boost.
4. **Description keyword match**.
5. **README keyword density** (first 1,000 chars weighted highest).
6. **Repo name keyword match**.
7. **Community Standards score** (LICENSE + README + CONTRIBUTING + ISSUE_TEMPLATE + CODE_OF_CONDUCT + Security policy = green ✅).
8. **External backlinks** — Google indirectly informs GitHub via crawls.

Every action below targets one or more of those signals.

---

## A. Day-1 actions (15 minutes total)

### 1. Add 20 GitHub topics

Repo → ⚙ next to **About** → topics field. Paste:

```
ai, artificial-intelligence, llm, frontier-models, gpt-5, claude, gemini,
deepseek, agi, asi, ai-safety, alignment, chip-wars, tsmc, nvidia,
ai-infrastructure, transformers, react, tanstack-start, typescript
```

Why these 20: each is a high-volume topic page on GitHub (e.g.
`github.com/topics/llm` has 50k+ repos and is browsed daily). Showing up on
those topic pages = organic stars.

### 2. Set repo description + website

Same About panel. Paste:

> **Description:** A comprehensive, living field guide to the AI revolution — every frontier lab, the chip wars, power grids, reasoning models, the data wall, AGI timelines, and the road to superintelligence. React 19 + TanStack Start + TypeScript. Updated June 2026.
>
> **Website:** https://siliconeposh.vercel.app

### 3. Upload social preview

Settings → Social preview → upload `assets/github-social-preview-1280x640-dark.png`. This image is what appears when the repo is shared on Twitter, LinkedIn, Slack, Discord, Hacker News.

### 4. Push the new README + community files

Apply Steps 7–8 from the implementation guide. Push. The Community Standards page now goes green ✅ for every item.

---

## B. Week-1 actions (gain initial stars)

Stars are the single biggest ranking factor. You need **the first 50 stars** to enter most search results.

### 1. Show HN post

Title: `Show HN: Silicon Epoch – a field guide to the AI frontier (2026)`
Best time to post: Tuesday or Wednesday, 8–11 a.m. Pacific.
Body: short, link to the live site, link to the repo, mention what's interesting (the timeline, the comparison tables, the citations). No marketing language.

### 2. Reddit posts (one per subreddit, spaced over a week)

- r/MachineLearning — flair "Discussion" — post a screenshot of the timeline + link.
- r/singularity — link the `/agi-asi` page.
- r/LocalLLaMA — link the `/open-vs-closed` page.
- r/programming — link the GitHub repo, focus on the tech stack.

### 3. Twitter/X thread

Pin a 6-tweet thread. Each tweet quotes a fact from a different chapter with the chapter link. Use the OG image as the lead media. Tag `@openai @AnthropicAI @GoogleDeepMind @deepseek_ai` only if genuinely warranted (don't spam).

### 4. Awesome-list PRs

Submit PRs to:

- https://github.com/owainlewis/awesome-artificial-intelligence
- https://github.com/josephmisiti/awesome-machine-learning
- https://github.com/Hannibal046/Awesome-LLM
- https://github.com/steven2358/awesome-generative-ai

Each PR follows their CONTRIBUTING rules. Submit under a section like "Field Guides" or "References."

### 5. Dev.to / Hashnode cross-post

Pick one chapter (e.g. "How AI Actually Works"). Cross-post the long-form text as an article, with a canonical link pointing back to your site. Dev.to has high domain authority; this is a strong backlink.

### 6. Hugging Face Space or organization page

Create a free HF Space that embeds the live site, or an organization page that links to the repo. HF.co backlinks are highly trusted.

---

## C. Month-1 actions (sustain growth)

### 1. Update cadence

GitHub rewards repos with commits in the last 30 days. Commit at least once a week — even a typo fix counts. Better: update one stat or model per week as new releases drop.

### 2. Open issues yourself

Create 3–5 "good first issue" labeled issues — e.g. "Add Apple Foundation Model card", "Add citation for X benchmark". Visible issues = active project = ranking boost.

### 3. Pin the best issue

`Pinned issues` show on the repo front page. Pin a roadmap discussion.

### 4. Create a GitHub Discussions board

Settings → enable Discussions. Seed it with 2–3 posts (e.g. "Which lab's roadmap looks most credible?"). Engagement = ranking.

### 5. Releases

Tag the current state as `v1.0.0-june-2026`. GitHub indexes release titles. Future updates → `v1.1.0-july-2026`, etc.

### 6. GitHub Pages mirror (optional)

If Vercel ever lapses, enable `gh-pages` so `iarhaaan.github.io/siliconeposh` always works. Doesn't hurt SEO; provides a fallback canonical.

---

## D. Quarter-1 actions (compound returns)

- **Wikipedia citations**: where an existing AI article needs a primary-source citation that Silicon Epoch covers well, add it as an external link. Backlinks from Wikipedia are among the highest-authority on the web.
- **Reciprocal linking**: every frontier lab page already cites primary sources. Some labs (Anthropic, DeepSeek, Mistral) maintain "press / coverage" pages. Email a polite, factual note — "Silicon Epoch maintains a public-domain comparative card for [Lab]". Sometimes they link back.
- **Conference / meetup talks**: submit a 10-min talk to a local AI meetup. Slides include the repo URL. Backlinks from event pages persist.

---

## E. Tracking

Set up these free trackers in week 1 so you can see what's working:

| Tool                               | What it shows                             | Setup time                           |
| ---------------------------------- | ----------------------------------------- | ------------------------------------ |
| Google Search Console              | Queries that rank your Vercel URL         | 5 min (verify via DNS-free meta tag) |
| Bing Webmaster Tools               | Same for Bing/ChatGPT                     | 5 min                                |
| GitHub Insights → Traffic          | Stars, clones, referrers, popular content | already on                           |
| Plausible / Umami (free self-host) | Real visitor analytics                    | 30 min                               |
| star-history.t9t.io                | Star growth graph (share-worthy)          | 0 min                                |

---

## What NOT to do

- Don't buy stars. GitHub detects and shadow-bans.
- Don't ask for stars in tweets — looks needy, lowers conversion.
- Don't write hyperbolic copy ("the BEST guide!"). Google's helpful-content system demotes it. The current restrained, citation-heavy voice is exactly right.
- Don't add unrelated topics (e.g. `javascript` just for volume). Topic-mismatch hurts you on Github topic pages.
- Don't add `noindex` accidentally to any route during work-in-progress changes.

---

## Realistic 90-day projection

If you do A + B + at least 4 items of C:

- **Stars**: 50–500 (depends on HN/Reddit traction; one viral post = 1k+).
- **Google impressions** for the Vercel URL: 5k–25k/month.
- **GitHub search**: appear on page 1 for `frontier ai labs`, `ai field guide 2026`, `silicon epoch`.
- **ChatGPT/Perplexity citations**: start showing up by week 6 once the AI crawlers re-index.

Compounding from there is largely a function of how often you ship updates.
