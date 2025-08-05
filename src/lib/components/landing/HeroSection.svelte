<script lang="ts">
	import { ArrowRightIcon, BookIcon, CloudyIcon, GithubIcon, PackageIcon } from 'lucide-svelte';
	import BorderBeam from '$lib/components/magic/borderbeam/BorderBeam.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { ObserverEventDetails } from 'svelte-inview';
	import { inview } from 'svelte-inview';

	// Images
	import HeroDarkImg from '$lib/imgs/hero.png';
	import HeroLightImg from '$lib/imgs/hero.png';
	import DotPattern from '../magic/DotPattern.svelte';
	import AnimatedGradientText from '../magic/AnimatedGradientText.svelte';
	import { cn } from '$lib/utils';
	let inView = $state(false);
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		inView = detail.inView;
	};
</script>

<section id="hero" class="relative mx-auto mt-20 max-w-7xl px-6 text-center sm:mt-32 md:px-8">
	<DotPattern class="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
	<a href="https://teable.ai">
		<div class="z-10 flex items-center justify-center">
			<AnimatedGradientText>
				🎉 <hr class="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
				{' '}
				<span
					class={cn(
						`animate-gradient inline bg-gradient-to-r from-[#0011FF] via-[#0091FF] to-[#00F0FF] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
					)}
				>
					Undb now join Teable
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
		Build your own Application
		<br class="hidden md:block" />
		{' '}
		in minutes.
	</h1>
	<p
		class="mb-12 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl"
	>
		Private first open source
		<br class="hidden md:block" />
		Nocode platform & BaaS you can host yourself.
	</p>
	<div class="animate-fade-in justify-center gap-4 space-y-2 ease-in-out [--animation-delay:600ms]">
		<div
			class="-translate-y-4 animate-fade-in text-sm text-gray-600 opacity-0 ease-in-out [--animation-delay:800ms]"
		>
			No signup required
		</div>
	</div>

	<div
		use:inview={{
			unobserveOnEnter: true,
			rootMargin: '-100px'
		}}
		oninview_change={handleChange}
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
