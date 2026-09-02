import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import liveDesigner from '@pinegrow/piny-vite';
import tailwindcss from '@tailwindcss/vite';
import { partytownVite } from '@qwik.dev/partytown/utils';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      // Listen on all interfaces; let Vite infer HMR hostname from the request URL.
      // Fixed 127.0.0.1 + hmr.host breaks hot reload when the embedded browser opens
      // http://localhost:3000 (localhost vs 127.0.0.1 WebSocket mismatch).
      host: true,
      strictPort: false,
      watch: {
        ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
      },
    },
    plugins: [
      // Pinegrow liveDesigner hangs the Vite HTTP server in this environment
      // (requests never complete → blank page). Enable with PINY_LIVE=1 if needed.
      ...(env.PINY_LIVE === '1' ? [liveDesigner()] : []),
      tailwindcss(),
      react(),
      partytownVite({
        dest: path.join(__dirname, 'dist', '~partytown'),
      })
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-dom/client', 'react-router-dom'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom', 'react-router-dom'],
            'icons': ['lucide-react']
          }
        }
      }
    }
  };
});
