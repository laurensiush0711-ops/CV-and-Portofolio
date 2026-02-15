
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: './', // CRITICAL: Fixes blank screen on GitHub Pages by using relative paths
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || '')
    },
    server: {
      port: 5173,
      open: true
    }
  };
});
