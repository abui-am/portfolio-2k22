import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import robotsTxt from 'astro-robots-txt';
import image from '@astrojs/image';

import tailwind from '@astrojs/tailwind';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    robotsTxt(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  site: 'https://portfolio-2k22.vercel.app/',
});
