<script lang="ts">
	import {
		ArrowRightIcon,
		BookIcon,
		CloudyIcon,
		FileIcon,
		GithubIcon,
		PackageIcon
	} from 'lucide-svelte';
	import BorderBeam from '$lib/components/magic/borderbeam/BorderBeam.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { ObserverEventDetails } from 'svelte-inview';
	import { inview } from 'svelte-inview';

	// Images
	import HeroDarkImg from '$lib/imgs/hero.jpeg';
	import HeroLightImg from '$lib/imgs/hero.jpeg';
	import DotPattern from '../magic/DotPattern.svelte';
	import AnimatedGradientText from '../magic/AnimatedGradientText.svelte';
	import { cn } from '$lib/utils';
	let inView = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		// console.log(detail);
		inView = detail.inView;
	};
</script>

<section id="hero" class="relative mx-auto mt-20 max-w-7xl px-6 text-center sm:mt-32 md:px-8">
	<DotPattern class="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
	<a href="https://app.undb.io" target="_blank" rel="noopener noreferrer">
		<div class="z-10 flex items-center justify-center">
			<AnimatedGradientText>
				🎉 <hr class="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
				{' '}
				<span
					class={cn(
						`animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
					)}
				>
					Undb is now in tech preview.
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
					><path d="m9 18 6-6-6-6" /></svg
				>
			</AnimatedGradientText>
		</div>
	</a>
	<h1
		class="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
	>
		Create and share your own database
		<br class="hidden md:block" />
		{' '}
		with ease.
	</h1>
	<p
		class="mb-12 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl"
	>
		Private first, local first, open source.
		<br class="hidden md:block" />
		Nocode platform & BaaS you can host yourself.
	</p>
	<div class="flex flex-col justify-center gap-4 sm:flex-row">
		<Button
			href="https://app.undb.io"
			target="_blank"
			rel="noopener noreferrer"
			class="-translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
		>
			<CloudyIcon class="mr-2 h-4 w-4" />
			<span>Try undb cloud for free </span>
			<ArrowRightIcon
				class="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
			/>
		</Button>
		<Button
			variant="outline"
			href="https://docs.undb.io"
			target="_blank"
			rel="noopener noreferrer"
			class="-translate-y-4 animate-fade-in gap-1 rounded-lg opacity-0 ease-in-out [--animation-delay:600ms]"
		>
			<BookIcon class="mr-2 h-4 w-4" />
			<span>Documentation</span>
		</Button>
		<Button
			variant="outline"
			href="https://template.undb.io"
			target="_blank"
			rel="noopener noreferrer"
			class="-translate-y-4 animate-fade-in gap-1 rounded-lg opacity-0 ease-in-out [--animation-delay:600ms]"
		>
			<PackageIcon class="mr-2 h-4 w-4" />
			<span>Template</span>
		</Button>
		<Button
			variant="outline"
			href="https://github.com/undb-io/undb"
			target="_blank"
			rel="noopener noreferrer"
			class="-translate-y-4 animate-fade-in gap-1 rounded-lg opacity-0 ease-in-out [--animation-delay:600ms]"
		>
			<GithubIcon class="mr-2 h-4 w-4" />
			<span>Github</span>
		</Button>
	</div>

	<div class="mt-6 flex justify-center">
		<a
			href="https://www.producthunt.com/posts/undb-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-undb&#0045;2"
			target="_blank"
			><img
				src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=485793&theme=light"
				alt="Undb - Open&#0032;Source&#0032;Airtable&#0032;Alternative&#0032;&#0038;&#0032;Backend&#0032;as&#0032;a&#0032;Service | Product Hunt"
				style="width: 250px; height: 54px;"
				width="250"
				height="54"
			/></a
		>
	</div>
	<div
		use:inview={{
			unobserveOnEnter: true,
			rootMargin: '-100px'
		}}
		on:inview_change={handleChange}
		class="sm:md-32 relative mt-8 animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
	>
		<div
			class="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] {inView
				? 'before:animate-image-glow'
				: ''}"
		>
			<BorderBeam
				size={200}
				duration={12}
				delay={0}
				colorFrom="var(--color-one)"
				colorTo="var(--color-two)"
			/>

			<img
				src={HeroDarkImg}
				alt="HeroDarkImage"
				class="relative hidden size-full rounded-[inherit] border object-contain dark:block"
			/>
			<img
				src={HeroLightImg}
				alt="HeroLightImage"
				class="relative block size-full rounded-[inherit] border object-contain dark:hidden"
			/>
		</div>
	</div>
</section>
