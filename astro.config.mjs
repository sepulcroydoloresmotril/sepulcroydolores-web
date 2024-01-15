import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': {
      status: 302,
      destination: '/eventos/ciclo-conferencias'
    }
  },
  integrations: [tailwind(), preact()]
});