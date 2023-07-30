import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter(),
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
