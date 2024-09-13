<script lang="ts">
	import ArticleMeta from '$lib/components/blog/article-meta.svelte';
	import ArticleTitle from '$lib/components/blog/article-title.svelte';
	import BlogHeader from '$lib/components/blog/blog-header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@unified_undb" />
	<meta name="twitter:title" content={data.frontmatter.title} />
	<meta name="twitter:description" content={data.frontmatter.description} />
	<meta name="twitter:image" content="https://undb.io/images/banner.png" />
</svelte:head>

<BlogHeader title={data.frontmatter.title} description={data.frontmatter.description} />
<ArticleTitle title={data.frontmatter.title} />
<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />

<div class="mt-10 space-y-6">
	<svelte:component this={component} />
</div>
