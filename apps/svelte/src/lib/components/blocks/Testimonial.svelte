<script lang="ts">
  import type { TestimonialBlock } from './types';
  import { onMount } from 'svelte';
  import { Swiper } from 'swiper';
  import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';
  import Default from './testimonial/layouts/Default.svelte';
  import ContentLeftLargeAvatar from './testimonial/layouts/ContentLeftLargeAvatar.svelte';
  import GridWithSidebar from './testimonial/layouts/GridWithSidebar.svelte';

  export let block: TestimonialBlock;
  
  let swiperContainer: HTMLElement;

  onMount(() => {
    const swiper = new Swiper(swiperContainer, {
      modules: [Autoplay, Pagination, EffectFade],
      effect: 'fade',
      slidesPerView: 1,
      spaceBetween: 30,
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    return () => {
      swiper.destroy();
    };
  });
</script>

{#if block.layout === 'grid-with-sidebar'}
  <svelte:component this={GridWithSidebar} {block} />
{:else}
  <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <div bind:this={swiperContainer} class="swiper testimonials-swiper">
        <div class="swiper-wrapper">
          {#each block.testimonials as testimonial}
            <div class="swiper-slide">
              {#if block.layout === 'content-left-large-avatar'}
                <svelte:component this={ContentLeftLargeAvatar} {testimonial} />
              {:else}
                <svelte:component this={Default} {testimonial} />
              {/if}
            </div>
          {/each}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
{/if}

<style>
  :global(.testimonials-swiper) {
    padding-bottom: 3rem !important;
  }

  :global(.testimonials-swiper .swiper-pagination-bullet) {
    background-color: rgb(79 70 229);
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  :global(.testimonials-swiper .swiper-pagination-bullet-active) {
    background-color: rgb(79 70 229);
    opacity: 1;
    width: 15px;
    border-radius: 50px;
  }

  :global(.testimonials-swiper .swiper-slide) {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  :global(.testimonials-swiper .swiper-slide-active) {
    opacity: 1;
  }
</style>
