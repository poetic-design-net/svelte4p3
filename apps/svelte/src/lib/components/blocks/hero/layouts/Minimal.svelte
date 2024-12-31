<script lang="ts">
  import type { HeroProps } from '../../types';
  import { theme } from '$lib/stores/theme';
  import { Button } from '$lib/components/ui/button';
  
  export let block: HeroProps;
  export const backgroundImageUrl: string | undefined = undefined;
  export const overlayOpacity: string = '';

  $: isDark = $theme === 'dark';
  $: textColor = isDark ? 'text-gray-200' : 'text-gray-900';
  $: mutedTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  $: accentTextColor = isDark ? 'text-accent/80' : 'text-accent';
</script>

<div class="mx-auto overflow-hidden {block.fullscreen ? 'w-full max-w-[100vw]' : 'max-w-2xl'} flex items-center justify-center px-6 lg:px-8 relative z-10" class:h-screen={block.fullscreen} class:py-32={!block.fullscreen} class:sm:py-48={!block.fullscreen} class:lg:py-56={!block.fullscreen}>
  <div class="mx-auto max-w-2xl text-center relative z-20">
    {#if block.accent}
      <p class="text-base font-semibold {accentTextColor}">{block.accent.text}</p>
    {/if}
    <h1 class="mt-4 text-balance text-4xl font-bold tracking-tight {textColor} sm:text-5xl">{block.headline}</h1>
    {#if block.subheadline}
      <p class="mt-6 text-pretty text-lg font-medium {mutedTextColor}">{block.subheadline}</p>
    {/if}
    {#if block.cta}
      <div class="mt-10 flex items-center justify-center gap-x-6">
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
