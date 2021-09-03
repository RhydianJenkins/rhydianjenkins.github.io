<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from "svelte";

	let data = 'Loading...';

	onMount(async () => fetch("/api/test")
		.then(response => response.json())
		.then(response => {
			data = response;
		}).catch(error => console.error(error)));
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Welcome</h1>
	<p>API response:</p>
	<pre>{JSON.stringify(data)}</pre>
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
