<script lang="ts">
  import type { HeroProps } from '../../types';
  import { theme } from '$lib/stores/theme';
  import { Button } from '$lib/components/ui/button';
  
  export let block: HeroProps;
  export let backgroundImageUrl: string | undefined;
  export let overlayOpacity: string;

  $: isDark = $theme === 'dark';
  $: textColor = isDark ? 'text-gray-200' : 'text-gray-900';
  $: mutedTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  $: accentTextColor = isDark ? 'text-accent/80' : 'text-accent';
  $: ringColor = isDark ? 'ring-white/10 hover:ring-white/20' : 'ring-gray-900/10 hover:ring-gray-900/20';
</script>

<div class="mx-auto overflow-hidden max-w-7xl px-6 lg:px-8 flex items-center relative z-10" class:h-screen={block.fullscreen} class:py-32={!block.fullscreen} class:sm:py-48={!block.fullscreen} class:lg:py-56={!block.fullscreen}>
  <div class="max-w-2xl relative">
    {#if block.accent}
      <div class="mb-8 relative z-20">
        <div class="inline-flex rounded-full px-3 py-1 text-sm/6 {mutedTextColor} ring-1 {ringColor} relative">
          {block.accent.text}
          <a href={block.accent.link} class="ml-2 font-semibold {accentTextColor}">
            {block.accent.linkText}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    {/if}
    <div>
      <h1 class="text-balance text-5xl font-semibold tracking-tight {textColor} sm:text-7xl">{block.headline}</h1>
      {#if block.subheadline}
        <p class="mt-8 text-pretty text-lg font-medium {mutedTextColor} sm:text-xl/8 max-w-xl">{block.subheadline}</p>
      {/if}
      {#if block.cta}
        <div class="mt-10 flex items-center gap-x-6">
          <a href={block.cta.link}>
            <Button variant="default">
              {block.cta.text}
            </Button>
          </a>
          {#if block.learnMoreText}
            <a href={block.learnMoreLink}>
              <Button variant="link" class={textColor}>
                {block.learnMoreText}
                <span aria-hidden="true">→</span>
              </Button>
            </a>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</div>
