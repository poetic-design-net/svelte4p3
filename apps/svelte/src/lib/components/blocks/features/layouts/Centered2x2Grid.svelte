<script lang="ts">
  import DynamicIcon from '$lib/components/DynamicIcon.svelte';
  import { ICONS } from '$payload/blocks/features';
  import type { FeaturesProps } from '../../types';
  
  // Debug output
  console.log('Rendering Centered2x2Grid layout');

  export let block: FeaturesProps;
  
  $: headline = block.headline || '';
  $: subheadline = block.subheadline || '';
  $: features = block.features || [];
  $: backgroundColor = block.backgroundColor || '#ffffff';
</script>

<div class="py-24 sm:py-32" style={`background-color: ${backgroundColor}`}>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      {#if headline}
        <h2 class="text-base/7 font-semibold text-accent">{headline}</h2>
      {/if}
      {#if subheadline}
        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          {subheadline}
        </p>
      {/if}
    </div>
    {#if features.length > 0}
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {#each features as feature}
            <div class="relative pl-16">
              <dt class="text-base/7 font-semibold text-gray-900">
                <div class="absolute -left-1 top-0 flex size-10 items-center justify-center rounded-lg bg-accent transform translate-x-1/2">
                  <DynamicIcon iconType={feature.icon} className="flex size-5 text-white" />
                </div>
                {feature.title}
              </dt>
              <dd class="mt-2 text-base/7 text-gray-600">
                {feature.description}
                {#if feature.linkText && feature.linkUrl}
                  <div class="mt-2">
                    <a href={feature.linkUrl} class="text-accent hover:text-accent/80">
                      {feature.linkText} →
                    </a>
                  </div>
                {/if}
              </dd>
            </div>
          {/each}
        </dl>
      </div>
    {/if}
  </div>
</div>
