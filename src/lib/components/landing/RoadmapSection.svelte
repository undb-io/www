<script lang="ts">
	import BlurFade from '../magic/BlurFade/BlurFade.svelte';
	import BorderBeam from '../magic/borderbeam/BorderBeam.svelte';
</script>

<section class="container bottom-0 -mt-10 w-full space-y-6 rounded-sm px-5 lg:px-20">
	<BlurFade delay={0.25}>
		<h1 class="mb-8 text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
			Roadmap of undb 👋
		</h1>
	</BlurFade>
	<BlurFade delay={0.25 * 2}>
		<p class="text-left text-xl text-muted-foreground">This view is shared from undb.</p>
	</BlurFade>

	<BlurFade delay={0.25 * 3}>
		<div class="h-[700px] w-full rounded-lg border">
			<BorderBeam
				size={200}
				duration={12}
				delay={0}
				colorFrom="var(--color-one)"
				colorTo="var(--color-two)"
			/>
			<iframe
				title="undb roadmap"
				src="https://app.undb.io/s/v/shrcoo7d32u6bk3"
				frameborder="0"
				width="100%"
				height="100%"
				class="rounded-md border-0 shadow-md"
				style="background: transparent"
			></iframe>
		</div>
	</BlurFade>
</section>
