<script lang="ts">
	import { cn } from "$lib/utils";
	import { buttonVariants, type ButtonProps } from ".";
	
	type $$Props = ButtonProps;

	let className: string | undefined = undefined;
	export { className as class };
	export let variant: $$Props["variant"] = "default";
	export let size: $$Props["size"] = "default";
	export let type: $$Props["type"] = "button";
</script>

<button
	type={type}
	class={cn(buttonVariants({ variant, size, className }))}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</button>
