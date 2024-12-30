<script lang="ts">
  import type { HowItWorksProps } from '../../types'
  import { Button } from '$lib/components/ui/button'
  export let block: HowItWorksProps;
</script>

<section class="relative pt-20 bg-black overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -m-6 mb-12">
      <div class="w-full p-6">
        <h2 class="mb-16 max-w-xl font-heading font-bold text-6xl sm:text-7xl text-white">
          {block.title}
        </h2>
        <div class="flex flex-wrap -m-6">
          <div class="w-full lg:w-1/2 p-6">
            {#each block.steps as step}
              <div class="mb-11 lg:max-w-sm">
                <div class="flex flex-wrap -m-4">
                  <div class="w-auto p-4">
                    <div class="p-px max-w-max bg-gradient-cyan2 rounded-full">
                      <div class="flex justify-center items-center font-heading text-xl bg-gray-900 w-12 h-12 text-white rounded-full">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 p-4">
                    <h3 class="mb-4 font-heading font-medium text-xl text-white">
                      {step.title}
                    </h3>
                    <p class="text-gray-400 text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            {/each}
            <Button variant="default" size="lg">
              {block.ctaText}
            </Button>
          </div>
          {#if block.image}
            <div class="pl-4 lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2">
              <div class="relative max-w-max ml-auto">
                <img class="relative z-10 ml-auto rounded-lg" src={block.image.url} alt={block.image.alt}>

              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
