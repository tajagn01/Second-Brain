import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // During local development, proxy /api to the backend to avoid CORS issues.
    proxy: {
      '/api': {
        target: process.env.VITE_API_HOST || 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});