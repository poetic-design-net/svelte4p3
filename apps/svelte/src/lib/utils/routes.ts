// List of routes where navigation should be hidden
export const noNavigationRoutes = ['/login', '/register', '/reset-password'] // erweitere nach Bedarf

// Check if navigation should be shown for given path
export const shouldShowNavigation = (path: string): boolean => {
  return !noNavigationRoutes.some(route => path.startsWith(route))
}
