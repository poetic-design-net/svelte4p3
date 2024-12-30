<script lang="ts">
  import type { FeaturesProps } from './types';
  import { theme } from '$lib/stores/theme';
  import DynamicIcon from '../../components/DynamicIcon.svelte';
  import Centered2x2Grid from './features/layouts/Centered2x2Grid.svelte';
  import ThreeColAccent from './features/layouts/ThreeColAccent.svelte';
  import ThreeColIcon from './features/layouts/ThreeColIcon.svelte';
  
  export let block: FeaturesProps;

  $: isDark = $theme === 'dark';
  $: textColor = isDark ? 'text-gray-200' : 'text-gray-900';
  $: mutedTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  $: accentTextColor = isDark ? 'text-accent/80' : 'text-accent';
  $: backgroundColor = block.backgroundColor || '#ffffff';
</script>

{#if block.layout === 'centered-2x2-grid'}
  <Centered2x2Grid {block} />
{:else if block.layout === 'three-col-accent'}
  <ThreeColAccent {block} />
{:else if block.layout === 'three-col-icon'}
  <ThreeColIcon {block} />
{:else}
  <div class="overflow-hidden py-24 sm:py-32" style={`background-color: ${backgroundColor}`}>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            {#if block.headline}
              <h2 class="text-base/7 font-semibold {accentTextColor}">Funktionen</h2>
              <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight {textColor} sm:text-5xl">
                {block.headline}
              </p>
            {/if}
            
            {#if block.subheadline}
              <p class="mt-6 text-lg/8 {mutedTextColor}">
                {block.subheadline}
              </p>
            {/if}

            {#if block.features}
              <dl class="mt-10 max-w-xl space-y-8 text-base/7 {mutedTextColor} lg:max-w-none">
                {#each block.features as feature}
                  <div class="relative pl-9">
                    <dt class="inline font-semibold {textColor}">
                    <div class="absolute left-1 -top-0.5 size-5 {accentTextColor}">
                      <DynamicIcon iconType={feature.icon} className="size-5" />
                    </div>
                    {feature.title}
                    </dt>
                    <dd class="inline"> {feature.description}</dd>
                  </div>
                {/each}
              </dl>
            {/if}
          </div>
        </div>

        {#if block.image}
          <img 
            src={typeof block.image === 'string' ? block.image : block.image.url} 
            alt="Funktionen Illustration" 
            class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" 
            width="2432" 
            height="1442"
          />
        {/if}
      </div>
    </div>
  </div>
{/if}
