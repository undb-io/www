<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import mixpanel from 'mixpanel-browser';
	import { env } from '$env/dynamic/public';
	import type { LayoutData } from './$types';
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header.svelte';
	import { dev } from '$app/environment';

	export let data: LayoutData;

	onMount(() => {
		if (env.PUBLIC_MIXPANEL_TOKEN) {
			mixpanel.init(env.PUBLIC_MIXPANEL_TOKEN, {
				debug: true,
				track_pageview: true,
				persistence: 'localStorage'
			});
		}
	});
</script>

<svelte:head>
	{#if !dev}
		<script defer src="/script.js" data-website-id="04d52d33-eb58-4ea4-a369-3fa158bf3a02"></script>
	{/if}
</svelte:head>

<div class="flex min-h-screen flex-col bg-background pt-16 font-sans antialiased">
	<Header loggedIn={data.loggedIn} />

	<div class="flex-1">
		<slot></slot>
	</div>

	<Footer />
	<ModeWatcher />
</div>
