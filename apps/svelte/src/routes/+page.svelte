<script lang="ts">
    import type { Block } from '$lib/components/blocks/types';
    import BlockRenderer from '$lib/components/blocks/BlockRenderer.svelte';

    interface PageData {
        navigation: any[];
        meta?: {
            title?: string;
        };
        layout?: Block[];
    }

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.meta?.title || 'Startseite'} | FIFY w3bMGMT</title>
</svelte:head>

{#if data.layout}
    <BlockRenderer blocks={data.layout} />
{:else}
    <div class="container mx-auto p-4">
        <p class="text-center text-gray-600">Laden...</p>
    </div>
{/if}
