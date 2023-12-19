import adapterNode from "@sveltejs/adapter-node";
import adapterVercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: process.env.VERCEL ? adapterVercel() : adapterNode(),
    serviceWorker: {
      register: false,
    },
    prerender: {
      crawl: true,
      entries: ["*"],
    },
    }
  
};

export default config;
