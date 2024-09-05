<script lang="ts">
	import ArticleMeta from '$lib/components/blog/article-meta.svelte';
	import ArticleTitle from '$lib/components/blog/article-title.svelte';
	import BlogHeader from '$lib/components/blog/blog-header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<BlogHeader title={data.frontmatter.title} description={data.frontmatter.description} />
<ArticleTitle title={data.frontmatter.title} />
<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />

<div class="mt-10 space-y-6">
	<svelte:component this={component} />
</div>

<style>
	:global(p) {
		line-height: 32px;
	}

	:global(h1) {
		@apply text-2xl font-bold;
	}

	:global(h2) {
		@apply text-xl font-bold;
	}

	:global(h3) {
		@apply text-lg font-bold;
	}
</style>
