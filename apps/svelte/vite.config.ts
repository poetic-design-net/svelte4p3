import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    conditions: [
      'node',
      'browser',
      'module',
      'jsnext:main',
      'jsnext',
      'svelte',
    ],
    mainFields: [
      'node',
      'browser',
      'module',
      'jsnext:main',
      'jsnext',
      'svelte',
    ],
  },
  // ssr: {
  //   noExternal: ['@payloadcms/ui'],
  // },
})
