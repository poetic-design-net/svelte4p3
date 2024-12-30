<script lang="ts">
	import '@local/ui/styles.css'
  import '../app.css';
  import { theme } from '$lib/stores/theme';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import Navigation from '$lib/components/navigation/Navigation.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { shouldShowNavigation } from '$lib/utils/routes';

  export let data: {
    navigation: Array<{
      label: string;
      link: string;
      megamenu?: {
        enabled: boolean;
        columns: Array<{
          title: string;
          items: Array<{
            label: string;
            link: string;
            description?: string;
          }>;
        }>;
      };
    }>;
  };

  onMount(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme.setTheme(prefersDark ? 'dark' : 'light');

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      theme.setTheme(e.matches ? 'dark' : 'light');
    });
  });

  $: if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', $theme === 'dark');
  }
</script>

<div class="min-h-screen bg-background text-foreground dark:bg-gray-900/95">
  {#if shouldShowNavigation($page?.url?.pathname)}
    <Navigation {data} />
    <ThemeToggle />
  {/if}
  <slot />
</div>

<style>
  :global(:root) {
    --background: #ffffff;
    --foreground: #000000;
  }

  :global(.dark) {
    --background: #0a0a0a;
    --foreground: #ffffff;
  }

  .bg-background {
    background-color: var(--background);
  }

  .text-foreground {
    color: var(--foreground);
  }
</style>
