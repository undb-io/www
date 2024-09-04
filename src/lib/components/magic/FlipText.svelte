<script lang="ts">
	import { cn } from '$lib/utils';
	import { AnimatePresence, Motion } from 'svelte-motion';
	import { inview } from 'svelte-inview';

	export let inViewMargin = '-10px';
	export let once = false;
	export let word = 'Flip Text';
	export let duration = 0.5;
	export let delayMultiple = 0.08;
	export let framerProps = {
		hidden: { rotateX: -90, opacity: 0 },
		visible: { rotateX: 0, opacity: 1 }
	};
	let className: any = '';
	export { className as class };
	let wordsspilit = word.split('');
</script>

<div
	use:inview={{ rootMargin: inViewMargin, unobserveOnEnter: once }}
	class="flex justify-center space-x-2"
>
	<AnimatePresence let:item list={[{ key: wordsspilit }]}>
		{#each wordsspilit as letter, i}
			<Motion
				initial="hidden"
				animate="visible"
				exit="hidden"
				variants={framerProps}
				transition={{
					duration: duration,
					delay: i * delayMultiple
				}}
				let:motion
			>
				<span use:motion class={cn('origin-center drop-shadow-sm', className)}>
					{letter}
				</span>
			</Motion>
		{/each}
	</AnimatePresence>
</div>
