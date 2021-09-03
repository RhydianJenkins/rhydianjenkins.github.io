<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from "svelte";

	let response = 'Loading...';

	onMount(async () => fetch("/api/test")
		.then(response => response.json())
		.then(data => {
			response = data;
		}).catch(error => console.error(error)));
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Welcome</h1>
	<p>{JSON.stringify(response)}</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
