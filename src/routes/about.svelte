<script context="module">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title></title>
</svelte:head>

<h1>About Rhydian</h1>

<div class="row profile">
	<div class="col-lg profile__picture">
		<img src="/img/face1.jpg" alt="profile"/>
	</div>
	<div class="col-lg profile__text">
		<p>
			Rhydian is a committed and driven Computer Science PhD graduate with an understanding of many programming and computing aspects;
			with experience working in a group and alone on multiple challenging tasks
			using a wide range of languages including the full web stack (JS frameworks, PHP MVC, database development, sql, ...),
			as well as side passions in Java, Python and C++.
		</p>

		<p>Rhydian's PhD was on Topological mapping using a robotic swarm.</p>
	</div>
</div>

<style lang="scss">
	h1 {
		text-align: center;
		padding: 2em;
	}

	.profile {
		display: flex;
		align-items: center;

		&__picture {
			display: flex;
			justify-content: center;
			padding-bottom: 1em;

			img {
				border-radius: 5px;
				max-width: calc(var(--column-width) * 0.5);
				box-shadow: 0 3px 10px rgb(0 0 0 / 0.9);
			}
		}
	}
</style>
