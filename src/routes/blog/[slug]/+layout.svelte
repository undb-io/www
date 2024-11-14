<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="container mx-auto max-w-screen-lg flex-1 overflow-hidden pt-8">
	<article class="prose">
		{@render children?.()}
	</article>
</div>
