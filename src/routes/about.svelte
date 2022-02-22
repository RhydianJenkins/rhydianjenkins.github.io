<script context="module">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About Rhydian</h1>

<div class="row profile">
	<div class="col-lg-12 col-md-24 profile__picture">
		<img src="/img/face1.jpg" alt="profile"/>
	</div>
	<div class="col-lg-12 col-md-24 profile__text">
		<p>
			Rhydian is a committed and driven Computer Science PhD graduate with an understanding of many programming and computing aspects;
			with experience working in a group and alone on multiple challenging tasks
			using a wide range of languages including the full web stack (JS frameworks, MVC frameworks, database development, devops, ...)
			as well as passions in Java, Python, and C++.
		</p>

		<p>Rhydian's PhD was on Topological mapping using a robotic swarm, where strong understandings in AI, robotics, distributed systems, and research were developed.</p>
	</div>
</div>

<style lang="scss">
	h1 {
		text-align: center;
		padding: 2rem;
	}

	.profile {
		display: flex;
		justify-content: center;
		align-items: center;

		&__picture {
			display: flex;
			justify-content: center;
			padding-bottom: 1rem;

			img {
				border-radius: var(--border-radius);
				max-width: calc(var(--column-width) * 0.5);
				box-shadow: 0 3px 10px rgb(0 0 0 / 0.9);
				border: 1px solid var(--secondary-color);
			}
		}

		&__text {
			padding: 1rem;
			background-color: var(--background-opacity);
			border-radius: var(--border-radius);
			border: 1px solid var(--secondary-color);
			max-width: 50rem;
		}
	}
</style>
