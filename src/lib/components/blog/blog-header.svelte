<script lang="ts">
	export let title: string;
	export let description: string;

	const siteTitle = 'Undb Blog';
	const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;
</script>

<svelte:head>
	<title>{formattedTitle}</title>

	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://undb.io/images/banner.png" />
</svelte:head>
