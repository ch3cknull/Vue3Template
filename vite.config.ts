import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import VitePluginComponents, { ElementPlusResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    VitePluginComponents({
      customComponentResolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
})
