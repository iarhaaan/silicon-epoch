import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";
import { ChapterNavigation } from "@/components/chapter-navigation";

export const Route = createFileRoute("/next-decade")({
  head: () => ({
    meta: [
      { title: "The Next Decade — Quantum, Neuromorphic, Bio-AI" },
      {
        name: "description",
        content:
          "What comes after the transformer: quantum advantage, neuromorphic chips, bio-AI for drug discovery, and the horizon technologies of the post-2030 AI landscape.",
      },
      { property: "og:title", content: "Horizon Technologies — Beyond 2030" },
      {
        property: "og:description",
        content: "Quantum, neuromorphic, bio-AI — what comes after the transformer.",
      },
      { property: "og:url", content: "https://siliconeposh.vercel.app/next-decade" },
      { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
      { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    ],
    links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/next-decade" }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "The Next Decade — Quantum, Neuromorphic, Bio-AI",
          description:
            "What comes after the transformer: quantum advantage, neuromorphic chips, bio-AI for drug discovery, and the horizon technologies of the post-2030 AI landscape.",
          image: "https://siliconeposh.vercel.app/og-image-dark.png",
          datePublished: "2026-06-01",
          dateModified: "2026-06-14",
          author: {
            "@type": "Organization",
            name: "Silicon Epoch",
            url: "https://siliconeposh.vercel.app",
          },
          publisher: {
            "@type": "Organization",
            name: "Silicon Epoch",
            logo: {
              "@type": "ImageObject",
              url: "https://siliconeposh.vercel.app/apple-touch-icon.png",
            },
          },
          mainEntityOfPage: "https://siliconeposh.vercel.app/next-decade",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://siliconeposh.vercel.app/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "The Next Decade",
              item: "https://siliconeposh.vercel.app/next-decade",
            },
          ],
        }),
      },
    ],
  }),
  component: NextDecade,
});

const HORIZONS = [
  {
    title: "Quantum Computing",
    desc: (
      <>
        The NISQ (Noisy Intermediate-Scale Quantum) era is maturing. Google Willow (Dec 2024)
        demonstrated below-threshold error correction (0.143% error/cycle across 105 physical
        qubits)
        <Citation id="google-willow-quantum" />. IBM's 'Starling' architecture targets 200 logical,
        error-corrected qubits by 2029 for commercial quantum advantage in chemical and optimization
        algorithms
        <Citation id="ibm-quantum-starling" />. Cryogenic systems are laying the foundation for
        future Quantum Machine Learning.
      </>
    ),
  },
  {
    title: "Bio-AI & Neuromorphic Chips",
    desc: (
      <>
        Neuromorphic architectures bypass the von Neumann bottleneck using event-driven analog
        memristive circuits. Projects like SpiNNaker2 simulate 10 billion neurons at 0.3 exaops,
        while Rain Neuromorphics designs analog chips showing 100,000× energy efficiency gains in
        edge environments
        <Citation id="ibm-quantum-starling" />. Concurrently, DNA data storage (Twist/Atlas targets
        13TB per drop by 2026) aims to replace tape storage.
      </>
    ),
  },
  {
    title: "Physical Autonomy",
    desc: (
      <>
        Humanoid robotics capital investment has exploded. Systems are shifting from hydraulic
        systems to pure electric actuation, powered by Vision-Language-Action (VLA) models trained
        on human teleoperation. Platforms like Tesla's Optimus Gen 3 (targeting $20K-$30K)
        <Citation id="optimus-gen3" />, Figure 02 (BMW factory trials)
        <Citation id="figure-02-bmw" />, and Boston Dynamics' electric Atlas represent the early
        vanguard of physical automation.
      </>
    ),
  },
];

const YEARS = [
  {
    y: "2026",
    t: "The Year of the Agent",
    b: (
      <>
        Reasoning models become default. Multi-step browser and coding agents go from demo to
        production. First agentic-run organizations. Humanoid robots enter warehouse pilots
        <Citation id="figure-02-bmw" />.
      </>
    ),
  },
  {
    y: "2027",
    t: "Olympiad and Expert Parity",
    b: (
      <>
        Models outperform top human specialists across sciences on demand. Massive medical and
        materials discovery acceleration starts. Compute clusters cross the gigawatt threshold.
      </>
    ),
  },
  {
    y: "2028",
    t: "Nuclear-Powered Datacenters",
    b: (
      <>
        First dedicated nuclear-powered clusters go online (Microsoft Crane / Three Mile Island 835
        MW
        <Citation id="crane-tmi-restart" />, Amazon Susquehanna
        <Citation id="amazon-susquehanna" />
        ). Personal agent swarms manage enterprise operations.
      </>
    ),
  },
  {
    y: "2029",
    t: "Fault-Tolerant Quantum Advantage",
    b: (
      <>
        IBM Starling architecture ships early commercial advantage
        <Citation id="ibm-quantum-starling" />. Software engineering shifts from manual coding to
        architecture planning via autonomous executors.
      </>
    ),
  },
  {
    y: "2030",
    t: "SMR Grid Proliferation",
    b: (
      <>
        Google Kairos Power SMRs (500 MW) come online
        <Citation id="google-kairos-smr" />. AI-discovered materials enter automotive and aerospace
        production lines.
      </>
    ),
  },
  {
    y: "2032",
    t: "Surgical and Physical Autonomy",
    b: (
      <>
        Fully autonomous surgical robots enter clinical trial phases. Humanoid robots become
        standard in logistics and healthcare facilities, with costs falling below $20K
        <Citation id="optimus-gen3" />.
      </>
    ),
  },
  {
    y: "2035",
    t: "Early Superintelligence",
    b: (
      <>
        Recursive self-improvement triggers ASL-4 safeguards. International treaties establish
        compute-monitoring protocols similar to nuclear non-proliferation treaties.
      </>
    ),
  },
];

function NextDecade() {
  return (
    <PageShell>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">
          <Link to="/chapters" className="hover:text-ember transition-colors">
            Chapter 08
          </Link>{" "}
          · The Next Decade
        </div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95]">
          Horizon Technologies: <em className="italic text-ember">Next-decade</em> substrates.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          While today's AI is built on digital CMOS silicon and dense transformers, the research
          community is active on a pipeline of horizon technologies designed to break boundaries in
          energy, processing latency, and physical embodiment.
        </p>
      </section>

      {/* Horizon tech grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {HORIZONS.map((h) => (
            <article
              key={h.title}
              className="bg-background p-10 flex flex-col justify-between min-h-[250px]"
            >
              <div>
                <h2 className="font-display text-2xl text-ember">{h.title}</h2>
                <div className="mt-4 text-xs text-foreground/80 leading-relaxed">{h.desc}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 border-t border-border">
        <div className="eyebrow">Decade Roadmap · 2026 → 2035</div>
        <h2 className="display mt-4 text-5xl mb-12">Ten years that will reshape civilization.</h2>
        <div className="max-w-4xl">
          <ol className="relative border-l-2 border-border ml-4">
            {YEARS.map((y) => (
              <li key={y.y} className="ml-8 mb-12 relative">
                <span className="absolute -left-[42px] top-1 inline-flex h-4 w-4 rounded-full bg-ember ring-8 ring-background" />
                <div className="font-mono text-sm text-ember font-medium">{y.y}</div>
                <h3 className="font-display text-2xl mt-1">{y.t}</h3>
                <div className="mt-3 text-xs text-foreground/75 leading-relaxed">{y.b}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ChapterNavigation />
    </PageShell>
  );
}
