<script lang="ts">
	import TemplateList from '$lib/components/templates/template-list.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let templates = data.templates.templates;
</script>

<h1 class="text-center text-5xl font-bold">Undb Templates</h1>
<p class="text-center font-bold">Build your next project with Undb templates.</p>

<TemplateList {templates} />
