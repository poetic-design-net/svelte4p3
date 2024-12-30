<script lang="ts">
  import type { BentoGridBlockProps } from '$lib/components/blocks/types';
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  export let block: BentoGridBlockProps;

  let currentTheme: string;
  const unsubscribe = theme.subscribe(value => currentTheme = value);

  onMount(() => {
    return () => unsubscribe();
  });

  function getItemClasses(item: any, index: number) {
    const isLarge = item.layout === 'large';
    const isFirst = index === 0;
    const isLast = index === block.items.length - 1;

    let classes = 'relative ';

    // Grid positioning
    if (isLarge) {
      classes += 'lg:row-span-2 ';
    }

    // Specific positioning for each item
    if (isFirst) {
      classes += 'max-lg:row-start-1 ';
    } else if (isLast && isLarge) {
      classes += 'max-lg:row-start-4 lg:col-start-3 ';
    } else if (index === 1) {
      classes += 'max-lg:row-start-2 lg:col-start-2 ';
    } else if (index === 2) {
      classes += 'max-lg:row-start-3 lg:col-start-2 lg:row-start-2 ';
    }

    return classes.trim();
  }

  function getContainerClasses(item: any, index: number) {
    const isLarge = item.layout === 'large';
    const isFirst = index === 0;
    const isLast = index === block.items.length - 1;

    let classes = 'relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ';

    if (isFirst) {
      classes += 'max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-l-[calc(2rem+1px)] ';
    } else if (isLast) {
      classes += 'max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] ';
    }

    return classes.trim();
  }

  function getBackgroundClasses(item: any, index: number) {
    const isLarge = item.layout === 'large';
    const isFirst = index === 0;
    const isLast = index === block.items.length - 1;

    let classes = 'absolute inset-px rounded-lg bg-white ';

    if (isFirst) {
      classes += 'max-lg:rounded-t-[2rem] lg:rounded-l-[2rem] ';
    } else if (isLast) {
      classes += 'max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] ';
    }

    return classes.trim();
  }

  function getShadowClasses(item: any, index: number) {
    const isLarge = item.layout === 'large';
    const isFirst = index === 0;
    const isLast = index === block.items.length - 1;

    let classes = 'pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 ';

    if (isFirst) {
      classes += 'max-lg:rounded-t-[2rem] lg:rounded-l-[2rem] ';
    } else if (isLast) {
      classes += 'max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] ';
    }

    return classes.trim();
  }
</script>

<div class="bg-gray-50 py-24 sm:py-32" style="background-color: {block.backgroundColor || '#ffffff'}">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    {#if block.subtitle}
      <h2 class="text-center text-base/7 font-semibold text-indigo-600">
        {block.subtitle}
      </h2>
    {/if}
    {#if block.title}
      <p class="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        {block.title}
      </p>
    {/if}
    
    <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      {#each block.items as item, index}
        <div class={getItemClasses(item, index)}>
          <div class={getBackgroundClasses(item, index)}></div>
          <div class={getContainerClasses(item, index)}>
            <div class="px-8 pb-6 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                {item.title}
              </p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                {item.description}
              </p>
            </div>
            
            {#if item.image}
              {#if item.layout === 'large'}
                <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img 
                      class="size-full object-cover object-top" 
                      src={typeof item.image === 'string' ? item.image : item.image?.url} 
                      alt={item.title} 
                      loading="lazy"
                    />
                  </div>
                </div>
              {:else if item.title.toLowerCase().includes('code') || item.title.toLowerCase().includes('api')}
                <div class="relative min-h-[30rem] w-full grow">
                  <div class="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">Code.jsx</div>
                        <div class="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                      </div>
                    </div>
                    <div class="px-6 pb-14 pt-6">
                      <pre class="text-sm text-gray-300">
                        <code>
                          {item.description}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              {:else}
                <div class="flex flex-1 items-center justify-center px-8 pb-8 pt-4 max-lg:pb-12 max-lg:pt-6 sm:px-10">
                  <img 
                    class="w-full max-lg:max-w-xs" 
                    src={typeof item.image === 'string' ? item.image : item.image?.url} 
                    alt={item.title} 
                    loading="lazy"
                  />
                </div>
              {/if}
            {/if}
          </div>
          <div class={getShadowClasses(item, index)}></div>
        </div>
      {/each}
    </div>
  </div>
</div>
