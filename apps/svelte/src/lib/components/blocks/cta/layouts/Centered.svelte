<script lang="ts">
  import type { CTAProps } from '../../types';
  
  export let block: CTAProps;
  
  $: ({ heading, text, primaryButton, secondaryButton, image, fullwidth } = block);
</script>

<div class="bg-white">
  <div class:mx-auto={!fullwidth} class:max-w-7xl={!fullwidth} class="py-24 sm:px-6 sm:py-32 lg:px-8">
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24">
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{heading}</h2>
        {#if text}
          <p class="mt-6 text-pretty text-lg/8 text-gray-300">{text}</p>
        {/if}
        <div class="mt-10 flex items-center justify-center gap-x-6">
          {#if primaryButton}
            <a href={primaryButton.link} class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {primaryButton.text}
            </a>
          {/if}
          {#if secondaryButton}
            <a href={secondaryButton.link} class="text-sm/6 font-semibold text-white">
              {secondaryButton.text} <span aria-hidden="true">→</span>
            </a>
          {/if}
        </div>
      </div>
      {#if image?.file?.url}
        <div class="relative mx-auto mt-16 max-w-2xl">
          <img 
            class="w-full rounded-md bg-white/5 ring-1 ring-white/10" 
            src={image.file.url} 
            alt={image.file.alt || ''} 
            width="1824" 
            height="1080"
          >
        </div>
      {/if}
    </div>
  </div>
</div>
