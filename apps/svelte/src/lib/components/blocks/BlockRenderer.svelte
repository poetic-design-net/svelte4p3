<script lang="ts">
  import Hero from './Hero.svelte';
  import Features from './Features.svelte';
  import CTA from './CTA.svelte';
  import BentoGrid from './BentoGrid.svelte';
  import Intro from './Intro.svelte';
  import Pricing from './Pricing.svelte';
  import Newsletter from './Newsletter.svelte';
  import Testimonial from './Testimonial.svelte';
  import CardSlider from './CardSlider.svelte';
  import HowItWorks from './HowItWorks.svelte';
  import BlogPosts from './BlogPosts.svelte';
  import ContentSection from './ContentSection.svelte';
  import SimpleButton from './SimpleButton.svelte';
  import SimpleImage from './SimpleImage.svelte';
  import type { Block, BlockType } from './types';
  import VideoEmbed from './VideoEmbed.svelte'

  const blockComponents: Record<BlockType, any> = {
    hero: Hero,
    features: Features,
    cta: CTA,
    'bento-grid': BentoGrid,
    intro: Intro,
    pricing: Pricing,
    newsletter: Newsletter,
    testimonial: Testimonial,
    cardSlider: CardSlider,
    howItWorks: HowItWorks,
    blogPosts: BlogPosts,
    contentSection: ContentSection,
    simpleImage: SimpleImage,
    simpleButton: SimpleButton,
    videoEmbed: VideoEmbed
  };

  export let blocks: Block[] = [];
</script>

{#each blocks as block}
  {#if blockComponents[block.blockType]}
    <svelte:component this={blockComponents[block.blockType]} {block} />
  {/if}
{/each}
