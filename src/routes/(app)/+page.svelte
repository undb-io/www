<script lang="ts">
	import { seo } from '$lib';
	import HeroSection from '$lib/components/landing/HeroSection.svelte';
	import SphereMask from '$lib/components/magic/SphereMask/SphereMask.svelte';
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
</svelte:head>

<HeroSection />
<SphereMask />

{#await import('$lib/components/landing/ViewsSection.svelte') then { default: ViewsSection }}
	<ViewsSection />
	<SphereMask />
{/await}

{#await import('$lib/components/landing/TemplateSection.svelte') then { default: TemplateSection }}
	<TemplateSection />
	<SphereMask />
{/await}

{#await import('$lib/components/landing/StackSection.svelte') then { default: StackSection }}
	<StackSection />
	<SphereMask />
{/await}
