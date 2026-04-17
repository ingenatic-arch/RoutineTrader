import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://ingenatic-arch.github.io',
  base: isProd ? '/RoutineTrader' : '/',
  output: 'static',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  vite: {
    ssr: {
      noExternal: ['recharts'],
    },
  },
});
