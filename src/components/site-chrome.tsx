import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, ChevronDown } from "lucide-react";
import { BackToTop } from "./back-to-top";

const NAV = [
  { to: "/", label: "Overview" },
  { to: "/compute", label: "01 · Compute Core" },
  { to: "/how-ai-works", label: "02 · How It Works" },
  { to: "/companies", label: "03 · Frontier Labs" },
  { to: "/use-cases", label: "04 · Use Cases" },
  { to: "/humanity", label: "05 · Humanity" },
  { to: "/agi-asi", label: "06 · AGI & ASI" },
  { to: "/games", label: "07 · Games" },
  { to: "/next-decade", label: "08 · Next Decade" },
  { to: "/infrastructure", label: "09 · Infrastructure" },
  { to: "/geopolitics", label: "10 · Geopolitics" },
  { to: "/open-vs-closed", label: "11 · Open vs Closed" },
  { to: "/data-wall", label: "12 · Data Wall" },
  { to: "/learn", label: "Appendix · Learn AI" },
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
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    // Only run on client mount to prevent SSR hydration warnings
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme === null) return;
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isMounted = theme !== null;

  return (
    <button
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      className="p-2.5 rounded-full hover:bg-cream transition-colors border border-border text-foreground/85 hover:text-foreground shrink-0 flex items-center justify-center cursor-pointer"
      aria-label="Toggle theme"
    >
      {!isMounted ? (
        <span className="w-[15px] h-[15px]" />
      ) : theme === "light" ? (
        <Moon size={15} />
      ) : (
        <Sun size={15} />
      )}
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
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
              id="chapters-menu-button"
              aria-haspopup="menu"
              aria-expanded={dropdownOpen}
              aria-controls="chapters-menu"
              onClick={() => setDropdownOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setDropdownOpen(false);
              }}
              className="text-[13px] font-medium tracking-wide text-foreground/75 hover:text-foreground transition-colors flex items-center gap-1 cursor-pointer"
            >
              Chapters
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div
                id="chapters-menu"
                role="menu"
                tabIndex={-1}
                aria-labelledby="chapters-menu-button"
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
                          role="menuitem"
                          onClick={() => setDropdownOpen(false)}
                          className="text-[12px] py-1 px-1.5 rounded hover:bg-cream/50 text-foreground/80 hover:text-foreground transition-all block hover:translate-x-0.5"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="col-span-3 border-t border-border/50 pt-4 mt-2 flex justify-center">
                  <Link
                    to="/chapters"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                    className="text-xs font-mono text-ember hover:underline flex items-center gap-1"
                  >
                    View All Chapters & Index →
                  </Link>
                </div>
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
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
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
            <div className="eyebrow text-xs text-foreground/45 border-b border-border/50 pb-2 mb-1">
              Chapters of the Silicon Epoch
            </div>
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-base py-1.5 hover:text-ember transition-colors"
                onClick={() => setMenuOpen(false)}
              >
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
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-tight">Silicon Epoch</span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            A comprehensive, living field guide to the dawn of the silicon intelligence era.
            Tracking physical nodes, raw power grids, sovereign chip pipelines, and the neural
            weights shaping the next decade.
          </p>
          <p className="mt-6 text-[11px] text-foreground/50 font-mono">
            © 2026 Silicon Epoch. All rights reserved.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-3">Field Guide Chapters</div>
          <ul className="space-y-2 text-xs">
            {NAV.slice(1, 13).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-ember transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Overview & Indexes</div>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/" className="hover:text-ember transition-colors">
                Overview
              </Link>
            </li>
            <li>
              <Link to="/chapters" className="hover:text-ember transition-colors">
                Chapters Index
              </Link>
            </li>
            <li>
              <Link to="/timeline" className="hover:text-ember transition-colors">
                History Timeline
              </Link>
            </li>
            <li>
              <Link to="/sources" className="hover:text-ember transition-colors">
                Transparency Bibliography
              </Link>
            </li>
            <li>
              <Link to="/learn" className="hover:text-ember transition-colors">
                Appendix · Learn AI
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Frontier Connections</div>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ember transition-colors"
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ember transition-colors"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ember transition-colors"
              >
                Discord Community
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
            All data represents primary-source research and calibrated indicators as of June 2026.
            We distinguish between verified primary sources and secondary projections.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:border focus:border-border focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}
