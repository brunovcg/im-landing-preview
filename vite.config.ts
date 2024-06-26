import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dns from 'dns';
import { checker } from 'vite-plugin-checker';

dns.setDefaultResultOrder('verbatim');

const root = resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  build: {
    chunkSizeWarningLimit: 1700,
    outDir: 'dist',
  },
  resolve: {
    alias: {
      components: resolve(root, 'components'),
      pages: resolve(root, 'pages'),
      router: resolve(root, 'router'),
      locales: resolve(root, 'locales'),
      configs: resolve(root, 'configs'),
      layouts: resolve(root, 'layouts'),
      utils: resolve(root, 'utils'),
      styles: resolve(root, 'styles'),
      types: resolve(root, 'types'),
      assets: resolve(root, 'assets'),
      hooks: resolve(root, 'hooks'),
    },
  },
  server: {
    port: 3333,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3333/',
        changeOrigin: true,
        secure: false,
        rewrite: (pathname) => pathname.replace('127.0.0.1', 'localhost'),
      },
    },
    cors: false,
  },
});
