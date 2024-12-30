<script lang="ts">
  import type { IntroProps } from '../../types';
  
  export let block: IntroProps;
</script>

<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  {#if block.backgroundImage?.url}
    <img 
      src={block.backgroundImage.url} 
      alt="" 
      class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center blend-multiply saturate-0"
    >
  {/if}
  
  <!-- Gradient Effects -->
  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>

  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      {#if block.headline}
        <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">{block.headline}</h2>
      {/if}
      {#if block.description}
        <p class="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">{block.description}</p>
      {/if}
    </div>

    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      {#if block.links && block.links.length > 0}
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          {#each block.links as link}
            <a href={link.url}>{link.text} <span aria-hidden="true">&rarr;</span></a>
          {/each}
        </div>
      {/if}

      {#if block.stats && block.stats.length > 0}
        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {#each block.stats as stat}
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base/7 text-gray-300">{stat.label}</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
            </div>
          {/each}
        </dl>
      {/if}
    </div>
  </div>
</div>
