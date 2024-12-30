<script lang="ts">
  import type { FeaturesProps } from '../../types';
  import { theme } from '$lib/stores/theme';
  import DynamicIcon from '$lib/components/DynamicIcon.svelte';
  
  export let block: FeaturesProps;

  $: isDark = $theme === 'dark';
  $: textColor = isDark ? 'text-gray-200' : 'text-gray-900';
  $: mutedTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  $: accentTextColor = isDark ? 'text-accent/80' : 'text-accent';
  $: backgroundColor = block.backgroundColor || '#ffffff';
</script>

<div class="py-24 sm:py-32" style={`background-color: ${backgroundColor}`}>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    {#if block.headline}
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-pretty text-4xl font-semibold tracking-tight {textColor} sm:text-5xl">
          {block.headline}
        </h2>
        {#if block.subheadline}
          <p class="mt-6 text-lg/8 {mutedTextColor}">
            {block.subheadline}
          </p>
        {/if}
      </div>
    {/if}
    {#if block.features}
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {#each block.features as feature}
            <div>
              <div class="flex items-center gap-x-3">
                <div class="flex size-10 items-center justify-center rounded-lg bg-accent">
                  <DynamicIcon iconType={feature.icon} className="flex size-5 text-white" />
                </div>
                <h3 class="text-base/7 font-semibold {textColor}">{feature.title}</h3>
              </div>
              <p class="mt-4 text-base/7 {mutedTextColor}">
                {feature.description}
              </p>
              {#if feature.linkText && feature.linkUrl}
                <div class="mt-4">
                  <a 
                    href={feature.linkUrl} 
                    class="text-base/7 font-semibold text-accent hover:text-accent/80"
                  >
                    {feature.linkText} →
                  </a>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
