<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import { GridIcon, KanbanIcon, GalleryThumbnailsIcon, FormInputIcon } from 'lucide-svelte';

	const views = [
		{
			name: 'Grid View',
			description: 'A simple and intuitive grid view to display your data.',
			image: '/images/views/grid-view.jpeg',
			icon: GridIcon
		},
		{
			name: 'Kanban View',
			description: 'Organize your data into columns and cards.',
			image: '/images/views/kanban-view.jpeg',
			icon: KanbanIcon
		},
		{
			name: 'Gallery View',
			description: 'Display images in a gallery view.',
			image: '/images/views/gallery-view.jpeg',
			icon: GalleryThumbnailsIcon
		},
		{
			name: 'Form View',
			description: 'Collect data from users from a form submission.',
			image: '/images/views/form.jpeg',
			icon: FormInputIcon
		}
	];

	let activeTab = views[0].name;
	let interval: number;
	let progress = tweened(0, { duration: 5000, easing: linear });

	onMount(() => {
		startAutoSwitch();
		return () => clearInterval(interval);
	});

	function startAutoSwitch() {
		resetProgress();
		interval = setInterval(() => {
			const currentIndex = views.findIndex((view) => view.name === activeTab);
			activeTab = views[(currentIndex + 1) % views.length].name;
			resetProgress();
		}, 5000);
	}

	async function resetProgress() {
		await progress.set(0, { duration: 0 });
		progress.set(1, { duration: 5000 });
	}

	function handleTabChange(value: string | undefined) {
		if (value) {
			activeTab = value;
			clearInterval(interval);
			startAutoSwitch();
		}
	}
</script>

<section class="container mx-auto hidden px-4 py-16 md:block">
	<h2 class="mb-8 text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
		Diverse View Options
	</h2>
	<p class="mb-8 text-left text-lg text-gray-600">
		Undb offers a variety of views to suit different needs.
		<br />
		Whether you need a simple grid view, or a more complex kanban view, Undb has you covered.
	</p>

	<Tabs value={activeTab} onValueChange={handleTabChange} class="w-full bg-transparent">
		<TabsList class="mb-8 grid h-28 w-full grid-cols-4 gap-4	bg-transparent">
			{#each views as view}
				<div class="flex h-full flex-col justify-between">
					<TabsTrigger
						value={view.name}
						class="flex flex-col items-start justify-start gap-3 bg-transparent px-4 py-3 text-left text-base !shadow-none ring-0 transition-colors hover:bg-gray-100 hover:bg-transparent sm:text-lg"
					>
						<div class="flex items-center">
							<svelte:component this={view.icon} class="mr-2 h-6 w-6" />
							{view.name}
						</div>

						<p class="max-w-2/3 text-wrap text-sm text-muted-foreground">
							{view.description}
						</p>
					</TabsTrigger>
					{#if activeTab === view.name}
						<div class="mt-2 h-1 w-full rounded-full bg-gray-200">
							<div
								class="h-1 rounded-full bg-blue-600 transition-all duration-300 ease-in-out"
								style="width: {$progress * 100}%"
							></div>
						</div>
					{/if}
				</div>
			{/each}
		</TabsList>
		{#each views as view}
			<TabsContent value={view.name} class="mt-0 h-[500px] overflow-hidden rounded-md">
				<img
					src={view.image}
					alt={view.name}
					class="h-auto w-full rounded-lg shadow-lg transition-all duration-300 ease-in-out"
				/>
			</TabsContent>
		{/each}
	</Tabs>
</section>

<section class="container mx-auto px-4 py-4 md:hidden md:py-16">
	<h2 class="mb-8 text-4xl font-bold tracking-tight text-black dark:text-white">
		Diverse View Options
	</h2>
	<p class="mb-8 text-left text-base text-gray-600">
		Undb offers a variety of views to suit different needs. Whether you need a simple grid view, or
		a more complex kanban view, Undb has you covered.
	</p>

	<div class="relative">
		{#each views as view, index}
			<div class="mb-8 {activeTab === view.name ? 'block' : 'hidden'}">
				<img src={view.image} alt={view.name} class="w-full rounded-lg shadow-lg" />
				<div class="mt-4 text-center">
					<h3 class="mb-2 text-xl font-bold">{view.name}</h3>
					<p class="text-sm text-gray-600">{view.description}</p>
				</div>
			</div>
		{/each}

		<div class="mt-4 flex justify-center">
			{#each views as view, index}
				<button
					class="mx-1 h-3 w-3 rounded-full {activeTab === view.name
						? 'bg-blue-600'
						: 'bg-gray-300'}"
					on:click={() => handleTabChange(view.name)}
				></button>
			{/each}
		</div>
	</div>
</section>
