<script lang="ts">
  import type { CTAProps } from '../../types';
  import { Button } from '$lib/components/ui/button';
  import DynamicIcon from '$lib/components/DynamicIcon.svelte';
  import { ICONS } from '$payload/blocks/features';
  
  export let block: CTAProps;
  
  $: ({ heading, text, primaryButton, secondaryButton, image, fullwidth } = block);
</script>

<div class="bg-white">
  <div class:mx-auto={!fullwidth} class:max-w-7xl={!fullwidth} class="py-24 sm:px-6 sm:py-32 lg:px-8">
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{heading}</h2>
        {#if text}
          <p class="mt-6 text-pretty text-lg/8 text-gray-300">{text}</p>
        {/if}
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          {#if primaryButton}
            <Button variant="secondary" class="bg-white text-gray-900 hover:bg-gray-100" on:click={() => window.location.href = primaryButton.link}>
              {primaryButton.text}
            </Button>
          {/if}
          {#if secondaryButton}
            <Button variant="link" class="text-sm/6 font-semibold text-white hover:text-gray-200" on:click={() => window.location.href = secondaryButton.link}>
              {secondaryButton.text} <DynamicIcon iconType={ICONS.ARROW_RIGHT} className="ml-1 size-4" />
            </Button>
          {/if}
        </div>
      </div>
      {#if image?.file?.url}
        <div class="relative mt-16 h-80 lg:mt-8">
          <img 
            class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" 
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
