import type { LayoutServerLoad } from './$types'

type NavigationItem = {
  text: string
  url: string
}

type NavigationResponse = {
  items?: NavigationItem[]
}

export const load = (async ({ fetch }) => {
  try {
    const response = await fetch(
      `${process.env.VITE_PAYLOAD_URL ?? 'http://localhost:3000'}/api/globals/navigation-menu`,
    )

    if (!response.ok) {
      return { navigation: [] }
    }

    const data = (await response.json()) as NavigationResponse
    return {
      navigation: data.items ?? [],
    }
  } catch {
    // Return empty navigation on error
    return {
      navigation: [],
    }
  }
}) satisfies LayoutServerLoad
