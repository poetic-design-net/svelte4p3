<script lang="ts">
  import type { IntroProps } from '../../types';
  
  export let block: IntroProps;
</script>

<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  {#if block.backgroundImage?.url}
    <img 
      src={block.backgroundImage.url} 
      alt="" 
      class="absolute inset-0 -z-10 size-full object-cover object-center blend-multiply saturate-0"
    >
  {/if}
  
  <!-- Gradient Effects -->
  <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>

  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      {#if block.headline}
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{block.headline}</h2>
      {/if}
      {#if block.description}
        <p class="mt-6 text-lg leading-8 text-gray-300">{block.description}</p>
      {/if}
    </div>

    {#if block.links && block.links.length > 0}
      <div class="mx-auto mt-10 flex max-w-2xl justify-center gap-x-6 gap-y-4 flex-wrap">
        {#each block.links as link}
          <a href={link.url} class="text-base font-semibold leading-7 text-white hover:text-gray-300 transition-colors">
            {link.text} <span aria-hidden="true">&rarr;</span>
          </a>
        {/each}
      </div>
    {/if}

    {#if block.stats && block.stats.length > 0}
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-center sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
        {#each block.stats as stat}
          <div class="flex flex-col gap-y-3">
            <dt class="text-base leading-7 text-gray-300">{stat.label}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
          </div>
        {/each}
      </dl>
    {/if}
  </div>
</div>
