import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { useState, useMemo } from "react";
import { Citation } from "@/components/citation";
import { Search, Calendar, Award, Cpu, Globe, Gamepad } from "lucide-react";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Interactive AI History Timeline — 1950 to 2026" },
      {
        name: "description",
        content:
          "From Turing's test to GPT-5.5 — an interactive timeline of every major AI milestone, model release, lab founding, and policy event of the last 75 years.",
      },
      { property: "og:title", content: "Interactive AI History Timeline (1950–2026)" },
      {
        property: "og:description",
        content: "Every major milestone in AI from Turing to GPT-5.5.",
      },
      { property: "og:url", content: "https://siliconeposh.vercel.app/timeline" },
      { property: "og:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
      { name: "twitter:image", content: "https://siliconeposh.vercel.app/og-image-dark.png" },
    ],
    links: [{ rel: "canonical", href: "https://siliconeposh.vercel.app/timeline" }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Interactive AI History Timeline — 1950 to 2026",
          description:
            "From Turing's test to GPT-5.5 — an interactive timeline of every major AI milestone, model release, lab founding, and policy event of the last 75 years.",
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
          mainEntityOfPage: "https://siliconeposh.vercel.app/timeline",
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
              name: "Interactive AI History Timeline",
              item: "https://siliconeposh.vercel.app/timeline",
            },
          ],
        }),
      },
    ],
  }),
  component: TimelinePage,
});

interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  era: "foundations" | "expansion" | "deep-learning" | "modern";
  category: "breakthrough" | "hardware" | "games" | "policy";
  description: string;
  contributors: string[];
  impact: string;
  citationId: string;
}

const EVENTS: TimelineEvent[] = [
  {
    id: "turing-test-1950",
    year: 1950,
    title: "Alan Turing Proposes the Turing Test",
    era: "foundations",
    category: "breakthrough",
    description:
      "Alan Turing publishes his seminal paper 'Computing Machinery and Intelligence', introducing the 'imitation game' (now known as the Turing Test) to evaluate machine intelligence.",
    contributors: ["Alan Turing"],
    impact:
      "Established the foundational question 'Can machines think?' and defined intelligence operationally for the computing age.",
    citationId: "turing-test-1950",
  },
  {
    id: "dartmouth-1956",
    year: 1956,
    title: "The Dartmouth Workshop",
    era: "foundations",
    category: "policy",
    description:
      "A summer research project organized by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon at Dartmouth College, widely credited with coining the term 'Artificial Intelligence'.",
    contributors: ["John McCarthy", "Marvin Minsky", "Claude Shannon", "Nathaniel Rochester"],
    impact:
      "Officially launched artificial intelligence as an academic research field, outlining core vectors like neural networks and language processing.",
    citationId: "dartmouth-proposal-1955",
  },
  {
    id: "perceptron-1958",
    year: 1958,
    title: "Frank Rosenblatt Invents the Perceptron",
    era: "foundations",
    category: "breakthrough",
    description:
      "Rosenblatt introduces the Perceptron, the earliest artificial neural network architecture designed for pattern recognition and binary classification.",
    contributors: ["Frank Rosenblatt"],
    impact:
      "Laid the mathematical foundations for supervised learning and artificial neural connections, igniting early optimism in neural nets.",
    citationId: "perceptron-1958",
  },
  {
    id: "backpropagation-1986",
    year: 1986,
    title: "Popularization of Backpropagation",
    era: "expansion",
    category: "breakthrough",
    description:
      "Rumelhart, Hinton, and Williams publish in Nature, demonstrating how the backpropagation algorithm can train multi-layer neural networks to learn internal hidden representations.",
    contributors: ["David E. Rumelhart", "Geoffrey E. Hinton", "Ronald J. Williams"],
    impact:
      "Resurrected connectionist and neural network research from the first AI winter by providing a practical training method for deep architectures.",
    citationId: "backpropagation-1986",
  },
  {
    id: "deepblue-1997",
    year: 1997,
    title: "Deep Blue Defeats Garry Kasparov",
    era: "expansion",
    category: "games",
    description:
      "IBM's chess-playing computer Deep Blue defeats reigning world champion Garry Kasparov in a historic six-game match under tournament conditions.",
    contributors: ["Feng-hsiung Hsu", "Murray Campbell", "IBM Research Team"],
    impact:
      "A landmark public demonstration showing that heuristic search systems could outperform the finest human minds in complex strategy games.",
    citationId: "deepblue-1997",
  },
  {
    id: "alexnet-2012",
    year: 2012,
    title: "AlexNet Wins the ImageNet Challenge",
    era: "deep-learning",
    category: "breakthrough",
    description:
      "Alex Krizhevsky, Ilya Sutskever, and Geoff Hinton train a deep convolutional neural network (AlexNet) using GPU acceleration, achieving a massive win on ImageNet.",
    contributors: ["Alex Krizhevsky", "Ilya Sutskever", "Geoffrey E. Hinton"],
    impact:
      "Triggered the modern deep learning revolution by proving that deep neural networks combined with large datasets and GPUs are highly effective.",
    citationId: "alexnet-2012",
  },
  {
    id: "gans-2014",
    year: 2014,
    title: "Ian Goodfellow Invents GANs",
    era: "deep-learning",
    category: "breakthrough",
    description:
      "Goodfellow et al. introduce Generative Adversarial Networks (GANs), setting up a competitive game between a generator and a discriminator model.",
    contributors: ["Ian Goodfellow", "Yoshua Bengio", "Jean Pouget-Abadie"],
    impact:
      "Pioneered high-fidelity synthetic data generation and launched the field of deep generative AI.",
    citationId: "gans-paper-2014",
  },
  {
    id: "resnet-2015",
    year: 2015,
    title: "ResNet: Deep Residual Learning introduced",
    era: "deep-learning",
    category: "hardware",
    description:
      "Kaiming He and colleagues introduce Deep Residual Learning, using skip connections to train neural networks containing over 150 layers.",
    contributors: ["Kaiming He", "Xiangyu Zhang", "Shaoqing Ren", "Jian Sun"],
    impact:
      "Overcame the vanishing gradient problem, allowing architectures to scale deeper and power modern computer vision models.",
    citationId: "resnet-paper-2015",
  },
  {
    id: "alphago-2016",
    year: 2016,
    title: "AlphaGo Defeats Grandmaster Lee Sedol",
    era: "deep-learning",
    category: "games",
    description:
      "Google DeepMind's AlphaGo defeats 18-time world Go champion Lee Sedol 4-1 in a televised match in Seoul.",
    contributors: ["David Silver", "Demis Hassabis", "DeepMind Team"],
    impact:
      "Showed that deep reinforcement learning and tree search could conquer Go, a game with a state space larger than the atoms in the universe.",
    citationId: "alphago-paper",
  },
  {
    id: "transformer-2017",
    year: 2017,
    title: "The Transformer Architecture Introduced",
    era: "deep-learning",
    category: "breakthrough",
    description:
      "Google researchers publish 'Attention Is All You Need', introducing the Transformer architecture built entirely on self-attention mechanisms.",
    contributors: [
      "Ashish Vaswani",
      "Noam Shazeer",
      "Niki Parmar",
      "Aidan N. Gomez",
      "Illia Polosukhin",
    ],
    impact:
      "The architectural backbone for all modern LLMs, enabling massive parallelization and scaling of natural language processing.",
    citationId: "transformer-paper-2017",
  },
  {
    id: "alphastar-2019",
    year: 2019,
    title: "AlphaStar Reaches Grandmaster in StarCraft II",
    era: "deep-learning",
    category: "games",
    description:
      "DeepMind's AlphaStar agent achieves grandmaster ranking in StarCraft II, mastering imperfect information and real-time strategy.",
    contributors: ["Oriol Vinyals", "David Silver", "DeepMind Team"],
    impact:
      "Proved reinforcement learning's capabilities in real-time environments with massive action spaces and long time horizons.",
    citationId: "alphastar-paper",
  },
  {
    id: "gpt3-2020",
    year: 2020,
    title: "OpenAI Releases GPT-3",
    era: "deep-learning",
    category: "labs",
    description:
      "OpenAI publishes 'Language Models are Few-Shot Learners', introducing the 175-billion parameter GPT-3 model.",
    contributors: ["OpenAI Research Team", "Alec Radford", "Ilya Sutskever"],
    impact:
      "Established that scaling parameter sizes allows models to perform diverse downstream tasks without explicit fine-tuning.",
    citationId: "gpt3-paper-2020",
  },
  {
    id: "chatgpt-2022",
    year: 2022,
    title: "OpenAI Launches ChatGPT",
    era: "modern",
    category: "labs",
    description:
      "OpenAI introduces ChatGPT, a conversational chatbot aligned via Reinforcement Learning from Human Feedback (RLHF).",
    contributors: ["OpenAI Alignment Team", "Sam Altman"],
    impact:
      "Brought generative AI into the global mainstream, reaching 100 million active users in just two months and initiating the GenAI race.",
    citationId: "chatgpt-launch-2022",
  },
  {
    id: "gpt4-2023",
    year: 2023,
    title: "GPT-4 and economic impact reviews",
    era: "modern",
    category: "policy",
    description:
      "OpenAI releases GPT-4, demonstrating human-level performance on legal/medical exams. Goldman Sachs projects AI will raise global GDP by 7%.",
    contributors: ["OpenAI Systems Team", "Goldman Sachs Research"],
    impact:
      "Accelerated enterprise adoption and triggered intense global debates about productivity gains, job displacement, and regulation.",
    citationId: "goldman-sachs-gdp",
  },
  {
    id: "genie-willow-2024",
    year: 2024,
    title: "Google Genie & Willow quantum chip",
    era: "modern",
    category: "hardware",
    description:
      "Google DeepMind introduces Genie (playable world models), and Quantum AI announces the Willow chip achieving quantum error correction below threshold.",
    contributors: ["Google Quantum AI Team", "Google DeepMind Team"],
    impact:
      "Pushed boundaries in physical error correction and generated simulated 3D environments, laying groundwork for future robotics world models.",
    citationId: "google-willow-quantum",
  },
  {
    id: "project-sid-2024",
    year: 2024,
    title: "Project Sid: 1,000 Autonomous Agents in Minecraft",
    era: "modern",
    category: "games",
    description:
      "Altera AI runs a simulation of 1,000 cooperative language model agents in Minecraft, showing trade networks and social structures.",
    contributors: ["Altera AI Research Team"],
    impact:
      "Represented a major step toward long-horizon, collaborative multi-agent societies operating inside dynamic virtual sandboxes.",
    citationId: "project-sid-minecraft",
  },
  {
    id: "reasoning-shift-2025",
    year: 2025,
    title: "The Rise of RL & Reasoning Models",
    era: "modern",
    category: "breakthrough",
    description:
      "The release of reasoning models (like DeepSeek-R1 and OpenAI's o-series) shifts the paradigm from pre-training compute to inference-time scaling.",
    contributors: ["DeepSeek Team", "OpenAI o1 Team"],
    impact:
      "Bypassed traditional pre-training bottlenecks, establishing reinforcement learning and test-time compute as the new frontier of AI scaling.",
    citationId: "reasoning-models-explained",
  },
  {
    id: "mckinsey-adoption-2025",
    year: 2025,
    title: "State of AI: Enterprise adoption reaches 88%",
    era: "modern",
    category: "policy",
    description:
      "McKinsey's annual survey confirms that generative AI adoption has surged to 88% of organizations using it in at least one business function.",
    contributors: ["McKinsey & Company / QuantumBlack"],
    impact:
      "Proved that generative AI is no longer a pilot concept but an integrated, boardroom-level production reality across global enterprises.",
    citationId: "mckinsey-genai-2026",
  },
  {
    id: "gpt-5-5-launch-2026",
    year: 2026,
    title: "OpenAI Launches Flagship GPT-5.5",
    era: "modern",
    category: "labs",
    description:
      "OpenAI releases GPT-5.5, a highly optimized agentic model family designed for multi-step task execution, tool use, and self-correction.",
    contributors: ["OpenAI Developer Relations"],
    impact:
      "Provided commercial developers with highly efficient System 2 reasoning agents capable of operating cross-tool workflows.",
    citationId: "gpt-5-5-announcement",
  },
  {
    id: "fable-code-2026",
    year: 2026,
    title: "Claude Fable 5 & coding benchmark breakthroughs",
    era: "modern",
    category: "labs",
    description:
      "Anthropic launches Claude Fable 5, achieving an 80.3% solve rate on the SWE-bench Pro coding benchmark, and Claude Code reaches $2.5B ARR.",
    contributors: ["Anthropic Press", "Simon Willison"],
    impact:
      "Demonstrated that autonomous software engineering agents could operate at a high-performing human level, reshaping the developer landscape.",
    citationId: "best-ai-coding-2026",
  },
];

function TimelinePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEra, setSelectedEra] = useState<
    "all" | "foundations" | "expansion" | "deep-learning" | "modern"
  >("all");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "breakthrough" | "hardware" | "games" | "policy"
  >("all");
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const eras = [
    { id: "all", label: "All Eras" },
    { id: "foundations", label: "Foundations (1950-1980)" },
    { id: "expansion", label: "Expansion & Winters (1980-2010)" },
    { id: "deep-learning", label: "Deep Learning Boom (2010-2020)" },
    { id: "modern", label: "Frontier & Reasoning (2020-2026)" },
  ] as const;

  const categories = [
    { id: "all", label: "All Categories", icon: Globe },
    { id: "breakthrough", label: "Breakthroughs", icon: Award },
    { id: "hardware", label: "Compute & Hardware", icon: Cpu },
    { id: "games", label: "Game Milestones", icon: Gamepad },
    { id: "policy", label: "Social & Policy", icon: Calendar },
  ] as const;

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((e) => {
      const matchesSearch =
        e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.contributors.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesEra = selectedEra === "all" || e.era === selectedEra;
      const matchesCategory = selectedCategory === "all" || e.category === selectedCategory;

      return matchesSearch && matchesEra && matchesCategory;
    });
  }, [searchQuery, selectedEra, selectedCategory]);

  const activeEvent = useMemo(() => {
    return EVENTS.find((e) => e.id === selectedEventId) || null;
  }, [selectedEventId]);

  return (
    <PageShell>
      {/* Hero Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12 text-center lg:text-left">
        <div className="eyebrow">Interactive AI Timeline · June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl leading-[0.95] mx-auto lg:mx-0">
          The Road to <em className="italic text-ember">Artificial Superintelligence</em>.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed mx-auto lg:mx-0">
          Trace the historical progression of AI from Turing's early mathematical foundations to the
          2026 frontier of agentic reasoning models. Every milestone is linked directly to primary
          source papers and official documents.
        </p>
      </section>

      {/* Control Panel (Search & Filters) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-8 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full lg:max-w-md">
            <span className="absolute inset-y-0 left-4 flex items-center text-foreground/45">
              <Search size={16} />
            </span>
            <input
              type="text"
              aria-label="Search timeline events"
              placeholder="Search breakthroughs, people, or milestones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember/40 text-sm transition-all"
            />
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all border cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-ink text-paper border-ink"
                      : "border-border hover:bg-cream text-foreground/80"
                  }`}
                >
                  <Icon size={12} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Era Selection Slider */}
        <div className="border-t border-b border-border py-4 flex overflow-x-auto gap-2 scrollbar-none justify-start lg:justify-between">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era.id)}
              className={`rounded-full px-5 py-2.5 text-[11px] font-mono tracking-widest uppercase transition-all whitespace-nowrap border cursor-pointer ${
                selectedEra === era.id
                  ? "bg-ember text-white border-ember shadow-md shadow-ember/20"
                  : "border-border hover:bg-cream text-foreground/80"
              }`}
            >
              {era.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Timeline Visualizer */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 relative">
        {filteredEvents.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-lg text-foreground/60">
              No milestones matched your search or filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedEra("all");
                setSelectedCategory("all");
              }}
              className="mt-4 text-xs font-mono text-ember hover:underline cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="relative">
            {/* Central Vertical Connector Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-border/70 lg:-translate-x-1/2" />

            <div className="space-y-12">
              {filteredEvents.map((event, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={event.id}
                    className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 relative ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Node Dot Indicator */}
                    <div className="absolute left-[10px] lg:left-1/2 top-8 lg:-translate-x-1/2 z-10 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedEventId(event.id)}
                        aria-label={`Select milestone: ${event.title}`}
                        className={`w-3 h-3 rounded-full border transition-all duration-300 cursor-pointer ${
                          selectedEventId === event.id
                            ? "border-ember bg-ember scale-110 shadow-[0_0_6px_rgba(226,92,44,0.5)]"
                            : "border-ember bg-background hover:scale-110 hover:bg-ember/15"
                        }`}
                      />
                    </div>

                    {/* Timeline Event Card (Left or Right side depending on index) */}
                    <div className="w-full lg:w-[47%] pl-10 lg:pl-0">
                      <div
                        onClick={() => setSelectedEventId(event.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelectedEventId(event.id);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`View details for ${event.title}`}
                        className="group relative rounded-2xl border border-border p-6 lg:p-8 bg-card transition-all duration-300 hover:border-ember hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                      >
                        <div>
                          {/* Year Badge */}
                          <div className="flex items-center justify-between gap-4">
                            <span className="font-display text-4xl text-ember font-bold tracking-tight">
                              {event.year}
                            </span>
                            <span className="font-mono text-[10px] tracking-wider uppercase text-foreground/50 border border-border/80 rounded px-2.5 py-0.5">
                              {event.category === "breakthrough"
                                ? "Breakthrough"
                                : event.category === "hardware"
                                  ? "Compute & HW"
                                  : event.category === "games"
                                    ? "Game AI"
                                    : "Social & Policy"}
                            </span>
                          </div>

                          <h3 className="font-display text-2xl mt-4 leading-tight group-hover:text-ember transition-colors">
                            {event.title}
                          </h3>
                          <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                            {event.description}
                          </p>
                        </div>

                        {/* Citation superscript tag */}
                        <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-foreground/50 truncate max-w-[70%]">
                            Key: {event.contributors.join(", ")}
                          </span>
                          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                          <span
                            className="text-xs font-mono text-ember flex items-center gap-1.5 select-none"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Source: <Citation id={event.citationId} />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Empty spacer for alignment */}
                    <div className="hidden lg:block lg:w-[47%]" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Expanded Details Drawer */}
      {activeEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-background w-full max-w-xl h-full lg:h-[94vh] rounded-3xl lg:rounded-l-3xl border border-border shadow-2xl overflow-hidden flex flex-col justify-between animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between bg-cream/20">
              <div>
                <span className="font-display text-5xl text-ember font-bold tracking-tight">
                  {activeEvent.year}
                </span>
                <span className="font-mono text-xs tracking-wider uppercase text-foreground/50 ml-4 border border-border/80 rounded px-2.5 py-0.5">
                  {activeEvent.category === "breakthrough"
                    ? "Breakthrough"
                    : activeEvent.category === "hardware"
                      ? "Compute & HW"
                      : activeEvent.category === "games"
                        ? "Game AI"
                        : "Social & Policy"}
                </span>
              </div>
              <button
                onClick={() => setSelectedEventId(null)}
                className="text-sm border border-border rounded-full px-4 py-2 hover:bg-cream transition-colors cursor-pointer font-mono"
              >
                Close
              </button>
            </div>

            {/* Details Content */}
            <div className="p-8 flex-1 overflow-y-auto space-y-8">
              <div>
                <h2 className="font-display text-3xl leading-tight text-foreground">
                  {activeEvent.title}
                </h2>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-foreground/50">
                  Detailed Overview
                </h4>
                <p className="text-base text-foreground/80 leading-relaxed">
                  {activeEvent.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-foreground/50">
                  Key Figures & Contributors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeEvent.contributors.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-cream text-foreground/85 border border-border/85 px-4 py-1.5 text-xs font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-foreground/50">
                  Immediate Impact & Legacy
                </h4>
                <p className="text-base text-foreground/85 leading-relaxed">{activeEvent.impact}</p>
              </div>
            </div>

            {/* Source Reference Links */}
            <div className="p-6 border-t border-border bg-cream/10 flex items-center justify-between">
              <span className="text-xs text-foreground/50">
                Backed by active bibliography records
              </span>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <span
                className="font-mono text-sm text-ember inline-flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                Citation Code: <Citation id={activeEvent.citationId} />
              </span>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
