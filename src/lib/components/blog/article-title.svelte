<script lang="ts">
	interface Props {
		slug?: string;
		title: string;
	}

	let { slug = '', title }: Props = $props();

	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-');

	const href = slug ? `/blog/${slug}` : '#' + id;
</script>

{#if slug}
	<h3
		class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl"
		class:large={!slug}
		{id}
	>
		<a {href}>
			{title}
		</a>
	</h3>
{:else}
	<h2
		class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl"
		class:large={!slug}
		{id}
	>
		<a {href}>
			{title}
		</a>
	</h2>
{/if}
