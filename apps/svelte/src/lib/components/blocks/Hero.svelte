<script lang="ts">
  import type { HeroProps } from './types';
  import { theme } from '$lib/stores/theme';
  import { HERO_LAYOUTS } from '$payload/blocks/hero';
  import Centered from './hero/layouts/Centered.svelte';
  import LeftAligned from './hero/layouts/LeftAligned.svelte';
  import Split from './hero/layouts/Split.svelte';
  import Minimal from './hero/layouts/Minimal.svelte';
  
  export let block: HeroProps;

  $: backgroundImageUrl = block.backgroundImage 
    ? typeof block.backgroundImage === 'string' 
      ? block.backgroundImage 
      : block.backgroundImage.url ?? undefined
    : undefined;

  $: isDark = $theme === 'dark';
  $: overlayOpacity = `bg-black/${block.overlay?.opacity ?? 50}`;

  import type { BackgroundSettings } from './types';

  let backgroundSettings: BackgroundSettings;
  
  $: {
    const type = block.backgroundType || 
      (typeof block.backgroundImage === 'object' ? 
        block.backgroundImage?.metadata?.backgroundSettings?.type : undefined) || 
      (backgroundImageUrl?.match(/\.(mp4|webm|ogg|mov)$/) ? 'video' : 'image');
      
    backgroundSettings = {
      type,
      ...(typeof block.backgroundImage === 'object' ? 
        block.backgroundImage?.metadata?.backgroundSettings || {} : {})
    };
  }
  
  $: console.log('Block Data:', block);
  $: console.log('Background Settings:', backgroundSettings);
  $: console.log('Background Image URL:', backgroundImageUrl);
  $: console.log('Background Type:', backgroundSettings.type);
  
  // Apply background styles
  $: backgroundStyle = () => {
    if (backgroundSettings.type === 'color') {
      return `background-color: ${backgroundSettings.color}`;
    }
    if (backgroundSettings.type === 'gradient') {
      return `background: linear-gradient(${backgroundSettings.angle}deg, ${backgroundSettings.from}, ${backgroundSettings.to})`;
    }
    return '';
  };

  function getImageBrightness(img: HTMLImageElement): number {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return 0.5;
    
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let totalBrightness = 0;
    let pixelCount = 0;
    
    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      totalBrightness += brightness;
      pixelCount++;
    }
    
    return pixelCount > 0 ? totalBrightness / pixelCount : 0.5;
  }

  const layouts: Record<string, typeof Centered> = {
    [HERO_LAYOUTS.CENTERED]: Centered,
    [HERO_LAYOUTS.LEFT_ALIGNED]: LeftAligned,
    [HERO_LAYOUTS.SPLIT]: Split,
    [HERO_LAYOUTS.MINIMAL]: Minimal,
  };

  $: selectedLayout = layouts[block.layout ?? HERO_LAYOUTS.CENTERED] || Centered;
</script>

<section class="h-screen overflow-hidden relative isolate" style={backgroundStyle()}>
  <!-- Background Layer (z-index: -20) -->
  {#if backgroundSettings.type === 'video' && backgroundImageUrl}
    <div class="absolute inset-0 -z-20">
      <video
        autoplay
        muted
        loop
        playsinline
        class="h-full w-full object-cover"
      >
        {#if backgroundImageUrl.endsWith('.webm')}
          <source src={backgroundImageUrl} type="video/webm" />
        {:else if backgroundImageUrl.endsWith('.mp4')}
          <source src={backgroundImageUrl} type="video/mp4" />
        {:else if backgroundImageUrl.endsWith('.ogg')}
          <source src={backgroundImageUrl} type="video/ogg" />
        {:else if backgroundImageUrl.endsWith('.mov')}
          <source src={backgroundImageUrl} type="video/quicktime" />
        {/if}
        Your browser does not support the video tag.
      </video>
    </div>
  {:else if backgroundImageUrl}
    <div class="absolute inset-0 -z-20">
      <img
        src={backgroundImageUrl}
        alt=""
        class="h-full w-full object-cover"
        on:load={(e) => {
          const img = e.target as HTMLImageElement;
          const brightness = getImageBrightness(img);
          const parent = img.parentElement as HTMLElement;
          parent.style.setProperty('--image-brightness', brightness.toString());
          parent.classList.toggle('dark-text', brightness < 0.5);
        }}
      />
    </div>
  {/if}

  <!-- Overlay Layer (z-index: -10) -->
  {#if backgroundImageUrl}
    <div class="absolute inset-0 -z-10 {overlayOpacity} mix-blend-multiply dark:bg-gray-900/80" />
  {/if}

  <!-- Content Layer (z-index: 0) -->
  <div class="relative">
    <svelte:component 
      this={layouts[block.layout ?? HERO_LAYOUTS.CENTERED]} 
      {block}
      {backgroundImageUrl}
      {overlayOpacity}
    />
  </div>
</section>
