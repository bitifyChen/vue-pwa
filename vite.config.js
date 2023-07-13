import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'TEST',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: 'transparent',
        icons: [
          {
            src: 'public/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    }),
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
