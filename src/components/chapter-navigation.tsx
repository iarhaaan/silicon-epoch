import { Link, useRouterState } from "@tanstack/react-router";

const CHAPTERS = [
  { to: "/compute", label: "Chapter 01 · Compute Core" },
  { to: "/how-ai-works", label: "Chapter 02 · How It Works" },
  { to: "/companies", label: "Chapter 03 · Frontier Labs" },
  { to: "/use-cases", label: "Chapter 04 · Use Cases" },
  { to: "/humanity", label: "Chapter 05 · Humanity" },
  { to: "/agi-asi", label: "Chapter 06 · AGI & ASI" },
  { to: "/games", label: "Chapter 07 · Games" },
  { to: "/next-decade", label: "Chapter 08 · Next Decade" },
  { to: "/infrastructure", label: "Chapter 09 · Infrastructure" },
  { to: "/geopolitics", label: "Chapter 10 · Geopolitics" },
  { to: "/open-vs-closed", label: "Chapter 11 · Open vs Closed" },
  { to: "/data-wall", label: "Chapter 12 · Data Wall" },
  { to: "/learn", label: "Appendix · Learn AI" },
] as const;

export function ChapterNavigation() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const currentIndex = CHAPTERS.findIndex((c) => c.to === currentPath);

  if (currentIndex === -1) {
    return null;
  }

  const prevChapter = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const nextChapter = currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 mt-8 border-t border-border/80">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          {prevChapter ? (
            <Link
              to={prevChapter.to}
              className="text-xs font-mono text-foreground/60 hover:text-ember transition-colors flex items-center gap-1.5"
            >
              ← Previous: {prevChapter.label}
            </Link>
          ) : (
            <Link
              to="/"
              className="text-xs font-mono text-foreground/60 hover:text-ember transition-colors flex items-center gap-1.5"
            >
              ← Overview
            </Link>
          )}
        </div>
        <div className="text-center">
          <Link
            to="/chapters"
            className="text-xs font-mono text-foreground/45 hover:text-ember transition-colors"
          >
            Table of Chapters
          </Link>
        </div>
        <div className="text-right">
          {nextChapter ? (
            <Link
              to={nextChapter.to}
              className="text-xs font-mono text-ember font-medium hover:underline flex items-center gap-1.5 justify-end"
            >
              Next: {nextChapter.label} →
            </Link>
          ) : (
            <Link
              to="/timeline"
              className="text-xs font-mono text-ember font-medium hover:underline flex items-center gap-1.5 justify-end"
            >
              Interactive Timeline →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
