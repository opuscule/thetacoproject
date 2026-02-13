// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://thetacoproject.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), keystatic(), sitemap()],
  adapter: netlify()
});