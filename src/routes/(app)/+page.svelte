<script lang="ts">
	import { seo } from '$lib';
	import HeroSection from '$lib/components/landing/HeroSection.svelte';
	import SphereMask from '$lib/components/magic/SphereMask/SphereMask.svelte';
	import { onMount } from 'svelte';
	import type { Component } from 'svelte';

	let ViewsSection: Component,
		TemplateSection: Component,
		PricingSection: Component,
		RoadmapSection: Component,
		StackSection: Component,
		SubmitBugSection: Component;

	onMount(async () => {
		ViewsSection = (await import('$lib/components/landing/ViewsSection.svelte')).default;
		TemplateSection = (await import('$lib/components/landing/TemplateSection.svelte')).default;
		PricingSection = (await import('$lib/components/landing/PricingSection.svelte')).default;
		RoadmapSection = (await import('$lib/components/landing/RoadmapSection.svelte')).default;
		StackSection = (await import('$lib/components/landing/StackSection.svelte')).default;
		SubmitBugSection = (await import('$lib/components/landing/SubmitBugSection.svelte')).default;
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
	<!-- 其他元标签保持不变 -->
</svelte:head>

<HeroSection />
<SphereMask />

{#if ViewsSection}
	<svelte:component this={ViewsSection} />
	<SphereMask />
{/if}

{#if TemplateSection}
	<svelte:component this={TemplateSection} />
	<SphereMask />
{/if}

{#if PricingSection}
	<svelte:component this={PricingSection} />
	<SphereMask />
{/if}

{#if RoadmapSection}
	<svelte:component this={RoadmapSection} />
	<SphereMask />
{/if}

{#if StackSection}
	<svelte:component this={StackSection} />
	<SphereMask />
{/if}

{#if SubmitBugSection}
	<svelte:component this={SubmitBugSection} />
{/if}
