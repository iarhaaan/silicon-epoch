import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "AI Use Cases — Silicon Epoch" },
      { name: "description", content: "SWE-bench Pro scores, AlphaFold 3 biomolecular docking, GNoME materials discovery, and AlphaGeometry 2 IMO gold medal benchmarks." },
      { property: "og:title", content: "AI Use Cases — Silicon Epoch" },
    ],
  }),
  component: UseCases,
});

const SECTORS = [
  {
    eyebrow: "Software Development",
    title: "AI is now driving production commits.",
    body: "84–91% of developers use AI coding tools. 51% of professional developers use AI tools daily, merging 60% more pull requests per week than non-users. The dominant pattern has shifted to 'frontier planner + cheap executor' networks (e.g. Fable 5/GPT-5.5 planning, while Gemini 3.5 Flash/DeepSeek executing).",
    bullets: [
      "SWE-bench Pro Leaderboard: Claude Fable 5 (80.3%), Claude Opus 4.8 (69.2%), GPT-5.5 (58.6%), DeepSeek-V4-Pro (55.4%). Models drop 19-26 percentage points compared to Verified.",
      "SWE-bench Verified Leaderboard: Claude Fable 5 (93.1%), Claude Opus 4.8 (88.6%), Gemini 3.5 Flash (85.4%), GPT-5.5 (~80%).",
      "Data Contamination: OpenAI has abandoned SWE-bench Verified reporting due to data contamination, finding 59.4% of hard tasks contained flawed tests.",
      "Enterprise Adoption: Anthropic's Claude Code reached $2.5B annualized revenue by February 2026, just nine months post-release.",
    ],
  },
  {
    eyebrow: "Mathematics & Logic",
    title: "Olympiad-level reasoning is unlocked.",
    body: "The paradigm has shifted from training-time scaling to test-time compute scaling, where reasoning models dedicate additional compute during inference. Systems like DeepSeek-R1, OpenAI o1/o3, and Qwen-QwQ spend 20,000–60,000 thinking tokens per query to self-correct and verify solutions.",
    bullets: [
      "AlphaGeometry 2 (DeepMind): Solved 84% of all IMO geometry problems from 2000–2024, reaching average gold-medalist performance. It combines a Gemini-based planner with a symbolic deduction engine.",
      "Olympiad Math: The combined AlphaProof + AlphaGeometry 2 system solved 4 of 6 problems at the 2024 IMO, earning a silver-medal equivalent score of 28/42.",
      "Test-Time Math Gains: DeepSeek-R1 demonstrated that scaling test-time compute boosted AIME accuracy from 15.6% to 71%, reaching 86.7% with majority voting.",
    ],
  },
  {
    eyebrow: "Scientific Discovery",
    title: "Mapping biology and discovering materials.",
    body: "AI models have moved beyond language to act as co-investigators, navigating vast combinatorial chemistry and physical spaces to accelerate discoveries that previously took decades.",
    bullets: [
      "AlphaFold 3 (Google DeepMind): Predicts joint structures of protein-ligand, protein-nucleic acid, protein-protein complexes, DNA, and RNA. It uses a Pairformer module and a diffusion-based coordinate generator.",
      "AlphaFold 3 Performance: Achieves 76.4% accuracy in protein-ligand docking (1.8× improvement). Limitations: exhibits an 8.6% error in binding free energy changes and a 4.4% chirality violation rate.",
      "GNoME (DeepMind): Graph Networks for Materials Exploration identified 381,000 novel stable materials, expanded to over 520,000 stable crystals. Energy accuracy reaches ~21 meV/atom.",
    ],
  },
  {
    eyebrow: "Embodied Robotics",
    title: "Generalist policies catch up to hardware.",
    body: "Humanoid robotics is seeing a massive capital boom. The sector is converging on electric actuation, vision-language models for task planning, and teleoperation-to-autonomy pipelines to bridge the sim-to-real gap.",
    bullets: [
      "Tesla Optimus Gen 3 (2026): Features 22 Degrees of Freedom (DOF) hands, AI5 on-board chip, and targets a $20K-$30K price point.",
      "Figure 02: Features 16 DOF hands, a 5-hour runtime, and has commenced factory trial deployments at BMW plants.",
      "Boston Dynamics Atlas: Fully electric Atlas features 28 DOF, replacing legacy hydraulic actuators.",
      "Waymo (2026): Operating 3,000 vehicles, performing 500,000 passenger trips per week, using its 6th-gen driver with 17MP cameras.",
    ],
  },
];

function UseCases() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 04 · In production today · June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl leading-[0.95]">
          AI is already <em className="italic text-ember">here</em>, doing the work.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          Four primary domains where artificial intelligence has left the laboratory to automate development, solve complex mathematical proofs, discover new materials, and navigate physical environments.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 space-y-px bg-border border border-border rounded-3xl overflow-hidden">
        {SECTORS.map((s, i) => (
          <article key={s.eyebrow} className="bg-background p-10 lg:p-14 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs text-foreground/50">{String(i + 1).padStart(2, "0")}</div>
              <div className="eyebrow mt-2">{s.eyebrow}</div>
              <h2 className="display mt-4 text-4xl lg:text-5xl leading-tight">{s.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base text-foreground/80 leading-relaxed">{s.body}</p>
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-ember mt-1 text-xs">▸</span>
                    <span className="text-xs text-foreground/85 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* Navigation Footer */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 border-t border-border">
        <div className="flex justify-between items-center">
          <Link to="/companies" className="text-sm text-foreground/60 hover:text-foreground">
            ← Chapter 03: Frontier Labs
          </Link>
          <Link to="/humanity" className="text-sm font-medium text-ember hover:underline">
            Chapter 05: Humanity →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
