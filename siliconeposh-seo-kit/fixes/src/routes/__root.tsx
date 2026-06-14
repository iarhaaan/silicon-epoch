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

const SITE_URL = "https://siliconeposh.vercel.app";

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

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="max-w-xl w-full border border-border bg-card rounded-3xl p-8 shadow-2xl text-center space-y-6">
        <h1 className="font-display text-4xl text-foreground font-bold tracking-tight">
          This chapter couldn't be loaded
        </h1>
        <p className="text-sm text-foreground/75">{error.message || String(error)}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-ink text-paper px-6 py-2.5 text-xs font-semibold"
          >
            Reload
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-6 py-2.5 text-xs font-semibold"
          >
            Return home
          </a>
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
      { name: "color-scheme", content: "light dark" },
      { name: "theme-color", content: "#faf9f6", media: "(prefers-color-scheme: light)" },
      { name: "theme-color", content: "#13110f", media: "(prefers-color-scheme: dark)" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { title: "Silicon Epoch — A Field Guide to the AI Frontier (2026)" },
      {
        name: "description",
        content:
          "A comprehensive, current field guide to the AI revolution: every frontier lab, the chip wars, power grids, reasoning models, the data wall, AGI timelines, and the road to superintelligence.",
      },
      { name: "author", content: "Silicon Epoch" },
      {
        name: "keywords",
        content:
          "AI field guide, frontier AI labs, GPT-5, Claude, Gemini, DeepSeek, AGI, ASI, chip wars, TSMC, NVIDIA, transformers, AI safety, alignment, silicon epoch",
      },
      // Open Graph (defaults; leaf routes override)
      { property: "og:site_name", content: "Silicon Epoch" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "Silicon Epoch — A Field Guide to the AI Frontier" },
      {
        property: "og:description",
        content:
          "Every frontier lab, the chip wars, power grids, reasoning models, the data wall, and the road to superintelligence.",
      },
      { property: "og:image", content: `${SITE_URL}/og-image-dark.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Silicon Epoch — A Field Guide to the AI Frontier" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@SiliconEpoch" },
      { name: "twitter:creator", content: "@SiliconEpoch" },
      { name: "twitter:title", content: "Silicon Epoch — A Field Guide to the AI Frontier" },
      {
        name: "twitter:description",
        content:
          "Every frontier lab, the chip wars, power grids, reasoning models, the data wall, and the road to superintelligence.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-image-dark.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Silicon Epoch",
          alternateName: "Silicon Epoch — A Field Guide to the AI Frontier",
          url: SITE_URL,
          description:
            "A comprehensive field guide to the AI revolution — frontier labs, chip wars, power grids, AGI timelines.",
          inLanguage: "en-US",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${SITE_URL}/sources?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Silicon Epoch",
          url: SITE_URL,
          logo: `${SITE_URL}/apple-touch-icon.png`,
          sameAs: ["https://github.com/iarhaaan/siliconeposh"],
          description: "An independent, citation-driven field guide to the dawn of the AI era.",
        }),
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
