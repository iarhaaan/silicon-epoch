import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";

export const Route = createFileRoute("/open-vs-closed")({
  head: () => ({
    meta: [
      { title: "Open Weights vs Closed APIs — Silicon Epoch" },
      { name: "description", content: "Comparing closed models (GPT-5.5, Claude Fable) with open weights (Llama 4, DeepSeek-V4-Pro). Licensing, biosecurity safeguards, and EU/CA regulation." },
      { property: "og:title", content: "Open Weights vs Closed APIs — Silicon Epoch" },
    ],
  }),
  component: OpenVsClosed,
});

const COMPARISON = [
  {
    feature: "Weights Accessibility",
    closed: <>Proprietary. Model weights reside entirely on the lab's secure infrastructure; users lease cognitive access via API queries.<Citation id="gpt-5-5-announcement" /></>,
    open: <>Downloadable weights under open-source (Apache 2.0) or modified commercial licenses (e.g., Llama 4 Community License, DeepSeek MIT).<Citation id="best-open-source-2026" /></>,
    winner: "Open (for local execution and sovereignty)"
  },
  {
    feature: "Safeguards & Biosecurity",
    closed: "Centralized server-side moderation, input/output classifiers, and prompt shields. Access can be instantly revoked under ASL-3 triggers.",
    open: "Downstream safety is the responsibility of the deployer. Once released, weights cannot be recalled and safety filters can be fine-tuned out.",
    winner: "Closed (for biosecurity and malicious containment)"
  },
  {
    feature: "Inference Economics",
    closed: <>Premium token-based pricing margins. GPT-5.5 priced at $5.00 / $30.00 per 1M. Subject to hyperscaler price floors.<Citation id="gpt-5-5-announcement" /></>,
    open: <>Highly economical. DeepSeek V3.2 priced at $0.28 / $0.42 per 1M, while Flash APIs operate near-zero. 10-100× cheaper inference.<Citation id="chinese-ai-market" /></>,
    winner: "Open (for high-volume agent swarms)"
  },
  {
    feature: "Licensing Restrictions",
    closed: "Subject to lab terms of service. No commercial reuse limitations other than standard API usage agreements.",
    open: <>DeepSeek/Qwen are MIT/Apache 2.0. Llama 4 Community License restricts commercial use above 700M monthly active users.<Citation id="best-open-source-2026" /></>,
    winner: "Variable (MIT/Apache vs. Walled Garden)"
  }
];

const MODELS_SIDE = [
  {
    category: "Reasoning & Coding Flagships",
    closedModel: "Claude Fable 5 / GPT-5.5",
    closedStats: <>SWE-bench Pro: 80.3% (Fable 5) / 58.6% (GPT-5.5) · GPQA: 94.5% (Fable 5)<Citation id="best-ai-coding-2026" /></>,
    openModel: "DeepSeek-V4-Pro / Qwen3.7-Max",
    openStats: <>SWE-bench Pro: 55.4% (V4 Pro) / ~54% (Qwen3.7-Max) · GPQA: 92.4%<Citation id="best-ai-coding-2026" /></>
  },
  {
    category: "API Pricing (per 1M tokens)",
    closedModel: "Claude Fable 5",
    closedStats: <>Input: $10.00 / Output: $50.00<Citation id="claude-api-pricing" /></>,
    openModel: "DeepSeek V3.2",
    openStats: <>Input: $0.28 / Output: $0.42<Citation id="chinese-ai-market" /></>
  },
  {
    category: "Maximum Context Windows",
    closedModel: "Gemini 3.1 Pro",
    closedStats: <>2,000,000 tokens (lossless needle-in-a-haystack)<Citation id="gemini-3-5-flash-guide" /></>,
    openModel: "Llama 4 Scout",
    openStats: <>10,000,000 tokens (Sparse Attention / open weights)<Citation id="best-open-source-2026" /></>
  }
];

function OpenVsClosed() {
  return (
    <PageShell>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 11 · The weights debate · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95]">
          Who controls the <em className="italic text-ember">weights</em> controls the future.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          The primary ideological and commercial debate centers on weight accessibility: should the mathematical weights of AGI models remain locked in secure vaults behind APIs, or should they be freely downloadable to run on private hardware?
        </p>
      </section>

      {/* Side-by-side Table */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="eyebrow mb-6">Structural Comparison</div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left border-collapse">
            <thead className="bg-cream">
              <tr className="text-sm">
                <th className="p-5 font-semibold border-b border-border w-1/4">Feature</th>
                <th className="p-5 font-semibold border-b border-border w-3/8 text-ink/85">Closed API (OpenAI, Anthropic, Gemini)</th>
                <th className="p-5 font-semibold border-b border-border w-3/8 text-ember/85">Open Weights (DeepSeek, Llama, Qwen)</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-border">
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="hover:bg-cream/10 transition-colors">
                  <td className="p-5 font-medium border-r border-border">{row.feature}</td>
                  <td className="p-5 text-xs text-foreground/75 leading-relaxed border-r border-border">{row.closed}</td>
                  <td className="p-5 text-xs text-foreground/75 leading-relaxed">{row.open}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Side-by-Side Model Capabilities */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="eyebrow mb-6">Model Capabilities (June 2026)</div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {MODELS_SIDE.map((m) => (
            <div key={m.category} className="bg-background p-8 flex flex-col justify-between">
              <div>
                <div className="eyebrow text-[10px] text-foreground/50 mb-3">{m.category}</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-semibold text-foreground/60 uppercase">Closed API</div>
                    <div className="font-display text-lg text-ink dark:text-white mt-1">{m.closedModel}</div>
                    <div className="text-[10px] text-foreground/70 mt-1 font-mono leading-relaxed">{m.closedStats}</div>
                  </div>
                  <div className="border-t border-border/50 pt-3">
                    <div className="text-[10px] font-semibold text-ember/90 uppercase">Open Weights</div>
                    <div className="font-display text-lg text-ember mt-1">{m.openModel}</div>
                    <div className="text-[10px] text-foreground/70 mt-1 font-mono leading-relaxed">{m.openStats}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regulatory Landscapes & Corporate shifts */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 grid md:grid-cols-2 gap-10">
        <div className="bg-cream/35 border border-border rounded-3xl p-10 flex flex-col justify-between">
          <div>
            <div className="eyebrow">Corporate Shifts</div>
            <h3 className="display text-3xl mt-3">Meta's Closed Pivot: Muse Spark</h3>
            <p className="mt-4 text-xs text-foreground/75 leading-relaxed">
              Meta AI remains a key distributor of open-weights via Llama 4 Scout (109B) and Llama 4 Maverick (400B), but the company has altered its strategy. In April 2026, Meta launched **Muse Spark**, its first closed-weights proprietary reasoning model trained with thought-compression RL.
            </p>
            <p className="mt-3 text-xs text-foreground/75 leading-relaxed">
              This shift reflects the pressure of Meta's $65B-$100B capex cycles. To secure return on investment, Meta now restricts its absolute frontier reasoning systems behind proprietary APIs while utilizing Llama weights to commoditize hardware and maintain developer mindshare.
            </p>
          </div>
        </div>

        <div className="border border-border rounded-3xl p-10 flex flex-col justify-between">
          <div>
            <div className="eyebrow">Frontier Regulation</div>
            <h3 className="display text-3xl mt-3">EU AI Act & California's SB 1047 Veto</h3>
            <p className="mt-4 text-xs text-foreground/75 leading-relaxed">
              The regulatory landscape has solidified. The **EU AI Act's** General Purpose AI (GPAI) model provisions entered force in August 2025. Articles 10–15 mandate strict documentation and auditing for post-training preference data collection (SFT, RLHF, DPO), with systemic-risk thresholds (&gt;10^25 FLOPs) enforceable by August 2026.
            </p>
            <p className="mt-3 text-xs text-foreground/75 leading-relaxed">
              In the United States, California's controversial **SB 1047** (which would have covered models trained at &gt;$100M or &gt;10^26 FLOPs, mandating developer-controlled kill-switches and audits) was **vetoed by Governor Newsom on September 29, 2024**. Newsom criticized the bill for failing to evaluate empirical trajectories of capability, preserving California as a highly permissive jurisdiction for open weights.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 border-t border-border">
        <div className="flex justify-between items-center">
          <Link to="/geopolitics" className="text-sm text-foreground/60 hover:text-foreground">
            ← Chapter 10: Geopolitics
          </Link>
          <Link to="/data-wall" className="text-sm font-medium text-ember hover:underline">
            Chapter 12: Data Wall →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
