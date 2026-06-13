import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, ChevronDown } from "lucide-react";

const NAV = [
  { to: "/", label: "Overview" },
  { to: "/compute", label: "Compute Core" },
  { to: "/how-ai-works", label: "How It Works" },
  { to: "/companies", label: "Frontier Labs" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/humanity", label: "Humanity" },
  { to: "/agi-asi", label: "AGI & ASI" },
  { to: "/games", label: "Games" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/geopolitics", label: "Geopolitics" },
  { to: "/open-vs-closed", label: "Open vs Closed" },
  { to: "/data-wall", label: "Data Wall" },
  { to: "/next-decade", label: "Next Decade" },
  { to: "/learn", label: "Learn AI" },
  { to: "/timeline", label: "Timeline" },
  { to: "/sources", label: "Sources" },
] as const;

const CHAPTER_GROUPS = [
  {
    title: "Foundations & Tech",
    items: [
      { to: "/compute", label: "01 · Compute Core" },
      { to: "/how-ai-works", label: "02 · How It Works" },
      { to: "/use-cases", label: "04 · Use Cases" },
      { to: "/games", label: "07 · Games" },
      { to: "/timeline", label: "AI History Timeline" },
      { to: "/learn", label: "Appendix · Learn AI" },
    ],
  },
  {
    title: "Frontier & Hardware",
    items: [
      { to: "/companies", label: "03 · Frontier Labs" },
      { to: "/infrastructure", label: "09 · Infrastructure" },
      { to: "/geopolitics", label: "10 · Geopolitics" },
      { to: "/open-vs-closed", label: "11 · Open vs Closed" },
      { to: "/data-wall", label: "12 · Data Wall" },
    ],
  },
  {
    title: "The Horizon",
    items: [
      { to: "/humanity", label: "05 · Humanity" },
      { to: "/agi-asi", label: "06 · AGI & ASI" },
      { to: "/next-decade", label: "08 · Next Decade" },
      { to: "/sources", label: "Sources Bibliography" },
    ],
  },
];


export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      className="p-2.5 rounded-full hover:bg-cream transition-colors border border-border text-foreground/85 hover:text-foreground shrink-0 flex items-center justify-center cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex items-center justify-between h-16 gap-6">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <span className="font-display text-lg lg:text-xl tracking-tight">Silicon&nbsp;Epoch</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 justify-center flex-1">
          <Link
            to="/"
            className="text-[13px] font-medium tracking-wide text-foreground/75 hover:text-foreground transition-colors [&.active]:text-ember"
            activeOptions={{ exact: true }}
          >
            Overview
          </Link>

          {/* Chapters Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="text-[13px] font-medium tracking-wide text-foreground/75 hover:text-foreground transition-colors flex items-center gap-1 cursor-pointer"
            >
              Chapters
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-background/95 backdrop-blur-lg border border-border rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {CHAPTER_GROUPS.map((group) => (
                  <div key={group.title} className="flex flex-col gap-2">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground border-b border-border/50 pb-1.5 mb-1">
                      {group.title}
                    </span>
                    <div className="flex flex-col gap-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setDropdownOpen(false)}
                          className="text-[12px] py-1 px-1.5 rounded hover:bg-cream/50 text-foreground/80 hover:text-foreground transition-all block hover:translate-x-0.5"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/companies"
            className="text-[13px] font-medium tracking-wide text-foreground/75 hover:text-foreground transition-colors [&.active]:text-ember"
          >
            Frontier Labs
          </Link>

          <Link
            to="/timeline"
            className="text-[13px] font-medium tracking-wide text-foreground/75 hover:text-foreground transition-colors [&.active]:text-ember"
          >
            Timeline
          </Link>

          <Link
            to="/sources"
            className="text-[13px] font-medium tracking-wide text-foreground/75 hover:text-foreground transition-colors [&.active]:text-ember"
          >
            Sources
          </Link>
        </nav>
        
        <div className="flex items-center gap-4 shrink-0">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-sm border border-border rounded-full px-3.5 py-1.5 hover:bg-cream transition-colors cursor-pointer font-medium"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (all links) */}
      {menuOpen && (
        <div className="border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-3">
            <div className="eyebrow text-xs text-foreground/45 border-b border-border/50 pb-2 mb-1">Chapters of the Silicon Epoch</div>
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="text-base py-1.5 hover:text-ember transition-colors" onClick={() => setMenuOpen(false)}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-cream/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-tight">Silicon Epoch</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            A comprehensive, living field guide to the dawn of the silicon intelligence era. 
            Tracking the physical nodes, the raw power grid, the sovereign chip pipelines, 
            and the neural weights shaping the next decade.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-3">Field Guide</div>
          <ul className="space-y-2 text-sm grid grid-cols-2 md:grid-cols-1 gap-x-4">
            {NAV.slice(1).map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-ember transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Frontier Chronicle</div>
          <p className="text-sm text-foreground/85">June 2026 Edition</p>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            All data represents primary-source lab releases, researcher papers, and calibrated indicators as of mid-2026. 
            All trademark logos belong to their respective creators.
          </p>
          <div className="mt-6">
            <Link to="/sources" className="text-xs text-ember hover:underline font-mono">
              View Transparency Bibliography & Sources →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
