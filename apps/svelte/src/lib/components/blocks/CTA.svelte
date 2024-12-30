<script lang="ts">
  import type { CTAProps } from './types';
  import Default from './cta/layouts/Default.svelte';
  import Centered from './cta/layouts/Centered.svelte';
  import Fullwidth from './cta/layouts/Fullwidth.svelte';
  import ImageLeft from './cta/layouts/ImageLeft.svelte';
  import ImageRight from './cta/layouts/ImageRight.svelte';
  import ImageTop from './cta/layouts/ImageTop.svelte';
  import ImageBottom from './cta/layouts/ImageBottom.svelte';

  export let block: CTAProps;

  // Get the selected layout
  $: layout = block.layout || 'default';
  $: LayoutComponent = {
    default: Default,
    centered: Centered,
    fullwidth: Fullwidth,
    imageLeft: ImageLeft,
    imageRight: ImageRight,
    imageTop: ImageTop,
    imageBottom: ImageBottom
  }[layout] || Default;
</script>

<svelte:component this={LayoutComponent} {block} />
