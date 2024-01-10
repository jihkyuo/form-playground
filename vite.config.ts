import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: /^@(?=\/)/, replacement: path.resolve(__dirname, './src') },
    ],
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [
    react(),
  ],
});
