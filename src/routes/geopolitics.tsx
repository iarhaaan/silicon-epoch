import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";

export const Route = createFileRoute("/geopolitics")({
  head: () => ({
    meta: [
      { title: "Geopolitics & Chip Wars — Silicon Epoch" },
      { name: "description", content: "TSMC Taiwan chokepoint, ASML High-NA EUV lithography, US export controls, and China's domestic Huawei Ascend ecosystem." },
      { property: "og:title", content: "Geopolitics & Chip Wars — Silicon Epoch" },
    ],
  }),
  component: Geopolitics,
});

const ISSUES = [
  {
    n: "01",
    title: "TSMC Global Expansion & Taiwan Node Ramp",
    body: <>TSMC fabricates the physical substrate of frontier AI. N2 (2nm) volume production commenced in Q4 2025 at Kaohsiung Fab 22 and Hsinchu Fab 20<Citation id="tsmc-2nm-production" />. Backside power delivery nodes (N2P, A16) are scheduled for volume production in H2 2026. Global fab expansions are ongoing to de-risk geographic concentration:</>,
    bullets: [
      <>Arizona (Fab 21): Projected to increase output by 80% in 2026 compared to 2025; 2nm production targeted by 2028<Citation id="tsmc-2nm-growth" />.</>,
      <>Kumamoto (Japan): First fab projected to increase output by 130% year-on-year in 2026<Citation id="tsmc-2nm-growth" />.</>,
      <>Dresden (Germany): ESMC joint venture construction continues, establishing sovereign European capacity<Citation id="tsmc-2nm-growth" />.</>,
    ]
  },
  {
    n: "02",
    title: "EUV Lithography Scanners & ASML Monopolies",
    body: <>ASML (Veldhoven, Netherlands) retains a monopoly on Extreme Ultraviolet (EUV) lithography tools. The next-generation High-NA EUV scanners (0.55 NA) print chip layers at 8nm resolution. The EXE:5000 pre-production system was delivered to Samsung's Hwaseong Campus in March 2025<Citation id="samsung-high-na" />, and production-scale EXE:5200 tools are shipping now:</>,
    bullets: [
      <>Intel Lead: Intel Oregon received the first R&D tools; commercial EXE:5200 shipments are scheduled for late 2026/early 2027 to fabricate 14A nodes<Citation id="samsung-high-na" />.</>,
      <>TSMC R&D: TSMC purchased High-NA systems (costing up to $400M each) for R&D at Hsinchu, delaying full production deployment until economics improve<Citation id="samsung-high-na" />.</>,
      <>Samsung Deployment: Samsung received its first system in 2024 and is installing two systems in 2025–2026 for 2nm logic and high-density DRAM<Citation id="samsung-high-na" />.</>,
    ]
  },
  {
    n: "03",
    title: "U.S. BIS Export Controls & Loophole Crackdown",
    body: <>The U.S. Bureau of Industry and Security (BIS) enforces strict limits on advanced computing items. Under the January 15, 2026 final rule, exports of NVIDIA H200 and AMD MI325X chips to China/Macau shifted from presumption of denial to a case-by-case review, subject to strict conditions<Citation id="bis-export-policy" />:</>,
    bullets: [
      <>Performance Thresholds: Review applies to chips with Total Processing Performance (TPP) &lt; 21,000 and DRAM bandwidth &lt; 6,500 GB/s<Citation id="bis-export-policy" />.</>,
      <>Export Tariffs & Caps: Licenses impose a 25% revenue tariff, a 50% volume cap compared to U.S. shipments, and strict third-party testing<Citation id="bis-export-policy" />.</>,
      <>Cloud Loophole: The House passed the Remote Access Security Act (369-22) to block Chinese entities from renting GPU compute via foreign cloud nodes<Citation id="us-export-controls" />.</>,
    ]
  },
  {
    n: "04",
    title: "China's Sovereign Semiconductor Stack",
    body: <>In response to Western bans, China has injected USD 28.3 billion into its National Semiconductor Fund, designating SMIC and Huawei as national champions to build an independent domestic silicon ecosystem<Citation id="smic-5nm-play" />:</>,
    bullets: [
      <>SMIC Fabrication: SMIC is producing 7nm (N+2) using older DUV multi-patterning at 20-40% yields. 5nm pilot runs are underway targeting 2026 mass production<Citation id="smic-5nm-play" />.</>,
      <>Huawei Ascend 910C: Two-chiplet design delivering 780 TFLOPS BF16. Huawei shipped 805K total accelerators in 2025 (653K being 910C)<Citation id="huawei-npu-supply" />.</>,
      <>Huawei Ascend 950PR & DT: Next-gen architectures. 950PR delivers 1.56 PFLOPS FP4 with 112GB HiBL memory; the training variant (950DT) features 144GB HiZQ memory<Citation id="huawei-npu-supply" />.</>,
      <>Atlas 950 SuperPod: Massive Chinese cluster combining 8,192 Ascend 950DT chips in 160 cabinets, claiming 6.7× NVL144 compute capacity<Citation id="huawei-npu-supply" />.</>,
    ]
  }
];

function Geopolitics() {
  return (
    <PageShell>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 10 · Geopolitics & The Chip Wars · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95]">
          Geopolitics: Sovereign <em className="italic text-ember">silicon</em> & supply.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          The software of AI is global and open, but the physical supply chain is hyper-concentrated. Control of leading-edge semiconductor lithography and advanced packaging forms the core axis of modern superpower competition.
        </p>
      </section>

      {/* Grid of issues */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {ISSUES.map((issue) => (
            <article key={issue.n} className="bg-background p-10 flex flex-col justify-between">
              <div>
                <div className="font-mono text-sm text-ember">{issue.n}</div>
                <h3 className="font-display text-3xl mt-3">{issue.title}</h3>
                <div className="mt-4 text-xs text-foreground/75 leading-relaxed">{issue.body}</div>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4">
                {issue.bullets.map((b, i) => (
                  <li key={i} className="text-xs text-foreground/70 leading-relaxed flex gap-2">
                    <span className="text-ember">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Demand Panel */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl bg-cream dark:bg-zinc-900 border border-border p-10 lg:p-14">
          <div className="eyebrow">Hyperscaler Demand Signals</div>
          <h2 className="display text-3xl lg:text-4xl mt-4 max-w-3xl">Surging Bids for Export-Compliant Chips.</h2>
          <p className="mt-4 text-sm text-foreground/80 leading-relaxed max-w-3xl">
            Despite the regulatory tariffs and caps, demand for U.S. hardware inside China remains unprecedented. ByteDance has prepared over <strong>$14 billion</strong> in purchase orders for NVIDIA H200 processors for 2026, contingent on case-by-case BIS export license approvals<Citation id="bis-export-policy" />. 
          </p>
          <p className="mt-4 text-sm text-foreground/80 leading-relaxed max-w-3xl">
            Concurrently, Chinese tech firms are committing billions to Huawei's domestic Atlas 950 platform, with ByteDance signing a $5.6B hardware deployment agreement for the upcoming Ascend 950 series<Citation id="huawei-npu-supply" />.
          </p>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 border-t border-border">
        <div className="flex justify-between items-center">
          <Link to="/infrastructure" className="text-sm text-foreground/60 hover:text-foreground">
            ← Chapter 09: Infrastructure
          </Link>
          <Link to="/open-vs-closed" className="text-sm font-medium text-ember hover:underline">
            Chapter 11: Open vs Closed →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
