import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure & Energy Grid — Silicon Epoch" },
      { name: "description", content: "Gigawatt-scale datacenters, NVIDIA Rubin NVL72 specs, nuclear power agreements (Three Mile Island, Kairos SMR, Talen Susquehanna)." },
      { property: "og:title", content: "Infrastructure & Energy Grid — Silicon Epoch" },
    ],
  }),
  component: Infrastructure,
});

const SUBSTRATES = [
  {
    eyebrow: "The Silicon Hardware",
    title: "Vera Rubin NVL72, Groq 3, & Gaudi 3",
    body: <>AI accelerators are scaling transistor counts and interconnect bandwidth. The NVIDIA Blackwell B300 (192GB HBM3e) is being succeeded by the Vera Rubin NVL72 system (combining 72 Rubin R100 GPUs and 36 Vera CPUs) delivering 3.6 exaflops of FP4 compute<Citation id="rubin-specs" />. Alternative architectures like the Groq 3 LPX Rack leverage 128GB of aggregate ultra-low latency SRAM to bypass HBM memory bottlenecks entirely.</>,
    points: [
      <>NVIDIA Rubin R100: 336B transistors, 288GB HBM4, 22 TB/s bandwidth, 50 PFLOPS FP4 compute.<Citation id="rubin-transistors" /><Citation id="rubin-specs" /></>,
      <>Intel Gaudi 3: 1,835 TFLOPS BF16, 128GB HBM2e, 3.7 TB/s bandwidth, priced disruptively at $15,625.<Citation id="gaudi-3-specs" /><Citation id="gaudi-3-deployment" /></>,
      <>Groq 3 LPX Rack: 256 LPUs, 500MB SRAM each (128GB aggregate), 640 TB/s scale-up bandwidth.</>,
    ]
  },
  {
    eyebrow: "The Gigawatt Campuses",
    title: "From Megawatts to Dedicated Power Grids",
    body: <>Datacenter design has scaled past the megawatt envelope into multi-gigawatt campuses. Building queues for regional utility connections stretch up to five years, prompting AI developers to build their own generation infrastructure on-site, pre-leasing 60% of the 35 GW under construction in North America.<Citation id="meta-data-centers-gamble" /></>,
    points: [
      <>Meta Prometheus & Hyperion: 1 GW Prometheus online by 2027 in Ohio; 5 GW Hyperion campus in Louisiana with $3B on-site gas generation.<Citation id="meta-data-centers-gamble" /></>,
      <>xAI Colossus (Memphis): Running 100K H100s (150MW), expanding to 200K, with a long-term roadmap targeting 1M GPUs.<Citation id="grok-4-3-announcement" /></>,
      <>Microsoft & Google Buildouts: Microsoft Wisconsin ($7B) and Texas (2.1 GW); Google Oklahoma ($9B) and Michigan (1 GW).</>,
    ]
  },
];

const NUCLEAR_DEALS = [
  {
    project: "Crane Clean Energy Center",
    partners: "Constellation / Microsoft",
    capacity: "835 MW",
    timeline: "Restart 2027",
    details: <>Three Mile Island Unit 1 restart. $1.6B cost supported by a $1B DOE loan; secured under a 20-year Microsoft PPA.<Citation id="crane-tmi-restart" /><Citation id="tmi-1bn-loan" /></>,
  },
  {
    project: "Kairos Power SMRs",
    partners: "Google / Kairos",
    capacity: "500 MW",
    timeline: "First deployment 2030",
    details: <>Hermes 2 SMR fleet (molten salt-cooled) in Oak Ridge, TN. First corporate Small Modular Reactor power purchase agreement.<Citation id="google-kairos-smr" /></>,
  },
  {
    project: "Susquehanna Nuclear Campus",
    partners: "Amazon / Talen Energy",
    capacity: "1,920 MW",
    timeline: "Through 2042",
    details: <>17-year PPA with front-of-the-meter grid transition in Spring 2026. Part of a $20B Amazon infrastructure investment.<Citation id="amazon-susquehanna" /><Citation id="talen-amazon-ans" /></>,
  },
  {
    project: "Helion Fusion PPA",
    partners: "Helion / Microsoft",
    capacity: "≥50 MWe",
    timeline: "2028 target",
    details: "Polaris prototype completed 2024; Orion commercial plant planned in Chelan County, WA.",
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
        <div className="eyebrow">Chapter 09 · Infrastructure & Energy · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95]">
          The physical substrate of <em className="italic text-ember">intelligence</em> is power.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          AGI is not a virtual construct; it is a heavy industrial project requiring gigawatts of electricity, millions of gallons of water, and high-density liquid cooling infrastructure. Here is the layout of the physical grid.
        </p>
      </section>

      {/* Substrates cards */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 space-y-px bg-border border border-border rounded-3xl overflow-hidden">
        {SUBSTRATES.map((s, i) => (
          <article key={s.eyebrow} className="bg-background p-10 lg:p-14 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs text-foreground/50">{String(i + 1).padStart(2, "0")}</div>
              <div className="eyebrow mt-2">{s.eyebrow}</div>
              <h2 className="display mt-4 text-4xl lg:text-5xl leading-tight">{s.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base text-foreground/80 leading-relaxed">{s.body}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-ember mt-1 text-xs">▸</span>
                    <span className="text-xs text-foreground/85 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
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
              <thead>
                <tr className="border-b border-border bg-cream/40 dark:bg-zinc-900/40 text-xs font-mono uppercase text-muted-foreground">
                  <th className="p-4 lg:p-6">Project Name</th>
                  <th className="p-4 lg:p-6">Partners</th>
                  <th className="p-4 lg:p-6">Capacity</th>
                  <th className="p-4 lg:p-6">Timeline Target</th>
                  <th className="p-4 lg:p-6">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {NUCLEAR_DEALS.map((d) => (
                  <tr key={d.project} className="hover:bg-cream/20 dark:hover:bg-zinc-900/20 text-xs">
                    <td className="p-4 lg:p-6 font-display font-medium text-sm text-ember">{d.project}</td>
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

      {/* Energy Panel */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl bg-ink text-paper p-14 grain">
          <div className="grain-overlay" />
          <div className="eyebrow text-paper/60">The future of energy</div>
          <h2 className="display text-4xl lg:text-6xl mt-3 max-w-4xl">The ultimate limit of superintelligence is clean, baseload power.</h2>
          <p className="mt-6 max-w-3xl text-paper/80 leading-relaxed text-sm">With AI compute demand doubling every 8 months, standard coal or natural gas grids cannot adapt. Hyperscalers who secure dedicated nuclear and geothermal reservoirs will determine the rate of scaling and the ultimate path to AGI.</p>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 border-t border-border">
        <div className="flex justify-between items-center">
          <Link to="/next-decade" className="text-sm text-foreground/60 hover:text-foreground">
            ← Chapter 08: Next Decade
          </Link>
          <Link to="/geopolitics" className="text-sm font-medium text-ember hover:underline">
            Chapter 10: Geopolitics →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
