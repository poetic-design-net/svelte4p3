<script lang="ts">
  import Default from './blogPosts/layouts/Default.svelte';
  
  export let block: {
    layout?: string;
    title: string;
    description: string;
    articles: {
      id: string;
      title: string;
      category: string;
      readTime: string;
      featuredImage: {
        url: string;
      };
      slug: string;
    }[];
  };

  const layouts = {
    default: Default,
  } as const;

  type LayoutKey = keyof typeof layouts;
  $: Component = layouts[(block.layout as LayoutKey) || 'default'];
</script>

<svelte:component this={Component} {block} />
