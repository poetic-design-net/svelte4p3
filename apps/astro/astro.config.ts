import node from '@astrojs/node'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react({}), tailwind({ applyBaseStyles: true })],
  output: 'server',
  vite: {
    ssr: {
      noExternal: ['@payloadcms/ui'],
    },
  },
})
