/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  css: {
    transformer: "lightningcss",
  },
  plugins: [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    ...(!process.env.VITEST
      ? [
          tanstackStart({
            server: { entry: "server" },
            importProtection: {
              behavior: "error",
              client: {
                files: ["**/server/**"],
                specifiers: ["server-only"],
              },
            },
          }),
        ]
      : []),
    react(),
  ],
  ssr: {
    noExternal: ["@lobehub/icons"],
  },
  server: {
    host: "::",
    port: 8080,
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
