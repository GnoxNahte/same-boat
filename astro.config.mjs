// @ts-check
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  prefetch: {
    prefetchAll: true,
  },  
  site: 'https://gnoxnahte.github.io',
  base: '/same-boat',
  redirects: {
    "/" : "/same-boat/sign-up",
  }
});
