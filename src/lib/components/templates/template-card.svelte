<script lang="ts">
	import type { ITemplate } from '$lib/types/template';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';

	interface Props {
		template: ITemplate;
	}

	let { template }: Props = $props();
</script>

<a
	href={`/templates/${template.id}`}
	title={template.name}
	class="flex flex-col overflow-hidden rounded-lg border bg-white shadow-md"
>
	<AspectRatio ratio={16 / 9} class="overflow-hidden bg-muted">
		<img src={template.cover} alt={template.name} class="rounded-md object-cover" />
	</AspectRatio>

	<div class="space-y-2 px-3 pb-4 pt-2">
		<h2 class="text-lg font-bold">
			<span class="mr-2">
				{template.icon}
			</span>

			{template.name}
		</h2>
		<p class="line-clamp-2 overflow-hidden text-sm text-gray-500" title={template.description}>
			{template.description}
		</p>
	</div>
</a>
