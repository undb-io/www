<script lang="ts">
	import type { ITemplate } from '$lib/types/template';
	import TemplateCard from './template-card.svelte';

	interface Props {
		templates: ITemplate[];
	}

	let { templates }: Props = $props();
</script>

<div class="grid grid-cols-12 gap-x-4 gap-y-6">
	{#each templates as template}
		<div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
			<TemplateCard {template} />
		</div>
	{/each}
</div>
