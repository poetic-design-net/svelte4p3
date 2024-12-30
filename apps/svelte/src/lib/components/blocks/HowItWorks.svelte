<script lang="ts">
  import type { HowItWorksProps } from './types'
  import Default from './howItWorks/layouts/Default.svelte'
  
  export let block: HowItWorksProps

  const layout = Default
</script>

<svelte:component this={layout} {block} />
