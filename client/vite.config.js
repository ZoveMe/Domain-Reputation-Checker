import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration with React plugin and API proxy.  The proxy uses
// VITE_API_BASE_URL defined in your .env file to forward `/api` requests
// to the backend server during development.

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_API_BASE_URL || 'http://localhost:5000',
          changeOrigin: true,
        },
      },
    },
  };
});