<script>
	import { toast, Toaster } from 'svelte-sonner';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<Toaster theme='dark' />
{@render children?.()}
