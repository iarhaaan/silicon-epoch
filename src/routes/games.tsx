import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Citation } from "@/components/citation";
import { ChapterNavigation } from "@/components/chapter-navigation";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Reinforcement Learning & Game Simulation — Silicon Epoch" },
      {
        name: "description",
        content:
          "David Silver's RL milestones from AlphaGo to AlphaStar, and modern simulators like Genie 3 and Factorio agents.",
      },
      { property: "og:title", content: "Reinforcement Learning & Game Simulation — Silicon Epoch" },
    ],
  }),
  component: Games,
});

const ACTS = [
  {
    eyebrow: "Act I · Classic Reinforcement Learning",
    title: "Mastering perfect and imperfect information systems.",
    body: "The foundation of modern game intelligence was built on reinforcement learning, progressing from brute-force chess calculations to deep neural networks playing complex, real-time strategy games from self-play.",
    bullets: [
      <>
        Deep Blue (1997): Defeated world champion Garry Kasparov in Chess by calculating 200M
        positions/sec.
      </>,
      <>
        AlphaGo (2016): Defeated 18-time world champion Lee Sedol 4-1 in Go by combining deep
        learning with Monte Carlo Tree Search
        <Citation id="alphago-paper" />.
      </>,
      <>
        AlphaZero (2017): Mastered Chess, Shogi, and Go entirely from scratch via self-play RL,
        without using human games
        <Citation id="alphazero-paper" />.
      </>,
      <>
        AlphaStar (2019): Reached Grandmaster level (top 0.15% of active players) in StarCraft II,
        mastering imperfect information and real-time planning
        <Citation id="alphastar-paper" />.
      </>,
      <>
        AlphaDev (2022): Discovered faster sorting algorithms in assembly code, integrated directly
        into the LLVM libc++ library
        <Citation id="alphadev-paper" />.
      </>,
    ],
  },
  {
    eyebrow: "Act II · Modern Agent Simulations",
    title: "Long-horizon planning in open-ended sandboxes.",
    body: "Today's agents are moving beyond board games to master open-ended construction, resource gathering, and economic trade. These sandboxes serve as pre-deployment testbeds for physical robotics and agentic swarms.",
    bullets: [
      <>
        Factorio Learning Environment: Evaluates long-horizon planning in open-ended logistics
        loops. Claude 3.7 Sonnet achieved a score of 29.1 in lab-play mode, establishing a new
        baseline
        <Citation id="best-ai-coding-2026" />.
      </>,
      <>
        Minecraft Economies: Project Sid (2024) ran simulations of 1,000 autonomous LLM agents in
        Minecraft, where they self-organized labor, formed a trade economy, and established social
        structures
        <Citation id="project-sid-minecraft" />.
      </>,
      <>
        GTA V Mods (PedGPT): Deploying on-the-fly conversational LLM agents (like Llama 3.1) into
        GTA V, giving characters unscripted autonomous behavior and memory.
      </>,
    ],
  },
  {
    eyebrow: "Act III · Neural World Simulators",
    title: "Generative physics replacing traditional game engines.",
    body: "Rather than hand-building physics grids, developers are utilizing generative world models to simulate continuous, interactive visual environments instantly.",
    bullets: [
      <>
        Google Genie 3 (July 2025): Generates playable, interactive 3D worlds at 720p / 24 FPS with
        a 60-second temporal memory from a single text prompt
        <Citation id="genie-3-announcement" />.
      </>,
      <>
        World Labs Marble (November 2025): Turns text, photos, and videos into persistent,
        explorable 3D environments.
      </>,
      <>
        Decart DOS 2.0: A streamed, real-time neural game engine that calculates pixels and game
        states continuously on-the-fly.
      </>,
    ],
  },
];

const MILESTONES = [
  {
    name: "Deep Blue",
    year: "1997",
    achieve: "Defeated Garry Kasparov (Chess)",
    sig: "First computer to beat world champion in match play.",
  },
  {
    name: "AlphaGo",
    year: "2016",
    achieve: (
      <>
        Defeated Lee Sedol (Go)
        <Citation id="alphago-paper" />
      </>
    ),
    sig: "Combined deep learning + Monte Carlo tree search; Move 37.",
  },
  {
    name: "AlphaZero",
    year: "2017",
    achieve: (
      <>
        Mastered Chess, Shogi, Go
        <Citation id="alphazero-paper" />
      </>
    ),
    sig: "Self-play reinforcement learning without using human data.",
  },
  {
    name: "AlphaStar",
    year: "2019",
    achieve: (
      <>
        Grandmaster (StarCraft II)
        <Citation id="alphastar-paper" />
      </>
    ),
    sig: "Real-time strategy with imperfect information; top 0.15% EU.",
  },
  {
    name: "AlphaDev",
    year: "2022",
    achieve: (
      <>
        Discovered sorting algorithms
        <Citation id="alphadev-paper" />
      </>
    ),
    sig: "RL for code optimization; integrated into LLVM libc++.",
  },
];

function Games() {
  return (
    <PageShell>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">
          <Link to="/chapters" className="hover:text-ember transition-colors">
            Chapter 07
          </Link>{" "}
          · Games & Simulation
        </div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95]">
          Games: Reinforcement <em className="italic text-ember">learning</em> milestones.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          From board games to infinite virtual sandboxes, game environments remain the ultimate
          proving ground for general intelligence, testing long-horizon planning, spatial reasoning,
          and real-time execution.
        </p>
      </section>

      {/* Acts grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 space-y-px bg-border border border-border rounded-3xl overflow-hidden">
        {ACTS.map((a, i) => (
          <article
            key={a.eyebrow}
            className="bg-background p-10 lg:p-14 grid lg:grid-cols-12 gap-10"
          >
            <div className="lg:col-span-4">
              <div className="font-mono text-xs text-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="eyebrow mt-2">{a.eyebrow}</div>
              <h2 className="display mt-4 text-4xl lg:text-5xl leading-tight">{a.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base text-foreground/80 leading-relaxed">{a.body}</p>
              <ul className="mt-6 space-y-3">
                {a.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-ember mt-1 text-xs">▸</span>
                    <span className="text-xs text-foreground/85 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* Table of classic milestones */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="eyebrow">Milestone Registry</div>
        <h2 className="display text-4xl lg:text-5xl mt-4 mb-8">
          David Silver's Reinforcement Learning Lineage
        </h2>
        <div className="border border-border rounded-3xl overflow-hidden bg-background">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <caption className="sr-only">
                David Silver's Reinforcement Learning Lineage Milestones
              </caption>
              <thead>
                <tr className="border-b border-border bg-cream/40 dark:bg-zinc-900/40 text-xs font-mono uppercase text-muted-foreground">
                  <th scope="col" className="p-4 lg:p-6">
                    System
                  </th>
                  <th scope="col" className="p-4 lg:p-6">
                    Year
                  </th>
                  <th scope="col" className="p-4 lg:p-6">
                    Milestone Achievement
                  </th>
                  <th scope="col" className="p-4 lg:p-6">
                    Significance
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {MILESTONES.map((m) => (
                  <tr key={m.name} className="hover:bg-cream/20 dark:hover:bg-zinc-900/20 text-xs">
                    <td className="p-4 lg:p-6 font-display font-medium text-sm text-ember">
                      {m.name}
                    </td>
                    <td className="p-4 lg:p-6 font-mono">{m.year}</td>
                    <td className="p-4 lg:p-6 text-foreground/80 flex items-center gap-1">
                      {m.achieve}
                    </td>
                    <td className="p-4 lg:p-6 text-foreground/70">{m.sig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ChapterNavigation />
    </PageShell>
  );
}
