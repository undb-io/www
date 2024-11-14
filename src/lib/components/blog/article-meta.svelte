<script lang="ts">
	interface Props {
		author: string;
		date: string;
	}

	let { author, date }: Props = $props();

	const formattedDate = new Date(date).toDateString();
</script>

<p>
	<span class="text-base font-semibold text-gray-500 dark:text-gray-400">{author}</span>
	<span class="text-base text-gray-500 dark:text-gray-400">{formattedDate}</span>
</p>
