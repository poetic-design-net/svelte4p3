<script lang="ts">
  import type { CTAProps } from '../../types';
  export let block: CTAProps;
  
  $: imageTop = block.image?.position === 'top';
  $: imageBottom = block.image?.position === 'bottom';
  $: imageCentered = block.image?.alignment === 'center';
</script>

<div class="bg-white">
  <div class="w-full">
    <div class="relative isolate overflow-hidden bg-gray-900">
      {#if block.image?.file && imageTop}
        <div class="w-full">
          <img 
            class={`${imageCentered ? 'w-full' : 'w-[120%] -ml-[10%]'} rounded-none bg-white/5 ring-1 ring-white/10`} 
            src={block.image.file.url} 
            alt={block.image.file.alt || ''} 
          />
        </div>
      {/if}

      <div class="mx-auto max-w-2xl text-center py-16 px-6">
        <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {block.heading}
        </h2>
        {#if block.text}
          <p class="mt-6 text-pretty text-lg/8 text-gray-300">
            {block.text}
          </p>
        {/if}
        <div class="mt-10 flex items-center justify-center gap-x-6">
          {#if block.primaryButton?.text}
            <a href={block.primaryButton.link} class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {block.primaryButton.text}
            </a>
          {/if}
          {#if block.secondaryButton?.text}
            <a href={block.secondaryButton.link} class="text-sm/6 font-semibold text-white">
              {block.secondaryButton.text} <span aria-hidden="true">→</span>
            </a>
          {/if}
        </div>
      </div>

      {#if block.image?.file && imageBottom}
        <div class="w-full">
          <img 
            class={`${imageCentered ? 'w-full' : 'w-[120%] -ml-[10%]'} rounded-none bg-white/5 ring-1 ring-white/10`} 
            src={block.image.file.url} 
            alt={block.image.file.alt || ''} 
          />
        </div>
      {/if}
    </div>
  </div>
</div>
