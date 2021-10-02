import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import VitePluginComponents, { ElementPlusResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    VitePluginComponents({
      customComponentResolvers: [ElementPlusResolver()],
    }),
    VitePWA({
      base: '/',
      registerType: process.env.CLAIMS === 'true' ? 'autoUpdate' : undefined,
      mode: 'development',
      includeAssets: ['/favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Project',
        short_name: 'project',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        description: '',
        lang: 'zh-Hans-CN',
        start_url: '/',
        icons: [
          {
            src: 'pwa/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa/pwa-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'pwa/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        runtimeCaching: [],
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
})
