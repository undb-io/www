<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import mixpanel from 'mixpanel-browser';
	import { env } from '$env/dynamic/public';

	onMount(() => {
		if (env.PUBLIC_MIXPANEL_TOKEN) {
			mixpanel.init(env.PUBLIC_MIXPANEL_TOKEN);
		}
	});
</script>

<ModeWatcher />

<slot></slot>
