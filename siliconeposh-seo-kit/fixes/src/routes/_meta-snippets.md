# Per-route `head()` snippets

For each route in `src/routes/`, replace the existing `head: () => ({ ... })` block with the matching snippet below. All values are tuned for length (title 30–60, description 120–160), uniqueness, and SEO keywords from the audit.

Constants: `const SITE = "https://siliconeposh.vercel.app";` (declare once at top of each file or import from a shared lib).

---

## `index.tsx` — `/`

```tsx
head: () => ({
  meta: [
    { title: "Silicon Epoch — A Field Guide to the AI Frontier (2026)" },
    { name: "description", content: "Every frontier lab, every model, the chip wars, the data wall, AGI timelines, and the road to superintelligence — a living, citation-driven field guide." },
    { property: "og:title", content: "Silicon Epoch — A Field Guide to the AI Frontier" },
    { property: "og:description", content: "Every frontier lab, the chip wars, power grids, reasoning models, the data wall, and the road to superintelligence." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { property: "og:type", content: "website" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:title", content: "Silicon Epoch — A Field Guide to the AI Frontier" },
    { name: "twitter:description", content: "Every frontier lab, the chip wars, power grids, reasoning models, the data wall, and the road to superintelligence." },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/" }],
  scripts: [
    { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
      {"@type":"Question","name":"What is the Silicon Epoch?","acceptedAnswer":{"@type":"Answer","text":"The Silicon Epoch is the decade in which artificial intelligence becomes the dominant force shaping science, work, geopolitics, and culture — driven by frontier compute, transformer architectures, and a new global power grid."}},
      {"@type":"Question","name":"Which AI lab is leading in 2026?","acceptedAnswer":{"@type":"Answer","text":"As of mid-2026 there is no single leader. OpenAI, Anthropic, Google DeepMind, xAI, DeepSeek, Meta, and Mistral each lead in different axes — frontier capability, coding, multimodal, open weights, or cost."}},
      {"@type":"Question","name":"Is AGI close?","acceptedAnswer":{"@type":"Answer","text":"Frontier-lab roadmaps converge on transformative AI between 2027 and 2030. The bottlenecks are no longer ideas but compute, energy, and post-training data — discussed in the AGI/ASI chapter."}},
      {"@type":"Question","name":"What is the data wall?","acceptedAnswer":{"@type":"Answer","text":"The data wall is the projected exhaustion of high-quality human-written text for pre-training. Labs respond with synthetic data, multimodal corpora, and test-time scaling — covered in the Data Wall chapter."}}
    ]})}
  ],
}),
```

---

## `chapters.tsx` — `/chapters`

```tsx
head: () => ({
  meta: [
    { title: "All Chapters — Silicon Epoch Index" },
    { name: "description", content: "Browse every chapter of Silicon Epoch: compute, frontier labs, infrastructure, geopolitics, alignment, AGI, the data wall, and what comes next." },
    { property: "og:title", content: "All Chapters — Silicon Epoch Index" },
    { property: "og:description", content: "Browse every chapter of Silicon Epoch — the AI field guide." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/chapters" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/chapters" }],
}),
```

---

## `companies.tsx` — `/companies`

```tsx
head: () => ({
  meta: [
    { title: "Frontier AI Labs Compared — June 2026 Leaderboard" },
    { name: "description", content: "OpenAI GPT-5.5, Anthropic Claude Fable 5, Google Gemini 3.5, xAI Grok 4.3, Meta Muse Spark, DeepSeek V4-Pro, Qwen 3.7-Max — flagship models, CEOs, funding, vision." },
    { property: "og:title", content: "Frontier AI Labs — Ecosystem Leaderboard 2026" },
    { property: "og:description", content: "Every frontier lab compared: flagship models, funding, leadership, roadmaps." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/companies" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/companies" }],
}),
```

---

## `compute.tsx` — `/compute`

```tsx
head: () => ({
  meta: [
    { title: "The Compute Core — Silicon, Packaging, and AI Hardware" },
    { name: "description", content: "How modern AI chips are built: NVIDIA Blackwell, Vera Rubin NVL72, Groq, TPU v6, TSMC 2nm N2, CoWoS packaging, HBM4 memory — the substrate of the AI era." },
    { property: "og:title", content: "The Compute Core — Silicon Fundamentals" },
    { property: "og:description", content: "Inside the chips, fabs, and packaging that make modern AI possible." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/compute" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/compute" }],
}),
```

---

## `how-ai-works.tsx` — `/how-ai-works`

```tsx
head: () => ({
  meta: [
    { title: "How AI Actually Works — Transformers, Attention, Diffusion" },
    { name: "description", content: "A clear, technical walkthrough of how modern AI models work: transformers, attention, mixture-of-experts, diffusion, RLHF, and test-time scaling — without the hand-waving." },
    { property: "og:title", content: "How AI Works — Transformers, Attention, Diffusion" },
    { property: "og:description", content: "How modern AI models actually work — transformers, MoE, diffusion, RLHF." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/how-ai-works" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/how-ai-works" }],
}),
```

---

## `timeline.tsx` — `/timeline`

```tsx
head: () => ({
  meta: [
    { title: "Interactive AI History Timeline — 1950 to 2026" },
    { name: "description", content: "From Turing's test to GPT-5.5 — an interactive timeline of every major AI milestone, model release, lab founding, and policy event of the last 75 years." },
    { property: "og:title", content: "Interactive AI History Timeline (1950–2026)" },
    { property: "og:description", content: "Every major milestone in AI from Turing to GPT-5.5." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/timeline" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/timeline" }],
}),
```

---

## `agi-asi.tsx` — `/agi-asi`

```tsx
head: () => ({
  meta: [
    { title: "AGI & ASI Timelines — How Close Are We? (2026)" },
    { name: "description", content: "Frontier-lab roadmaps for AGI and superintelligence: capabilities reached, capabilities remaining, the bottlenecks of compute, energy, and post-training data." },
    { property: "og:title", content: "AGI & ASI Timelines — How Close Are We?" },
    { property: "og:description", content: "Frontier-lab roadmaps, bottlenecks, and the credible path from today's models to AGI." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/agi-asi" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/agi-asi" }],
}),
```

---

## `data-wall.tsx` — `/data-wall`

```tsx
head: () => ({
  meta: [
    { title: "The Data Wall — Synthetic Data and Scaling Limits" },
    { name: "description", content: "Pre-training data is finite. How the frontier responds: synthetic data, multimodal corpora, test-time scaling, RLAIF, and the move from data scale to compute scale." },
    { property: "og:title", content: "The Data Wall & Synthetic Futures" },
    { property: "og:description", content: "Synthetic data, RLAIF, test-time scaling — the post-data-wall playbook." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/data-wall" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/data-wall" }],
}),
```

---

## `geopolitics.tsx` — `/geopolitics`

```tsx
head: () => ({
  meta: [
    { title: "AI Chip Wars — TSMC, ASML, and the Geopolitics of Compute" },
    { name: "description", content: "Why TSMC's 2nm node, ASML's EUV monopoly, and US export controls now decide AI capability faster than any model release — the geopolitics of frontier compute." },
    { property: "og:title", content: "AI Chip Wars — Geopolitics of Compute" },
    { property: "og:description", content: "TSMC 2nm, ASML EUV, export controls — the geopolitics of frontier AI." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/geopolitics" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/geopolitics" }],
}),
```

---

## `infrastructure.tsx` — `/infrastructure`

```tsx
head: () => ({
  meta: [
    { title: "AI Infrastructure & the Power Grid — Gigawatts at Scale" },
    { name: "description", content: "Vera Rubin NVL72, dedicated nuclear SMRs, gigawatt training campuses — how the AI build-out is forcing the largest grid expansion since the 20th century." },
    { property: "og:title", content: "AI Infrastructure & the Power Grid" },
    { property: "og:description", content: "Gigawatt training campuses, SMRs, and the new AI power grid." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/infrastructure" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/infrastructure" }],
}),
```

---

## `humanity.tsx` — `/humanity`

```tsx
head: () => ({
  meta: [
    { title: "AI Safety, Alignment, and the Future of Work" },
    { name: "description", content: "Post-training pipelines, RLHF, RLAIF, constitutional AI, and the labor-market shifts already underway — the human side of the Silicon Epoch." },
    { property: "og:title", content: "Safety, Alignment & Labor" },
    { property: "og:description", content: "Alignment techniques and labor-market shifts in the Silicon Epoch." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/humanity" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/humanity" }],
}),
```

---

## `open-vs-closed.tsx` — `/open-vs-closed`

```tsx
head: () => ({
  meta: [
    { title: "Open Weights vs Closed APIs — Which Wins in 2026?" },
    { name: "description", content: "Llama, DeepSeek, Qwen, Mistral vs GPT, Claude, Gemini — the trade-offs of open-weight vs closed-API models for cost, capability, latency, and lock-in." },
    { property: "og:title", content: "Open Weights vs Closed APIs" },
    { property: "og:description", content: "The trade-offs between open-weight and closed-API frontier models." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/open-vs-closed" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/open-vs-closed" }],
}),
```

---

## `use-cases.tsx` — `/use-cases`

```tsx
head: () => ({
  meta: [
    { title: "What AI Is Actually Used For — Production Use Cases 2026" },
    { name: "description", content: "Coding agents shipping commits, olympiad-level math reasoning, drug discovery, contract review, and the use cases driving the $2.5B+ ARR of frontier products." },
    { property: "og:title", content: "AI Use Cases — What Frontier Models Do Today" },
    { property: "og:description", content: "Production AI use cases driving 2026 revenue — coding, science, ops." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/use-cases" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/use-cases" }],
}),
```

---

## `games.tsx` — `/games`

```tsx
head: () => ({
  meta: [
    { title: "Reinforcement Learning in Games — AlphaZero to Genie" },
    { name: "description", content: "From perfect-information chess to open-ended Factorio — how reinforcement learning, world models, and generative physics are rewriting both games and the engines beneath them." },
    { property: "og:title", content: "Reinforcement Learning & Game Simulation" },
    { property: "og:description", content: "How RL and world models are rewriting games and generative physics." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/games" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/games" }],
}),
```

---

## `learn.tsx` — `/learn`

```tsx
head: () => ({
  meta: [
    { title: "Learn AI in 2026 — A Practical Curriculum" },
    { name: "description", content: "What to learn, in what order, to be AI-fluent in 2026: prompting, evals, agent loops, RAG, fine-tuning, and where AI fluency is now the largest pay differentiator." },
    { property: "og:title", content: "Learn AI — A Practical 2026 Curriculum" },
    { property: "og:description", content: "What to learn, in what order, to be AI-fluent in 2026." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/learn" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/learn" }],
}),
```

---

## `next-decade.tsx` — `/next-decade`

```tsx
head: () => ({
  meta: [
    { title: "The Next Decade — Quantum, Neuromorphic, Bio-AI" },
    { name: "description", content: "What comes after the transformer: quantum advantage, neuromorphic chips, bio-AI for drug discovery, and the horizon technologies of the post-2030 AI landscape." },
    { property: "og:title", content: "Horizon Technologies — Beyond 2030" },
    { property: "og:description", content: "Quantum, neuromorphic, bio-AI — what comes after the transformer." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/next-decade" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/next-decade" }],
}),
```

---

## `sources.tsx` — `/sources`

```tsx
head: () => ({
  meta: [
    { title: "Sources & Bibliography — Silicon Epoch" },
    { name: "description", content: "Every citation in Silicon Epoch — primary developer releases, research papers, benchmarks, and policy documents that ground every claim in this guide." },
    { property: "og:title", content: "Sources & Bibliography" },
    { property: "og:description", content: "Every citation behind every claim in Silicon Epoch." },
    { property: "og:url", content: "https://siliconeposh.vercel.app/sources" },
    { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
  ],
  links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/sources" }],
}),
```
