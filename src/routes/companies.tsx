import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { getLogoComponent } from "@/components/company-logos";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Frontier AI Labs — Ecosystem Leaderboard · June 2026" },
      { name: "description", content: "OpenAI GPT-5.5, Anthropic Claude Fable 5, Google Gemini 3.5, xAI Grok 4.3, Meta Muse Spark, DeepSeek V4-Pro, Qwen 3.7-Max, GLM-5 - flagship models, CEO quotes, and pricing." },
      { property: "og:title", content: "Frontier AI Labs — Ecosystem Leaderboard" },
    ],
  }),
  component: Companies,
});

type Lab = {
  name: string;
  hq: string;
  founded: string;
  ceo: string;
  tag: string;
  funding: string;
  models: { name: string; note: string }[];
  vision: string;
  quote: string;
  plan: string;
  accent: "ember" | "cobalt" | "moss" | "ink";
};

const LABS: Lab[] = [
  {
    name: "OpenAI",
    hq: "San Francisco, USA",
    founded: "2015",
    ceo: "Sam Altman",
    tag: "The pioneer of ChatGPT. Pivot to personal agentic AGI router systems, funded by Microsoft and sovereign capital.",
    funding: "$6.6B Oct 2024 round at $157B valuation; Microsoft >$13B total backing.",
    accent: "ember",
    models: [
      { name: "GPT-5.5 (April 2026)", note: "Unified flagship router, 1.05M-token context window. Priced at $5.00 / $30.00 per 1M tokens." },
      { name: "GPT-5.5 Instant", note: "Cost-sensitive high-speed workhorse, 1M context. Priced at $0.50 / $2.00 per 1M." },
      { name: "gpt-oss-120b", note: "Open-access 117B parameters model (MoE activating only 5.1B active parameters per token)." },
      { name: "o3 Reasoning Series", note: "Reasoning models (o3-mini / o3-pro) optimizing test-time compute for STEM & coding." },
    ],
    vision: "Altman's May 2026 essay 'The Gentle Singularity': 'We are past the event horizon; the takeoff has started. Humanity is close to building digital superintelligence.' Abundance in compute and fusion energy.",
    quote: "“AGI will arrive in 2025... and it is pretty close.” — Sam Altman",
    plan: "Implement the Stargate supercompute cluster program ($100B-$500B multi-site roadmap) · Roll out personal agent Swarms · Partner with nuclear developers.",
  },
  {
    name: "Anthropic",
    hq: "San Francisco, USA",
    founded: "2021",
    ceo: "Dario Amodei",
    tag: "Safety-first research lab. Pioneers of Constitutional AI and mechanistic interpretability. Claude Code agent dominates developer commits.",
    funding: "Amazon $8B total investment. Series E (Mar 2025): $3.5B at $61.5B; Series F (Sep 2025): $13B at $183B valuation.",
    accent: "cobalt",
    models: [
      { name: "Claude Fable 5 & Mythos 5 (June 2026)", note: "Frontier reasoning engines, 1M context. Unsafeguarded Mythos 5 restricted to US government. Priced at $10.00 / $50.00." },
      { name: "Claude Opus 4.8 (May 2026)", note: "Safety-first flagship model. 1M context, state-of-the-art SWE-bench Pro planning. Priced at $5.00 / $25.00." },
      { name: "Claude Sonnet 4.6", note: "Balanced speed/cost workhorse. 1M context. Priced at $3.00 / $15.00." },
      { name: "Claude Code", note: "Agentic terminal CLI tool. Generated $2.5B annualized revenue by February 2026." },
    ],
    vision: "Amodei's 'Machines of Loving Grace' details how a safe powerful AI could compress 50–100 years of biomedical progress into 5–10 years. Demands verifiable safety standards (ASL-3) globally.",
    quote: "“A powerful AI — smarter than a Nobel laureate — could arrive as early as 2026 or 2027.” — Dario Amodei",
    plan: "Enforce ASL-3/ASL-4 safety triggers on all training runs · Scale the Claude Code ecosystem globally · Deepen defense and interpretability research.",
  },
  {
    name: "Google DeepMind",
    hq: "London / Mountain View",
    founded: "2010 · merged 2023",
    ceo: "Demis Hassabis",
    tag: "The scientific AI powerhouse. Developed AlphaGo, AlphaFold 3, AlphaProof, and the Gemini reasoning ecosystem.",
    funding: "Alphabet internal subsidiary; backed by Google's $65B infrastructure CapEx program in 2025.",
    accent: "moss",
    models: [
      { name: "Gemini 3.5 Flash (May 2026)", note: "Flagship workhorse model with near-Pro intelligence and low-latency agentic capabilities." },
      { name: "Gemini 3.1 Pro Preview", note: "Premium reasoning flagship, 2M context window with native Deep Think mode. Priced at $2.00 / $12.00 per 1M." },
      { name: "Gemini 3.1 Flash-Lite", note: "Low-latency, cost-effective automation specialist for high-volume workflows." },
      { name: "AlphaFold 3 / GNoME", note: "Predicts protein-ligand, DNA/RNA structures and over 520,000 stable crystalline materials." },
    ],
    vision: "Hassabis claims we are standing in the 'foothills of the singularity' and that AGI will serve as the ultimate multiplier for physics, chemistry, biology, and math proofs.",
    quote: "“AGI is within reach. Five to ten years out. The next decade will be the most exciting in the history of science.” — Demis Hassabis",
    plan: "Integrate Gemini substrate into Google Search, Workspace, and Android · Deploy π0/Robotics generalist policies · Train next-gen simulators.",
  },
  {
    name: "xAI",
    hq: "Memphis / Bay Area",
    founded: "2023",
    ceo: "Elon Musk",
    tag: "Built Colossus 2, the world's first gigawatt-scale GPU training cluster in Memphis. Combined with SpaceX backing.",
    funding: "$6B May 2024 round at $24B; $6B Dec 2024 at $50B; $5B Jul 2025 with SpaceX $2B → $113B combined valuation.",
    accent: "ink",
    models: [
      { name: "Grok 4.3 (early 2026)", note: "Flagship model with native computer-use API, 2M context window, and direct X real-time lookup. Priced at $5.00 / $25.00." },
      { name: "Grok Build (0.1)", note: "Agentic terminal CLI coding tool, supporting parallel sub-agents and tool execution." },
      { name: "Grok 5 (In Training)", note: "Estimated 6T parameter MoE training on Colossus 2 (targeting true AGI)." },
    ],
    vision: "A maximally truth-seeking AI designed to understand the universe. Musk positions xAI as the compute-heavy sovereign alternative, tightly integrated with Tesla robotics and SpaceX launch systems.",
    quote: "“Digital superintelligence will arrive by 2026. Grok 5 will be the most advanced training project in history.” — Elon Musk",
    plan: "Expand Memphis cluster from 100K H100s to a 1-million GPU roadmap · Integrate Grok as the primary brain of Tesla's Optimus Gen 3 humanoid · Deploy edge inference.",
  },
  {
    name: "Meta AI · MSL",
    hq: "Menlo Park, USA",
    founded: "2013 · Restructured 2025",
    ceo: "Mark Zuckerberg",
    tag: "Pivoted from pure open-weights Llama to closed-weights flagship models under Meta Superintelligence Labs.",
    funding: "$65B infrastructure investment in 2025; meta capex projected up to $100B in 2026; owns 49% of Scale AI.",
    accent: "cobalt",
    models: [
      { name: "Muse Spark (April 2026)", note: "First closed-weights model. Trained using thought-compression RL. Tiered contemplation modes." },
      { name: "Llama 4 Maverick", note: "400B total / 17B active MoE. Shipped under community weights license with 700M MAU clause." },
      { name: "Llama 4 Scout", note: "109B total / 17B active MoE. Natively multimodal with a 10M token context window." },
    ],
    vision: "Deploying 'personal superintelligence' across Meta Smart Glasses and consumer apps. Releasing open-weights for mid-scale models, but keeping frontier reasoning proprietary to protect value.",
    quote: "“Muse Spark represents a transition to personal superintelligence. It is closed-weights to ensure safety.” — Mark Zuckerberg",
    plan: "Deploy 57 million sq ft of datacenter capacity globally · Expand Ray-Ban Meta glasses AI features · Build 1-million GPU clusters.",
  },
  {
    name: "DeepSeek",
    hq: "Hangzhou, China",
    founded: "2023",
    ceo: "Liang Wenfeng",
    tag: "The cost-efficiency disruptor. Shook the industry by matching closed models at 90% lower training and inference costs.",
    funding: "Self-funded. Raised a historic $7B at a $45B valuation in June 2026 from national and private entities.",
    accent: "ember",
    models: [
      { name: "DeepSeek-V4-Pro (April 2026)", note: "1.6T total / 49B active MoE, 1M context. Permissive MIT license. Near-zero Flash API pricing." },
      { name: "DeepSeek-V4-Flash (April 2026)", note: "284B total / 13B active MoE, 1M context window for high-efficiency reasoning." },
      { name: "DeepSeek V3.2", note: "671B total / 37B active MoE. Priced at $0.28 input / $0.42 output per 1M tokens." },
      { name: "DeepSeek-R1", note: "Reasoning model trained with pure RL, scaling test-time compute. AIME math score: 86.7%." },
    ],
    vision: "AGI via algorithmic ingenuity rather than brute-force hardware scaling. Providing high-fidelity open weights to democratize AGI and counter hardware export restrictions.",
    quote: "“We are not here to win a price war. We are here to push the boundary of intelligence.” — Liang Wenfeng",
    plan: "Optimize models for Huawei Ascend hardware · Keep all models under open-weights MIT license · Accelerate synthetic data verification.",
  },
  {
    name: "Alibaba Qwen",
    hq: "Hangzhou, China",
    founded: "2023",
    ceo: "Eddie Wu",
    tag: "The backbone of Alibaba Cloud. Qwen3.7-Max is one of the highest-rated models on Artificial Analysis.",
    funding: "Backed by Alibaba Group's cloud capEx; part of China's $28.3B National Semiconductor Big Fund.",
    accent: "ember",
    models: [
      { name: "Qwen3.7-Max (May 2026)", note: "Reasoning flagship, 256K context, optimized for 35-hour agent loops. Priced at $2.50 / $7.50." },
      { name: "Qwen3.7-Plus", note: "Multimodal agent foundation model unifying vision, language, and action planning." },
      { name: "Qwen3-Coder-Next", note: "State-of-the-art coding specialist with advanced tool use and repository-level comprehension." },
    ],
    vision: "Eddie Wu's vision is to make Alibaba Cloud the primary runtime for global AI agents. Open weights for smaller models, closed weights for the absolute frontier.",
    quote: "“Open weights set the baseline, but agent swarms in the cloud represent the monetization.” — Qwen Team",
    plan: "Integrate Qwen into Alibaba Cloud swarms · Deploy autonomous coding models · Target APAC enterprise market share.",
  },
];

const LEADERBOARD = [
  { lab: "OpenAI", model: "GPT-5.5 (April 2026)", params: "Undisclosed MoE", context: "1,050,000", price: "$5.00 / $30.00", license: "Proprietary API" },
  { lab: "OpenAI", model: "gpt-oss-120b", params: "117B total / 5.1B active", context: "128,000", price: "Free (limited)", license: "Community Open-Access" },
  { lab: "Anthropic", model: "Claude Fable 5", params: "Undisclosed", context: "1,000,000", price: "$10.00 / $50.00", license: "Proprietary API" },
  { lab: "Anthropic", model: "Claude Opus 4.8", params: "Undisclosed", context: "1,000,000", price: "$5.00 / $25.00", license: "Proprietary API" },
  { lab: "Google DeepMind", model: "Gemini 3.5 Flash", params: "Undisclosed", context: "1,000,000", price: "$0.075 / $0.30", license: "Proprietary API" },
  { lab: "Google DeepMind", model: "Gemini 3.1 Pro", params: "Undisclosed", context: "2,000,000", price: "$2.00 / $12.00", license: "Proprietary Preview" },
  { lab: "xAI", model: "Grok 4.3", params: "Undisclosed", context: "2,000,000", price: "$5.00 / $25.00", license: "Proprietary API" },
  { lab: "Meta AI", model: "Llama 4 Maverick", params: "400B total / 17B active", context: "1,000,000", price: "Free (inference cost only)", license: "Llama Community License" },
  { lab: "Meta AI", model: "Llama 4 Scout", params: "109B total / 17B active", context: "10,000,000", price: "Free (inference cost only)", license: "Llama Community License" },
  { lab: "DeepSeek", model: "DeepSeek-V4-Pro", params: "1.6T total / 49B active", context: "1,000,000", price: "Near-Zero (Flash API)", license: "Permissive MIT License" },
  { lab: "DeepSeek", model: "DeepSeek V3.2", params: "671B total / 37B active", context: "128,000+", price: "$0.28 / $0.42", license: "Permissive MIT License" },
  { lab: "Alibaba Qwen", model: "Qwen3.7-Max", params: "Undisclosed", context: "256,000+", price: "$2.50 / $7.50", license: "Proprietary API" },
  { lab: "Moonshot AI", model: "Kimi K2.5", params: "Undisclosed MoE", context: "262,000", price: "$0.38 / $1.72", license: "Open Weights" },
  { lab: "Zhipu AI", model: "GLM-5", params: "Undisclosed", context: "200,000", price: "$0.80 / $2.56", license: "Open Weights (MIT)" },
  { lab: "Xiaomi", model: "MiMo-V2-Pro", params: "Undisclosed", context: "1,040,000", price: "$1.00 / $3.00", license: "Proprietary API" },
  { lab: "MiniMax", model: "MiniMax M2.7", params: "Undisclosed", context: "205,000", price: "$0.30 / $1.20", license: "Proprietary API" },
  { lab: "ByteDance", model: "Seed 2.0 (Doubao)", params: "Undisclosed", context: "262,000", price: "$0.25 / $2.00", license: "Proprietary API" },
];

function Companies() {
  return (
    <PageShell>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 03 · The frontier · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl leading-[0.95]">
          Frontier Labs: The Global <em className="italic text-ember">Ecosystem Leaderboard</em>.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          The battle for AGI has divided the global ecosystem into capital-intensive U.S. hyperscalers, open-weights Chinese disruptors, and sovereign European champions. Below: flagship models, valuations, and roadmap targets.
        </p>
      </section>

      {/* Lab List */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 space-y-px bg-border border border-border rounded-3xl overflow-hidden">
        {LABS.map((lab, idx) => (
          <article key={lab.name} className="bg-background p-8 lg:p-14 grid lg:grid-cols-12 gap-8">
            <header className="lg:col-span-4">
              <div className="font-mono text-xs text-foreground/50">{String(idx + 1).padStart(2, "0")} / {String(LABS.length).padStart(2, "0")}</div>
              <div className="flex items-center gap-3 mt-3">
                {getLogoComponent(lab.name, 36, "text-foreground")}
                <h2 className="display text-4xl lg:text-5xl">{lab.name}</h2>
              </div>
              <p className="mt-3 text-xs text-foreground/60">{lab.hq} · founded {lab.founded}</p>
              <p className="mt-1 text-xs text-foreground/60">CEO: {lab.ceo}</p>
              <p className="mt-4 text-xs font-mono text-ember font-medium uppercase tracking-wider">CapEx / Valuations:</p>
              <p className="mt-1 text-xs text-foreground/80">{lab.funding}</p>
              <p className="mt-6 text-foreground/80 italic text-sm">{lab.tag}</p>
            </header>
            <div className="lg:col-span-8 space-y-8">
              <div>
                <div className="eyebrow mb-3 font-mono text-xs uppercase tracking-wider">Flagship models · mid-2026</div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {lab.models.map((m) => (
                    <li key={m.name} className="border-t border-border pt-3">
                      <div className="font-medium text-sm text-ember">{m.name}</div>
                      <div className="text-xs text-foreground/65 mt-1">{m.note}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="eyebrow mb-2 font-mono text-xs uppercase tracking-wider">Long-term vision</div>
                  <p className="text-foreground/80 leading-relaxed text-xs">{lab.vision}</p>
                </div>
                <div>
                  <div className="eyebrow mb-2 font-mono text-xs uppercase tracking-wider">10-year plan</div>
                  <p className="text-foreground/80 leading-relaxed text-xs">{lab.plan}</p>
                </div>
              </div>
              <blockquote className={`border-l-2 pl-5 font-display text-xl leading-snug italic ${lab.accent === "ember" ? "border-ember" : lab.accent === "cobalt" ? "border-cobalt" : lab.accent === "moss" ? "border-moss" : "border-ink"}`}>
                {lab.quote}
              </blockquote>
            </div>
          </article>
        ))}
      </section>

      {/* Leaderboard Table */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="eyebrow">Ecosystem Leaderboard</div>
        <h2 className="display text-4xl lg:text-5xl mt-4 mb-8">Frontier Model Registry & Pricing</h2>
        <div className="border border-border rounded-3xl overflow-hidden bg-background">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-cream/40 dark:bg-zinc-900/40 text-xs font-mono uppercase text-muted-foreground">
                  <th className="p-4 lg:p-6">Lab</th>
                  <th className="p-4 lg:p-6">Flagship Model</th>
                  <th className="p-4 lg:p-6">Parameter Scale</th>
                  <th className="p-4 lg:p-6">Context Window</th>
                  <th className="p-4 lg:p-6">API Pricing (In/Out per 1M)</th>
                  <th className="p-4 lg:p-6">Licensing Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {LEADERBOARD.map((l, index) => (
                  <tr key={`${l.model}-${index}`} className="hover:bg-cream/20 dark:hover:bg-zinc-900/20 text-xs">
                    <td className="p-4 lg:p-6 font-display font-medium text-sm">{l.lab}</td>
                    <td className="p-4 lg:p-6 font-medium text-ember">{l.model}</td>
                    <td className="p-4 lg:p-6 font-mono text-[11px]">{l.params}</td>
                    <td className="p-4 lg:p-6 font-mono text-[11px]">{l.context} tokens</td>
                    <td className="p-4 lg:p-6 font-mono text-[11px]">{l.price}</td>
                    <td className="p-4 lg:p-6 text-foreground/80">{l.license}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 border-t border-border">
        <div className="flex justify-between items-center">
          <Link to="/how-ai-works" className="text-sm text-foreground/60 hover:text-foreground">
            ← Chapter 02: How AI Works
          </Link>
          <Link to="/use-cases" className="text-sm font-medium text-ember hover:underline">
            Chapter 04: AI Use Cases →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
