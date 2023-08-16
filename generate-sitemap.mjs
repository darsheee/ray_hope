import { createSitemap } from "svelte-sitemap/src/index.js";

createSitemap("https://apes-web-quiz.vercel.app/", {
  outDir: process.env.VERCEL ? ".vercel/output/static" : undefined,
});
