<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import githubLogo from '/static/github-logo.png';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>🔧 Site currently in development 🔨</p>
	<a class="logo" target="blank" href="https://github.com/rhydianjenkins">
		<img src={githubLogo} alt="GitHub" />
	</a>
</footer>

<style lang="scss">
	main {
		min-height: 100vh;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;

		.logo {
			background-color: var(--text-color);
			border-radius: 50%;
			padding: .1em;
			width: 2em;
			height: 2em;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
