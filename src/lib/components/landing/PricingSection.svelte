<script lang="ts">
	import { LoaderIcon, CheckIcon } from 'lucide-svelte';
	import Switch from '$lib/components/ui/switch/switch.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { fly } from 'svelte/transition';

	type Interval = 'month' | 'year';

	export function toHumanPrice(price: number, decimals: number = 2) {
		return Number(price / 100).toFixed(decimals);
	}
	let productPrices = [
		{
			id: 'price_1',
			name: 'Basic',
			description: 'A basic plan for startups and individual users',
			features: [
				'Basic support',
				'1 member included',
				'1,000 open api request every day',
				'3,000 records per space',
				'All upcoming features'
			],
			monthlyPrice: 0,
			yearlyPrice: 0,
			isMostPopular: false,
			button: 'Get started',
			href: 'https://app.undb.io'
		},
		{
			id: 'price_2',
			name: 'Pro',
			description: 'A premium plan for growing businesses',
			features: [
				'All features of Basic plan',
				'30 members included',
				'10,000 open api request every day',
				'50,000 records per space',
				'Priority support',
				'All upcoming features'
			],
			monthlyPrice: 1900,
			yearlyPrice: 19000,
			isMostPopular: true,
			button: 'Subscribe',
			href: 'https://checkout.undb.io'
		},
		{
			id: 'price_3',
			name: 'Custom',
			description: 'An enterprise plan with advanced features for large organizations',
			features: ['All features of Pro plan', '24/7 dedicated support', 'Custom limits'],
			monthlyPrice: 'Custom',
			yearlyPrice: 'Custom',
			isMostPopular: false,
			button: 'Get in touch',
			href: 'mailto:hi@undb.io'
		}
	];
	let interval: Interval = 'month';
	let isLoading = false;
	let index = '';
	/*
    onCheckedChange={(checked) => {
                setInterval(checked ? 'year' : 'month')
             }}
     */
</script>

<section id="pricing">
	<div class="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:mt-10 md:px-8">
		<div class="mx-auto max-w-5xl text-center">
			<h4 class="text-xl font-bold tracking-tight text-black dark:text-white">Pricing</h4>

			<h2 class="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
				Simple pricing for everyone.
			</h2>

			<p class="mt-6 text-xl leading-8 text-black/80 dark:text-white">
				Choose an
				{' '}
				<strong>affordable plan</strong>
				{' '}
				that has no functional limitations, only quantity restrictions.
			</p>
		</div>

		<div class="flex w-full items-center justify-center space-x-2">
			<Switch
				on:click={() => {
					interval = interval === 'month' ? 'year' : 'month';
				}}
				checked={interval === 'year'}
				id="interval"
			/>
			<span>Annual</span>
			<span
				class="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black"
			>
				2 MONTHS FREE ✨
			</span>
		</div>

		<div class="mx-auto grid w-full flex-col justify-center gap-4 sm:grid-cols-1 lg:grid-cols-3">
			{#each productPrices as price, id}
				<div
					class={cn(
						'relative flex max-w-[400px] flex-col gap-8 overflow-hidden rounded-2xl border p-4 text-black dark:text-white',
						{
							'border-2 border-[var(--color-one)] dark:border-[var(--color-one)]':
								price.isMostPopular
						}
					)}
				>
					<div class="flex items-center">
						<div class="ml-4">
							<h2 class="text-base font-semibold leading-7">
								{price.name}
							</h2>
							<p class="h-12 text-sm leading-5 text-black/70 dark:text-white">
								{price.description}
							</p>
						</div>
					</div>
					{#key interval}
						<div in:fly={{ y: 20, duration: 300, delay: id * 40 }} class="flex flex-row gap-1">
							<span class="text-4xl font-bold text-black dark:text-white">
								{#if typeof price.monthlyPrice === 'string' || typeof price.yearlyPrice === 'string'}
									{price.monthlyPrice}
								{:else if price.monthlyPrice === 0}
									Free
								{:else}
									{#if interval === 'month'}
										${toHumanPrice(price.monthlyPrice, 0)}
									{:else}
										${toHumanPrice(price.yearlyPrice, 0)}
									{/if}
									<span class="text-xs">
										/ {interval}
									</span>
								{/if}
							</span>
						</div>
					{/key}
					<Button
						class={cn(
							'group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter',
							'transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2'
						)}
						href={price.href}
					>
						<span
							class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"
						/>
						{#if isLoading && index === price.id}
							<LoaderIcon class="mr-2 size-4 animate-spin" />
							Handling
						{:else if !isLoading || (isLoading && index !== price.id)}
							{price.button}
						{/if}
					</Button>

					<hr
						class="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0"
					/>
					{#if price.features && price.features.length > 0}
						<ul class="flex flex-col gap-2 font-normal">
							{#each price.features as feature, idx}
								<li class="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
									<CheckIcon
										class="size-5 shrink-0  rounded-full bg-green-400 p-[2px] text-black dark:text-white"
									/>
									<span class="flex">{feature}</span>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
