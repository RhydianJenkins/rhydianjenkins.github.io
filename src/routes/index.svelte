<script context="module">
	export const prerender = true;

	import Fa from 'svelte-fa';
	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import About from '$lib/About.svelte';
</script>

<script>
	const layers = [ 0, 1, 2, 3, 4, 5 ];
	const layerColors = [
		'#918D8C',
		'#6C6868',
		'#474444',
		'#343232',
		'#2B2929',
		'#211F1F',
	]
	const layerPaths = [
		'M0,128L48,106.7C96,85,192,43,288,74.7C384,107,480,213,576,224C672,235,768,149,864,106.7C960,64,1056,64,1152,101.3C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,208C672,213,768,171,864,181.3C960,192,1056,256,1152,256C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,32L48,69.3C96,107,192,181,288,181.3C384,181,480,107,576,96C672,85,768,139,864,144C960,149,1056,107,1152,122.7C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,96L48,128C96,160,192,224,288,208C384,192,480,96,576,101.3C672,107,768,213,864,224C960,235,1056,149,1152,122.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,208C672,203,768,149,864,112C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
	];

	let y = 0;

	$: waveStyles = layer => {
		return `transform: translate(0, ${(layer * 20) + (-y * layer / 5)}px);`
	}
</script>

<svelte:head>
	<title>Rhydian Jenkins</title>
</svelte:head>

<svelte:window bind:scrollY={y}/>

<div class="splash-container">
	<div class="splash">
		<h1>Rhydian Jenkins</h1>
		<h2>Full Stack Software Engineer</h2>
		<ul>
			<li><a href="mailto:rhydz@msn.com" target="blank">Email</a></li>
			<li><a href="https://github.com/RhydianJenkins" target="blank">GitHub</a></li>
			<li><a href="https://github.com/RhydianJenkins/CV/blob/master/cv.pdf" target="blank">CV</a></li>
			<li><a href="https://www.linkedin.com/in/rhydian-jenkins-30309085" target="blank">LinkedIn</a></li>
		</ul>
	</div>
</div>

<div class="waves">
	{#each layers as layer}
	<svg class="wave" style="{ waveStyles(layer) }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" shape-rendering="auto">
		<path fill="{ layerColors[layer] }" d="{ layerPaths[layer] }"/>
	</svg>
	{/each}

	<div class="page-cover" style="{ waveStyles(layers.length) } height: min({y * 2}px, 110vh)"/>
</div>

<div class="page-wrapper">
	<div class="page-body">
		<section>
			<div class="container">
				<div class="title"><Fa class="fa-user" icon={faUser}/><h2>About</h2></div>
				<About/>
			</div>
		</section>
	</div>

	<footer>
		<p>🔧 Site currently in development 🔨</p>
	</footer>
</div>

<style lang="scss">
	$top-title-gap: 20rem;
	$wave-height: 50vh;

	.splash-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100vh;
		z-index: -1;
		background-color: var(--secondary-color);

		.splash {
			h1,
			h2,
			ul {
				position: fixed;
				width: 100%;
				color: var(--text-color-secondary);
				text-align: center;
			}

			h1 {
				color: var(--accent-color);
				top: $top-title-gap;
				font-size: 6rem;
			}

			h2 {
				top: calc(#{$top-title-gap} + 16rem);
				font-size: 4rem;
			}

			ul {
				list-style-type: none;
				margin: 0;
				padding: 0;
				text-align: center;
				font-size: 2rem;

				li {
					display: inline-block;
					min-width: 5rem;
					margin: 0 2rem;
				}

				a {
					text-decoration: none;
					display: block;
					position: relative;
					color: var(--text-color-secondary);
					padding: 1rem 0;

					&:focus,
					&:hover {
						color: var(--accent-color);

						&:before {
							left: 0;
							width: 100%;
						}
					}

					&:before {
						content: "";
						position: absolute;
						width: 0;
						height: 1px;
						background-color: var(--accent-color);
						bottom: calc(-1px);
						right: 0;
						transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
					}
				}
			}
		}
	}

	.waves {
		margin-top: 100vh;
		width: 100%;
		pointer-events: none; // so they don't get in the way of links

		.wave {
			width: 100%;
			height: $wave-height;
			margin-top: -$wave-height;
		}

		.page-cover {
			width: 100hw;
			margin-bottom: -100%;
			background-color: var(--primary-color);
		}
	}

	.page-wrapper {
		position: absolute;
		background-color: var(--primary-color);
		top: 100vh;
		width: 100%;
		margin: 0 auto;

		.page-body {
			section {
				$sectionPadding: 40rem;
				padding-bottom: $sectionPadding;

				&:not(:first-child) {
					padding-top: $sectionPadding;
				}

				&:nth-child(2n) {
					background-color: var(--background-opacity);
				}

				.title {
					display: flex;
					align-items: baseline;
					font-size: 3rem;
					color: var(--accent-color);
					margin-bottom: 2rem;

					h2 {
						margin-left: 1rem;
						font-size: 5rem;
						color: var(--accent-color);
					}
				}
			}
		}

		footer {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 40px;
		}
	}
</style>
