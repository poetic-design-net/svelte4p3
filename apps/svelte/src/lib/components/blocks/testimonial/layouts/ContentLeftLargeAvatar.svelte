<script lang="ts">
  import type { Testimonial } from '../../types';

  export let testimonial: Testimonial;
</script>

<figure class="mt-10 flex flex-col items-start gap-8 sm:flex-row">
  <img class="size-24 rounded-full sm:size-32" src={testimonial.image.url} alt={testimonial.name} />
  {#if testimonial.testimonialheadline}
    <h3 class="mb-3 text-left text-lg font-semibold text-gray-900">
      {testimonial.testimonialheadline}
    </h3>
  {/if}
  <blockquote class="text-left text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
    <p>"{testimonial.quote}"</p>
  </blockquote>
  <figcaption class="mt-6">
    <div class="flex items-center space-x-3 text-base">
      <div class="font-semibold text-gray-900">{testimonial.name}</div>
      <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
        <circle cx="1" cy="1" r="1" />
      </svg>
      <div class="text-gray-600">{testimonial.position}</div>
    </div>
  </figcaption>
</figure>
