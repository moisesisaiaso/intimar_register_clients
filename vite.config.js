import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss: './postcss.config.mjs',
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: true,
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-hook-form',
    ],
    exclude: ['tailwindcss', 'postcss'],
  },
  define: {
    'process.env': {}
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
