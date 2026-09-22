import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

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
  plugins: [
    VitePWA({
      registerType: 'prompt',
      injectRegister: false, // we handle SW registration ourselves so we can show the update toast
      includeAssets: ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'fonts/geist-latin-wght-normal.woff2', 'fonts/geist-mono-latin-wght-normal.woff2'],
      manifest: {
        id: '/echo-manifold/',
        name: 'ECHO · Harmonic Manifold',
        short_name: 'ECHO',
        description: 'A generative audio engine — 30 formulas across 9 sections, 5 generative modes.',
        start_url: '/echo-manifold/',
        scope: '/echo-manifold/',
        display: 'standalone',
        orientation: 'portrait-primary',
        background_color: '#05050a',
        theme_color: '#05050a',
        categories: ['music', 'entertainment', 'productivity'],
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          { src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
          { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        cleanupOutdatedCaches: true,
        navigateFallback: '/echo-manifold/index.html',
        navigateFallbackDenylist: [/^\/api/],
        runtimeCaching: [
          {
            // External CDN font fallbacks — none in this app, but defensive
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'images-cache', expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 } }
          }
        ]
      },
      devOptions: {
        enabled: false // SW only in production builds
      }
    })
  ],
});
