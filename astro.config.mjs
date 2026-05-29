// @ts-check
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  prefetch: {
    prefetchAll: true,
  },  
  site: 'https://same-boat.vercel.app',
  redirects: {
    "/" : "/sign-up",
    "/chat/Anonymous" : "/chat/Same Boat Buddy"
  }
});
