<script lang="ts">
  import type { Testimonial } from '../../types';

  export let testimonial: Testimonial;
</script>

<figure class="mt-10">
  {#if testimonial.testimonialheadline}
    <h3 class="mb-3 text-center text-lg font-semibold text-gray-900">
      {testimonial.testimonialheadline}
    </h3>
  {/if}
  <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
    <p>"{testimonial.quote}"</p>
  </blockquote>
  <figcaption class="mt-10">
    <img class="mx-auto size-10 rounded-full" src={testimonial.image.url} alt={testimonial.name} />
    <div class="mt-4 flex items-center justify-center space-x-3 text-base">
      <div class="font-semibold text-gray-900">{testimonial.name}</div>
      <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
        <circle cx="1" cy="1" r="1" />
      </svg>
      <div class="text-gray-600">{testimonial.position}</div>
    </div>
  </figcaption>
</figure>
