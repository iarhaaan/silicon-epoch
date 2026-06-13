export type SourceItem = {
  id: string;
  title: string;
  author: string;
  date: string;
  category: "hardware" | "labs" | "reasoning" | "energy" | "geopolitics" | "data";
  summary: string;
  url: string;
};

export const SOURCES_DATA: SourceItem[] = [
  // SILICON & COMPUTE HARDWARE
  {
    id: "tsmc-2nm-growth",
    title: "TSMC sees 70% annual growth in 2nm capacity through 2028",
    author: "Focus Taiwan",
    date: "April 2026",
    category: "hardware",
    summary: "Foundry capacity projections outlining TSMC's 2nm nanosheet output CAGR and fab allocations in Kaohsiung Fab 22 and Hsinchu Fab 20.",
    url: "https://focustaiwan.tw/sci-tech/202604280010"
  },
  {
    id: "tsmc-2nm-production",
    title: "TSMC Officially Launches Mass Production of 2nm Process",
    author: "Foundry Announcements / Stocks Registry",
    date: "Q4 2025",
    category: "hardware",
    summary: "Confirms N2 volume production ceremony, GAA nanosheet transistor curves, and wafer price metrics.",
    url: "https://www.reddit.com/r/stocks/comments/1pyoeb7/tsmc_officially_launches_mass_production_of_2nm/"
  },
  {
    id: "rubin-transistors",
    title: "NVIDIA Rubin GPU: 336B Transistors and HBM4 Architecture",
    author: "Tech Insider",
    date: "March 2026",
    category: "hardware",
    summary: "Detailed engineering analysis of the Vera Rubin R100 GPU, detailing its N3 process node, HBM4 integration, and transistor count.",
    url: "https://tech-insider.org/nvidia-gtc-2026-rubin-gpu-analysis/"
  },
  {
    id: "rubin-specs",
    title: "NVIDIA Rubin R100 GPU Chip Specs & Interconnects",
    author: "Spheron Network",
    date: "April 2026",
    category: "hardware",
    summary: "System-level technical specifications for the Vera Rubin platform, NVLink 6, and HBM4 memory bandwidth.",
    url: "https://www.spheron.network/blog/nvidia-rubin-r100-guide/"
  },
  {
    id: "gaudi-3-specs",
    title: "Intel Gaudi 3 AI Accelerator Product Specifications",
    author: "Intel Corporation",
    date: "Q2 2025",
    category: "hardware",
    summary: "Official datasheet for Gaudi 3, detailing its 1,835 TFLOPS BF16 compute performance, HBM2e memory, and TDP specs.",
    url: "https://cdrdv2-public.intel.com/845118/gaudi-3-ai-accelerator-30-3-30.pdf"
  },
  {
    id: "gaudi-3-deployment",
    title: "Intel Gaudi 3 Deployment Guide & H100 Market Alternatives",
    author: "Intel/Introl Technical Group",
    date: "2025",
    category: "hardware",
    summary: "Deployment metrics, pricing estimates, and shipping targets for Gaudi 3 AI accelerators.",
    url: "https://introl.com/blog/intel-gaudi-3-deployment-guide-h100-alternative"
  },
  {
    id: "beyond-blackwell",
    title: "Beyond Blackwell: Preparing Enterprise Data Centers for the NVIDIA Rubin Architecture",
    author: "Arc Compute Blog",
    date: "May 2026",
    category: "hardware",
    summary: "Analyzes HBM4 supply crunches, Vera Rubin NVL72 liquid-cooling requirements, and data center thermal scaling challenges.",
    url: "https://www.arccompute.io/arc-blog/beyond-blackwell-preparing-enterprise-data-centers-for-the-nvidia-rubin-architecture-and-the-hbm-crunch"
  },

  // FRONTIER LABS & LEADERBOARD
  {
    id: "deepseek-v4-r2",
    title: "DeepSeek V4 and R2 Architecture Deep Dive",
    author: "Meta Intelligence",
    date: "April 2026",
    category: "labs",
    summary: "Teardown of DeepSeek V4's 1-trillion parameter Mixture-of-Experts (MoE) model and its auxiliary-loss-free load balancing.",
    url: "https://www.meta-intelligence.tech/en/insight-deepseek-v4-r2"
  },
  {
    id: "best-open-source-2026",
    title: "Best Open-Source AI Models Ranked in 2026",
    author: "Spectrum AI Lab",
    date: "May 2026",
    category: "labs",
    summary: "Aggregated benchmark rankings comparing open weights like Llama 4, Qwen3-Coder, Kimi K2.5, and Mistral Small 4.",
    url: "https://spectrumailab.com/blog/best-open-source-ai-models-ranked-2026"
  },
  {
    id: "claude-api-pricing",
    title: "Anthropic Claude API Pricing & Context Guides",
    author: "Silicon Data Review",
    date: "May 2026",
    category: "labs",
    summary: "Details the Claude 4/5 pricing tiers, input/output cost structures, and context windows.",
    url: "https://www.silicondata.com/use-cases/anthropic-claude-api-pricing-2026/"
  },
  {
    id: "fable-5-impressions",
    title: "Initial impressions of Claude Fable 5 & Mythos 5 Release",
    author: "Simon Willison's Weblog",
    date: "June 9, 2026",
    category: "labs",
    summary: "Initial coverage of Anthropic's dual Fable 5 and Mythos 5 models, safety router redirections, and Stripe integration trials.",
    url: "https://simonwillison.net/2026/Jun/9/claude-fable-5/"
  },
  {
    id: "gemini-3-5-flash-guide",
    title: "Gemini 3.5 Flash & 3.1 Pro: Deep Think Mode Complete Guide",
    author: "Ortem Tech",
    date: "May 2026",
    category: "labs",
    summary: "Detailed overview of Gemini 3.5 Flash and Gemini 3.1 Pro's multi-million token context window, multimodal token pricing, and System 2 thinking features.",
    url: "https://ortemtech.com/blog/gemini-2-5-pro-complete-guide-2026/"
  },
  {
    id: "chinese-ai-market",
    title: "Chinese AI Models Q2 2026 Market Share Report",
    author: "Digital Applied",
    date: "May 2026",
    category: "labs",
    summary: "Tracks OpenRouter API traffic, Chinese lab model price cuts, and deployment of domestic hardware stacks.",
    url: "https://www.digitalapplied.com/blog/chinese-ai-models-q2-2026-market-share-report"
  },
  {
    id: "gpt-5-5-announcement",
    title: "OpenAI GPT-5.5 Flagship Launch & API Specs",
    author: "OpenAI Developer Relations",
    date: "April 2026",
    category: "labs",
    summary: "Official launch document outlining OpenAI's flagship GPT-5.5, the GPT-5.5 Instant tier, its pricing structure ($5/$30 per million), and performance indices.",
    url: "https://openai.com/news/"
  },
  {
    id: "claude-opus-4-8",
    title: "Anthropic Releases Claude Opus 4.8 with Agentic Upgrades",
    author: "Anthropic Press",
    date: "May 2026",
    category: "labs",
    summary: "Highlights the release of Claude Opus 4.8 featuring enhanced agentic planning capabilities, a 1M token context, and its SWE-bench Pro dominance.",
    url: "https://anthropic.com/news/claude-opus-4-8"
  },
  {
    id: "grok-4-3-announcement",
    title: "xAI Grok 4.3 and Grok Build 0.1 Beta Release",
    author: "xAI Blog",
    date: "June 2026",
    category: "labs",
    summary: "Outlines xAI's flagship Grok 4.3 release, the Colossus 2 GPU clusters, and the terminal-based Grok Build agentic coding interface.",
    url: "https://x.ai/blog"
  },

  // LOGIC & SCIENCE USE CASES
  {
    id: "swe-bench-pro-standard",
    title: "SWE-bench Pro: The New Standard for AI Coding Benchmarks",
    author: "Coding Fleet Blog",
    date: "March 2026",
    category: "reasoning",
    summary: "Explains the SWE-bench Pro dataset (1,865 tasks across 41 repos), data contamination on SWE-bench Verified, and model scores.",
    url: "https://codingfleet.com/blog/swe-bench-pro-explained-the-new-standard-for-ai-coding-benchmarks-2026/"
  },
  {
    id: "best-ai-coding-2026",
    title: "Best AI for Coding in 2026: Verified vs Pro Leaderboards",
    author: "Morph LLM Blog",
    date: "May 2026",
    category: "reasoning",
    summary: "Evaluates Claude Fable 5, Claude Opus 4.8, GPT-5.5, Gemini 3.5 Flash, and MiniMax M2.5 on code planning and execution.",
    url: "https://www.morphllm.com/best-ai-model-for-coding"
  },
  {
    id: "alphageometry-2",
    title: "Gold-medalist Performance with AlphaGeometry 2",
    author: "Trieu Trinh, John Jumper, et al. (Google DeepMind)",
    date: "February 2025 (arXiv)",
    category: "reasoning",
    summary: "Details the architecture of AlphaGeometry 2, achieving an 84% solve rate on IMO geometry problems from 2000–2024.",
    url: "https://arxiv.org/html/2502.03544v1"
  },
  {
    id: "deepmind-maths-olympiad",
    title: "DeepMind AI crushes tough maths problems at Olympiad Level",
    author: "Nature News",
    date: "February 2025",
    category: "reasoning",
    summary: "Nature's coverage of AlphaProof and AlphaGeometry 2 solving 4 of 6 IMO problems to earn a silver-medal score.",
    url: "https://www.nature.com/articles/d41586-025-00406-7"
  },
  {
    id: "alphafold-3-transformative",
    title: "The transformative impact of AI-enabled AlphaFold 3 in Biology",
    author: "Frontiers in Artificial Intelligence",
    date: "May 2025",
    category: "reasoning",
    summary: "Explains AlphaFold 3's Pairformer module, ligand-docking accuracy metrics, and structural limitations.",
    url: "https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1739303/full"
  },
  {
    id: "materials-discovery-gnome",
    title: "Materials Discovery: Google DeepMind GNoME Codebase",
    author: "Google DeepMind GitHub",
    date: "August 2024",
    category: "reasoning",
    summary: "Official code repository and dataset release for Graph Networks for Materials Exploration (GNoME), mapping stable crystals.",
    url: "https://github.com/google-deepmind/materials_discovery"
  },

  // GRID & NUCLEAR INFRASTRUCTURE
  {
    id: "meta-data-centers-gamble",
    title: "Meta Data Centers: Inside the $600 Billion Infrastructure Gamble",
    author: "MMCG Invest Post",
    date: "December 2025",
    category: "energy",
    summary: "Comprehensive report on Meta's global datacenter footprint, highlighting the 1 GW Ohio Prometheus and 5 GW Louisiana Hyperion campuses.",
    url: "https://www.mmcginvest.com/post/meta-data-centers-inside-the-600-billion-infrastructure-gamble-reshaping-america"
  },
  {
    id: "crane-tmi-restart",
    title: "Constellation to Launch Crane Clean Energy Center (Three Mile Island Restart)",
    author: "Constellation Energy",
    date: "September 2024",
    category: "energy",
    summary: "Press release detailing the 20-year Microsoft PPA to restart Three Mile Island Unit 1 (835 MW) as the Crane Clean Energy Center.",
    url: "https://www.constellationenergy.com/news/2024/Constellation-to-Launch-Crane-Clean-Energy-Center-Restoring-Jobs-and-Carbon-Free-Power-to-The-Grid.html"
  },
  {
    id: "tmi-1bn-loan",
    title: "US agrees to $1bn loan to restart Three Mile Island Nuclear Plant",
    author: "ABC News / AP News",
    date: "November 2025",
    category: "energy",
    summary: "Details the U.S. Department of Energy's $1B federal loan to Constellation to fast-track the Crane Center restart for Microsoft AI.",
    url: "https://www.abc.net.au/news/2025-11-19/three-mile-island-nuclear-power-plant-constellation-energy/106026820"
  },
  {
    id: "google-kairos-smr",
    title: "Google and Kairos Power team up for SMR deployments in US first",
    author: "World Nuclear News",
    date: "October 2024",
    category: "energy",
    summary: "Coverage of Google's PPA to purchase 500 MW from a fleet of Kairos Small Modular Reactors, targeting Oak Ridge, TN.",
    url: "https://www.world-nuclear-news.org/articles/google-and-kairos-power-team-up-for-smr-deployments-in-us-first"
  },
  {
    id: "amazon-susquehanna",
    title: "Amazon Susquehanna Nuclear Campus Data Center Profile",
    author: "Baxtel Data Center Registry",
    date: "2025",
    category: "energy",
    summary: "Technical profile of Amazon's datacenter campus, situated adjacent to Talen Energy's 1,920 MW Susquehanna plant in Pennsylvania.",
    url: "https://baxtel.com/data-center/amazon-susquehanna-nuclear-campus"
  },
  {
    id: "talen-amazon-ans",
    title: "Talen and Amazon expand partnership for Pennsylvania Nuclear SMRs",
    author: "American Nuclear Society (ANS)",
    date: "June 2025",
    category: "energy",
    summary: "Details on the 1,920 MW Amazon-Talen PPA through 2042 and the spring 2026 front-of-meter grid interconnection.",
    url: "https://www.ans.org/news/2025-06-16/article-7113/talen-and-amazon-expand-their-partnership-for-pennsylvania/"
  },

  // GEOPOLITICS & EXPORT POLICY
  {
    id: "samsung-high-na",
    title: "Samsung takes delivery of first High-NA EUV system (ASML EXE:5000)",
    author: "Bits & Chips Magazine",
    date: "March 2025",
    category: "geopolitics",
    summary: "Reports ASML's shipment of the pre-production 0.55 NA tool to Samsung Hwaseong, following Intel and TSMC.",
    url: "https://bits-chips.com/article/samsung-takes-delivery-of-first-high-na-euv-system/"
  },
  {
    id: "us-export-controls",
    title: "United States export controls on AI chips and semiconductors",
    author: "Wikipedia",
    date: "2026",
    category: "geopolitics",
    summary: "Comprehensive history of U.S. export controls, including the October 2023 BIS rules and subsequent 2024–2026 revisions.",
    url: "https://en.wikipedia.org/wiki/United_States_export_controls_on_AI_chips_and_semiconductors"
  },
  {
    id: "bis-export-policy",
    title: "U.S. BIS Export Policy Shift: H200 & MI325X China Case-by-Case Reviews",
    author: "Introl Policy Review",
    date: "January 2026",
    category: "geopolitics",
    summary: "Detailed overview of the January 15, 2026 BIS rule setting TPP and bandwidth limits, and ByteDance's $14B order pipeline.",
    url: "https://introl.com/blog/bis-export-policy-h200-mi325x-china-case-by-case-2026"
  },
  {
    id: "smic-5nm-play",
    title: "SMIC AI Chip Strategy: Inside China's 5nm Power Play",
    author: "Enkia Market Intelligence",
    date: "February 2026",
    category: "geopolitics",
    summary: "Tracks SMIC's 7nm yields (20-40%), DUV multi-patterning restrictions, and 5nm pilot runs for Huawei Ascend.",
    url: "https://enkiai.com/ai-market-intelligence/smic-ai-chip-strategy-2026-inside-chinas-5nm-power-play/"
  },
  {
    id: "huawei-npu-supply",
    title: "Huawei / HiSilicon NPU Supply Chain Spotlight",
    author: "SemiconductorX",
    date: "Q4 2025",
    category: "geopolitics",
    summary: "Deep-dive report on Huawei's Ascend 910C and 950PR/DT architectures, custom memory stacks, and server cabinet integrations.",
    url: "https://semiconductorx.com/spotlight-huawei-hisilicon.html"
  },
  {
    id: "sb1047-newsom-veto",
    title: "Regulating the Future: Eight Key Takeaways from California's SB 1047 Veto",
    author: "Gibson Dunn",
    date: "October 2024",
    category: "geopolitics",
    summary: "Legal analysis of Governor Newsom's veto of the Safe and Secure Innovation for Frontier AI Models Act and its impact on open weights.",
    url: "https://www.gibsondunn.com/regulating-the-future-eight-key-takeaways-from-californias-sb-1047-vetoed-by-governor-newsom/"
  },
  {
    id: "sb1047-legislative-text",
    title: "California Senate Bill 1047: Legislative Text and Provisions",
    author: "California LegiScan Portal",
    date: "September 2024",
    category: "geopolitics",
    summary: "Full official text of SB 1047, outlining the $100M training compute cost and 10^26 FLOP thresholds.",
    url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB1047"
  },

  // DATA LIMITS, SYNTHETIC DATA & TEST-TIME
  {
    id: "synthetic-data-2026",
    title: "Why 2026 is the Year Synthetic Data Becomes Non-Negotiable",
    author: "Towards AI",
    date: "March 2026",
    category: "data",
    summary: "Outlines Epoch AI's public human data depletion timeline, 5× overtraining multiples, and MIT crawler-blocking datasets.",
    url: "https://pub.towardsai.net/why-2026-is-the-year-synthetic-data-becomes-non-negotiable-b5a2a84d1b1b"
  },
  {
    id: "reasoning-models-explained",
    title: "Reasoning Models Explained: o1, o3, and DeepSeek-R1",
    author: "PR-Peri AI Blog",
    date: "June 2026",
    category: "data",
    summary: "Explains System 2 reasoning architectures, test-time token budgets, and reinforcement learning optimization routes.",
    url: "https://pr-peri.github.io/blogpost/2026/06/03/blogpost-reasoning-models.html"
  },
  {
    id: "test-time-compute",
    title: "What is test-time compute and how to scale it at inference?",
    author: "Hugging Face Blog",
    date: "May 2026",
    category: "data",
    summary: "Technical post explaining inference-time scaling, search tree generation, and DeepSeek-R1's GRPO verification pipelines.",
    url: "https://huggingface.co/blog/Kseniase/testtimecompute"
  },
  {
    id: "reasoning-token-stack",
    title: "Reasoning Model Production Stack: Asymmetric Token Volumes",
    author: "SyncSoft AI Blog",
    date: "March 2026",
    category: "data",
    summary: "Analyzes the 140 trillion daily token call rate, cost asymmetries (4-17× increase per query), and GPU deployments.",
    url: "https://www.syncsoft.ai/en/blog/reasoning-model-production-stack-deepseek-r1-qwen-qwq-glm-zero-chinese-chuhai-2026"
  },
  {
    id: "alphago-paper",
    title: "Mastering the game of Go with deep neural networks and tree search",
    author: "David Silver, Demis Hassabis, et al. (Google DeepMind)",
    date: "January 2016 (Nature)",
    category: "reasoning",
    summary: "Landmark publication detailing AlphaGo's architecture, combining policy/value networks and Monte Carlo Tree Search to defeat grandmaster Lee Sedol.",
    url: "https://www.nature.com/articles/nature16961"
  },
  {
    id: "alphastar-paper",
    title: "Grandmaster level in StarCraft II using multi-agent reinforcement learning",
    author: "Oriol Vinyals, David Silver, et al. (Google DeepMind)",
    date: "October 2019 (Nature)",
    category: "reasoning",
    summary: "Outlines the AlphaStar agent playing StarCraft II, proving that deep RL can handle complex real-time strategy, imperfect information, and long planning horizons.",
    url: "https://www.nature.com/articles/s41586-019-1724-z"
  },
  {
    id: "genie-3-announcement",
    title: "Genie: Generative Interactive Environments",
    author: "Google DeepMind Team",
    date: "February 2024 (arXiv) / Update July 2025",
    category: "reasoning",
    summary: "Presents Genie, a generative world model trained on unsupervised video data to generate interactive 3D virtual environments and playable action loops.",
    url: "https://arxiv.org/abs/2402.15391"
  },
  {
    id: "project-sid-minecraft",
    title: "Project Sid: 1000 Autonomous Agents in Minecraft Worlds",
    author: "Altera AI Research",
    date: "September 2024",
    category: "reasoning",
    summary: "Evaluates multi-agent coordination, specialized labor, trade networks, and social structures within Minecraft simulation runs.",
    url: "https://arxiv.org/abs/2411.00114"
  },
  {
    id: "google-willow-quantum",
    title: "Google Willow: Quantum Error Correction Below the Threshold",
    author: "Google Quantum AI Team",
    date: "December 2024",
    category: "hardware",
    summary: "Confirms Google's Willow quantum processor achieving error-correction scaling where physical error rates fall as system size increases.",
    url: "https://blog.google/innovation-and-ai/technology/research/google-willow-quantum-chip/"
  },
  {
    id: "ibm-quantum-starling",
    title: "IBM Quantum Development Roadmap: The Starling Processor",
    author: "IBM Research",
    date: "May 2025",
    category: "hardware",
    summary: "Details IBM's roadmap to deploy Starling, targeting 200 logical error-corrected qubits by 2029 for commercial quantum advantage.",
    url: "https://www.ibm.com/quantum/roadmap"
  },
  {
    id: "optimus-gen3",
    title: "Tesla Optimus Gen 3 Capabilities and Actuator Designs",
    author: "Tesla, Inc.",
    date: "January 2026",
    category: "hardware",
    summary: "Overview of Tesla's third-generation humanoid robot, featuring custom rotary/linear actuators and AI5-powered local VLA models.",
    url: "https://www.tesla.com/optimus"
  },
  {
    id: "figure-02-bmw",
    title: "Figure 02 Humanoid Robot Completes Industrial Pilot at BMW",
    author: "Figure AI Press",
    date: "August 2024 / Update 2025",
    category: "hardware",
    summary: "Reports on Figure 02's successful deployment for chassis assembly tasks at BMW Group Plant Spartanburg, demonstrating spatial VLAs.",
    url: "https://www.figure.ai/"
  },
  {
    id: "goldman-sachs-gdp",
    title: "The Macroeconomic Impact of Generative AI",
    author: "Goldman Sachs Research",
    date: "April 2023 / 2025 Review",
    category: "labs",
    summary: "Global economic projections estimating that generative AI adoption could accelerate labor productivity and raise global GDP by 7% ($7 trillion) over a decade.",
    url: "https://www.gspublishing.com/content/research/en/reports/2023/03/27/d64e052b-0f6e-45d7-967b-d7be35fabd16.pdf"
  },
  {
    id: "mckinsey-genai-2025",
    title: "The State of AI in 2025: Surging Enterprise Production Deployments",
    author: "McKinsey & Company",
    date: "May 2025",
    category: "labs",
    summary: "Global survey tracking generative AI adoption, noting that 78% of organizations regularly use gen AI and reporting value-creation potentials up to $4.4 trillion.",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
  },
  {
    id: "apollo-o1-scheming",
    title: "Evaluation of Deceptive Scheming and Safety Oversights in o1",
    author: "Apollo Research",
    date: "September 2024",
    category: "labs",
    summary: "Safety evaluations of OpenAI o1 models, detailing alignment failure rates, deceptive reasoning traces, and attempts to bypass developer monitoring.",
    url: "https://arxiv.org/abs/2412.01633"
  },
  {
    id: "cve-exploits-2026",
    title: "EchoLeak and Weight Cross-Origin Exploits (CVE-2025-32711 & CVE-2026-21520)",
    author: "National Vulnerability Database / NIST",
    date: "April 2026",
    category: "labs",
    summary: "Documents security vulnerabilities enabling indirect prompt injection data leaks and raw model weight extraction across local cross-origin connections.",
    url: "https://nvd.nist.gov/vuln/detail/CVE-2025-32711"
  },
  {
    id: "turing-test-1950",
    title: "Computing Machinery and Intelligence",
    author: "Alan Turing",
    date: "1950",
    category: "reasoning",
    summary: "Landmark paper proposing the 'imitation game' (now known as the Turing Test) to evaluate a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.",
    url: "https://doi.org/10.1093/mind/LIX.236.433"
  },
  {
    id: "dartmouth-proposal-1955",
    title: "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence",
    author: "John McCarthy, Marvin Minsky, Nathaniel Rochester, Claude Shannon",
    date: "1955",
    category: "reasoning",
    summary: "The founding document of artificial intelligence as an academic field, coining the term 'Artificial Intelligence' and outlining core goals like language processing and neural networks.",
    url: "https://doi.org/10.1609/aimag.v27i4.1904"
  },
  {
    id: "perceptron-1958",
    title: "The perceptron: A probabilistic model for information storage and organization in the brain",
    author: "Frank Rosenblatt",
    date: "1958",
    category: "reasoning",
    summary: "Introduces the Perceptron, one of the earliest artificial neural network architectures, establishing the foundational mathematics for linear classifiers and supervised learning.",
    url: "https://doi.org/10.1037/h0042519"
  },
  {
    id: "backpropagation-1986",
    title: "Learning representations by back-propagating errors",
    author: "David E. Rumelhart, Geoffrey E. Hinton, Ronald J. Williams",
    date: "1986",
    category: "reasoning",
    summary: "Popularizes the backpropagation algorithm for training multi-layer neural networks, demonstrating how internal hidden representations can be learned to solve non-linear problems.",
    url: "https://doi.org/10.1038/323533a0"
  },
  {
    id: "deepblue-1997",
    title: "Deep Blue: IBM's Landmark Computer Defeats World Chess Champion Garry Kasparov",
    author: "IBM History / Research",
    date: "1997",
    category: "labs",
    summary: "The historic chess match where IBM's Deep Blue became the first computer system to defeat a reigning world chess champion under tournament conditions.",
    url: "https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov"
  },
  {
    id: "alexnet-2012",
    title: "ImageNet Classification with Deep Convolutional Neural Networks",
    author: "Alex Krizhevsky, Ilya Sutskever, Geoffrey E. Hinton",
    date: "2012",
    category: "reasoning",
    summary: "Seminal paper demonstrating a massive breakthrough in image classification using deep convolutional neural networks (AlexNet) on the ImageNet dataset, launching the deep learning boom.",
    url: "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf"
  },
  {
    id: "gans-paper-2014",
    title: "Generative Adversarial Nets",
    author: "Ian Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, Yoshua Bengio",
    date: "2014",
    category: "reasoning",
    summary: "Introduces Generative Adversarial Networks (GANs), a novel framework for training generative models using a game-theoretic minimax formulation between a generator and a discriminator.",
    url: "https://arxiv.org/abs/1406.2661"
  },
  {
    id: "resnet-paper-2015",
    title: "Deep Residual Learning for Image Recognition",
    author: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun",
    date: "2015",
    category: "reasoning",
    summary: "Introduces deep residual networks (ResNet) using skip connections to resolve the vanishing gradient problem, allowing neural networks to scale to hundreds of layers.",
    url: "https://arxiv.org/abs/1512.03385"
  },
  {
    id: "transformer-paper-2017",
    title: "Attention Is All You Need",
    author: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkiewicz, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin",
    date: "2017",
    category: "reasoning",
    summary: "Introduces the Transformer architecture, replacing recurrent and convolutional layers entirely with self-attention mechanisms, which became the backbone of all modern LLMs.",
    url: "https://arxiv.org/abs/1706.03762"
  },
  {
    id: "gpt3-paper-2020",
    title: "Language Models are Few-Shot Learners",
    author: "Tom B. Brown, Benjamin Mann, Nick Ryder et al. (OpenAI)",
    date: "2020",
    category: "labs",
    summary: "Details the 175-billion parameter GPT-3 model, proving that large language models trained on massive text corpora display strong few-shot learning capabilities without task-specific fine-tuning.",
    url: "https://arxiv.org/abs/2005.14165"
  },
  {
    id: "chatgpt-launch-2022",
    title: "Introducing ChatGPT: Optimizing Language Models for Dialogue",
    author: "OpenAI Research",
    date: "2022",
    category: "labs",
    summary: "Official release announcement for ChatGPT, showing how RLHF (Reinforcement Learning from Human Feedback) was used to align conversational agents for public web deployment.",
    url: "https://openai.com/index/chatgpt/"
  }
];
