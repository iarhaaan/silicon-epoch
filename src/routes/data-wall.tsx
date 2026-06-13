import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";

export const Route = createFileRoute("/data-wall")({
  head: () => ({
    meta: [
      { title: "The Data Wall & Synthetic Futures — Silicon Epoch" },
      { name: "description", content: "Scraping limits, internet data depletion timelines, MIT provenance content withholding, test-time compute, and reinforcement learning self-play." },
      { property: "og:title", content: "The Data Wall & Synthetic Futures — Silicon Epoch" },
    ],
  }),
  component: DataWall,
});

const SECTIONS = [
  {
    n: "01",
    t: "The Human Data Wall",
    b: <>Epoch AI projects that high-quality human-written text data on the public internet was exhausted before 2026. Frontier models are already overtrained by 5× compared to standard compute-optimal levels. Furthermore, publishers are actively withholding access: the MIT Data Provenance Initiative documented a sharp contraction in crawlable content. Cloudflare data shows AI crawler growth slowed from 32% in April 2025 to just 4% in July 2025 as publisher blocking surged, highlighted by Anthropic's lopsided 38,000:1 crawl-to-refer traffic ratio<Citation id="synthetic-data-2026" />.</>
  },
  {
    n: "02",
    t: "Test-Time Compute Scaling",
    b: <>As pre-training data hits physical limits, scaling laws have shifted to inference runtime. Reasoning models (OpenAI o1/o3, DeepSeek-R1, Qwen-QwQ) spend 20,000–60,000 thinking tokens per query to execute self-correction and logical search<Citation id="reasoning-models-explained" />. This has shifted the economic balance: a single query can cost 4–17× more in compute and latency, driving Chinese daily token call volumes to over 140 trillion tokens in Q1 2026, making inference the dominant infrastructure cost<Citation id="reasoning-token-stack" />.</>
  },
  {
    n: "03",
    t: "Synthetic Data & Self-Play",
    b: <>Hyperscalers are training models on synthetic data. This includes Reinforcement Learning from AI Feedback (RLAIF) under Constitutional AI<Citation id="claude-api-pricing" />, self-play distillation (e.g. DeepSeek-R1 generating 800,000 high-quality reasoning examples to train smaller open-source models<Citation id="reasoning-models-explained" />), and sandbox simulations (generating verifiable data from environment goals, such as training AlphaGeometry 2 on synthetic geometry datasets<Citation id="alphageometry-2" /> or agents on Factorio/Minecraft).</>
  },
  {
    n: "04",
    t: "Model Collapse Mitigation",
    b: <>Recursively training models on synthetic data from prior models introduces 'model collapse,' where semantic variance degrades. To mitigate this, labs are combining synthetic generation with ground-truth verification loops: executing generated code in sandboxes to verify syntax, checking mathematical steps with formal proof assistants (Lean), and comparing output trajectories with physical simulators<Citation id="synthetic-data-2026" />.</>
  }
];

function DataWall() {
  return (
    <PageShell>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 12 · The Data Wall · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95]">
          The Data Wall: Exhausting human <em className="italic text-ember">written words</em>.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          The early scaling laws relied on scraping the public internet. As the reserve of high-quality human text is depleted and legal barriers rise, AGI development has transitioned to test-time compute scaling and verified synthetic feedback.
        </p>
      </section>

      {/* Grid of sections */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {SECTIONS.map((s) => (
            <article key={s.n} className="bg-background p-10 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="font-mono text-sm text-ember">{s.n}</div>
                <h3 className="font-display text-3xl mt-3">{s.t}</h3>
                <div className="mt-4 text-xs text-foreground/75 leading-relaxed">{s.b}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* System 1 vs 2 Panel */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl bg-cream dark:bg-zinc-900 border border-border p-10 lg:p-14">
          <div className="eyebrow">The Decisional Pivot</div>
          <h2 className="display text-3xl lg:text-4xl mt-4 max-w-3xl">System 1 vs System 2 Thinking.</h2>
          <p className="mt-4 text-xs text-foreground/80 leading-relaxed max-w-3xl">
            Standard autoregressive LLMs operate on 'System 1' thinking—reflexively emitting the next token with constant compute. Inference-time scaling introduces 'System 2' thinking, allowing models to formulate multi-step chains-of-thought, run search trees, and identify errors before printing the final answer.
          </p>
          <p className="mt-3 text-xs text-foreground/80 leading-relaxed max-w-3xl">
            This shifts AI from a static chat interface to a dynamic utility: a model can run instantly for low-cost conversational tasks, or deliberate for hours to solve a complex mathematical theorem or identify a molecular compound for biology.
          </p>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 border-t border-border">
        <div className="flex justify-between items-center">
          <Link to="/open-vs-closed" className="text-sm text-foreground/60 hover:text-foreground">
            ← Chapter 11: Open vs Closed
          </Link>
          <Link to="/learn" className="text-sm font-medium text-ember hover:underline">
            Appendix: Daily Practice →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
