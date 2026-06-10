import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const NAV = [
  { to: "/", label: "Overview" },
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
  { to: "/sources", label: "Sources" },
] as const;

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
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <span className="font-display text-lg lg:text-xl tracking-tight">Silicon&nbsp;Epoch</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <nav className="hidden xl:flex items-center gap-4.5">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[12px] font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors [&.active]:text-ember"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          {/* Large screens but not extra-large: compact navigation */}
          <nav className="hidden lg:flex xl:hidden items-center gap-3">
            {NAV.filter(n => ["/", "/companies", "/infrastructure", "/geopolitics", "/open-vs-closed", "/data-wall", "/sources"].includes(n.to)).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[12px] font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors [&.active]:text-ember"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-[11px] font-mono border border-border rounded-full px-2.5 py-1 hover:bg-cream transition-colors cursor-pointer"
            >
              More +
            </button>
          </nav>

          <ThemeToggle />

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-sm border border-border rounded-full px-3 py-1.5 hover:bg-cream transition-colors cursor-pointer"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-3">
            <div className="eyebrow text-xs text-foreground/45 border-b border-border/50 pb-2 mb-1">Chapters of the Silicon Epoch</div>
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="text-base py-1.5 hover:text-ember transition-colors" onClick={() => setOpen(false)}>
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

