import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { useState } from "react";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Sources & Bibliography — Silicon Epoch" },
      { name: "description", content: "Transparency bibliography of the primary source publications, research papers, interviews, and statistical reports used on Silicon Epoch." },
      { property: "og:title", content: "Sources & Bibliography — Silicon Epoch" },
    ],
  }),
  component: Sources,
});

type SourceItem = {
  title: string;
  author: string;
  date: string;
  category: "hardware" | "labs" | "reasoning" | "energy" | "geopolitics" | "data";
  summary: string;
  url: string;
};

const SOURCES_DATA: SourceItem[] = [
  // SILICON & COMPUTE HARDWARE
  {
    title: "TSMC sees 70% annual growth in 2nm capacity through 2028",
    author: "Focus Taiwan",
    date: "April 2026",
    category: "hardware",
    summary: "Foundry capacity projections outlining TSMC's 2nm nanosheet output CAGR and fab allocations in Kaohsiung Fab 22 and Hsinchu Fab 20.",
    url: "https://focustaiwan.tw/sci-tech/202604280010"
  },
  {
    title: "TSMC Officially Launches Mass Production of 2nm Process",
    author: "Foundry Announcements / Stocks Registry",
    date: "Q4 2025",
    category: "hardware",
    summary: "Confirms N2 volume production ceremony, GAA nanosheet transistor curves, and wafer price metrics.",
    url: "https://www.reddit.com/r/stocks/comments/1pyoeb7/tsmc_officially_launches_mass_production_of_2nm/"
  },
  {
    title: "NVIDIA Rubin GPU: 336B Transistors and HBM4 Architecture",
    author: "Tech Insider",
    date: "March 2026",
    category: "hardware",
    summary: "Detailed engineering analysis of the Vera Rubin R100 GPU, detailing its N3 process node, HBM4 integration, and transistor count.",
    url: "https://tech-insider.org/nvidia-gtc-2026-rubin-gpu-analysis/"
  },
  {
    title: "NVIDIA Rubin R100 GPU Chip Specs & Interconnects",
    author: "Spheron Network",
    date: "April 2026",
    category: "hardware",
    summary: "System-level technical specifications for the Vera Rubin platform, NVLink 6, and HBM4 memory bandwidth.",
    url: "https://www.spheron.network/blog/nvidia-rubin-r100-guide/"
  },
  {
    title: "Intel Gaudi 3 AI Accelerator Product Specifications",
    author: "Intel Corporation",
    date: "Q2 2025",
    category: "hardware",
    summary: "Official datasheet for Gaudi 3, detailing its 1,835 TFLOPS BF16 compute performance, HBM2e memory, and TDP specs.",
    url: "https://cdrdv2-public.intel.com/845118/gaudi-3-ai-accelerator-30-3-30.pdf"
  },
  {
    title: "Intel Gaudi 3 Deployment Guide & H100 Market Alternatives",
    author: "Intel/Introl Technical Group",
    date: "2025",
    category: "hardware",
    summary: "Deployment metrics, pricing estimates, and shipping targets for Gaudi 3 AI accelerators.",
    url: "https://introl.com/blog/intel-gaudi-3-deployment-guide-h100-alternative"
  },
  {
    title: "Beyond Blackwell: Preparing Enterprise Data Centers for the NVIDIA Rubin Architecture",
    author: "Arc Compute Blog",
    date: "May 2026",
    category: "hardware",
    summary: "Analyzes HBM4 supply crunches, Vera Rubin NVL72 liquid-cooling requirements, and data center thermal scaling challenges.",
    url: "https://www.arccompute.io/arc-blog/beyond-blackwell-preparing-enterprise-data-centers-for-the-nvidia-rubin-architecture-and-the-hbm-crunch"
  },

  // FRONTIER LABS & LEADERBOARD
  {
    title: "DeepSeek V4 and R2 Architecture Deep Dive",
    author: "Meta Intelligence",
    date: "April 2026",
    category: "labs",
    summary: "Teardown of DeepSeek V4's 1-trillion parameter Mixture-of-Experts (MoE) model and its auxiliary-loss-free load balancing.",
    url: "https://www.meta-intelligence.tech/en/insight-deepseek-v4-r2"
  },
  {
    title: "Best Open-Source AI Models Ranked in 2026",
    author: "Spectrum AI Lab",
    date: "May 2026",
    category: "labs",
    summary: "Aggregated benchmark rankings comparing open weights like Llama 4, Qwen3-Coder, Kimi K2.5, and Mistral Small 4.",
    url: "https://spectrumailab.com/blog/best-open-source-ai-models-ranked-2026"
  },
  {
    title: "Anthropic Claude API Pricing & Context Guides",
    author: "Silicon Data Review",
    date: "May 2026",
    category: "labs",
    summary: "Details the Claude 4/5 pricing tiers, input/output cost structures, and context windows.",
    url: "https://www.silicondata.com/use-cases/anthropic-claude-api-pricing-2026/"
  },
  {
    title: "Initial impressions of Claude Fable 5 & Mythos 5 Release",
    author: "Simon Willison's Weblog",
    date: "June 9, 2026",
    category: "labs",
    summary: "Initial coverage of Anthropic's dual Fable 5 and Mythos 5 models, safety router redirections, and Stripe integration trials.",
    url: "https://simonwillison.net/2026/Jun/9/claude-fable-5/"
  },
  {
    title: "Gemini 2.5 Pro Complete Guide & Deep Think Mode",
    author: "Ortem Tech",
    date: "April 2026",
    category: "labs",
    summary: "Detailed overview of Gemini 2.5 Pro's 2-million token context window, multimodal token pricing, and System 2 thinking features.",
    url: "https://ortemtech.com/blog/gemini-2-5-pro-complete-guide-2026/"
  },
  {
    title: "Chinese AI Models Q2 2026 Market Share Report",
    author: "Digital Applied",
    date: "May 2026",
    category: "labs",
    summary: "Tracks OpenRouter API traffic, Chinese lab model price cuts, and deployment of domestic hardware stacks.",
    url: "https://www.digitalapplied.com/blog/chinese-ai-models-q2-2026-market-share-report"
  },

  // LOGIC & SCIENCE USE CASES
  {
    title: "SWE-bench Pro: The New Standard for AI Coding Benchmarks",
    author: "Coding Fleet Blog",
    date: "March 2026",
    category: "reasoning",
    summary: "Explains the SWE-bench Pro dataset (1,865 tasks across 41 repos), data contamination on SWE-bench Verified, and model scores.",
    url: "https://codingfleet.com/blog/swe-bench-pro-explained-the-new-standard-for-ai-coding-benchmarks-2026/"
  },
  {
    title: "Best AI for Coding in 2026: Verified vs Pro Leaderboards",
    author: "Morph LLM Blog",
    date: "May 2026",
    category: "reasoning",
    summary: "Evaluates Claude Fable 5, Claude Opus 4.8, GPT-5.5, Gemini 3.5 Flash, and MiniMax M2.5 on code planning and execution.",
    url: "https://www.morphllm.com/best-ai-model-for-coding"
  },
  {
    title: "Gold-medalist Performance with AlphaGeometry 2",
    author: "Trieu Trinh, John Jumper, et al. (Google DeepMind)",
    date: "February 2025 (arXiv)",
    category: "reasoning",
    summary: "Details the architecture of AlphaGeometry 2, achieving an 84% solve rate on IMO geometry problems from 2000–2024.",
    url: "https://arxiv.org/html/2502.03544v1"
  },
  {
    title: "DeepMind AI crushes tough maths problems at Olympiad Level",
    author: "Nature News",
    date: "February 2025",
    category: "reasoning",
    summary: "Nature's coverage of AlphaProof and AlphaGeometry 2 solving 4 of 6 IMO problems to earn a silver-medal score.",
    url: "https://www.nature.com/articles/d41586-025-00406-7"
  },
  {
    title: "The transformative impact of AI-enabled AlphaFold 3 in Biology",
    author: "Frontiers in Artificial Intelligence",
    date: "May 2025",
    category: "reasoning",
    summary: "Explains AlphaFold 3's Pairformer module, ligand-docking accuracy metrics, and structural limitations.",
    url: "https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1739303/full"
  },
  {
    title: "Materials Discovery: Google DeepMind GNoME Codebase",
    author: "Google DeepMind GitHub",
    date: "August 2024",
    category: "reasoning",
    summary: "Official code repository and dataset release for Graph Networks for Materials Exploration (GNoME), mapping stable crystals.",
    url: "https://github.com/google-deepmind/materials_discovery"
  },

  // GRID & NUCLEAR INFRASTRUCTURE
  {
    title: "Meta Data Centers: Inside the $600 Billion Infrastructure Gamble",
    author: "MMCG Invest Post",
    date: "December 2025",
    category: "energy",
    summary: "Comprehensive report on Meta's global datacenter footprint, highlighting the 1 GW Ohio Prometheus and 5 GW Louisiana Hyperion campuses.",
    url: "https://www.mmcginvest.com/post/meta-data-centers-inside-the-600-billion-infrastructure-gamble-reshaping-america"
  },
  {
    title: "Constellation to Launch Crane Clean Energy Center (Three Mile Island Restart)",
    author: "Constellation Energy",
    date: "September 2024",
    category: "energy",
    summary: "Press release detailing the 20-year Microsoft PPA to restart Three Mile Island Unit 1 (835 MW) as the Crane Clean Energy Center.",
    url: "https://www.constellationenergy.com/news/2024/Constellation-to-Launch-Crane-Clean-Energy-Center-Restoring-Jobs-and-Carbon-Free-Power-to-The-Grid.html"
  },
  {
    title: "US agrees to $1bn loan to restart Three Mile Island Nuclear Plant",
    author: "ABC News / AP News",
    date: "November 2025",
    category: "energy",
    summary: "Details the U.S. Department of Energy's $1B federal loan to Constellation to fast-track the Crane Center restart for Microsoft AI.",
    url: "https://www.abc.net.au/news/2025-11-19/three-mile-island-nuclear-power-plant-constellation-energy/106026820"
  },
  {
    title: "Google and Kairos Power team up for SMR deployments in US first",
    author: "World Nuclear News",
    date: "October 2024",
    category: "energy",
    summary: "Coverage of Google's PPA to purchase 500 MW from a fleet of Kairos Small Modular Reactors, targeting Oak Ridge, TN.",
    url: "https://www.world-nuclear-news.org/articles/google-and-kairos-power-team-up-for-smr-deployments-in-us-first"
  },
  {
    title: "Amazon Susquehanna Nuclear Campus Data Center Profile",
    author: "Baxtel Data Center Registry",
    date: "2025",
    category: "energy",
    summary: "Technical profile of Amazon's datacenter campus, situated adjacent to Talen Energy's 1,920 MW Susquehanna plant in Pennsylvania.",
    url: "https://baxtel.com/data-center/amazon-susquehanna-nuclear-campus"
  },
  {
    title: "Talen and Amazon expand partnership for Pennsylvania Nuclear SMRs",
    author: "American Nuclear Society (ANS)",
    date: "June 2025",
    category: "energy",
    summary: "Details on the 1,920 MW Amazon-Talen PPA through 2042 and the spring 2026 front-of-meter grid interconnection.",
    url: "https://www.ans.org/news/2025-06-16/article-7113/talen-and-amazon-expand-their-partnership-for-pennsylvania/"
  },

  // GEOPOLITICS & EXPORT POLICY
  {
    title: "Samsung takes delivery of first High-NA EUV system (ASML EXE:5000)",
    author: "Bits & Chips Magazine",
    date: "March 2025",
    category: "geopolitics",
    summary: "Reports ASML's shipment of the pre-production 0.55 NA tool to Samsung Hwaseong, following Intel and TSMC.",
    url: "https://bits-chips.com/article/samsung-takes-delivery-of-first-high-na-euv-system/"
  },
  {
    title: "United States export controls on AI chips and semiconductors",
    author: "Wikipedia",
    date: "2026",
    category: "geopolitics",
    summary: "Comprehensive history of U.S. export controls, including the October 2023 BIS rules and subsequent 2024–2026 revisions.",
    url: "https://en.wikipedia.org/wiki/United_States_export_controls_on_AI_chips_and_semiconductors"
  },
  {
    title: "U.S. BIS Export Policy Shift: H200 & MI325X China Case-by-Case Reviews",
    author: "Introl Policy Review",
    date: "January 2026",
    category: "geopolitics",
    summary: "Detailed overview of the January 15, 2026 BIS rule setting TPP and bandwidth limits, and ByteDance's $14B order pipeline.",
    url: "https://introl.com/blog/bis-export-policy-h200-mi325x-china-case-by-case-2026"
  },
  {
    title: "SMIC AI Chip Strategy: Inside China's 5nm Power Play",
    author: "Enkia Market Intelligence",
    date: "February 2026",
    category: "geopolitics",
    summary: "Tracks SMIC's 7nm yields (20-40%), DUV multi-patterning restrictions, and 5nm pilot runs for Huawei Ascend.",
    url: "https://enkiai.com/ai-market-intelligence/smic-ai-chip-strategy-2026-inside-chinas-5nm-power-play/"
  },
  {
    title: "Huawei / HiSilicon NPU Supply Chain Spotlight",
    author: "SemiconductorX",
    date: "Q4 2025",
    category: "geopolitics",
    summary: "Deep-dive report on Huawei's Ascend 910C and 950PR/DT architectures, custom memory stacks, and server cabinet integrations.",
    url: "https://semiconductorx.com/spotlight-huawei-hisilicon.html"
  },
  {
    title: "Regulating the Future: Eight Key Takeaways from California's SB 1047 Veto",
    author: "Gibson Dunn",
    date: "October 2024",
    category: "geopolitics",
    summary: "Legal analysis of Governor Newsom's veto of the Safe and Secure Innovation for Frontier AI Models Act and its impact on open weights.",
    url: "https://www.gibsondunn.com/regulating-the-future-eight-key-takeaways-from-californias-sb-1047-vetoed-by-governor-newsom/"
  },
  {
    title: "California Senate Bill 1047: Legislative Text and Provisions",
    author: "California LegiScan Portal",
    date: "September 2024",
    category: "geopolitics",
    summary: "Full official text of SB 1047, outlining the $100M training compute cost and 10^26 FLOP thresholds.",
    url: "https://legiscan.com/CA/text/SB1047/id/3019694"
  },

  // DATA LIMITS, SYNTHETIC DATA & TEST-TIME
  {
    title: "Why 2026 is the Year Synthetic Data Becomes Non-Negotiable",
    author: "Towards AI",
    date: "March 2026",
    category: "data",
    summary: "Outlines Epoch AI's public human data depletion timeline, 5× overtraining multiples, and MIT crawler-blocking datasets.",
    url: "https://pub.towardsai.net/why-2026-is-the-year-synthetic-data-becomes-non-negotiable-b5a2a84d1b1b"
  },
  {
    title: "Reasoning Models Explained: o1, o3, and DeepSeek-R1",
    author: "PR-Peri AI Blog",
    date: "June 2026",
    category: "data",
    summary: "Explains System 2 reasoning architectures, test-time token budgets, and reinforcement learning optimization routes.",
    url: "https://pr-peri.github.io/blogpost/2026/06/03/blogpost-reasoning-models.html"
  },
  {
    title: "What is test-time compute and how to scale it at inference?",
    author: "Hugging Face Blog",
    date: "May 2026",
    category: "data",
    summary: "Technical post explaining inference-time scaling, search tree generation, and DeepSeek-R1's GRPO verification pipelines.",
    url: "https://huggingface.co/blog/Kseniase/testtimecompute"
  },
  {
    title: "Reasoning Model Production Stack: Asymmetric Token Volumes",
    author: "SyncSoft AI Blog",
    date: "March 2026",
    category: "data",
    summary: "Analyzes the 140 trillion daily token call rate, cost asymmetries (4-17× increase per query), and GPU deployments.",
    url: "https://www.syncsoft.ai/en/blog/reasoning-model-production-stack-deepseek-r1-qwen-qwq-glm-zero-chinese-chuhai-2026"
  }
];

function Sources() {
  const [filter, setFilter] = useState<"all" | "hardware" | "labs" | "reasoning" | "energy" | "geopolitics" | "data">("all");

  const filteredSources = filter === "all" 
    ? SOURCES_DATA 
    : SOURCES_DATA.filter(s => s.category === filter);

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Transparency bibliography · June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl leading-[0.95]">
          Grounded in primary <em className="italic text-ember">research</em> and raw data.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          Every statistic, timeline, quote, and technical detail on **Silicon Epoch** is pulled from real-world documents. Below is our transparency bibliography.
        </p>
      </section>

      {/* Filter Badges */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-8 flex flex-wrap gap-2">
        {([
          { id: "all", label: "All Sources" },
          { id: "hardware", label: "Silicon & Compute" },
          { id: "labs", label: "Frontier Labs" },
          { id: "reasoning", label: "Logic & Science" },
          { id: "energy", label: "Grid & Nuclear" },
          { id: "geopolitics", label: "Geopolitics & Policy" },
          { id: "data", label: "Data & Scaling" }
        ] as const).map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`rounded-full px-5 py-2 text-xs font-mono tracking-wider uppercase transition-colors border cursor-pointer ${
              filter === cat.id
                ? "bg-ink text-paper border-ink"
                : "border-border hover:bg-cream text-foreground/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* List of Sources */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSources.map((source, index) => (
            <article key={`${source.title}-${index}`} className="rounded-2xl border border-border p-8 bg-card hover:border-ember transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-ember border border-ember/20 rounded px-2 py-0.5">
                    {source.category === "hardware" ? "Silicon & Compute" 
                      : source.category === "labs" ? "Frontier Labs" 
                      : source.category === "reasoning" ? "Logic & Science" 
                      : source.category === "energy" ? "Grid & Nuclear" 
                      : source.category === "geopolitics" ? "Geopolitics" 
                      : "Data & Scaling"}
                  </span>
                  <span className="font-mono text-xs text-foreground/50">{source.date}</span>
                </div>
                <h3 className="font-display text-2xl mt-4 leading-tight">{source.title}</h3>
                <p className="text-xs text-foreground/60 mt-1 font-medium">Author/Publisher: {source.author}</p>
                <p className="mt-4 text-xs text-foreground/75 leading-relaxed">{source.summary}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/50">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-ember hover:underline"
                >
                  Visit Primary Source Document →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
