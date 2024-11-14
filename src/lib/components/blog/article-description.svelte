<script lang="ts">
	import Button from '../ui/button/button.svelte';

	interface Props {
		description: string;
		slug?: string;
	}

	let { description, slug = '' }: Props = $props();

	const href = slug && `/blog/${slug}`;
</script>

<p class="space-y-2">
	<span class="flex">
		{description}
	</span>

	{#if slug}
		<Button size="sm" variant="secondary" {href}>Read More &rarr;</Button>
	{/if}
</p>

<style>
	p {
		margin: 0;
		margin-bottom: calc(var(--spacing-unit) * 8);
	}
</style>
