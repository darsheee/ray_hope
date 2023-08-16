import adapterStatic from "@sveltejs/adapter-static";
import adapterVercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: process.env.VERCEL ? adapterVercel() : adapterStatic(),
    serviceWorker: {
      register: true,
    },
    prerender: {
      crawl: true,
      entries: ["*"],
    },
  },
};

export default config;
