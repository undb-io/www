<script>
	import { dev } from '$app/environment';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />

<slot></slot>

<svelte:head>
	{#if !dev}
		<script
			async
			defer
			src="http://89.116.212.166:12345/tracker.js"
			data-website-id="cm08y36hv0001wxcraa1zy1dm"
		></script>
	{/if}
</svelte:head>
