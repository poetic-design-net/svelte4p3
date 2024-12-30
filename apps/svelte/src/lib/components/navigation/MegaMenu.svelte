<script lang="ts">
  import type { MegaMenu } from '$lib/types/navigation';
  import { getThemeClasses } from '$lib/stores/theme';
  import { fade } from 'svelte/transition';

  export let megamenu: MegaMenu;

  const titleClasses = getThemeClasses('font-semibold text-gray-900 dark:text-gray-100');
  const itemClasses = getThemeClasses('block text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100');
  const descriptionClasses = getThemeClasses('mt-1 text-sm text-gray-600 dark:text-gray-400');
</script>

<div 
  class="absolute left-1/2 top-full z-10 mt-1 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-100/10"
  transition:fade={{ duration: 100 }}
  role="menu"
>
  <div class="p-4">
    {#each megamenu.columns as column}
      <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <div>
          <h3 class={titleClasses}>
            {column.title}
          </h3>
          <div class="mt-4 space-y-4">
            {#each column.items as item}
              <a 
                href={item.link}
                class={itemClasses}
                role="menuitem"
              >
                <div class="font-medium">{item.label}</div>
                {#if item.description}
                  <p class={descriptionClasses}>{item.description}</p>
                {/if}
              </a>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
