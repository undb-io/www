<script lang="ts">
	export let author: string;
	export let date: string;

	const formattedDate = new Date(date).toDateString();
</script>

<p>
	<span class="text-base font-semibold text-gray-500 dark:text-gray-400">{author}</span>
	<span class="text-base text-gray-500 dark:text-gray-400">{formattedDate}</span>
</p>
