import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";
import { ChapterNavigation } from "@/components/chapter-navigation";

export const Route = createFileRoute("/how-ai-works")({
  head: () => ({
    meta: [
      { title: "How AI Actually Works — Transformers, Attention, Diffusion" },
      {
        name: "description",
        content:
          "A clear, technical walkthrough of how modern AI models work: transformers, attention, mixture-of-experts, diffusion, RLHF, and test-time scaling — without the hand-waving.",
      },
      { property: "og:title", content: "How AI Works — Transformers, Attention, Diffusion" },
      {
        property: "og:description",
        content: "How modern AI models actually work — transformers, MoE, diffusion, RLHF.",
      },
      { property: "og:url", content: "https://siliconeposh.vercel.app/how-ai-works" },
      { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
      { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    ],
    links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/how-ai-works" }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How AI Actually Works — Transformers, Attention, Diffusion",
          description:
            "A clear, technical walkthrough of how modern AI models work: transformers, attention, mixture-of-experts, diffusion, RLHF, and test-time scaling — without the hand-waving.",
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
          mainEntityOfPage: "https://siliconeposh.vercel.app/how-ai-works",
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
              name: "How AI Actually Works",
              item: "https://siliconeposh.vercel.app/how-ai-works",
            },
          ],
        }),
      },
    ],
  }),
  component: HowAIWorks,
});

const STEPS = [
  {
    n: "01",
    t: "Tokenization",
    b: "Text, images, audio, and video are sliced into numeric representations called tokens. A modern model processes up to tens of trillions of tokens during pre-training. Autoregressive visual models (such as VAR and LlamaGen) tokenize images for next-token sequential prediction.",
  },
  {
    n: "02",
    t: "Embeddings",
    b: "Tokens are mapped into high-dimensional vector spaces where semantic relationships are represented geometrically. Related concepts, like 'quarks' and 'leptons', or visual patches of a cat and the word 'feline', sit close to each other in these multi-thousand-dimensional spaces.",
  },
  {
    n: "03",
    t: "Attention Mechanics",
    b: (
      <>
        Standard Self-Attention computes a full quadratic matrix, allowing every token to weigh
        every other token. To scale, modern architectures use Multi-Query Attention (MQA) to share
        key/value heads, or Grouped-Query Attention (GQA) to group them. This dramatically reduces
        the memory footprint of the Key-Value (KV) cache.
        <Citation id="beyond-blackwell" />
      </>
    ),
  },
  {
    n: "04",
    t: "Pre-training Scales",
    b: (
      <>
        Predict the next token across 20+ trillion tokens of books, code, and synthetic datasets.
        Trillions of weights absorb a compressed mathematical model of human knowledge. A frontier
        training run today scales beyond 10^26 FLOPs and costs $100M to $1B+ in compute.
        <Citation id="sb1047-legislative-text" />
      </>
    ),
  },
  {
    n: "05",
    t: "Post-training Alignment",
    b: (
      <>
        Refining raw models into helpful assistants via a three-stage pipeline: Supervised
        Fine-Tuning (SFT), Preference Alignment (DPO has largely replaced PPO, reducing GPU usage by
        ~50%), and Reinforcement Learning with Verifiable Rewards (like GRPO or RLVR) for coding and
        math.
        <Citation id="reasoning-models-explained" />
      </>
    ),
  },
  {
    n: "06",
    t: "Reasoning & thinking",
    b: (
      <>
        Reasoning models (OpenAI o1/o3, DeepSeek-R1, Qwen-QwQ) scale test-time compute. By emitting
        20,000–60,000 internal 'thinking' tokens, models perform multi-step search, self-correction,
        and logical verification before displaying their final answer.
        <Citation id="reasoning-models-explained" />
        <Citation id="reasoning-token-stack" />
      </>
    ),
  },
  {
    n: "07",
    t: "Flow Matching & Generation",
    b: "Modern visual generation has shifted from classic diffusion to Latent Diffusion Models (LDMs) and Flow Matching (rectified flow). Flow matching trains the neural network to learn straight-line probability paths between noise and data, enhancing training stability and sample quality.",
  },
  {
    n: "08",
    t: "Agentic Execution",
    b: (
      <>
        The model runs in loops, writing code, executing in sandboxes, calling APIs, and reading
        documents. Rather than single-turn answers, frameworks like Claude Code and Devin behave as
        autonomous teammates, combining planning and execution.
        <Citation id="claude-opus-4-8" />
      </>
    ),
  },
];

const TERMS: [string, React.ReactNode][] = [
  [
    "GQA & MQA",
    <>
      Grouped-Query and Multi-Query Attention. MQA shares a single key/value head across all query
      heads; GQA groups them. Crucial for reducing the Key-Value cache memory bottleneck during
      long-context inference.
      <Citation id="beyond-blackwell" />
    </>,
  ],
  [
    "Mixture of Experts (MoE)",
    <>
      Only a subset of parameters ('experts') activates per token. Enables scaling total parameters
      (e.g. DeepSeek V4's ~1T total parameters / 50-60B active, Llama 4 Maverick's 400B total / 17B
      active) while keeping compute costs low.
      <Citation id="deepseek-v4-r2" />
      <Citation id="best-open-source-2026" />
    </>,
  ],
  [
    "State Space Models (SSMs)",
    "A transformer alternative like Mamba 3 that processes sequences with linear computational complexity O(n) instead of quadratic complexity O(n²), offering massive speedups for long-context windows.",
  ],
  [
    "Linear Recurrent Units (LRU)",
    "Recurrent architectures that eliminate non-linearities in state updates. This allows fully parallelized training (similar to transformers) while retaining the O(1) inference storage of RNNs.",
  ],
  [
    "Test-Time Compute",
    <>
      Shifting scaling laws from training to inference. Instead of training larger models, reasoning
      models spend additional compute at inference time, utilizing reinforcement learning to
      self-correct during generation.
      <Citation id="test-time-compute" />
    </>,
  ],
  [
    "Constitutional AI",
    <>
      Anthropic's post-training method. The model critiques and refines its own outputs based on a
      written list of principles (an 80-page constitution as of 2025), reducing human label costs by
      100-1,000×.
      <Citation id="claude-api-pricing" />
    </>,
  ],
  [
    "DPO vs PPO",
    <>
      Direct Preference Optimization trains the model directly on human preferences without a
      separate reward model. It is more stable and requires only half the VRAM of standard Proximal
      Policy Optimization (PPO).
      <Citation id="reasoning-models-explained" />
    </>,
  ],
  [
    "Model Collapse",
    <>
      A degradation loop where AI models trained on synthetic data from prior models begin to lose
      structural coherence, highlighting the need for validation loops like compilers or formal math
      proof checkers.
      <Citation id="synthetic-data-2026" />
    </>,
  ],
];

function HowAIWorks() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16">
        <div className="eyebrow">
          <Link to="/chapters" className="hover:text-ember transition-colors">
            Chapter 02
          </Link>{" "}
          · The mechanics
        </div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl leading-[0.95]">
          How <em className="italic text-ember">artificial intelligence</em> actually works.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          Strip away the magic and modern AI is a stack of well-understood ideas executed at
          staggering scale. Here is the whole pipeline, end to end, in plain English.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="bg-background p-10 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <div className="font-mono text-sm text-ember">{s.n}</div>
                <h2 className="font-display text-3xl mt-3">{s.t}</h2>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{s.b}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="eyebrow">Field glossary</div>
        <h2 className="display mt-4 text-5xl">The vocabulary of the frontier.</h2>
        <dl className="mt-12 grid md:grid-cols-2 gap-x-16 gap-y-8">
          {TERMS.map(([k, v]) => (
            <div key={k} className="border-t border-border pt-5">
              <dt className="font-display text-2xl">{k}</dt>
              <dd className="mt-2 text-sm text-foreground/75 leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="rounded-3xl bg-cream dark:bg-zinc-900 border border-border p-10 lg:p-14">
          <div className="eyebrow">Why this matters</div>
          <p className="mt-4 font-display text-3xl lg:text-4xl leading-snug max-w-4xl">
            Every leap of the last five years — ChatGPT, image generation, code agents, real-time
            voice, reasoning models, video — comes from the same recipe:{" "}
            <span className="ember-underline">
              bigger transformers, better data, smarter training, more compute.
            </span>{" "}
            The recipe is still scaling.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/companies"
              className="rounded-full bg-ink text-paper px-6 py-3 text-sm hover:bg-ember"
            >
              See who is scaling fastest →
            </Link>
          </div>
        </div>
      </section>

      <ChapterNavigation />
    </PageShell>
  );
}
