import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vite.config.js
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Your XAMPP port
        changeOrigin: true,
      }
    }
  }
})