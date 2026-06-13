import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";
import { ChapterNavigation } from "@/components/chapter-navigation";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure & Energy Grid — Silicon Epoch" },
      {
        name: "description",
        content:
          "Gigawatt-scale datacenters, NVIDIA Rubin NVL72 specs, nuclear power agreements (Three Mile Island, Kairos SMR, Talen Susquehanna).",
      },
      { property: "og:title", content: "Infrastructure & Energy Grid — Silicon Epoch" },
    ],
  }),
  component: Infrastructure,
});

const SUBSTRATES = [
  {
    eyebrow: "The Silicon Hardware",
    title: "Vera Rubin NVL72, Groq 3, & Gaudi 3",
    body: (
      <>
        AI accelerators are scaling transistor counts and interconnect bandwidth. The NVIDIA
        Blackwell B300 (192GB HBM3e) is being succeeded by the Vera Rubin NVL72 system (combining 72
        Rubin R100 GPUs and 36 Vera CPUs) delivering 3.6 exaflops of FP4 compute
        <Citation id="rubin-specs" />. Alternative architectures like the Groq 3 LPX Rack leverage
        128GB of aggregate ultra-low latency SRAM to bypass HBM memory bottlenecks entirely.
      </>
    ),
    points: [
      <>
        NVIDIA Rubin R100: 336B transistors, 288GB HBM4, 22 TB/s bandwidth, 50 PFLOPS FP4 compute.
        <Citation id="rubin-transistors" />
        <Citation id="rubin-specs" />
      </>,
      <>
        Intel Gaudi 3: 1,835 TFLOPS BF16, 128GB HBM2e, 3.7 TB/s bandwidth, priced disruptively at
        $15,625.
        <Citation id="gaudi-3-specs" />
        <Citation id="gaudi-3-deployment" />
      </>,
      <>
        Groq 3 LPX Rack: 256 LPUs, 500MB SRAM each (128GB aggregate), 640 TB/s scale-up bandwidth.
      </>,
    ],
  },
  {
    eyebrow: "The Gigawatt Campuses",
    title: "From Megawatts to Dedicated Power Grids",
    body: (
      <>
        Datacenter design has scaled past the megawatt envelope into multi-gigawatt campuses.
        Building queues for regional utility connections stretch up to five years, prompting AI
        developers to build their own generation infrastructure on-site, pre-leasing 60% of the 35
        GW under construction in North America.
        <Citation id="meta-data-centers-gamble" />
      </>
    ),
    points: [
      <>
        Meta Prometheus & Hyperion: 1 GW Prometheus online by 2027 in Ohio; 5 GW Hyperion campus in
        Louisiana with $3B on-site gas generation.
        <Citation id="meta-data-centers-gamble" />
      </>,
      <>
        xAI Colossus (Memphis): Running 100K H100s (150MW), expanding to 200K, with a long-term
        roadmap targeting 1M GPUs.
        <Citation id="grok-4-3-announcement" />
      </>,
      <>
        Microsoft & Google Buildouts: Microsoft Wisconsin ($7B) and Texas (2.1 GW); Google Oklahoma
        ($9B) and Michigan (1 GW).
      </>,
    ],
  },
];

const NUCLEAR_DEALS = [
  {
    project: "Crane Clean Energy Center",
    partners: "Constellation / Microsoft",
    capacity: "835 MW",
    timeline: "Restart 2027",
    details: (
      <>
        Three Mile Island Unit 1 restart. $1.6B cost supported by a $1B DOE loan; secured under a
        20-year Microsoft PPA.
        <Citation id="crane-tmi-restart" />
        <Citation id="tmi-1bn-loan" />
      </>
    ),
  },
  {
    project: "Kairos Power SMRs",
    partners: "Google / Kairos",
    capacity: "500 MW",
    timeline: "First deployment 2030",
    details: (
      <>
        Hermes 2 SMR fleet (molten salt-cooled) in Oak Ridge, TN. First corporate Small Modular
        Reactor power purchase agreement.
        <Citation id="google-kairos-smr" />
      </>
    ),
  },
  {
    project: "Susquehanna Nuclear Campus",
    partners: "Amazon / Talen Energy",
    capacity: "1,920 MW",
    timeline: "Through 2042",
    details: (
      <>
        17-year PPA with front-of-the-meter grid transition in Spring 2026. Part of a $20B Amazon
        infrastructure investment.
        <Citation id="amazon-susquehanna" />
        <Citation id="talen-amazon-ans" />
      </>
    ),
  },
  {
    project: "Helion Fusion PPA",
    partners: "Helion / Microsoft",
    capacity: "≥50 MWe",
    timeline: "2028 target",
    details:
      "Polaris prototype completed 2024; Orion commercial plant planned in Chelan County, WA.",
  },
  {
    project: "Meta Oklo SMR",
    partners: "Meta / Oklo",
    capacity: "1.2 GW",
    timeline: "2030 target",
    details: "16 Aurora reactors planned in Pike County, Ohio; 150 MW planned for Phase 1.",
  },
];

function Infrastructure() {
  return (
    <PageShell>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">
          <Link to="/chapters" className="hover:text-ember transition-colors">
            Chapter 09
          </Link>{" "}
          · Infrastructure & Energy · Updated June 2026
        </div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95]">
          The physical substrate of <em className="italic text-ember">intelligence</em> is power.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          AGI is not a virtual construct; it is a heavy industrial project requiring gigawatts of
          electricity, millions of gallons of water, and high-density liquid cooling infrastructure.
          Here is the layout of the physical grid.
        </p>
      </section>

      {/* Substrates cards */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 space-y-px bg-border border border-border rounded-3xl overflow-hidden">
        {SUBSTRATES.map((s, i) => (
          <article
            key={s.eyebrow}
            className="bg-background p-10 lg:p-14 grid lg:grid-cols-12 gap-10"
          >
            <div className="lg:col-span-4">
              <div className="font-mono text-xs text-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="eyebrow mt-2">{s.eyebrow}</div>
              <h2 className="display mt-4 text-4xl lg:text-5xl leading-tight">{s.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base text-foreground/80 leading-relaxed">{s.body}</p>
              {i === 0 ? (
                /* Spec Table */
                <div className="mt-8 overflow-x-auto border border-border rounded-2xl bg-cream/10 dark:bg-zinc-900/10">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-border bg-cream/20 dark:bg-zinc-900/20 font-mono text-[10px] uppercase text-muted-foreground">
                        <th className="p-3">Accelerator</th>
                        <th className="p-3">Compute (FP4/BF16)</th>
                        <th className="p-3">Memory / SRAM</th>
                        <th className="p-3">Bandwidth</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      <tr>
                        <td className="p-3 font-semibold text-ember">NVIDIA Rubin R100</td>
                        <td className="p-3 font-mono">50 PFLOPS FP4</td>
                        <td className="p-3">288GB HBM4</td>
                        <td className="p-3 font-mono">22 TB/s</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-ember">Intel Gaudi 3</td>
                        <td className="p-3 font-mono">1,835 TFLOPS BF16</td>
                        <td className="p-3">128GB HBM2e</td>
                        <td className="p-3 font-mono">3.7 TB/s</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-ember">Groq 3 LPX Rack</td>
                        <td className="p-3 font-mono">High-thru LPU</td>
                        <td className="p-3">128GB SRAM (Agg)</td>
                        <td className="p-3 font-mono">640 TB/s</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <ul className="mt-6 space-y-3">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-ember mt-1 text-xs">▸</span>
                      <span className="text-xs text-foreground/85 leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Nuclear Deals Table */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="eyebrow">Energy Grid Integration</div>
        <h2 className="display text-4xl lg:text-5xl mt-4 mb-8">Hyperscaler Nuclear Contracts</h2>
        <div className="border border-border rounded-3xl overflow-hidden bg-background">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <caption className="sr-only">
                Nuclear Power Purchase Agreements (PPAs) for AI Data Centers
              </caption>
              <thead>
                <tr className="border-b border-border bg-cream/40 dark:bg-zinc-900/40 text-xs font-mono uppercase text-muted-foreground">
                  <th scope="col" className="p-4 lg:p-6">
                    Project Name
                  </th>
                  <th scope="col" className="p-4 lg:p-6">
                    Partners
                  </th>
                  <th scope="col" className="p-4 lg:p-6">
                    Capacity
                  </th>
                  <th scope="col" className="p-4 lg:p-6">
                    Timeline Target
                  </th>
                  <th scope="col" className="p-4 lg:p-6">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {NUCLEAR_DEALS.map((d) => (
                  <tr
                    key={d.project}
                    className="hover:bg-cream/20 dark:hover:bg-zinc-900/20 text-xs"
                  >
                    <td className="p-4 lg:p-6 font-display font-medium text-sm text-ember">
                      {d.project}
                    </td>
                    <td className="p-4 lg:p-6 font-mono">{d.partners}</td>
                    <td className="p-4 lg:p-6 font-mono">{d.capacity}</td>
                    <td className="p-4 lg:p-6 text-foreground/80">{d.timeline}</td>
                    <td className="p-4 lg:p-6 text-foreground/75 leading-relaxed">{d.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compute Trajectory Chart */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4">
          <div className="eyebrow">Compute Trajectory</div>
          <h2 className="display text-3xl lg:text-4xl mt-3 leading-tight">Exponential scaling.</h2>
          <p className="mt-4 text-xs text-foreground/80 leading-relaxed">
            The compute required to train frontier models has grown by over nine orders of magnitude
            since 2012, doubling every 5 to 6 months for state-of-the-art training runs. Test-time
            compute is now stacking additional scaling on top of pre-training limits.
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="border border-border rounded-3xl p-6 bg-card">
            <svg viewBox="0 0 600 300" className="w-full h-auto bg-transparent">
              {/* grid lines */}
              <line
                x1="50"
                y1="50"
                x2="550"
                y2="50"
                stroke="var(--border)"
                strokeDasharray="4"
                opacity="0.4"
              />
              <line
                x1="50"
                y1="110"
                x2="550"
                y2="110"
                stroke="var(--border)"
                strokeDasharray="4"
                opacity="0.4"
              />
              <line
                x1="50"
                y1="170"
                x2="550"
                y2="170"
                stroke="var(--border)"
                strokeDasharray="4"
                opacity="0.4"
              />
              <line
                x1="50"
                y1="230"
                x2="550"
                y2="230"
                stroke="var(--border)"
                strokeDasharray="4"
                opacity="0.4"
              />

              {/* axis */}
              <line x1="50" y1="260" x2="550" y2="260" stroke="var(--border)" strokeWidth="1" />
              <line x1="50" y1="30" x2="50" y2="260" stroke="var(--border)" strokeWidth="1" />

              {/* trajectory line */}
              <path
                d="M 50 240 Q 150 230 250 200 T 450 110 T 550 50"
                fill="none"
                stroke="var(--ember)"
                strokeWidth="3"
              />

              {/* points */}
              <circle cx="50" cy="240" r="4" fill="var(--foreground)" />
              <text
                x="50"
                y="225"
                className="text-[10px] font-mono fill-foreground/60"
                textAnchor="middle"
              >
                2012
              </text>
              <text x="60" y="245" className="text-[9px] fill-foreground/80">
                AlexNet
              </text>

              <circle cx="250" cy="200" r="4" fill="var(--foreground)" />
              <text
                x="250"
                y="185"
                className="text-[10px] font-mono fill-foreground/60"
                textAnchor="middle"
              >
                2020
              </text>
              <text
                x="60"
                y="20"
                className="text-[9px] fill-foreground/80"
                transform="translate(200, 185)"
              >
                GPT-3
              </text>

              <circle cx="450" cy="110" r="4" fill="var(--foreground)" />
              <text
                x="450"
                y="95"
                className="text-[10px] font-mono fill-foreground/60"
                textAnchor="middle"
              >
                2024
              </text>
              <text
                x="60"
                y="20"
                className="text-[9px] fill-foreground/80"
                transform="translate(400, 95)"
              >
                GPT-4
              </text>

              <circle cx="550" cy="50" r="5" fill="var(--ember)" />
              <text
                x="550"
                y="35"
                className="text-[10px] font-mono fill-ember font-bold"
                textAnchor="middle"
              >
                2026
              </text>
              <text
                x="540"
                y="65"
                className="text-[10px] fill-foreground font-bold"
                textAnchor="end"
              >
                GPT-5.5 / Grok 5
              </text>

              {/* labels */}
              <text
                x="20"
                y="150"
                className="text-[10px] font-mono fill-foreground/50"
                transform="rotate(-90 20 150)"
                textAnchor="middle"
              >
                Training Compute (FLOPs, log scale)
              </text>
              <text
                x="300"
                y="295"
                className="text-[10px] font-mono fill-foreground/50"
                textAnchor="middle"
              >
                Timeline (Years)
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Energy Panel */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl bg-ink text-paper p-14 grain">
          <div className="grain-overlay" />
          <div className="eyebrow text-paper/60">The future of energy</div>
          <h2 className="display text-4xl lg:text-6xl mt-3 max-w-4xl">
            The ultimate limit of superintelligence is clean, baseload power.
          </h2>
          <p className="mt-6 max-w-3xl text-paper/80 leading-relaxed text-sm">
            With frontier training compute demand doubling every 5 to 6 months
            <Citation id="epoch-ai-compute-trends" />, standard coal or natural gas grids cannot
            adapt. Hyperscalers who secure dedicated nuclear and geothermal reservoirs will
            determine the rate of scaling and the ultimate path to AGI.
          </p>
        </div>
      </section>

      <ChapterNavigation />
    </PageShell>
  );
}
