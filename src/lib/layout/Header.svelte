<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import Logo from '$lib/imgs/logo.svg';
	import { AlignJustify, BookIcon, CloudyIcon, XIcon } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	export let loggedIn = false;

	const menuItem = [
		{
			id: 1,
			label: 'Documentation',
			href: 'https://docs.undb.io'
		},
		{
			id: 2,
			label: 'Template',
			href: 'https://template.undb.io'
		},
		{
			id: 3,
			label: 'Pricing',
			href: 'https://checkout.undb.io'
		},
		{
			id: 4,
			label: 'Get Started',
			href: 'https://app.undb.io'
		}
	];

	let hamburgerMenuIsOpen = false;

	function toggleOverflowHidden(node: HTMLElement) {
		node.addEventListener('click', () => {
			hamburgerMenuIsOpen = !hamburgerMenuIsOpen;
			const html = document.querySelector('html');
			if (html) {
				if (hamburgerMenuIsOpen) {
					html.classList.add('overflow-hidden');
				} else {
					html.classList.remove('overflow-hidden');
				}
			}
		});
	}
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<header
	class="fixed left-0 top-0 z-50 w-full -translate-y-4 animate-fade-in border-b opacity-0 backdrop-blur-md"
>
	<!-- {#if innerWidth < 768} -->
	<div class="container flex h-12 items-center justify-between md:h-14">
		<a class="text-md flex items-center gap-2 font-semibold" href="/">
			<img src={Logo} alt="Undb" class="h-4 w-4" />
			<span class="hidden md:block"> Undb </span>
		</a>

		<div class="ml-auto hidden h-full items-center md:flex">
			<Button
				variant="link"
				class=" inline-flex items-center text-sm"
				target="_blank"
				rel="noopener noreferrer"
				href="https://docs.undb.io"
			>
				<BookIcon class="mr-2 h-4 w-4" />
				Documentation
			</Button>
			<Button
				variant="link"
				class="inline-flex items-center text-sm"
				target="_blank"
				rel="noopener noreferrer"
				href="https://template.undb.io"
			>
				Template
			</Button>
			<Button
				variant="link"
				class="inline-flex items-center text-sm"
				target="_blank"
				rel="noopener noreferrer"
				href="https://checkout.undb.io"
			>
				Pricing
			</Button>
			<Button variant="link" class="inline-flex items-center text-sm" href="/blog">Blog</Button>
			<Button
				variant="secondary"
				class="ml-3 text-sm"
				target="_blank"
				rel="noopener noreferrer"
				href="https://app.undb.io"
			>
				<CloudyIcon class="mr-2 h-4 w-4" />
				{#if loggedIn}
					Back to space
				{:else}
					Get Started
				{/if}
			</Button>
		</div>
		<button class="ml-6 md:hidden" use:toggleOverflowHidden>
			<span class="sr-only">Toggle menu</span>
			{#if hamburgerMenuIsOpen}
				<XIcon strokeWidth={1.4} class="text-gray-300" />
			{:else}
				<AlignJustify strokeWidth={1.4} class="text-gray-300" />
			{/if}
		</button>
	</div>
	<!-- {/if} -->
</header>

<nav
	class={cn(
		`fixed left-0 top-0 z-50 h-screen w-full overflow-auto `,
		{
			'pointer-events-none': !hamburgerMenuIsOpen
		},
		{
			'bg-background/70 backdrop-blur-md': hamburgerMenuIsOpen
		}
	)}
>
	{#if hamburgerMenuIsOpen === true}
		<div class="container flex h-14 items-center justify-between">
			<a class="text-md flex items-center" href="/"> Undb </a>

			<button class="md:hidden" use:toggleOverflowHidden>
				<span class="sr-only">Toggle menu</span>
				{#if hamburgerMenuIsOpen}
					<XIcon strokeWidth={1.4} class="text-gray-300" />
				{:else}
					<AlignJustify strokeWidth={1.4} class="text-gray-300" />
				{/if}
			</button>
		</div>
		<ul
			in:fly={{ y: -30, duration: 400 }}
			class="flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case"
		>
			{#each menuItem as item, i}
				<li class="border-grey-dark border-b py-0.5 pl-6 md:border-none">
					<a
						class="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors {hamburgerMenuIsOpen
							? '[&_a]:translate-y-0'
							: ''}"
						href={item.href}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
