import { Link } from "@tanstack/react-router";
import { SOURCES_MAP } from "@/lib/sources-data";

export function Citation({ id }: { id: string }) {
  const sourceInfo = SOURCES_MAP.get(id);

  if (!sourceInfo) {
    console.warn(`Citation source with id "${id}" not found.`);
    return (
      <sup className="select-none inline-block scroll-smooth">
        <span
          className="text-red-500 font-mono text-[9px] font-bold px-0.5 cursor-help"
          title={`Missing source reference: "${id}"`}
        >
          [?]
        </span>
      </sup>
    );
  }

  return (
    <sup className="select-none inline-block scroll-smooth">
      <Link
        to="/sources"
        hash={id}
        className="text-ember font-mono text-[9px] font-semibold hover:underline px-0.5"
        title={`${sourceInfo.title} (${sourceInfo.author}, ${sourceInfo.date}) [${sourceInfo.type === "primary" ? "Verified Primary" : "Industry Analysis"}]`}
      >
        [{sourceInfo.index + 1}]
      </Link>
    </sup>
  );
}
