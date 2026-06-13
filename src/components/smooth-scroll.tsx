import { useEffect, type ReactNode } from "react";
import type Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check for user accessibility preferences
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let lenisInstance: Lenis | null = null;
    let rafId = 0;
    let mounted = true;

    // Dynamically import Lenis to prevent SSR execution errors
    import("lenis").then(({ default: LenisClass }) => {
      if (!mounted) return;
      lenisInstance = new LenisClass({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        if (!mounted || !lenisInstance) return;
        lenisInstance.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      mounted = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
