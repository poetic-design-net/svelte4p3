<script lang="ts">
  import type { Block } from './types';
  import Default from './intro/layouts/Default.svelte';
  import Centered from './intro/layouts/Centered.svelte';
  import FullWidth from './intro/layouts/FullWidth.svelte';

  export let block: Block & { blockType: 'intro' };
  
  const layout = block.layout || 'default';
</script>

{#if layout === 'centered'}
  <Centered {block} />
{:else if layout === 'full-width'}
  <FullWidth {block} />
{:else}
  <Default {block} />
{/if}
