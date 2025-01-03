import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: '/kino_vite_test/',
  css: {
    devSourcemap: true,
  },
}));
