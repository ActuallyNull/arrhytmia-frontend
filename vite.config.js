import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Explicitly load env vars
  const env = loadEnv(mode, process.cwd(), '')

  console.log('=== Vite build environment variables ===')
  console.log(env) // should include your VITE_* keys if Render is injecting them

  return {
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://https://pp-arrhytmia-backend.onrender.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})