export type NavigationMenuItem = {
  description?: string
  label: string
  link: string
}

export type NavigationMenuColumn = {
  items: NavigationMenuItem[]
  title: string
}

export type MegaMenu = {
  columns: NavigationMenuColumn[]
  enabled: boolean
}

export type NavigationItem = {
  label: string
  link: string
  megamenu?: MegaMenu
}

export type NavigationData = {
  navigation: NavigationItem[]
}
