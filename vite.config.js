import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/kino_vite_test/',
  css: {
    devSourcemap: true,
  },
}));
