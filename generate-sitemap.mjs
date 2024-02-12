import { createSitemap } from "svelte-sitemap/src/index.js";

createSitemap(process.env.BASE_URL ?? "https://upsc.study/", {
  outDir: process.env.VERCEL ? ".vercel/output/static" : undefined,
});
