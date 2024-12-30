<script lang="ts">
  import { ICONS } from '$payload/blocks/features';
  import { theme } from '$lib/stores/theme';
  
  export let iconType: typeof ICONS[keyof typeof ICONS];
  export let className = '';

  type IconModule = { default: any };
  
  // Icon mapping for MDI icons based on Payload icon types
  const getIconPath = (type: typeof iconType) => {
    const iconPaths = {
      [ICONS.DEPLOY]: 'arrow-up-bold',
      [ICONS.SSL]: 'lock',
      [ICONS.BACKUP]: 'server',
      [ICONS.LOGIN]: 'login',
      [ICONS.ARROW_RIGHT]: 'arrow-right'
    };
    return iconPaths[type] || 'help-circle';
  };

  // Load icons dynamically
  const loadIcon = async (type: typeof iconType) => {
    try {
      const iconPath = getIconPath(type);
      // Using a static import path instead of template literal
      switch (iconPath) {
        case 'arrow-up-bold':
          return (await import('virtual:icons/mdi/arrow-up-bold?raw')).default;
        case 'lock':
          return (await import('virtual:icons/mdi/lock?raw')).default;
        case 'server':
          return (await import('virtual:icons/mdi/server?raw')).default;
        case 'login':
          return (await import('virtual:icons/mdi/login?raw')).default;
        case 'arrow-right':
          return (await import('virtual:icons/mdi/arrow-right?raw')).default;
        default:
          return (await import('virtual:icons/mdi/help-circle?raw')).default;
      }
    } catch (error) {
      console.error(`Failed to load icon: ${type}`, error);
      return null;
    }
  };

  $: isDark = $theme === 'dark';
</script>

<div class={className}>
  {#await loadIcon(iconType)}
    <div class="animate-pulse dark:bg-gray-700 size-5" />
  {:then icon}
    {@html icon}
  {:catch error}
    <div class="bg-red-100 dark:bg-red-900 size-5" />
  {/await}
</div>
