<script lang="ts">
	import BlurFade from '../magic/BlurFade/BlurFade.svelte';
	import BorderBeam from '../magic/borderbeam/BorderBeam.svelte';
</script>

<section class="container bottom-0 w-full space-y-6 rounded-sm px-5 lg:px-20">
	<BlurFade delay={0.25}>
		<h1 class="text-center text-3xl font-bold">Roadmap of undb 👋</h1>
	</BlurFade>
	<BlurFade delay={0.25 * 2}>
		<p class="text-center text-xl text-muted-foreground">This view is shared from undb.</p>
	</BlurFade>

	<BlurFade delay={0.25 * 3}>
		<div class="h-[400px] w-full rounded-lg border">
			<BorderBeam
				size={200}
				duration={12}
				delay={0}
				colorFrom="var(--color-one)"
				colorTo="var(--color-two)"
			/>
			<iframe
				title="undb roadmap"
				src="https://app.undb.io/s/v/shrd0q2m4dyijmh"
				frameborder="0"
				width="100%"
				height="100%"
				class="rounded-md border-0 shadow-md"
				style="background: transparent"
			></iframe>
		</div>
	</BlurFade>
</section>
