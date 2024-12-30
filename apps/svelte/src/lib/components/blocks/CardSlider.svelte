<script lang="ts">
  import type { CardSliderProps } from './types'
  import { onMount } from 'svelte';
  import { Swiper } from 'swiper';
  import { Navigation, Pagination, Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  export let block: CardSliderProps
  
  let swiperContainer: HTMLElement;
  let isInitialized = false;

  onMount(() => {
    const modules = [Navigation];
    const settings = block.sliderSettings || {};
    
    // Add pagination if needed
    if (settings.navigation === 'dots' || settings.navigation === 'both') {
      modules.push(Pagination);
    }
    
    // Add autoplay if enabled
    if (settings.autoplay?.enabled) {
      modules.push(Autoplay);
    }

    const swiper = new Swiper(swiperContainer, {
      modules,
      slidesPerView: "auto",
      spaceBetween: 24,
      breakpoints: {
        640: {
          slidesPerView: "auto",
        },
        1024: {
          slidesPerView: "auto",
        }
      },
      loop: settings.loop ?? false,
      autoplay: settings.autoplay?.enabled ? {
        delay: settings.autoplay.delay ?? 3000,
        pauseOnMouseEnter: settings.autoplay.pauseOnHover ?? true,
        disableOnInteraction: false
      } : false,
      navigation: (settings.navigation === 'arrows' || settings.navigation === 'both') ? {
        nextEl: '.card-slider-next',
        prevEl: '.card-slider-prev'
      } : false,
      pagination: (settings.navigation === 'dots' || settings.navigation === 'both') ? {
        el: '.swiper-pagination',
        clickable: true
      } : false
    });

    isInitialized = true;
    
    return () => {
      swiper.destroy();
    };
  });
</script>

<section class="relative pt-28 pb-32 bg-black overflow-hidden">
  {#if block.content?.backgroundImage?.url}
    <img 
      class="h-full absolute top-0 left-1/2 transform -translate-x-1/2" 
      src={block.content.backgroundImage.url} 
      alt={block.content.backgroundImage.alt || ''}
    />
  {/if}

  <div class="relative z-10">
    <div class="mx-auto container max-w-7xl">
      {#if block.content?.title || block.content?.description}
        <div class="mb-16 max-w-xl">
          {#if block.content?.title}
            <h2 class="mb-6 font-heading font-semibold text-white text-6xl sm:text-7xl">
              {block.content.title}
            </h2>
          {/if}
          {#if block.content?.description}
            <p class="text-gray-400 text-lg">
              {block.content.description}
            </p>
          {/if}
        </div>
      {/if}
    </div>

    {#if block.content?.cards}
      <div class="pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <div bind:this={swiperContainer} class="swiper card-slider overflow-visible" class:initialized={isInitialized}>
          <div class="swiper-wrapper">
            {#each block.content.cards as card}
              <div class="swiper-slide">
                <div class="bg-gray-900 py-11 px-9 rounded-lg h-full">
                  {#if card.number}
                    <div class="mb-11 flex justify-center items-center font-heading text-xl bg-slate-300 w-12 h-12 text-gray-900 rounded-full">
                      {card.number}
                    </div>
                  {/if}
                  {#if card.text}
                    <p class="text-white text-xl">
                      {card.text}
                    </p>
                  {/if}
                </div>
              </div>
            {/each}
          </div>

          {#if block.sliderSettings?.navigation !== 'none'}
            {#if block.sliderSettings?.navigation === 'dots' || block.sliderSettings?.navigation === 'both'}
              <div class="swiper-pagination"></div>
            {/if}

            {#if block.sliderSettings?.navigation === 'arrows' || block.sliderSettings?.navigation === 'both'}
              <div class="flex flex-wrap justify-center md:justify-end mr-11 mt-11">
                <div class="w-auto p-2">
                  <button class="card-slider-prev control-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 19L3 12M3 12L10 5M3 12L21 12" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
                <div class="w-auto p-2">
                  <button class="card-slider-next control-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 5L21 12M21 12L14 19M21 12L3 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            {/if}
          {/if}
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  :global(.card-slider) {
    opacity: 0;
    visibility: hidden;
    margin: 0;
    transition: opacity 0.3s ease;
  }

  :global(.card-slider.initialized) {
    opacity: 1;
    visibility: visible;
  }

  :global(.card-slider .swiper-wrapper) {
    display: flex;
    align-items: stretch;
  }

  :global(.card-slider .swiper-slide) {
    height: auto;
    padding: 0 12px;
    width: 100%;
  }

  @media (min-width: 640px) {
    :global(.card-slider .swiper-slide) {
      width: 45%;
    }
  }

  @media (min-width: 1024px) {
    :global(.card-slider .swiper-slide) {
      width: 30%;
    }
  }

  :global(.card-slider .swiper-pagination) {
    position: relative;
    margin-top: 2rem;
  }

  :global(.card-slider .swiper-pagination-bullet) {
    background-color: rgb(79 70 229);
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  :global(.card-slider .swiper-pagination-bullet-active) {
    background-color: rgb(79 70 229);
    opacity: 1;
    width: 15px;
    border-radius: 50px;
  }

  .control-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: opacity 0.3s ease;
  }

  .control-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
