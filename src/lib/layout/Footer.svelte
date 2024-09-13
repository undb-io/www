<script>
	import DiscordSvg from '$lib/imgs/discord.svg';
	import { TwitterIcon } from 'lucide-svelte';
	import XSvg from '$lib/imgs/x.svg';
	import Logo from '$lib/imgs/logo.svg';

	const footerNavs = [
		{
			label: 'Product',
			items: [
				{
					href: 'https://app.undb.io',
					name: 'Undb'
				}
				// {
				// 	href: '/pricing',
				// 	name: 'Pricing'
				// },
				// {
				// 	href: '/faq',
				// 	name: 'FAQ'
				// }
			]
		},

		{
			label: 'Community',
			items: [
				{
					href: 'https://github.com/undb-io/undb',
					name: 'Github'
				},
				{
					href: 'https://discord.gg/3rcNdU3y3U',
					name: 'Discord'
				},
				{
					href: 'https://x.com/unified_undb',
					name: 'X'
				},
				{
					href: 'mailto:hi@undb.io',
					name: 'Email'
				}
			]
		},
		{
			label: 'Legal',
			items: [
				{
					href: '/privacy',
					name: 'Privacy Policy'
				},
				{
					href: '/terms',
					name: 'Terms of Service'
				}
			]
		}
	];

	const footerSocials = [
		{
			href: 'https://discord.gg/3rcNdU3y3U',
			name: 'Discord',
			icon: DiscordSvg
		},
		{
			href: 'https://x.com/unified_undb',
			name: 'X',
			icon: TwitterIcon
		}
	];
</script>

<footer>
	<div class="mx-auto w-full max-w-screen-xl xl:pb-2">
		<div class="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
			<div class="mb-12 flex flex-col gap-4">
				<a href="https://undb.io" class="flex items-center gap-2">
					<img src={Logo} alt="Undb" class="size-6" />
					<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
						Undb
					</span>
				</a>
				<p class="max-w-xs text-sm text-muted-foreground">Open source No-code Database & BaaS</p>
			</div>
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
				{#each footerNavs as nav}
					<div>
						<h2
							class="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white"
						>
							{nav.label}
						</h2>
						<ul class="grid gap-2">
							{#each nav.items as item}
								<li>
									<a
										href={item.href}
										class="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
									>
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 pb-20 sm:flex sm:flex-row sm:items-center sm:justify-between"
		>
			<div class="flex items-center space-x-5 sm:mt-0 sm:justify-center">
				<a
					href="https://x.com/unified_undb"
					target="_blank"
					rel="noopener noreferrer"
					class="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
				>
					<svg role="img" class="size-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
						><title>X</title><path
							d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
						/></svg
					>
					<span class="sr-only">X</span>
				</a>

				<a
					href="https://discord.gg/3rcNdU3y3U"
					target="_blank"
					rel="noopener noreferrer"
					class="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
				>
					<svg role="img" viewBox="0 0 24 24" class="size-5" xmlns="http://www.w3.org/2000/svg"
						><title>Discord</title><path
							d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
						/></svg
					> <span class="sr-only">Discord</span>
				</a>
			</div>
			<span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
				Copyright ©
				{' '}
				{new Date().getFullYear()}
				{' '}
				<a href="/" class="cursor-pointer">Undb</a>
				. All Rights Reserved.
			</span>
		</div>
	</div>
	<!-- Site Banner -->
</footer>
