import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";
import { SmoothScroll } from "../components/smooth-scroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  const copyDiagnostics = () => {
    const info = `Error: ${error.message || error}\nStack: ${error.stack || "N/A"}\nURL: ${typeof window !== "undefined" ? window.location.href : "SSR"}`;
    navigator.clipboard.writeText(info).then(() => {
      alert("Diagnostics copied to clipboard!");
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="max-w-xl w-full border border-border bg-card rounded-3xl p-8 shadow-2xl text-center space-y-6">
        <div className="eyebrow text-xs tracking-widest text-ember font-mono uppercase">
          System Diagnostic Exception
        </div>
        <h1 className="font-display text-4xl text-foreground font-bold tracking-tight">
          This chapter couldn't be loaded
        </h1>
        <p className="text-sm text-foreground/75 leading-relaxed max-w-md mx-auto">
          Something went wrong rendering this route. This can happen due to a temporary network
          issue or stale static assets.
        </p>

        {/* Diagnostic display */}
        <div className="bg-cream/40 dark:bg-zinc-950/40 border border-border/80 rounded-xl p-4 text-left font-mono text-[11px] overflow-auto max-h-40 text-foreground/80 whitespace-pre-wrap select-text">
          {error.message || String(error)}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-ink text-paper px-6 py-2.5 text-xs font-semibold hover:bg-ember hover:text-white transition-colors cursor-pointer"
          >
            Reload Page Assets
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-6 py-2.5 text-xs font-semibold hover:bg-cream text-foreground/85 transition-colors"
          >
            Return to Overview
          </a>
          <button
            onClick={copyDiagnostics}
            className="rounded-full border border-border/80 border-dashed px-6 py-2.5 text-xs font-mono text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
          >
            Copy diagnostics code
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Silicon Epoch — A Field Guide to the AI Frontier" },
      {
        name: "description",
        content:
          "A comprehensive, current field guide to the AI revolution: every frontier lab, the chip wars, power grids, reasoning models, the data wall, and the road to superintelligence.",
      },
      { name: "author", content: "Silicon Epoch" },
      { property: "og:title", content: "Silicon Epoch — A Field Guide to the AI Frontier" },
      {
        property: "og:description",
        content:
          "Every frontier lab, the chip wars, power grids, reasoning models, the data wall, and the road to superintelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SmoothScroll>
      <Outlet />
    </SmoothScroll>
  );
}
