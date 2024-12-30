<script lang="ts">
  import type { NavigationItem } from '$lib/types/navigation';
  import { getThemeClasses } from '$lib/stores/theme';
  import { Button } from '$lib/components/ui/button';

  export let navigation: NavigationItem[];
  export let isOpen: boolean;
  export let dispatch: (event: 'close') => void;

  const menuItemClasses = getThemeClasses('-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800');
  const subMenuItemClasses = getThemeClasses('-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50 dark:hover:bg-gray-800');
  const closeButtonClasses = getThemeClasses('-m-2.5 rounded-md p-2.5');
  const columnTitleClasses = getThemeClasses('mt-2 font-medium text-sm opacity-75');
</script>

{#if isOpen}
<div class="lg:hidden" role="dialog" aria-modal="true">
  <div class="fixed inset-0 z-50 bg-gray-900/20 dark:bg-gray-900/50"></div>
  <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10">
    <div class="flex items-center justify-between">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Ihr Unternehmen</span>
        <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
      </a>
      <Button 
        variant="ghost" 
        size="sm"
        class={closeButtonClasses}
        on:click={() => dispatch('close')}
      >
        <span class="sr-only">Menü schließen</span>
        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </Button>
    </div>
    <div class="mt-6 flow-root">
      <div class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/20">
        <div class="space-y-2 py-6">
          {#each navigation as item}
            <div>
              <a 
                href={item.link}
                class={menuItemClasses}
              >
                {item.label}
              </a>
              {#if item.megamenu?.enabled}
                {#each item.megamenu.columns as column}
                  <div class="pl-4">
                    <div class={columnTitleClasses}>
                      {column.title}
                    </div>
                    {#each column.items as subItem}
                      <a 
                        href={subItem.link}
                        class={subMenuItemClasses}
                      >
                        {subItem.label}
                      </a>
                    {/each}
                  </div>
                {/each}
              {/if}
            </div>
          {/each}
        </div>
        <div class="py-6">
          <a href="#" class={menuItemClasses}>Anmelden</a>
        </div>
      </div>
    </div>
  </div>
</div>
{/if}
