import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['@iconify/json'],
  },
  plugins: [
    sveltekit(),
    Icons({
      autoInstall: true,
      compiler: 'svelte',
      defaultClass: 'inline-block',
      scale: 1.2,
    }),
  ],
  server: {
    proxy: {
      '/api': {
        changeOrigin: true,
        secure: false,
        target: 'http://localhost:3000',
      },
    },
  },
})
