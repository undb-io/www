<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	let selectedImage: string = '';
	let thumbnails: string[] = [];

	onMount(() => {
		thumbnails = data.template.images || [];
		if (thumbnails.length > 0) {
			selectedImage = thumbnails[0];
		}
	});

	function selectImage(image: string) {
		selectedImage = image;
	}
</script>

<svelte:head>
	<title>{data.template.name} | Undb Templates</title>
	<meta name="description" content={data.template.description} />
	<meta property="og:title" content="{data.template.name} | Undb Templates" />
	<meta property="og:description" content={data.template.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://undb.io/templates/${data.template.id}`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{data.template.name} | Undb Templates" />
	<meta name="twitter:description" content={data.template.description} />
</svelte:head>

<div class="flex w-full flex-col justify-between gap-4 md:flex-row">
	<h1 class="flex gap-2 text-5xl font-bold md:items-center">
		<span>
			{data.template.icon}
		</span>
		<span>
			{data.template.name}
		</span>
	</h1>

	<Button class="md:w-80" href={`${env.PUBLIC_UNDB_URL}/templates/${data.template.id}`}>
		View template
	</Button>
</div>

<p class="text-md text-muted-foreground md:w-1/2">{data.template.description}</p>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	<div>
		<div class="md:mt-8">
			<div class="prose prose-sm max-w-none">
				{@html data.template.detail}
			</div>
		</div>
	</div>
	<div>
		{#if selectedImage}
			<div class="mt-8 flex flex-col space-y-4">
				<div class="relative h-[500px] w-full overflow-hidden rounded-sm border shadow-sm">
					<img
						src={selectedImage}
						alt="Preview"
						class="absolute inset-0 h-full w-full object-cover object-left-top"
					/>
				</div>
			</div>
		{/if}

		<div class="mt-4 flex flex-wrap gap-4">
			{#each thumbnails as thumbnail, index}
				<button
					data-selected={selectedImage === thumbnail}
					class="relative h-24 w-36 cursor-pointer overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg data-[selected=true]:border data-[selected=true]:border-primary"
					on:click={() => selectImage(thumbnail)}
				>
					<img
						src={thumbnail}
						alt={`缩略图 ${index + 1}`}
						class="absolute inset-0 h-full w-full object-cover"
					/>
				</button>
			{/each}
		</div>
	</div>
</div>
