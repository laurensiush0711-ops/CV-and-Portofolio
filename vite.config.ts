import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // IMPORTANT: must match your GitHub repo name
    base: '/CV-and-Portofolio/',

    plugins: [react()],

    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || '')
    },

    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },

    server: {
      port: 5173,
      open: true
    }
  }
})
