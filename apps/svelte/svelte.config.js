import path from 'node:path'
import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $blocks: path.resolve('./../../packages/payload/src/blocks'),
      $payload: path.resolve('./../../packages/payload/src'),
    },
  },

  preprocess: vitePreprocess(),
}

export default config
