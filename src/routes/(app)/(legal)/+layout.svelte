<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<main class="container mx-auto max-w-screen-xl pt-5">
	<article class="prose lg:prose-xl">
		{@render children?.()}
	</article>
</main>
