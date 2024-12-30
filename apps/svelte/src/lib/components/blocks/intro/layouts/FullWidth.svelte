<script lang="ts">
  import type { IntroProps } from '../../types';
  
  export let block: IntroProps;
</script>

<div class="relative isolate bg-gray-900">
  {#if block.backgroundImage?.url}
    <img 
      src={block.backgroundImage.url} 
      alt="" 
      class="absolute inset-0 -z-10 h-full w-full object-cover blend-multiply saturate-0"
    >
  {/if}

  <!-- Gradient Effects -->
  <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
    <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>

  <div class="mx-auto max-w-screen-2xl px-6 py-24 sm:py-32 lg:px-8">
    <div class="max-w-4xl">
      {#if block.headline}
        <h2 class="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">{block.headline}</h2>
      {/if}
      {#if block.description}
        <p class="mt-8 text-xl leading-8 text-gray-300 max-w-2xl">{block.description}</p>
      {/if}
    </div>

    {#if block.links && block.links.length > 0}
      <div class="mt-10 flex flex-wrap gap-x-8 gap-y-6">
        {#each block.links as link}
          <a href={link.url} class="text-lg font-semibold leading-7 text-white hover:text-gray-300 transition-colors">
            {link.text} <span aria-hidden="true">&rarr;</span>
          </a>
        {/each}
      </div>
    {/if}

    {#if block.stats && block.stats.length > 0}
      <dl class="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {#each block.stats as stat}
          <div class="flex flex-col-reverse border-l border-white/10 pl-6">
            <dt class="text-base leading-7 text-gray-300">{stat.label}</dt>
            <dd class="text-5xl font-semibold tracking-tight text-white">{stat.value}</dd>
          </div>
        {/each}
      </dl>
    {/if}
  </div>
</div>
