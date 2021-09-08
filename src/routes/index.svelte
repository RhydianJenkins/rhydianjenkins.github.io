<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from "svelte";

	let data = 'Loading...';

	onMount(async () => fetch("/api/test/Rhydian")
		.then(response => response.json())
		.then(response => {
			data = response;
		}).catch(error => console.error(error)));
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Rhydian Jenkins</h1>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;

	}

</style>
