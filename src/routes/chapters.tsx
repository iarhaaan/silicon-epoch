import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/chapters")({
  head: () => {
    const siteUrl = import.meta.env.VITE_SITE_URL || "https://siliconeposh.vercel.app";
    return {
      meta: [
        { title: "Table of Chapters — Silicon Epoch Index" },
        {
          name: "description",
          content:
            "Index of all 12 chapters and the Learn AI appendix detailing the silicon frontier.",
        },
        { property: "og:title", content: "Table of Chapters — Silicon Epoch Index" },
        { property: "og:url", content: `${siteUrl}/chapters` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `${siteUrl}/chapters` }],
    };
  },
  component: ChaptersIndex,
});

const CHAPTERS = [
  {
    num: "01",
    name: "Compute Core",
    to: "/compute",
    desc: "The physics of GAA nanosheet transistors, wafer economics, and the roadmap to N2 nodes.",
  },
  {
    num: "02",
    name: "How It Works",
    to: "/how-ai-works",
    desc: "Transformers, self-attention mechanisms, tokenization, and the shift to test-time reinforcement learning.",
  },
  {
    num: "03",
    name: "Frontier Labs",
    to: "/companies",
    desc: "Monolithic U.S. hyperscalers, open-weights Chinese disruptors, and sovereign European champions.",
  },
  {
    num: "04",
    name: "Use Cases",
    to: "/use-cases",
    desc: "Agentic coding pipelines, Olympiad-level mathematics, and AlphaFold-driven scientific discovery.",
  },
  {
    num: "05",
    name: "Humanity",
    to: "/humanity",
    desc: "The social contract, labor displacement, and the cognitive transition to silicon co-pilots.",
  },
  {
    num: "06",
    name: "AGI & ASI",
    to: "/agi-asi",
    desc: "Consensus timelines, intelligence benchmarks (ARC-AGI, GPQA), and recursive self-improvement.",
  },
  {
    num: "07",
    name: "Games",
    to: "/games",
    desc: "RL agents from Deep Blue and AlphaGo to AlphaStar and Genie's generative 3D environments.",
  },
  {
    num: "08",
    name: "Next Decade",
    to: "/next-decade",
    desc: "Logical error-corrected qubits, logical humanoid actuators, and the hardware convergence.",
  },
  {
    num: "09",
    name: "Infrastructure",
    to: "/infrastructure",
    desc: "Datacenter CapEx grids, SMR nuclear energy PPAs, and raw megawatt power bottlenecks.",
  },
  {
    num: "10",
    name: "Geopolitics",
    to: "/geopolitics",
    desc: "Export controls, SMIC advanced DUV patterning, and the geographic concentration of ASML/TSMC chokepoints.",
  },
  {
    num: "11",
    name: "Open vs Closed",
    to: "/open-vs-closed",
    desc: "The philosophical war between weights accessibility and proprietary safety alignments.",
  },
  {
    num: "12",
    name: "Data Wall",
    to: "/data-wall",
    desc: "The public human text depletion limit, synthetic data generation, and reinforcement learning.",
  },
  {
    num: "Appendix",
    name: "Learn AI",
    to: "/learn",
    desc: "A curated roadmap of technical papers, courses, and math prerequisites to master machine learning.",
  },
];

function ChaptersIndex() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Table of Chapters</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl leading-[0.95] text-wrap-balance">
          The Silicon Epoch <em className="italic text-ember">Field Guide</em>.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          Thirteen distinct chapters tracking the physical nodes, the neural weights, and the global
          power structures shaping the dawn of silicon intelligence.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAPTERS.map((ch) => (
            <Link
              key={ch.to}
              to={ch.to}
              className="group border border-border/80 hover:border-ember rounded-3xl p-6 bg-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <span className="font-mono text-xs text-ember font-semibold tracking-widest uppercase">
                  {ch.num === "Appendix" ? "Appendix" : `Chapter ${ch.num}`}
                </span>
                <h2 className="display text-2xl mt-3 leading-tight group-hover:text-ember transition-colors">
                  {ch.name}
                </h2>
                <p className="mt-3 text-xs text-foreground/70 leading-relaxed">{ch.desc}</p>
              </div>
              <div className="mt-6 text-xs font-mono text-foreground/45 group-hover:text-ember group-hover:translate-x-1 transition-all flex items-center gap-1.5">
                Read Chapter →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
