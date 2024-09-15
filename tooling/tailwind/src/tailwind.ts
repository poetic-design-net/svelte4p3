import type { Config } from 'tailwindcss'

import { colors } from './colors'
import { fontFamily, fontSize } from './typography'
import { borderRadius, spacing } from './ui'

export const ExtendedConfig = {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  spacing,
}

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      ...ExtendedConfig,
    },
  },
} as const satisfies Config
