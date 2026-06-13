import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";
import {
  OpenAILogo,
  AnthropicLogo,
  DeepMindLogo,
  XAILogo,
  MetaLogo,
  MistralLogo,
  CohereLogo,
  DeepSeekLogo,
  MoonshotLogo,
  QwenLogo,
  ByteDanceLogo,
  BaiduLogo,
  ZhipuLogo,
  TencentLogo,
} from "@/components/company-logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://siliconeposh.vercel.app/og-image.png" },
      { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image.png" },
      { property: "og:url", content: "https://siliconeposh.vercel.app/" },
      { title: "Silicon Epoch — How AI Will Reshape Humanity" },
      {
        name: "description",
        content:
          "A comprehensive, current field guide to the AI revolution: every frontier lab, every model, the chip wars, power grids, reasoning models, the data wall, and the road to superintelligence.",
      },
      { property: "og:title", content: "Silicon Epoch — How AI Will Reshape Humanity" },
      {
        property: "og:description",
        content:
          "Every frontier lab, the chip wars, power grids, reasoning models, the data wall, and the road to superintelligence.",
      },
    ],
    links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/" }],
  }),
  component: Index,
});

const STATS = [
  {
    k: "78%",
    v: (
      <>
        Of organisations regularly use generative AI, up from 55% in 2023 (McKinsey 2025)
        <Citation id="mckinsey-genai-2025" />
      </>
    ),
  },
  {
    k: "140T",
    v: (
      <>
        Daily token volume call rate in China as of Q1 2026 — a 1,400× jump in two years
        <Citation id="reasoning-token-stack" />
      </>
    ),
  },
  {
    k: "80.3%",
    v: (
      <>
        Top score on SWE-bench Pro (Claude Fable 5, June 2026) — up from ~10% two years ago
        <Citation id="best-ai-coding-2026" />
      </>
    ),
  },
  {
    k: "$2.5B",
    v: (
      <>
        Claude Code's annualized revenue in February 2026 — just 9 months post-release
        <Citation id="claude-opus-4-8" />
      </>
    ),
  },
];

const PILLARS = [
  {
    eyebrow: "01 · Compute Core",
    title: "Silicon fundamentals & packaging",
    body: "TSMC 2nm GAA nanosheets, Intel 18A, backside power, and the critical CoWoS advanced packaging capacity bottlenecks powering high-performance accelerators.",
    to: "/compute" as const,
    cta: "Inspect the silicon",
  },
  {
    eyebrow: "02 · How It Works",
    title: "How AI actually works",
    body: "Transformers, self-attention, GQA, Dense vs Mixture of Experts (MoE), and linear-complexity alternatives like Mamba 3 and Linear Recurrent Units.",
    to: "/how-ai-works" as const,
    cta: "Open the engine bay",
  },
  {
    eyebrow: "03 · Frontier Labs",
    title: "Every major lab & flagship model",
    body: "From OpenAI's GPT-5.5 family and Google's Gemini 3.5 to Anthropic's Claude Fable 5, Meta's Maverick, DeepSeek V4-Pro, Qwen 3.7-Max, and Zhipu GLM-5.",
    to: "/companies" as const,
    cta: "Browse the labs",
  },
  {
    eyebrow: "04 · Use Cases",
    title: "Reasoning, science, and coding",
    body: "SWE-bench Pro coding performance, AlphaGeometry 2 IMO gold-medalist math, AlphaFold 3 biomolecular complex mapping, and GNoME materials discovery.",
    to: "/use-cases" as const,
    cta: "See the benchmarks",
  },
  {
    eyebrow: "05 · Humanity",
    title: "Post-training, safety & alignment",
    body: "SFT, DPO, and GRPO reinforcement learning. Analyzing alignment failures, Sleeper Agents, sycophancy, labor impacts, and macroeconomic capex trends.",
    to: "/humanity" as const,
    cta: "Analyze the impact",
  },
  {
    eyebrow: "06 · AGI & ASI",
    title: "AGI timelines & new scaling laws",
    body: "We map every prediction from Hassabis, Amodei, Legg, and Altman. Inspect Chinchilla scaling limits and the pivot to test-time compute scaling.",
    to: "/agi-asi" as const,
    cta: "Read the timelines",
  },
  {
    eyebrow: "07 · Games",
    title: "AI in games & virtual worlds",
    body: "David Silver's reinforcement learning milestones from AlphaGo to AlphaStar. Explore Genie 3 real-world engines and Factorio long-horizon agents.",
    to: "/games" as const,
    cta: "Step into the simulation",
  },
  {
    eyebrow: "08 · Next Decade",
    title: "Horizon tech & physical robotics",
    body: "Quantum computing advantage roadmaps (Willow, Starling), neuromorphic chips, DNA storage, and humanoid robotics (Optimus Gen 3, Figure 02).",
    to: "/next-decade" as const,
    cta: "See the roadmap",
  },
  {
    eyebrow: "09 · Infrastructure",
    title: "Infrastructure & nuclear deals",
    body: "Powering intelligence at gigawatt scale: Meta's 5 GW Hyperion, xAI Memphis, and nuclear PPAs (Three Mile Island, Kairos SMR, Amazon Talen).",
    to: "/infrastructure" as const,
    cta: "Inspect the grid",
  },
  {
    eyebrow: "10 · Geopolitics",
    title: "The Chip Wars & trade controls",
    body: "Taiwan's TSMC chokepoint, ASML's High-NA EUV lithography monopoly, U.S. export controls on advanced compute, and China's domestic Ascend ecosystem.",
    to: "/geopolitics" as const,
    cta: "Explore the supply chain",
  },
  {
    eyebrow: "11 · Open vs Closed",
    title: "Open weights vs closed APIs",
    body: "The commercial and philosophical weights war. Meta's Llama 4 Scout, Mistral Small 4, Gemma 4, and the regulatory impacts of California's legislation.",
    to: "/open-vs-closed" as const,
    cta: "Compare the weights",
  },
  {
    eyebrow: "12 · Data Wall",
    title: "Data depletion & synthetic futures",
    body: "Internet data exhaustion timelines. How test-time compute, RLAIF self-play, and sandbox simulations bypass the physical data wall.",
    to: "/data-wall" as const,
    cta: "Study the new scaling laws",
  },
  {
    eyebrow: "Appendix · Learn AI",
    title: "Daily AI Fluency: learn to practice",
    body: "Six practical habits to build AI literacy: prompting, agent execution, daily utilization, and keeping up with practitioners over pundits.",
    to: "/learn" as const,
    cta: "Build your AI practice",
  },
];

const TICKER = [
  "GPT-5.5 (April 2026) · ",
  "Claude Fable 5 (June 9, 2026) · ",
  "Claude Mythos 5 (June 2026) · ",
  "Gemini 3.5 Flash (May 2026) · ",
  "DeepSeek V4-Pro MoE ~1.6T params · ",
  "Meta Muse Spark Pivot · ",
  "Qwen 3.7-Max (May 2026) · ",
  "Kimi K2.5 Open Weights · ",
  "TSMC 2nm N2 Volume Production (Q4 2025) · ",
  "Microsoft Crane Clean Energy Center 835 MW (2027) · ",
  "Google Kairos Power SMR Deal (500 MW) · ",
  "DeepSeek-R1 Test-Time Scaling Shift · ",
  "SWE-bench Pro Fable 5 80.3% · ",
  "Claude Code $2.5B ARR · ",
];

const INDICATORS = [
  { label: "Colossus 2 Cluster", value: "100,000 H100 Online", status: "Nominal Draw · 150MW" },
  {
    label: "Llama 4 Training Run",
    value: "Maverick 400B in progress",
    status: "1.2 GW Grid Capacity",
  },
  {
    label: "TMI Nuclear Restart",
    value: "835MW Reactor Grid PPA",
    status: "Target Online H1 2027",
  },
  {
    label: "ARC-AGI-2 Leaderboard",
    value: "Claude Fable 5: 85.2%",
    status: "Exceeds Human Expert",
  },
];

function Index() {
  const [activeIndicator, setActiveIndicator] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isOffScreen, setIsOffScreen] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndicator((prev) => (prev + 1) % INDICATORS.length);
    }, 4500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOffScreen(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    if (tickerRef.current) {
      observer.observe(tickerRef.current);
    }

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const shouldAnimate = !isPaused && !isOffScreen;

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-28">
          <div className="eyebrow">A field guide · Updated June 2026</div>
          <h1 className="display mt-6 text-[clamp(3rem,9vw,9rem)] max-w-6xl">
            The most consequential <em className="italic text-ember">technology</em> in human
            history is being built right now.
          </h1>
          <div className="mt-10 grid md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-7 flex flex-col justify-between">
              <p className="text-xl leading-relaxed text-foreground/80">
                We have entered the{" "}
                <strong className="font-semibold text-foreground">Silicon Epoch</strong>. In the
                next decade, artificial intelligence will rewrite science, medicine, work,
                geopolitics, and the texture of daily life. This is a living, deeply researched
                guide to <em className="italic">who</em> is building it,{" "}
                <em className="italic">how</em> it works, the <em className="italic">grid</em> that
                powers it, and <em className="italic">where</em> it is going.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/companies"
                  className="rounded-full bg-ink text-paper px-6 py-3 text-sm hover:bg-ember transition-colors"
                >
                  Tour the labs →
                </Link>
                <Link
                  to="/timeline"
                  className="rounded-full border border-ink/20 px-6 py-3 text-sm hover:bg-ink hover:text-paper transition-colors"
                >
                  History Timeline
                </Link>
                <Link
                  to="/infrastructure"
                  className="rounded-full border border-ink/20 px-6 py-3 text-sm hover:bg-ink hover:text-paper transition-colors"
                >
                  Hardware & Grid
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 border border-border/80 rounded-3xl bg-card/60 backdrop-blur-md p-6 flex flex-col justify-between min-h-[180px] relative shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-foreground/45 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
                  Frontier Live Telemetry
                </span>
                <span className="text-[10px] font-mono text-foreground/40">
                  {activeIndicator + 1} / {INDICATORS.length}
                </span>
              </div>
              <div className="mt-4 animate-in fade-in duration-300">
                <div className="text-xs font-mono text-foreground/50">
                  {INDICATORS[activeIndicator].label}
                </div>
                <div className="font-display text-xl font-bold text-foreground mt-1">
                  {INDICATORS[activeIndicator].value}
                </div>
                <div className="text-[11px] font-mono text-ember mt-1">
                  {INDICATORS[activeIndicator].status}
                </div>
              </div>
              <button
                onClick={() => setActiveIndicator((prev) => (prev + 1) % INDICATORS.length)}
                className="absolute right-6 bottom-6 text-[10px] font-mono text-foreground/50 hover:text-ember cursor-pointer"
              >
                Next Telemetry →
              </button>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div
          ref={tickerRef}
          className="rule border-y border-border bg-cream overflow-hidden relative group"
        >
          <div
            className="flex ticker whitespace-nowrap py-3 text-sm font-mono text-foreground/60"
            style={{ animationPlayState: shouldAnimate ? "running" : "paused" }}
          >
            <div className="flex shrink-0">
              {TICKER.concat(TICKER).map((t, i) => (
                <span key={i} className="px-2">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex shrink-0">
              {TICKER.concat(TICKER).map((t, i) => (
                <span key={"b" + i} className="px-2">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Play/Pause control */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play ticker animation" : "Pause ticker animation"}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-border/80 rounded-md px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity z-10 cursor-pointer"
          >
            {isPaused ? "Play" : "Pause"}
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <div key={s.k}>
              <div className="font-display text-6xl text-ember">{s.k}</div>
              <div className="mt-3 text-sm text-foreground/70 leading-relaxed">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LOGO CLOUD (Frontier Partners) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12 border-t border-border">
        <div className="eyebrow text-center mb-10 text-foreground/50">
          Frontier AI Labs & Ecosystem covered in this guide
        </div>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-y-12 gap-x-8 justify-items-center items-center opacity-65 hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col items-center gap-2" title="OpenAI">
            <OpenAILogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">OpenAI</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Anthropic">
            <AnthropicLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Anthropic</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Google DeepMind">
            <DeepMindLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">DeepMind</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="xAI">
            <XAILogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">xAI</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Meta AI">
            <MetaLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Meta MSL</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="DeepSeek">
            <DeepSeekLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">DeepSeek</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Mistral AI">
            <MistralLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Mistral AI</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Cohere">
            <CohereLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Cohere</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Moonshot AI">
            <MoonshotLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Moonshot</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Alibaba Qwen">
            <QwenLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Alibaba Qwen</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="ByteDance">
            <ByteDanceLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">ByteDance</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Baidu">
            <BaiduLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Baidu Ernie</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Zhipu AI">
            <ZhipuLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Zhipu GLM</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Tencent">
            <TencentLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Tencent</span>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 border-t border-border">
        <div className="eyebrow mb-6">Field Guide Chapters</div>
        <h2 className="display text-5xl lg:text-6xl mb-12">
          Thirteen vectors of the intelligence explosion.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {PILLARS.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group bg-background p-10 hover:bg-cream transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="eyebrow">{p.eyebrow}</div>
                <h2 className="display mt-4 text-3xl">{p.title}</h2>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{p.body}</p>
              </div>
              <div className="mt-8 text-sm font-medium inline-flex items-center gap-2 group-hover:text-ember self-start">
                {p.cta} <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE WALL */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28 border-t border-border">
        <div className="eyebrow">What the builders are saying</div>
        <div className="mt-8 grid md:grid-cols-3 gap-10">
          {[
            {
              q: "We are past the event horizon; the takeoff has started. Humanity is close to building digital superintelligence.",
              who: (
                <>
                  Sam Altman · OpenAI · June 2025
                  <Citation id="altman-intelligence-age" />
                </>
              ),
            },
            {
              q: "We are near the end of the exponential — a few years away from a country of geniuses in a data center.",
              who: (
                <>
                  Dario Amodei · Anthropic · Feb 2026
                  <Citation id="fable-5-impressions" />
                </>
              ),
            },
            {
              q: "We are standing in the foothills of the singularity. Society has only a few years left to prepare.",
              who: (
                <>
                  Demis Hassabis · Google DeepMind · May 2026
                  <Citation id="gemini-3-5-flash-guide" />
                </>
              ),
            },
            {
              q: "Digital superintelligence is coming. xAI is positioning Colossus 2 and Grok 5 to achieve true AGI.",
              who: (
                <>
                  Elon Musk · xAI · 2026
                  <Citation id="grok-4-3-announcement" />
                </>
              ),
            },
            {
              q: "LLMs will not lead to AGI. Objective-driven world models are the true path forward.",
              who: (
                <>
                  Yann LeCun · AMI Labs · Feb 2026
                  <Citation id="best-open-source-2026" />
                </>
              ),
            },
            {
              q: "We are not here to win a price war. We are here to push the boundary of intelligence, raising $7B to build open weights.",
              who: (
                <>
                  Liang Wenfeng · DeepSeek · June 2026
                  <Citation id="deepseek-v4-r2" />
                </>
              ),
            },
          ].map((c) => (
            <figure key={c.q} className="border-t border-border pt-6">
              <blockquote className="font-display text-2xl leading-snug">“{c.q}”</blockquote>
              <figcaption className="mt-4 eyebrow text-foreground/60 flex items-center gap-1">
                {c.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="rounded-3xl bg-ink text-paper p-14 lg:p-20 grain">
          <div className="grain-overlay" />
          <div className="eyebrow text-paper/60">Where to start</div>
          <h2 className="display mt-4 text-5xl lg:text-7xl max-w-4xl">
            If you read one thing today, read{" "}
            <Link to="/agi-asi" className="ember-underline">
              the timeline to AGI
            </Link>
            .
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/agi-asi"
              className="rounded-full bg-ember text-white px-6 py-3 text-sm hover:opacity-90"
            >
              The road to AGI →
            </Link>
            <Link
              to="/timeline"
              className="rounded-full border border-paper/30 px-6 py-3 text-sm hover:bg-paper hover:text-ink"
            >
              Interactive Timeline
            </Link>
            <Link
              to="/infrastructure"
              className="rounded-full border border-paper/30 px-6 py-3 text-sm hover:bg-paper hover:text-ink"
            >
              Nuclear Datacenters & Grid
            </Link>
            <Link
              to="/open-vs-closed"
              className="rounded-full border border-paper/30 px-6 py-3 text-sm hover:bg-paper hover:text-ink"
            >
              Open vs Closed weights
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
