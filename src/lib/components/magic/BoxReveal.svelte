<script>
	import { inview } from 'svelte-inview';
	import { Motion, useAnimation } from 'svelte-motion';

	/**
	 * @typedef {Object} Props
	 * @property {string} [width]
	 * @property {string} [boxColor]
	 * @property {number} [duration]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let {
		width = 'fit-content',
		boxColor = '#5046e6',
		duration = 0.5,
		children
	} = $props();

	//   Animation Controls
	let mainControls = useAnimation();
	let sideControls = useAnimation();

	let viewEnter = () => {
		// console.log("view entered");
		mainControls.start('visible');
		sideControls.start('visible');
	};
	let viewLeave = () => {
		// console.log("view exited");
		mainControls.start('hidden');
		sideControls.start('hidden');
	};
</script>

<div
	class="relative overflow-hidden"
	style="width:{width}"
	use:inview
	oninview_enter={viewEnter}
	oninview_leave={viewLeave}
>
	<Motion
		
		variants={{
			hidden: { opacity: 0, y: 75 },
			visible: { opacity: 1, y: 0 }
		}}
		initial="hidden"
		animate={mainControls}
		transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
	>
		{#snippet children({ motion })}
				<div use:motion>
				{#if children}{@render children()}{:else}Default{/if}
			</div>
					{/snippet}
		</Motion>
	<Motion
		variants={{
			hidden: { left: 0 },
			visible: { left: '100%' }
		}}
		initial="hidden"
		animate={sideControls}
		transition={{ duration: duration ? duration : 0.5, ease: 'easeIn' }}
		
	>
		{#snippet children({ motion })}
				<div
				style="background:{boxColor}"
				class="absolute bottom-[4px] left-0 right-0 top-[4px] z-40"
				use:motion
			></div>
					{/snippet}
		</Motion>
</div>
