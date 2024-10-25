<script lang="ts">
	import { seo } from '$lib';
	import HeroSection from '$lib/components/landing/HeroSection.svelte';
	import RoadmapSection from '$lib/components/landing/RoadmapSection.svelte';
	import SphereMask from '$lib/components/magic/SphereMask/SphereMask.svelte';
	import ViewsSection from '$lib/components/landing/ViewsSection.svelte';
	import TemplateSection from '$lib/components/landing/TemplateSection.svelte';
	import PricingSection from '$lib/components/landing/PricingSection.svelte';
	import StackSection from '$lib/components/landing/StackSection.svelte';
	import SubmitBugSection from '$lib/components/landing/SubmitBugSection.svelte';
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
	<!-- 其他元标签保持不变 -->
</svelte:head>

<HeroSection />
<SphereMask />

<ViewsSection />
<SphereMask />

<TemplateSection />
<SphereMask />

<PricingSection />
<SphereMask />

<RoadmapSection />
<SphereMask />

<StackSection />
<SphereMask />

<SubmitBugSection />
