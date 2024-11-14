<script lang="ts">
	import { cn } from '$lib/utils';
	interface Props {
		class?: any;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', children }: Props = $props();
	
</script>

<div class={cn('grid w-full auto-rows-[20rem] grid-cols-3 gap-4', className)}>
	{@render children?.()}
</div>
