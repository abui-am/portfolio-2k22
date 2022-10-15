import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import robotsTxt from 'astro-robots-txt';

import tailwind from '@astrojs/tailwind';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind(), react(), robotsTxt()],
  site: 'https://portfolio-2k22.vercel.app/',
});
