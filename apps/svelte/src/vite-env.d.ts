import 'svelte'
import 'vite/client'
import 'unplugin-icons/types/svelte'

declare module '~icons/*' {
  import type { Component, SvelteComponent } from 'svelte'

  const component: Component<SvelteComponent>
  export default component
}

declare module '~icons/mdi-*' {
  import type { Component, SvelteComponent } from 'svelte'

  const component: Component<SvelteComponent>
  export default component
}

declare module 'virtual:icons/*' {
  import type { Component, SvelteComponent } from 'svelte'

  const component: Component<SvelteComponent>
  export default component
}
