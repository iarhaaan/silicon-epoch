import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { useState, useEffect } from "react";
import { SOURCES_DATA } from "@/lib/sources-data";

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

function Sources() {
  const [filter, setFilter] = useState<"all" | "hardware" | "labs" | "reasoning" | "energy" | "geopolitics" | "data">("all");
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setHighlightedId(hash);
        const source = SOURCES_DATA.find((s) => s.id === hash);
        if (source) {
          // Reset the filter to 'all' if the requested card is currently filtered out
          setFilter((prevFilter) => {
            if (prevFilter !== "all" && source.category !== prevFilter) {
              return "all";
            }
            return prevFilter;
          });

          // Wait for DOM to render the item, then scroll to it smoothly
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 100);
        }
      } else {
        setHighlightedId(null);
      }
    };

    // Run on initial mount
    handleHashChange();

    // Listen to hashchange events
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
            onClick={() => {
              setFilter(cat.id);
              // Clear URL hash when filter changes to reset state
              if (window.location.hash) {
                window.history.replaceState(null, "", window.location.pathname);
                setHighlightedId(null);
              }
            }}
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
          {filteredSources.map((source, index) => {
            const isHighlighted = source.id === highlightedId;
            return (
              <article
                id={source.id}
                key={`${source.title}-${index}`}
                className={`scroll-mt-24 rounded-2xl border p-8 transition-all duration-500 flex flex-col justify-between ${
                  isHighlighted
                    ? "border-ember bg-ember/[0.02] dark:bg-ember/[0.04]"
                    : "border-border bg-card hover:border-ember"
                }`}
              >
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
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
