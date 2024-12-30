export const ssr = true
export const prerender = false

// This prevents inheriting layout data from parent layouts
export const load = () => {
  return {}
}
