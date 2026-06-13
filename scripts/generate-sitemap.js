import fs from "fs";
import path from "path";

const routes = [
  { path: "", priority: "1.0" },
  { path: "chapters", priority: "0.9" },
  { path: "compute", priority: "0.8" },
  { path: "how-ai-works", priority: "0.8" },
  { path: "companies", priority: "0.8" },
  { path: "use-cases", priority: "0.8" },
  { path: "humanity", priority: "0.8" },
  { path: "agi-asi", priority: "0.8" },
  { path: "games", priority: "0.8" },
  { path: "infrastructure", priority: "0.8" },
  { path: "geopolitics", priority: "0.8" },
  { path: "open-vs-closed", priority: "0.8" },
  { path: "data-wall", priority: "0.8" },
  { path: "next-decade", priority: "0.8" },
  { path: "learn", priority: "0.7" },
  { path: "timeline", priority: "0.9" },
  { path: "sources", priority: "0.7" },
];

const lastmod = new Date().toISOString().split("T")[0];
const baseUrl = "https://siliconeposh.vercel.app";

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const r of routes) {
  xml += "  <url>\n";
  xml += `    <loc>${baseUrl}/${r.path}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += "    <changefreq>weekly</changefreq>\n";
  xml += `    <priority>${r.priority}</priority>\n`;
  xml += "  </url>\n";
}

xml += "</urlset>\n";

const publicDir = path.join(process.cwd(), "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf8");
console.log("Sitemap generated successfully with lastmod:", lastmod);
