<script lang="ts">
	import type { PageData } from './$types';

	import BlogHeader from '$lib/components/blog/blog-header.svelte';
	import Article from '$lib/components/blog/article.svelte';
	import ArticleTitle from '$lib/components/blog/article-title.svelte';
	import ArticleMeta from '$lib/components/blog/article-meta.svelte';
	import ArticleDescription from '$lib/components/blog/article-description.svelte';

	interface Props {
		data: PageData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
</script>

<BlogHeader title="Blog | Undb" description="An awesome blog about undb" />

<div class="container mx-auto max-w-screen-lg space-y-6 pt-8">
	{#each data.blogs as { slug, title, author, description, date }}
		<Article>
			<ArticleTitle {slug} {title} />
			<ArticleMeta {author} {date} />
			<ArticleDescription {description} {slug} />
		</Article>
	{/each}
</div>

{@render children?.()}
