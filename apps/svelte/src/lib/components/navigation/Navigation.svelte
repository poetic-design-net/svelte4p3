<script lang="ts">
  import type { NavigationData } from '$lib/types/navigation';
  import MegaMenu from './MegaMenu.svelte';
  import MobileMenu from './MobileMenu.svelte';
  import { getThemeClasses } from '$lib/stores/theme';

  export let data: NavigationData;

  let isMenuOpen = false;
  let hoveredItem: string | null = null;
  $: navigation = data.navigation;

  const handleMouseEnter = (itemLabel: string) => {
    hoveredItem = itemLabel;
  };

  const handleMouseLeave = () => {
    hoveredItem = null;
  };

  const handleMobileMenuClose = () => {
    isMenuOpen = false;
  };

  const handleMobileMenuDispatch = (event: 'close') => {
    if (event === 'close') handleMobileMenuClose();
  };

  // Vordefinierte Theme-Klassen
  const linkClasses = getThemeClasses('text-sm/6 font-semibold');
  const menuButtonClasses = getThemeClasses('-m-2.5 inline-flex items-center justify-center rounded-md p-2.5');
</script>

<header class="absolute inset-x-0 top-0 z-50">
  <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    <!-- Logo -->
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Ihr Unternehmen</span>
        <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
      </a>
    </div>

    <!-- Mobile menu button -->
    <div class="flex lg:hidden">
      <button 
        type="button" 
        class={menuButtonClasses}
        on:click={() => isMenuOpen = true}
      >
        <span class="sr-only">Hauptmenü öffnen</span>
        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <!-- Desktop navigation -->
    <div class="hidden lg:flex lg:gap-x-12">
      {#if navigation}
        {#each navigation as item}
          <div 
            class="relative group"
            on:mouseenter={() => handleMouseEnter(item.label)}
            on:mouseleave={handleMouseLeave}
          >
            <a 
              href={item.link} 
              class={linkClasses}
            >
              {item.label}
            </a>
            {#if item.megamenu?.enabled}
              <div 
                class="absolute top-full left-1/2 -translate-x-1/2 h-8 w-[140%]"
                on:mouseenter={() => handleMouseEnter(item.label)}
              />
              {#if hoveredItem === item.label}
                <MegaMenu megamenu={item.megamenu} />
              {/if}
            {/if}
          </div>
        {/each}
      {/if}
    </div>

    <!-- Desktop sign in -->
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" class={linkClasses}>
        Anmelden <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </nav>

  <!-- Mobile menu -->
  <MobileMenu 
    navigation={navigation} 
    isOpen={isMenuOpen} 
    dispatch={handleMobileMenuDispatch}
  />
</header>
