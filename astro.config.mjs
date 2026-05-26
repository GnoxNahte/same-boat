// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },  
  site: 'https://gnoxnahte.github.io',
  base: '/same-boat',
});
