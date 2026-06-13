import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";
import { ChapterNavigation } from "@/components/chapter-navigation";

export const Route = createFileRoute("/geopolitics")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://siliconeposh.vercel.app/og-image.png" },
      { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image.png" },
      { property: "og:url", content: "https://siliconeposh.vercel.app/geopolitics" },
      { title: "Geopolitics & Chip Wars — Silicon Epoch" },
      {
        name: "description",
        content:
          "TSMC Taiwan chokepoint, ASML High-NA EUV lithography, US export controls, and China's domestic Huawei Ascend ecosystem.",
      },
      { property: "og:title", content: "Geopolitics & Chip Wars — Silicon Epoch" },
    ],
    links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/geopolitics" }],
  }),
  component: Geopolitics,
});

const ISSUES = [
  {
    n: "01",
    title: "TSMC Global Expansion & Taiwan Node Ramp",
    body: (
      <>
        TSMC fabricates the physical substrate of frontier AI. N2 (2nm) volume production commenced
        in Q4 2025 at Kaohsiung Fab 22 and Hsinchu Fab 20
        <Citation id="tsmc-2nm-production" />. Backside power delivery nodes (N2P, A16) are
        scheduled for volume production in H2 2026. Global fab expansions are ongoing to de-risk
        geographic concentration:
      </>
    ),
    bullets: [
      <>
        Arizona (Fab 21): Projected to increase output by 80% in 2026 compared to 2025; 2nm
        production targeted by 2028
        <Citation id="tsmc-2nm-growth" />.
      </>,
      <>
        Kumamoto (Japan): First fab projected to increase output by 130% year-on-year in 2026
        <Citation id="tsmc-2nm-growth" />.
      </>,
      <>
        Dresden (Germany): ESMC joint venture construction continues, establishing sovereign
        European capacity
        <Citation id="tsmc-2nm-growth" />.
      </>,
    ],
  },
  {
    n: "02",
    title: "EUV Lithography Scanners & ASML Monopolies",
    body: (
      <>
        ASML (Veldhoven, Netherlands) retains a monopoly on Extreme Ultraviolet (EUV) lithography
        tools. The next-generation High-NA EUV scanners (0.55 NA) print chip layers at 8nm
        resolution. The EXE:5000 pre-production system was delivered to Samsung's Hwaseong Campus in
        March 2025
        <Citation id="samsung-high-na" />, and production-scale EXE:5200 tools are shipping now:
      </>
    ),
    bullets: [
      <>
        Intel Lead: Intel Oregon received the first R&D tools; commercial EXE:5200 shipments are
        scheduled for late 2026/early 2027 to fabricate 14A nodes
        <Citation id="samsung-high-na" />.
      </>,
      <>
        TSMC R&D: TSMC purchased High-NA systems (costing up to $400M each) for R&D at Hsinchu,
        delaying full production deployment until economics improve
        <Citation id="samsung-high-na" />.
      </>,
      <>
        Samsung Deployment: Samsung received its first system in 2024 and is installing two systems
        in 2025–2026 for 2nm logic and high-density DRAM
        <Citation id="samsung-high-na" />.
      </>,
    ],
  },
  {
    n: "03",
    title: "U.S. BIS Export Controls & Loophole Crackdown",
    body: (
      <>
        The U.S. Bureau of Industry and Security (BIS) enforces strict limits on advanced computing
        items. Under the January 15, 2026 final rule, exports of NVIDIA H200 and AMD MI325X chips to
        China/Macau shifted from presumption of denial to a case-by-case review, subject to strict
        conditions
        <Citation id="bis-export-policy" />:
      </>
    ),
    bullets: [
      <>
        Performance Thresholds: Review applies to chips with Total Processing Performance (TPP) &lt;
        21,000 and DRAM bandwidth &lt; 6,500 GB/s
        <Citation id="bis-export-policy" />.
      </>,
      <>
        Export Tariffs & Caps: Licenses impose a 25% revenue tariff, a 50% volume cap compared to
        U.S. shipments, and strict third-party testing
        <Citation id="bis-export-policy" />.
      </>,
      <>
        Cloud Loophole: The House passed the Remote Access Security Act (369-22) to block Chinese
        entities from renting GPU compute via foreign cloud nodes
        <Citation id="us-export-controls" />.
      </>,
    ],
  },
  {
    n: "04",
    title: "China's Sovereign Semiconductor Stack",
    body: (
      <>
        In response to Western bans, China has injected USD 28.3 billion into its National
        Semiconductor Fund, designating SMIC and Huawei as national champions to build an
        independent domestic silicon ecosystem
        <Citation id="smic-5nm-play" />:
      </>
    ),
    bullets: [
      <>
        SMIC Fabrication: SMIC is producing 7nm (N+2) using older DUV multi-patterning at 20-40%
        yields. 5nm pilot runs are underway targeting 2026 mass production
        <Citation id="smic-5nm-play" />.
      </>,
      <>
        Huawei Ascend 910C: Two-chiplet design delivering 780 TFLOPS BF16. Huawei shipped 805K total
        accelerators in 2025 (653K being 910C)
        <Citation id="huawei-npu-supply" />.
      </>,
      <>
        Huawei Ascend 950PR & DT: Next-gen architectures. 950PR delivers 1.56 PFLOPS FP4 with 112GB
        HiBL memory; the training variant (950DT) features 144GB HiZQ memory
        <Citation id="huawei-npu-supply" />.
      </>,
      <>
        Atlas 950 SuperPod: Massive Chinese cluster combining 8,192 Ascend 950DT chips in 160
        cabinets, claiming 6.7× NVL144 compute capacity
        <Citation id="huawei-npu-supply" />.
      </>,
    ],
  },
];

function Geopolitics() {
  return (
    <PageShell>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">
          <Link to="/chapters" className="hover:text-ember transition-colors">
            Chapter 10
          </Link>{" "}
          · Geopolitics & The Chip Wars · Updated June 2026
        </div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95]">
          Geopolitics: Sovereign <em className="italic text-ember">silicon</em> & supply.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          The software of AI is global and open, but the physical supply chain is
          hyper-concentrated. Control of leading-edge semiconductor lithography and advanced
          packaging forms the core axis of modern superpower competition.
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

      {/* Semiconductor Chokepoint Map */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4">
          <div className="eyebrow">Supply Chain Visualized</div>
          <h2 className="display text-3xl lg:text-4xl mt-3 leading-tight">
            The fabric chokepoint.
          </h2>
          <p className="mt-4 text-xs text-foreground/80 leading-relaxed">
            ASML's lithography scanners flow into TSMC's manufacturing foundries in Taiwan. From
            there, advanced chips route freely to U.S. hyperscalers, while exports to Chinese
            domestic entities face strict BIS licensing bans and third-party restrictions.
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="border border-border rounded-3xl p-6 bg-card">
            <svg viewBox="0 0 800 320" className="w-full h-auto bg-transparent">
              {/* Connections */}
              {/* ASML to TSMC */}
              <path
                d="M 150 160 Q 275 110 400 160"
                fill="none"
                stroke="var(--border)"
                strokeWidth="2"
                strokeDasharray="5"
              />
              <path
                d="M 400 160 L 390 152 M 400 160 L 390 168"
                fill="none"
                stroke="var(--border)"
                strokeWidth="2"
              />

              {/* TSMC to US */}
              <path
                d="M 400 160 Q 525 100 650 100"
                fill="none"
                stroke="var(--ember)"
                strokeWidth="2"
              />
              <path
                d="M 650 100 L 640 95 M 650 100 L 642 108"
                fill="none"
                stroke="var(--ember)"
                strokeWidth="2"
              />

              {/* TSMC to China */}
              <path
                d="M 400 160 Q 525 220 650 220"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="3"
                opacity="0.7"
              />
              {/* Export Block Symbol */}
              <circle cx="525" cy="190" r="10" fill="#ef4444" />
              <line x1="518" y1="190" x2="532" y2="190" stroke="white" strokeWidth="2" />

              {/* Nodes */}
              {/* Node 1: ASML */}
              <g transform="translate(150, 160)">
                <rect
                  x="-80"
                  y="-40"
                  width="160"
                  height="80"
                  rx="12"
                  fill="var(--card)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y="-15"
                  className="text-xs font-display font-bold fill-foreground"
                  textAnchor="middle"
                >
                  ASML (Netherlands)
                </text>
                <text
                  x="0"
                  y="5"
                  className="text-[9px] font-mono fill-foreground/60"
                  textAnchor="middle"
                >
                  EUV/High-NA Lithography
                </text>
                <text
                  x="0"
                  y="20"
                  className="text-[9px] font-mono fill-ember font-bold"
                  textAnchor="middle"
                >
                  100% Chokepoint
                </text>
              </g>

              {/* Node 2: TSMC */}
              <g transform="translate(400, 160)">
                <rect
                  x="-80"
                  y="-40"
                  width="160"
                  height="80"
                  rx="12"
                  fill="var(--card)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y="-15"
                  className="text-xs font-display font-bold fill-foreground"
                  textAnchor="middle"
                >
                  TSMC (Taiwan)
                </text>
                <text
                  x="0"
                  y="5"
                  className="text-[9px] font-mono fill-foreground/60"
                  textAnchor="middle"
                >
                  N2 GAA / CoWoS-S
                </text>
                <text
                  x="0"
                  y="20"
                  className="text-[9px] font-mono fill-ember font-bold"
                  textAnchor="middle"
                >
                  90% Advanced Fab
                </text>
              </g>

              {/* Node 3: U.S. Hyperscalers */}
              <g transform="translate(650, 100)">
                <rect
                  x="-80"
                  y="-30"
                  width="160"
                  height="60"
                  rx="12"
                  fill="var(--card)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y="-5"
                  className="text-xs font-display font-bold fill-foreground"
                  textAnchor="middle"
                >
                  U.S. Hyperscalers
                </text>
                <text
                  x="0"
                  y="12"
                  className="text-[9px] font-mono fill-foreground/60"
                  textAnchor="middle"
                >
                  unrestricted capex scaling
                </text>
              </g>

              {/* Node 4: China Domestic */}
              <g transform="translate(650, 220)">
                <rect
                  x="-80"
                  y="-30"
                  width="160"
                  height="60"
                  rx="12"
                  fill="var(--card)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y="-5"
                  className="text-xs font-display font-bold fill-foreground"
                  textAnchor="middle"
                >
                  China Domestic
                </text>
                <text
                  x="0"
                  y="12"
                  className="text-[9px] font-mono fill-foreground/60"
                  textAnchor="middle"
                >
                  Ascend 950 / SMIC 5nm
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Demand Panel */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl bg-cream dark:bg-zinc-900 border border-border p-10 lg:p-14">
          <div className="eyebrow">Hyperscaler Demand Signals</div>
          <h2 className="display text-3xl lg:text-4xl mt-4 max-w-3xl">
            Surging Bids for Export-Compliant Chips.
          </h2>
          <p className="mt-4 text-sm text-foreground/80 leading-relaxed max-w-3xl">
            Despite the regulatory tariffs and caps, demand for U.S. hardware inside China remains
            unprecedented. ByteDance has prepared over <strong>$14 billion</strong> in purchase
            orders for NVIDIA H200 processors for 2026, contingent on case-by-case BIS export
            license approvals
            <Citation id="bis-export-policy" />.
          </p>
          <p className="mt-4 text-sm text-foreground/80 leading-relaxed max-w-3xl">
            Concurrently, Chinese tech firms are committing billions to Huawei's domestic Atlas 950
            platform, with ByteDance signing a $5.6B hardware deployment agreement for the upcoming
            Ascend 950 series
            <Citation id="huawei-npu-supply" />.
          </p>
        </div>
      </section>

      <ChapterNavigation />
    </PageShell>
  );
}
