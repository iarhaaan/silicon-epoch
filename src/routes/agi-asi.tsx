import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";
import { ChapterNavigation } from "@/components/chapter-navigation";

export const Route = createFileRoute("/agi-asi")({
  head: () => ({
    meta: [
      { title: "AGI & ASI Timelines — How Close Are We? (2026)" },
      {
        name: "description",
        content:
          "Frontier-lab roadmaps for AGI and superintelligence: capabilities reached, capabilities remaining, the bottlenecks of compute, energy, and post-training data.",
      },
      { property: "og:title", content: "AGI & ASI Timelines — How Close Are We?" },
      {
        property: "og:description",
        content:
          "Frontier-lab roadmaps, bottlenecks, and the credible path from today's models to AGI.",
      },
      { property: "og:url", content: "https://siliconeposh.vercel.app/agi-asi" },
      { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
      { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    ],
    links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/agi-asi" }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "AGI & ASI Timelines — How Close Are We? (2026)",
          description:
            "Frontier-lab roadmaps for AGI and superintelligence: capabilities reached, capabilities remaining, the bottlenecks of compute, energy, and post-training data.",
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
          mainEntityOfPage: "https://siliconeposh.vercel.app/agi-asi",
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
              name: "AGI & ASI Timelines",
              item: "https://siliconeposh.vercel.app/agi-asi",
            },
          ],
        }),
      },
    ],
  }),
  component: AgiAsi,
});

const TIMELINE = [
  {
    who: "Elon Musk (xAI)",
    year: "2026",
    quote: (
      <>
        AGI 'smarter than the smartest human' will arrive as early as 2026, driven by Grok 5
        <Citation id="grok-4-3-announcement" />.
      </>
    ),
  },
  {
    who: "Dario Amodei (Anthropic)",
    year: "~2027",
    quote: (
      <>
        AGI 'likely within a few years' (estimated around 2027). Reaffirmed at WEF Davos 2026
        <Citation id="fable-5-impressions" />.
      </>
    ),
  },
  {
    who: "Shane Legg (DeepMind)",
    year: "2028",
    quote: (
      <>
        50% probability of achieving 'minimal AGI' by 2028 (reaffirmed in January 2026)
        <Citation id="reasoning-models-explained" />.
      </>
    ),
  },
  {
    who: "Demis Hassabis (DeepMind)",
    year: "~2030",
    quote: (
      <>
        50% chance of achieving AGI by the end of the decade (~2030). Reaffirmed at WEF Davos 2026
        <Citation id="gemini-3-5-flash-guide" />.
      </>
    ),
  },
  {
    who: "Eric Schmidt (ex-Google)",
    year: "2028-2030",
    quote: (
      <>
        AGI is likely 3 to 5 years away (estimate from April 2025)
        <Citation id="best-open-source-2026" />.
      </>
    ),
  },
  {
    who: "Jensen Huang (NVIDIA)",
    year: "2029",
    quote: (
      <>
        AI will be able to pass any test/benchmark designed by humans by 2029 (estimate from March
        2024)
        <Citation id="huang-stanford-keynote" />.
      </>
    ),
  },
  {
    who: "Ray Kurzweil (Futurist)",
    year: "2029",
    quote: (
      <>
        Maintains his decades-long prediction of AGI by 2029, and Singularity by 2045
        <Citation id="kurzweil-singularity-nearer" />.
      </>
    ),
  },
  {
    who: "Sam Altman (OpenAI)",
    year: "2035",
    quote: (
      <>
        AGI will arrive within a 'few thousand days' (essay from late 2024)
        <Citation id="altman-intelligence-age" />.
      </>
    ),
  },
  {
    who: "Ajeya Cotra (Open Phil)",
    year: "2040",
    quote: (
      <>
        50% chance of AGI by 2040, based on bio-anchors framework (2020 paper)
        <Citation id="cotra-bio-anchors" />.
      </>
    ),
  },
  {
    who: "Metaculus (Forecasters)",
    year: "2033",
    quote: (
      <>
        Aggregate superforecaster median points to 25% probability by 2029, and 50% by 2033 (as of
        Feb 2026)
        <Citation id="reasoning-models-explained" />.
      </>
    ),
  },
  {
    who: "Samotsvety Forecasting",
    year: "2041",
    quote: (
      <>
        Aggregated consensus: 10% chance of AGI by 2026, and 50% by 2041 (Jan 2026 update)
        <Citation id="reasoning-models-explained" />.
      </>
    ),
  },
];

const BENCHMARKS = [
  {
    name: "ARC-AGI-1 (abstraction)",
    a: "GPT-4o (2024): 5.0%",
    b: (
      <>
        o3 (2025): 87.5%
        <Citation id="reasoning-models-explained" />
      </>
    ),
  },
  {
    name: "ARC-AGI-2 (human baseline)",
    a: "Human Expert: ~72.0%",
    b: (
      <>
        Claude Fable 5: 85.2%
        <Citation id="fable-5-impressions" />
      </>
    ),
  },
  {
    name: "SWE-bench Pro (hard code)",
    a: "GPT-5.5: 58.6%",
    b: (
      <>
        Claude Fable 5: 80.3%
        <Citation id="best-ai-coding-2026" />
      </>
    ),
  },
  {
    name: "SWE-bench Verified (curated code)",
    a: "Gemini 3.5 Flash: 85.4%",
    b: (
      <>
        Claude Fable 5: 93.1%
        <Citation id="best-ai-coding-2026" />
      </>
    ),
  },
  {
    name: "GPQA Diamond (doctoral science)",
    a: "Human PhD baseline: ~65.0%",
    b: (
      <>
        Claude Fable 5: 94.5%
        <Citation id="best-ai-coding-2026" />
      </>
    ),
  },
  {
    name: "AIME (test-time math)",
    a: "DeepSeek-R1 (base): 15.6%",
    b: (
      <>
        GPT-5.5: 99.3%
        <Citation id="gpt-5-5-announcement" />
      </>
    ),
  },
];

function AgiAsi() {
  return (
    <PageShell>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">
          <Link to="/chapters" className="hover:text-ember transition-colors">
            Chapter 06
          </Link>{" "}
          · AGI & ASI
        </div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95]">
          What happens when we build a mind <em className="italic text-ember">smarter than ours</em>
          ?
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          AGI (Artificial General Intelligence) is the point where a software system performs any
          economically valuable cognitive task at or above human level. ASI (Artificial
          Superintelligence) represents what follows: a system that recursively improves,
          outthinking the entirety of humanity.
        </p>
      </section>

      {/* AGI vs ASI Panels */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid md:grid-cols-2 gap-10">
        <div className="rounded-3xl border border-border p-10 bg-card">
          <div className="eyebrow">AGI · Artificial General Intelligence</div>
          <h2 className="display text-4xl mt-3">A coworker for every job.</h2>
          <p className="mt-5 text-xs text-foreground/80 leading-relaxed">
            A system capable of learning new skills at human speed, reasoning across disciplines,
            utilizing tools, planning, and executing action loops without supervision. By 2026, the
            remaining gaps consist of long-horizon planning, robust memory retention across context
            sessions, and embodied common sense in physical reality.
          </p>
          <ul className="mt-6 space-y-2 text-xs text-foreground/85">
            <li>· Frontier benchmarks (GPQA, SWE-bench Pro, AIME) are nearing saturation.</li>
            <li>
              · Test-time reasoning models (OpenAI o1/o3, DeepSeek-R1) trade latency for accuracy by
              emitting 20K-60K thinking tokens.
            </li>
            <li>
              · Chinese token consumption has surged to <strong>140 trillion tokens daily</strong>{" "}
              in Q1 2026
              <Citation id="reasoning-token-stack" />, indicating that active inference is replacing
              training as the dominant compute cost.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-ink text-paper p-10 grain">
          <div className="grain-overlay" />
          <div className="eyebrow text-paper/60">ASI · Artificial Superintelligence</div>
          <h2 className="display text-4xl mt-3">A scientist thinking at machine-velocity.</h2>
          <p className="mt-5 text-xs text-paper/85 leading-relaxed">
            An ASI is a system that vastly exceeds the best human minds in every cognitive,
            creative, and technical domain. Operating millions of parallel threads in a data center,
            it could execute decades of scientific progress in months, introducing recursive
            self-improvement loops that demand safety paradigms we have yet to verify.
          </p>
          <ul className="mt-6 space-y-2 text-xs text-paper/85">
            <li>
              · Direct physical control: Automated laboratories executing chemistry, genomics, and
              hardware designs at machine speed.
            </li>
            <li>
              · Decisional Safety: Safety frameworks like Anthropic's RSP define strict triggers
              (ASL-3/ASL-4) for autonomous cyber-offense capabilities
              <Citation id="claude-opus-4-8" />.
            </li>
            <li>
              · The Alignment Problem: Steering systems smarter than their creators, preventing
              sycophancy, reward hacking, and deceptive scheming.
            </li>
          </ul>
        </div>
      </section>

      {/* Timelines Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="eyebrow">When? · Predictions from the builders</div>
        <h2 className="display mt-4 text-5xl">The timeline, in their own words.</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {TIMELINE.map((t) => (
            <article key={t.who} className="bg-background p-8 flex flex-col justify-between">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl">{t.who}</h3>
                <span className="font-mono text-sm text-ember">{t.year}</span>
              </div>
              <div className="mt-4 text-xs text-foreground/80 italic leading-relaxed">
                “{t.quote}”
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cyber-physical safety warning */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="rounded-3xl bg-cream dark:bg-zinc-900 border border-border p-10 lg:p-16">
          <div className="eyebrow">Existential Risk: Cyber-Physical Convergence</div>
          <h2 className="display text-4xl lg:text-5xl mt-4 max-w-3xl">
            Machine-velocity conflict.
          </h2>
          <p className="mt-6 text-sm text-foreground/80 leading-relaxed max-w-3xl">
            In 2026, the convergence of IT and OT (Operational Technology) has created a{" "}
            <strong>strategic convergence of cyber-physical threats</strong>. Advanced Persistent
            Threat (APT) groups deploy AI-orchestrated attacks targeting critical national
            infrastructure: water treatment plants, regional power grids, and automated industrial
            control systems
            <Citation id="cve-exploits-2026" />.
          </p>
          <p className="mt-4 text-sm text-foreground/80 leading-relaxed max-w-3xl">
            Because AI systems can compile, scan, and deploy zero-day exploits autonomously at
            scale, the window for human intervention has shrunk from hours to milliseconds. Safe AGI
            development demands hardening physical infrastructure against autonomous
            cyber-penetration vectors.
          </p>
        </div>
      </section>

      {/* Benchmark reality check */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="eyebrow">Benchmark reality check · 2024 → 2026</div>
        <h2 className="display mt-4 text-5xl max-w-4xl">
          Two years. Almost every frontier benchmark fell.
        </h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENCHMARKS.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl border border-border p-6 bg-card flex flex-col justify-between min-h-[140px]"
            >
              <div className="eyebrow">{b.name}</div>
              <div className="mt-4">
                <p className="text-[11px] text-foreground/60 line-through">{b.a}</p>
                <div className="mt-1 font-display text-xl text-ember">{b.b}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ChapterNavigation />
    </PageShell>
  );
}
