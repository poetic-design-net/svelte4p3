<script lang="ts">
  import type { HeroProps } from '../../types';
  import { theme } from '$lib/stores/theme';
  
  export let block: HeroProps;
  export let backgroundImageUrl: string | undefined;
  export let overlayOpacity: string;

  $: isDark = $theme === 'dark';
  $: textColor = isDark ? 'text-gray-200' : 'text-gray-900';
  $: mutedTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  $: accentTextColor = isDark ? 'text-accent/80' : 'text-accent';
  $: ringColor = isDark ? 'ring-white/10 hover:ring-white/20' : 'ring-gray-900/10 hover:ring-gray-900/20';
</script>

<div class="mx-auto overflow-hidden max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 relative z-10" class:h-screen={block.fullscreen} class:py-32={!block.fullscreen} class:sm:py-48={!block.fullscreen} class:lg:py-56={!block.fullscreen}>
  <div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6 relative z-20">
    {#if block.accent}
      <div class="mb-8 relative z-30">
        <div class="inline-flex rounded-full px-3 py-1 text-sm/6 {mutedTextColor} ring-1 {ringColor} relative">
          {block.accent.text}
          <a href={block.accent.link} class="ml-2 font-semibold {accentTextColor}">
            {block.accent.linkText}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    {/if}
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h1 class="text-balance text-4xl font-semibold tracking-tight {textColor} sm:text-6xl">{block.headline}</h1>
      {#if block.subheadline}
        <p class="mt-6 text-pretty text-lg font-medium {mutedTextColor} sm:text-xl/8">{block.subheadline}</p>
      {/if}
      {#if block.cta}
        <div class="mt-10 flex items-center gap-x-6">
          <a href={block.cta.link} class="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            {block.cta.text}
          </a>
          {#if block.learnMoreText}
            <a 
              href={block.learnMoreLink} 
              class="text-sm/6 font-semibold {textColor}"
            >
              {block.learnMoreText}
              <span aria-hidden="true">→</span>
            </a>
          {/if}
        </div>
      {/if}
    </div>
  </div>
  <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
    {#if backgroundImageUrl}
      <img
        class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
        src={backgroundImageUrl}
        alt=""
      />
      <div class="absolute inset-0 {overlayOpacity} mix-blend-multiply"></div>
    {/if}
  </div>
</div>
