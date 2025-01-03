import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/kino_vite_test/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        kids: './kids.html',
        about: './about.html',
      },
    },
  },
  css: {
    devSourcemap: true,
  },
}));
