<script lang="ts">
	import '@local/ui/styles.css'
	import '../app.css';

	const { children } = $props();
</script>

<!-- eslint-disable-next-line @typescript-eslint/no-unsafe-call-->
{@render children()}
