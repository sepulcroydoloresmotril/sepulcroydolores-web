import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  redirects: {
    'bono-feria': {
      status: 302,
      destination: 'https://buy.stripe.com/eVq3cw6GS9q39KHas47ss05'

    },
    '/': {
      status: 302,
      destination: '/eventos/ciclo-conferencias'
    }
  },
  integrations: [tailwind(), preact()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});