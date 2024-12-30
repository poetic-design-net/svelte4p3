<script lang="ts">
  import type { FeaturesProps } from '../../types';
  import { theme } from '$lib/stores/theme';
  
  export let block: FeaturesProps;

  $: isDark = $theme === 'dark';
  $: textColor = isDark ? 'text-gray-200' : 'text-gray-900';
  $: mutedTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  $: accentTextColor = isDark ? 'text-accent/80' : 'text-accent';
  $: backgroundColor = block.backgroundColor || '#ffffff';
</script>

<div class="py-24 sm:py-32" style={`background-color: ${backgroundColor}`}>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      {#if block.accentHeadline}
        <h2 class="text-base/7 font-semibold {accentTextColor}">{block.accentHeadline}</h2>
      {/if}
      {#if block.headline}
        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight {textColor} sm:text-5xl">
          {block.headline}
        </p>
      {/if}
      {#if block.subheadline}
        <p class="mt-6 text-lg/8 {mutedTextColor}">
          {block.subheadline}
        </p>
      {/if}
    </div>
    {#if block.features}
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {#each block.features as feature}
            <div>
              <h3 class="text-base/7 font-semibold {textColor}">{feature.title}</h3>
              <p class="mt-2 text-base/7 {mutedTextColor}">
                {feature.description}
              </p>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
