import { Link } from "@tanstack/react-router";
import { SOURCES_DATA } from "@/lib/sources-data";

export function Citation({ id }: { id: string }) {
  const index = SOURCES_DATA.findIndex((s) => s.id === id);
  if (index === -1) {
    console.warn(`Citation source with id "${id}" not found.`);
    return null;
  }
  const source = SOURCES_DATA[index];
  return (
    <sup className="select-none inline-block scroll-smooth">
      <Link
        to="/sources"
        hash={id}
        className="text-ember font-mono text-[9px] font-semibold hover:underline px-0.5"
        title={`${source.title} (${source.author}, ${source.date})`}
      >
        [{index + 1}]
      </Link>
    </sup>
  );
}
