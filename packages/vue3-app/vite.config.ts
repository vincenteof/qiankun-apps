import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

const useDevMode = true

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun('vue3-app', { useDevMode })],
  base: 'http://localhost:8082/',
  server: {
    port: 8082,
    cors: true,
    origin: 'http://localhost:8082',
  },
})
