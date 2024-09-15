import defaultTheme from 'tailwindcss/defaultTheme'

import type { ThemeConfig } from './types'

export const fontFamily: ThemeConfig['fontFamily'] = {
  sans: [...defaultTheme.fontFamily.sans],
  serif: [...defaultTheme.fontFamily.serif],
}

export const fontSize: ThemeConfig['fontSize'] = {}
