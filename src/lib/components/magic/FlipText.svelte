<script lang="ts">
	import { cn } from '$lib/utils';
	import { AnimatePresence, Motion } from 'svelte-motion';
	import { inview } from 'svelte-inview';

	interface Props {
		inViewMargin?: string;
		once?: boolean;
		word?: string;
		duration?: number;
		delayMultiple?: number;
		framerProps?: any;
		class?: any;
	}

	let {
		inViewMargin = '-10px',
		once = false,
		word = 'Flip Text',
		duration = 0.5,
		delayMultiple = 0.08,
		framerProps = {
		hidden: { rotateX: -90, opacity: 0 },
		visible: { rotateX: 0, opacity: 1 }
	},
		class: className = ''
	}: Props = $props();
	
	let wordsspilit = word.split('');
</script>

<div
	use:inview={{ rootMargin: inViewMargin, unobserveOnEnter: once }}
	class="flex justify-center space-x-2"
>
	<AnimatePresence  list={[{ key: wordsspilit }]}>
		{#snippet children({ item })}
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
					
				>
					{#snippet children({ motion })}
								<span use:motion class={cn('origin-center drop-shadow-sm', className)}>
							{letter}
						</span>
												{/snippet}
						</Motion>
			{/each}
					{/snippet}
		</AnimatePresence>
</div>
