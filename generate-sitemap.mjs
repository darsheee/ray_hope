import { createSitemap } from "svelte-sitemap/src/index.js";

createSitemap(process.env.BASE_URL ?? "https://webquiz.bswanson.dev/", {
  outDir: process.env.VERCEL ? ".vercel/output/static" : undefined,
});
