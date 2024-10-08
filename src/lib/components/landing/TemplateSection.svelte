<script>
	import { Calendar, Plane, Rss, ReceiptText } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import BentoGrid from '$lib/components/magic/BentoGrid/BentoGrid.svelte';
	import BentoCard from '$lib/components/magic/BentoGrid/BentoCard.svelte';

	import TodoList from '$lib/components/landing/templates/TodoList.svelte';
	import ProjectManagement from '$lib/components/landing/templates/ProjectManagement.svelte';
	import SubscriptionTracker from '$lib/components/landing/templates/SubscriptionTracker.svelte';
	import TripPlan from '$lib/components/landing/templates/TripPlan.svelte';

	let features = [
		{
			Icon: Calendar,
			name: 'Project Management',
			description: 'Manage your projects with ease.',
			href: '/templates/550e8400-e29b-41d4-a716-446655440000',
			cta: 'Get started with template',
			background: ProjectManagement,
			class: 'col-span-3 lg:col-span-1'
		},
		{
			Icon: ReceiptText,
			name: 'Todo List',
			description: 'Effortlessly manage your personal daily tasks',
			href: '/templates/6ba7b811-9dad-11d1-80b4-00c04fd430c8',
			cta: 'Get started with template',
			background: TodoList,
			class: 'col-span-3 lg:col-span-2'
		},
		{
			Icon: Plane,
			name: 'Sales CRM',
			description: 'Manage your sales pipeline and customer relationships.',
			href: '/templates/f47ac10b-58cc-4372-a567-0e02b2c3d479',
			cta: 'Get started with template',
			background: TripPlan,
			class: 'col-span-3 lg:col-span-2'
		},
		{
			Icon: Rss,
			name: 'Event Planning List',
			description: 'Plan your next event planning.',
			href: '/templates/6ba7b810-9dad-11d1-80b4-00c04fd430c8',
			cta: 'Get started with template',
			background: SubscriptionTracker,
			class: 'col-span-3 lg:col-span-1'
		}
	];
</script>

<section class="container space-y-6">
	<h1
		class="text-center text-3xl font-semibold text-black dark:text-white md:text-7xl md:leading-[5rem]"
	>
		Get started with templates
	</h1>

	<p class="text-center text-lg text-gray-500 dark:text-gray-400">
		You can use templates to get started with your project.
	</p>

	<div class="flex items-center justify-center">
		<Button href="/templates">🚀 View all templates</Button>
	</div>

	<div class="flex items-center justify-center">
		<BentoGrid>
			{#each features as item}
				<BentoCard {...item} />
			{/each}
		</BentoGrid>
	</div>
</section>
