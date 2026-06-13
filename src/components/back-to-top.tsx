import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-40 bg-background/95 hover:bg-ember border border-border hover:border-ember text-foreground/80 hover:text-white rounded-full p-3.5 shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-300 flex items-center justify-center"
    >
      <ArrowUp size={16} />
    </button>
  );
}
