<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.meta?.title} | Payload Monorepo Template</title>
</svelte:head>

<h1>{data.meta?.title}</h1>
