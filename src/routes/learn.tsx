import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { ChapterNavigation } from "@/components/chapter-navigation";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://siliconeposh.vercel.app/og-image.png" },
      { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image.png" },
      { property: "og:url", content: "https://siliconeposh.vercel.app/learn" },
      { title: "Learn AI — Silicon Epoch" },
      {
        name: "description",
        content:
          "How to actually become AI-fluent in 2026 — the mindset, the daily practice, the tools and the resources.",
      },
      { property: "og:title", content: "Learn AI — Silicon Epoch" },
    ],
    links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/learn" }],
  }),
  component: Learn,
});

const REASONS = [
  {
    k: "Leverage",
    title: "One person + AI now outproduces a team of ten.",
    body: "Solo founders are shipping million-dollar products. Researchers are running entire labs. The ceiling on individual ambition has moved.",
  },
  {
    k: "Wages",
    title: "AI fluency is the largest pay differentiator since the internet.",
    body: "PwC, McKinsey, WEF and LinkedIn all report a clear premium — 20–50%+ — for workers who can credibly use AI in their role.",
  },
  {
    k: "Defensibility",
    title: "Not learning AI is the new not learning to use a computer.",
    body: "Tasks that were specialist (writing code, designing graphics, drafting contracts) are now table-stakes for anyone willing to learn the tools.",
  },
  {
    k: "Agency",
    title: "AI literacy is civic literacy.",
    body: "Voting, parenting, working, creating — all of it now happens in a world shaped by AI. Understanding it is the price of entry to the conversation.",
  },
];

const PRACTICE = [
  "Use a frontier chatbot (ChatGPT, Claude, Gemini, Grok, Kimi, DeepSeek) every single day for at least one real task.",
  "Learn to prompt: be specific, give context, show examples, ask for a draft, iterate.",
  "Pick one creative tool (image, video, music or 3D) and ship something every week.",
  "Try a coding agent (Cursor, Claude Code, Replit, v0). Build something useful, even badly.",
  "Read one primary source per week — a lab blog post (OpenAI, Anthropic, DeepMind, DeepSeek) or a paper abstract.",
  "Follow practitioners over pundits: Karpathy, Simon Willison, Ethan Mollick, Latent Space, the original lab researchers.",
];

function Learn() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">
          <Link to="/chapters" className="hover:text-ember transition-colors">
            Appendix
          </Link>{" "}
          · Daily AI Fluency
        </div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl">
          AI literacy is the new <em className="italic text-ember">general literacy</em>.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          Not because it's trendy. Because it compounds. Every month you use AI well, the ceiling on
          what one human can do moves up. Every month you don't, the gap widens.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {REASONS.map((r) => (
            <article key={r.k} className="bg-background p-10">
              <div className="eyebrow">{r.k}</div>
              <h2 className="font-display text-3xl mt-3">{r.title}</h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-14">
        <div>
          <div className="eyebrow">A practical daily practice</div>
          <h2 className="display mt-4 text-5xl">Six habits, starting today.</h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            There is no certificate that will make you AI-fluent. Only daily contact with the tools.
          </p>
        </div>
        <ol className="space-y-5">
          {PRACTICE.map((p, i) => (
            <li key={p} className="flex gap-4">
              <span className="font-mono text-sm text-ember mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg text-foreground/85 leading-relaxed">{p}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="rounded-3xl bg-ember text-white p-12 lg:p-16">
          <h2 className="font-display text-4xl lg:text-6xl max-w-4xl leading-tight">
            The best moment to start was three years ago. The second-best moment is now.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/how-ai-works" className="rounded-full bg-white text-ember px-6 py-3 text-sm">
              Start with the basics →
            </Link>
            <Link
              to="/companies"
              className="rounded-full border border-white/40 px-6 py-3 text-sm hover:bg-white/10"
            >
              Pick a model to learn
            </Link>
          </div>
        </div>
      </section>
      <ChapterNavigation />
    </PageShell>
  );
}
