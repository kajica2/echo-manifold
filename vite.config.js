import { defineConfig } from 'vite';

export default defineConfig({
  base: '/echo-manifold/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5174,
  },
  preview: {
    port: 4173,
  },
});
