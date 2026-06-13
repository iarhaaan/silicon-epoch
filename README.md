# Silicon Epoch 🌐🔋

[![Live Site](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://siliconeposh.vercel.app/)
[![Vibecoded](https://img.shields.io/badge/Vibecoded-100%25-FF69B4?style=for-the-badge)](https://github.com/iarhaaan/siliconeposh)
[![Built With](https://img.shields.io/badge/Built%20With-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framework](https://img.shields.io/badge/Framework-React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blueviolet?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **A Comprehensive, Living Field Guide to the Dawn of the Silicon Intelligence Era.**

**Silicon Epoch** is a highly polished, responsive, and data-driven chronicle tracking the geopolitical, economic, and technological forces shaping the next decade of artificial intelligence.

All stats, analyses, and citations are calibrated and updated to represent primary-source developer releases, research papers, and indicators as of **mid-2026**.

**Live Demo:** [siliconeposh.vercel.app](https://siliconeposh.vercel.app/)

---

## 🗺️ Table of Contents

- **Chapter 01** · The Compute Core (Overview & Silicon Fundamentals)
- **Chapter 02** · How AI Works (Transformers, Architectures & Diffusion)
- **Chapter 03** · Frontier Labs (OpenAI, Anthropic, DeepMind, Meta, DeepSeek, Mistral, xAI, etc.)
- **Chapter 04** · AI Use Cases (Coding, Creative, Medicine, Math & Reasoning)
- **Chapter 05** · Humanity (Safety, Alignments, Alignment Failure & Labor Transitions)
- **Chapter 06** · AGI & ASI (Superalignment, Decisional Safety, Cyberdefense & Scaling Laws)
- **Chapter 07** · Games (AlphaGo, AlphaStar, Deep Blue, Genie 3, Factorio Agents, etc.)
- **Chapter 08** · The Next Decade (Quantum Computing, Bio-AI, Autonomous Agents)
- **Chapter 09** · Infrastructure & Energy (Blackwell/Rubin chips, Gigawatt DCs, Nuclear PPAs)
- **Chapter 10** · Geopolitics & The Chip Wars (TSMC, ASML lithography, exports, Huawei Ascend)
- **Chapter 11** · The Weights Debate (Side-by-side comparison of Open vs. Closed weights)
- **Chapter 12** · The Data Wall & Synthetic Futures (Depletion of human text, Reinforcement Learning, Test-time scaling)
- **Interactive AI Timeline** · Jumping from Turing's foundations in 1950 to the frontier reasoning models of 2026.
- **Bibliography & Sources** · A verified index of direct research papers, lab announcements, and live citations.

---

## 🚀 Key Features

* **Interactive AI History Timeline (`/timeline`)**:
  * Visualizes the timeline of artificial intelligence from Alan Turing's 1950 proposal to the cutting-edge models of 2026.
  * Real-time client-side text search over milestones, creators, and descriptions.
  * Interactive chronological era filter sliders and category badges (Breakthroughs, Compute & Hardware, Game Milestones, Social & Policy).
  * Immersive details drawer showing immediate legacy, key contributors, and active bibliographical references.
  * Custom styled, sleek node dots utilising the brand's warm `ember` orange with glowing active shadow indicators.
* **Silicon Epoch Aesthetics**: A premium, immersive interface built with curated dark/light themes, sleek glassmorphism, responsive masonry layouts, and smooth micro-animations.
* **O(1) Map-Based Citation System**: High-efficiency bibliographic lookups powered by a strict key-value mapping (`SOURCES_MAP`), providing instant highlight triggers and tooltip diagnostics for missing/fallback citations.
* **Frontier Lab Integrations**: Official brand logo rendering using optimized SVG paths directly from `@lobehub/icons` subpaths to keep the bundle size minimal.
* **Side-by-Side Comparison**: Interactive, tabular analysis of frontier closed weights (GPT-5.5, Claude Fable 5) vs. open weights (DeepSeek V4-Pro, Qwen 3.7-Max) with calibrated statistics.
* **Citations & Bibliography**: Live, verified external sources linked directly via superscript citation tags, supporting automatic scrolling and card highlights on the sources page.
* **Crawler Friendly (`robots.txt` + `sitemap.xml`)**: Welcoming config allowing all AI crawling agents and search engines (GPTBot, ClaudeBot, Google-Extended, etc.) to traverse and index the entire site, accompanied by a dynamically generated sitemap built during compilation.
* **Vite SSR Ready**: Structured under **TanStack Start** for modern Server-Side Rendering (SSR) and seamless hydration.

---

## 🛠️ Tech Stack

- **Languages**: TypeScript, JavaScript, HTML, CSS
- **Core**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Routing & SSR**: [TanStack Start](https://tanstack.com/router/latest/docs/start/overview) (Router + SSR Engine)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [@lobehub/icons](https://github.com/lobehub/lobe-icons) (optimized direct subpath imports)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Testing**: [Vitest](https://vitest.dev/) (Unit/Logic) & [Playwright](https://playwright.dev/) (End-to-End)

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iarhaaan/siliconeposh.git
   cd siliconeposh
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server:
```bash
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal) to view the site.

### Build

Compile the project for production:
```bash
npm run build
```
This builds the client and SSR server bundles cleanly under the `.output` directory and automatically generates the updated sitemap.

### Testing

#### Unit Tests (Vitest)
Verify the O(1) citation map lookups and library data integrity:
```bash
npm run test
```

#### E2E Tests (Playwright)
Verify pages, navigation layouts, and component render logic:
```bash
npm run test:e2e
```

---

## 🔓 License

This project is open-source and available under the **[MIT License](LICENSE)**. Anyone is free to use, clone, modify, and deploy it for their own purposes.
