<script>
	import { dev } from '$app/env';
	import { page } from '$app/stores';
	import githubLogo from '/static/github-logo.png';
</script>

<header>
	<div class="corner-left">
		{#if dev}<p alt="Development build">🛠</p>{/if}
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner-right">
		<a target="blank" href="https://github.com/rhydianjenkins">
			<img src={githubLogo} alt="GitHub" />
		</a>
	</div>
</header>

<style lang="scss">
	.corner {
		&-left {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
		}

		&-right {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			right: 0;
			width: 4em;
			height: 4em;

			img {
				width: 100%;
				height: 100%;
				padding: 0.75em;
			}
		}
	}

	nav {
		display: flex;
		justify-content: center;
		--background: var(--heading-color);

		a {
			display: flex;
			height: 100%;
			align-items: center;
			padding: 0 1em;
			color: var(--text-color-secondary);
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 10%;
			text-decoration: none;
			transition: color 0.2s linear;
		}

		path {
			fill: var(--background);
		}

		svg {
			width: 2em;
			height: 3em;
			display: block;
		}
	}


	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;

		li {
			position: relative;
			height: 100%;

			&.active::before {
				--size: 6px;
				content: '';
				width: 0;
				height: 0;
				position: absolute;
				top: 0;
				left: calc(50% - var(--size));
				border: var(--size) solid transparent;
				border-top: var(--size) solid var(--accent-color);
			}
		}
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
