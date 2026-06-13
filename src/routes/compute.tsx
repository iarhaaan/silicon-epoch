import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";

export const Route = createFileRoute("/compute")({
  head: () => ({
    meta: [
      { title: "The Compute Core — Silicon Epoch" },
      { name: "description", content: "Silicon fundamentals, advanced packaging bottlenecks (CoWoS), and memory hierarchies powering the AI revolution." },
      { property: "og:title", content: "The Compute Core — Silicon Epoch" },
      { property: "og:description", content: "TSMC 2nm N2 GAA nanosheets, Intel 18A, HBM4 memory scaling, and FP4/NVFP4 numeric formats." },
    ],
  }),
  component: ComputeCore,
});

const ACCELERATORS = [
  {
    name: "NVIDIA B300",
    process: "TSMC 4nm (N4P)",
    transistors: "208 Billion",
    memory: "192GB HBM3e",
    bandwidth: "8.0 TB/s",
    perf: "~10-20 PFLOPS FP4",
    status: "Shipping (18-week lead times)",
  },
  {
    name: "NVIDIA R100 (Rubin)",
    process: "TSMC 3nm (N3)",
    transistors: <>336 Billion<Citation id="rubin-transistors" /></>,
    memory: "288GB HBM4",
    bandwidth: <>22.0 TB/s<Citation id="rubin-specs" /></>,
    perf: "50 PFLOPS FP4",
    status: "Sampling Q4 2026, Volume Q1 2027",
  },
  {
    name: "Intel Gaudi 3",
    process: "TSMC 5nm (N5)",
    transistors: "Undisclosed",
    memory: "128GB HBM2e",
    bandwidth: <>3.7 TB/s<Citation id="gaudi-3-specs" /></>,
    perf: <>1,835 TFLOPS BF16<Citation id="gaudi-3-specs" /></>,
    status: <>Shipping (200K-250K units target)<Citation id="gaudi-3-deployment" /></>,
  },
  {
    name: "Groq 3 LPX Rack",
    process: "Undisclosed",
    transistors: "Undisclosed",
    memory: "128GB SRAM (Aggregate)",
    bandwidth: "640.0 TB/s (Scale-up)",
    perf: "Ultra-low latency LPU cluster",
    status: "Shipping Q3 2026",
  },
];

const METRICS = [
  { label: "TSMC 2nm Node Wafer Price", value: "$30,000", desc: <>A 50% increase over N3's ~$20,000 wafer cost, driven by GAA complexity.<Citation id="tsmc-2nm-production" /></> },
  { label: "Rubin Memory Bandwidth", value: "22 TB/s", desc: <>2.75× Blackwell's 8.0 TB/s, powered by the industry's first HBM4 integration.<Citation id="rubin-specs" /></> },
  { label: "CoWoS CAGR (2022-2027)", value: ">80%", desc: <>TSMC's projected annual growth rate for chip-on-wafer-on-substrate packaging.<Citation id="beyond-blackwell" /></> },
  { label: "TSMC SoIC Capacity CAGR", value: ">90%", desc: <>Projected annual system-on-integrated-chips stacking capacity growth.<Citation id="beyond-blackwell" /></> },
];

function ComputeCore() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16">
        <div className="eyebrow">Chapter 01 · Silicon Fundamentals</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95]">
          The Compute Core: <em className="italic text-ember">Sovereign Silicon</em> and Packaging.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          The modern artificial intelligence ecosystem is fundamentally anchored to the physical limits of semiconductor fabrication. As transistor scaling approaches atomic boundaries, progress is defined by packaging architectures, memory bandwidth, and numeric precision.
        </p>
      </section>

      {/* Highlights Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-background p-8 flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{m.label}</div>
                <div className="font-display text-4xl lg:text-5xl text-ember mt-4">{m.value}</div>
              </div>
              <p className="mt-4 text-xs text-foreground/70 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1 */}
          <div>
            <h2 className="font-display text-3xl lg:text-4xl border-b border-border pb-4 mb-6">Transistor Scaling & GAA Nanosheets</h2>
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>
                Taiwan Semiconductor Manufacturing Company (TSMC) officially launched mass volume production of its **2nm (N2) node in Q4 2025**<Citation id="tsmc-2nm-production" />, marking the industry's transition from traditional FinFET architectures to **Gate-All-Around (GAA) nanosheet** transistors. 
              </p>
              <p>
                The N2 node delivers **10–15% performance gains at iso-power**, or **25–30% power reduction at iso-performance**, alongside a **15% density uplift** for mixed designs (up to 20% for logic-only components) compared to N3E. This technological leap has come with massive capital requirements: advanced N2 wafer prices have risen to approximately **$30,000 per wafer**<Citation id="tsmc-2nm-production" />, compared to ~$20,000 for 3nm. 
              </p>
              <p>
                Volume production is currently centered at **Fab 22 in Kaohsiung** and **Fab 20 in Hsinchu**, with TSMC planning a **70% compound annual growth rate in 2nm capacity from 2026 to 2028**<Citation id="tsmc-2nm-growth" />. In contrast, Intel's rival **18A process** has entered volume manufacturing primarily for internal use, struggling to capture high-volume external foundry clients, leaving TSMC as the uncontested fabricator of the AI frontier.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-3xl lg:text-4xl border-b border-border pb-4 mb-6">The Advanced Packaging Bottleneck</h2>
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>
                As monolithic dies hit the physical reticle limit, performance scaling has shifted to multi-die architectures. TSMC's **CoWoS (Chip-on-Wafer-on-Substrate)** wafer-level packaging is the primary physical bottleneck of the AI accelerator supply chain. By stacking logic processors and High Bandwidth Memory (HBM) on a silicon interposer, CoWoS enables high-bandwidth, low-latency inter-die connections.
              </p>
              <p>
                TSMC projects **CoWoS capacity to grow more than 80% annually from 2022 to 2027**<Citation id="beyond-blackwell" />, while its **SoIC (System-on-Integrated-Chips)** 3D-stacking capacity is projected to increase **over 90% per year**<Citation id="beyond-blackwell" />. Advanced packaging remains the single biggest chokepoint limiting AI accelerator shipments globally.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-3xl lg:text-4xl border-b border-border pb-4 mb-6">Memory Hierarchy & Numeric Asymmetries</h2>
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>
                The physics of training and inference represent a perpetual battle between computation and data movement:
              </p>
              <ul className="list-disc pl-5 space-y-3 mt-2">
                <li>
                  <strong>SRAM (Static RAM):</strong> Fast, on-die caches with sub-nanosecond latency. While crucial for storing parameter states during active instruction execution, SRAM is extremely expensive and occupies massive silicon area, prompting architectures like Groq to rely on scale-up inter-chip SRAM networks.
                </li>
                <li>
                  <strong>HBM (High Bandwidth Memory):</strong> 3D-stacked DRAM connected via a silicon interposer. The transition from Blackwell's HBM3e (8.0 TB/s) to the next-generation **HBM4** starting in late 2026 will deliver up to **22 TB/s bandwidth** and **288GB capacity** per GPU (implemented on the NVIDIA Rubin R100)<Citation id="rubin-specs" />, bypassing the standard Key-Value (KV) cache memory bottlenecks.
                </li>
                <li>
                  <strong>Numeric Precision:</strong> While training continues to utilize 16-bit precisions (FP16/BF16), inference has shifted aggressively to lower bit-widths. The introduction of **FP8** and **FP4** (specifically NVIDIA's NVFP4 with micro-block scaling) allows up to **7× GEMM (General Matrix Multiply) speedups** over Hopper, compressing large models without sacrificing semantic accuracy.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-cream dark:bg-zinc-900 border border-border p-6 rounded-3xl">
            <h3 className="font-display text-xl mb-4">Chapter Citations</h3>
            <ul className="space-y-4 text-xs font-mono">
              <li>
                <a href="https://focustaiwan.tw/sci-tech/202604280010" target="_blank" rel="noopener noreferrer" className="text-ember hover:underline block mb-1">
                  [1] TSMC 2nm Capacity Projections
                </a>
                Focus Taiwan details on Kaohsiung Fab 22 / Hsinchu Fab 20 and 70% CAGR.
              </li>
              <li>
                <a href="https://www.reddit.com/r/stocks/comments/1pyoeb7/tsmc_officially_launches_mass_production_of_2nm/" target="_blank" rel="noopener noreferrer" className="text-ember hover:underline block mb-1">
                  [2] TSMC Launches 2nm GAA Production
                </a>
                Volume production launch metrics, transistor density, and power curves.
              </li>
              <li>
                <a href="https://tech-insider.org/nvidia-gtc-2026-rubin-gpu-analysis/" target="_blank" rel="noopener noreferrer" className="text-ember hover:underline block mb-1">
                  [3] NVIDIA Rubin 336B Analysis
                </a>
                Detailed architectural teardown of R100, HBM4 integration, and N3 process.
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-border/50 text-[10px] text-muted-foreground">
              All sources verified against primary SEC filings, lab blogs, and foundry registries.
            </div>
          </div>

          <div className="rounded-3xl border border-border p-6">
            <h3 className="font-display text-lg mb-2">Next Chapter</h3>
            <p className="text-sm text-foreground/70 mb-4">How do these physical chips convert electricity and logic gates into language? Inspect the attention mechanics.</p>
            <Link to="/how-ai-works" className="inline-flex items-center gap-1.5 text-sm text-ember hover:underline">
              02 · How AI Works →
            </Link>
          </div>
        </div>
      </section>

      {/* Hardware Table */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <h2 className="font-display text-3xl mb-8">AI Accelerator Specifications (2026 Landscape)</h2>
        <div className="border border-border rounded-3xl overflow-hidden bg-background">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-cream/40 dark:bg-zinc-900/40 text-xs font-mono uppercase text-muted-foreground">
                  <th className="p-4 lg:p-6">Accelerator</th>
                  <th className="p-4 lg:p-6">Process Node</th>
                  <th className="p-4 lg:p-6">Transistors</th>
                  <th className="p-4 lg:p-6">On-Chip / HBM Memory</th>
                  <th className="p-4 lg:p-6">Bandwidth</th>
                  <th className="p-4 lg:p-6">Peak Performance</th>
                  <th className="p-4 lg:p-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {ACCELERATORS.map((a) => (
                  <tr key={a.name} className="hover:bg-cream/20 dark:hover:bg-zinc-900/20">
                    <td className="p-4 lg:p-6 font-display font-medium text-base text-ember">{a.name}</td>
                    <td className="p-4 lg:p-6 font-mono text-xs">{a.process}</td>
                    <td className="p-4 lg:p-6">{a.transistors}</td>
                    <td className="p-4 lg:p-6">{a.memory}</td>
                    <td className="p-4 lg:p-6 font-mono text-xs">{a.bandwidth}</td>
                    <td className="p-4 lg:p-6 font-mono text-xs">{a.perf}</td>
                    <td className="p-4 lg:p-6 text-xs text-foreground/80">{a.status}</td>
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
          <Link to="/" className="text-sm text-foreground/60 hover:text-foreground">
            ← Overview
          </Link>
          <Link to="/how-ai-works" className="text-sm font-medium text-ember hover:underline">
            Chapter 02: How AI Works →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
