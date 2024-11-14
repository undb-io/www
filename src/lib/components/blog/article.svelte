<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<article class="prose" itemtype="https://schema.org/BlogPosting">
	{@render children?.()}
</article>

<svelte:head>
	<!-- head content -->
</svelte:head>

<style>
	article {
		margin-bottom: calc(var(--spacing-unit) * 8);
	}
</style>
