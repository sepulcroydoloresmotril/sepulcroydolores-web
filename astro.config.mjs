import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

const googleForm = process.env.PUBLIC_GOOGLE_FORM_URL;


// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': {
      status: 302,
      destination: '/links'
    },
    '/formulario': {
      destination: googleForm || 'https://forms.gle/2Zt3n9mLh7sHj5cM8',
      status: 302,
    },
  },
  integrations: [tailwind(), preact()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});