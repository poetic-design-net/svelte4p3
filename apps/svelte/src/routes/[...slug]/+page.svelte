<script lang="ts">
	import type { PageData } from './$types';
	import BlockRenderer from '$lib/components/blocks/BlockRenderer.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta?.title ?? 'Payload Monorepo Template'}</title>
</svelte:head>

{#if data.layout && Array.isArray(data.layout)}
	<BlockRenderer blocks={data.layout} />
{/if}
