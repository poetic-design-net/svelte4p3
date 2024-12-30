import { derived, writable } from 'svelte/store'

type Theme = 'dark' | 'light'

type ThemeClasses = {
  background: string
  border: string
  text: string
}

const themeClasses: Record<Theme, ThemeClasses> = {
  dark: {
    background: 'bg-gray-900',
    border: 'border-gray-700',
    text: 'text-gray-100',
  },
  light: {
    background: 'bg-white',
    border: 'border-gray-200',
    text: 'text-gray-900',
  },
}

function createThemeStore() {
  const { set, subscribe, update } = writable<Theme>('light')

  const classes = derived({ subscribe }, $theme => themeClasses[$theme])

  return {
    classes,
    setTheme: (theme: Theme) => {
      set(theme)
    },
    subscribe,
    toggleTheme: () => {
      update(theme => (theme === 'light' ? 'dark' : 'light'))
    },
  }
}

export const theme = createThemeStore()

// Helfer-Funktion für Theme-spezifische Klassen
export function getThemeClasses(baseClasses = '') {
  return `${baseClasses} ${themeClasses.light.text} dark:${themeClasses.dark.text}`
}
