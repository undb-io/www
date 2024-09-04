<script>
	import { Calendar, Plane, Rss, ReceiptText } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import FlipText from '$lib/components/magic/FlipText.svelte';
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
			href: 'https://template.undb.io/template/rechc0mi1ar',
			cta: 'Get started with template',
			background: ProjectManagement,
			class: 'col-span-3 lg:col-span-1'
		},
		{
			Icon: ReceiptText,
			name: 'Todo List',
			description: 'Effortlessly manage your personal daily tasks',
			href: 'https://template.undb.io/template/recjqk5altb',
			cta: 'Get started with template',
			background: TodoList,
			class: 'col-span-3 lg:col-span-2'
		},
		{
			Icon: Plane,
			name: 'Trip Plan',
			description: 'Plan your next trip with ease.',
			href: 'https://template.undb.io/template/recp3km4vvc',
			cta: 'Edit More',
			background: TripPlan,
			class: 'col-span-3 lg:col-span-2'
		},
		{
			Icon: Rss,
			name: 'Subscription Tracker',
			description: 'Track your subscriptions of your online services.',
			href: 'https://template.undb.io/template/rec98waw9mb',
			cta: 'Get started with template',
			background: SubscriptionTracker,
			class: 'col-span-3 lg:col-span-1'
		}
	];
</script>

<section class="container space-y-6">
	<FlipText
		class="text-3xl font-semibold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
		word="Get started with templates"
	/>

	<p class="text-center text-lg text-gray-500 dark:text-gray-400">
		You can use templates to get started with your project.
	</p>

	<div class="flex items-center justify-center">
		<Button href="https://template.undb.io">🚀 View all templates</Button>
	</div>

	<div class="flex items-center justify-center">
		<BentoGrid>
			{#each features as item}
				<BentoCard {...item} />
			{/each}
		</BentoGrid>
	</div>
</section>
