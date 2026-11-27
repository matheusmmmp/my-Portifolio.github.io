import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Two static pages with the same app: English at "/" and Portuguese at "/pt/".
// Each HTML file carries its own <html lang>, title, description, hreflang and JSON-LD.
export default defineConfig({
  plugins: [react()],
  cacheDir: '.vite-cache',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pt: resolve(__dirname, 'pt/index.html'),
      },
    },
  },
});