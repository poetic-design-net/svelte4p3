<script lang="ts">
  import type { TestimonialBlock } from '../../types';

  export let block: TestimonialBlock;
</script>

<section class="relative py-36 bg-gray-100 overflow-hidden">
  <div class="relative z-10 container mx-auto px-4">
    <div class="flex flex-wrap -m-6">
      <div class="w-full md:w-1/2 p-6">
        <h2 class="mb-16 md:max-w-md md:ml-auto font-heading font-semibold text-5xl sm:text-6xl text-gray-900">
          {block.headline || 'What people are saying'}
        </h2>
        {#if block.testimonials[0]}
          <div class="p-12 bg-white rounded-lg">
            {#if block.testimonials[0].testimonialheadline}
              <h3 class="mb-5 font-heading font-medium text-xl text-black">
                {block.testimonials[0].testimonialheadline}
              </h3>
            {/if}
            <p class="mb-7 text-lg text-black">
              "{block.testimonials[0].quote}"
            </p>
            <div class="flex flex-wrap -m-1.5">
              <div class="w-auto p-1.5">
                <img class="size-12 rounded-full" src={block.testimonials[0].image.url} alt={block.testimonials[0].name} />
              </div>
              <div class="w-auto p-1.5">
                <h3 class="font-heading font-semibold text-gray-900 text-lg">
                  {block.testimonials[0].name}
                </h3>
                <p class="text-sm text-gray-600">
                  {block.testimonials[0].position}
                </p>
              </div>
            </div>
          </div>
          
        {/if}
        
      </div>
      
      <div class="w-full md:w-1/2 p-6">
        <div class="flex flex-wrap -m-6 h-full">
          {#each block.testimonials.slice(1, 3) as testimonial}
            <div class="w-full lg:w-auto p-6">
              <div class="p-12 bg-white rounded-lg">
                {#if testimonial.testimonialheadline}
                  <h3 class="mb-5 font-heading font-medium text-xl text-black">
                    {testimonial.testimonialheadline}
                  </h3>
                {/if}
                <p class="mb-7 text-lg text-black">
                  "{testimonial.quote}"
                </p>
                <div class="flex flex-wrap -m-1.5">
                  <div class="w-auto p-1.5">
                    <img class="size-12 rounded-full" src={testimonial.image.url} alt={testimonial.name} />
                  </div>
                  <div class="w-auto p-1.5">
                    <h3 class="font-heading font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p class="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/each}
         
        </div>
      </div>
    </div>
  </div>
</section>
