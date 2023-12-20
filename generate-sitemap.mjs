import { createSitemap } from "svelte-sitemap/src/index.js";

createSitemap(process.env.BASE_URL ?? "https://civils.app/", {
  outDir: process.env.VERCEL ? ".vercel/output/static" : undefined,
});
