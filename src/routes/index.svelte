<script context="module">
	export const prerender = true;

	import Fa from 'svelte-fa';
	import { faCode, faUser } from '@fortawesome/free-solid-svg-icons';
	import About from '$lib/About.svelte';
	import Skills from '$lib/Skills.svelte';

	const email = import.meta.env.VITE_EMAIL_ADDRESS || "rhydz@msn.com";
	const github = import.meta.env.VITE_GITHUB || "https://github.com/RhydianJenkins";
	const cv = import.meta.env.VITE_CV || "https://github.com/RhydianJenkins/CV/blob/master/cv.pdf";
	const linkedin = import.meta.env.VITE_LINKEDIN || "https://www.linkedin.com/in/rhydian-jenkins-30309085";
</script>

<script>
	const layers = [ 0, 1, 2 ];
	const layerColors = [
		'#918D8C',
		'#474444',
		'#211F1F',
	]
	const layerPaths = [
		'M0,128L48,106.7C96,85,192,43,288,74.7C384,107,480,213,576,224C672,235,768,149,864,106.7C960,64,1056,64,1152,101.3C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,96L48,128C96,160,192,224,288,208C384,192,480,96,576,101.3C672,107,768,213,864,224C960,235,1056,149,1152,122.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,208C672,213,768,171,864,181.3C960,192,1056,256,1152,256C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
	];
	const curvePaths = [
		'M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z',
		'M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,213.3C672,224,768,224,864,192C960,160,1056,96,1152,64C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
	];

	let y = 0;

	$: waveStyles = layer => {
		const maxOffset = 1024; // px
		const offset = Math.min(y, maxOffset);
		return `transform: translate(0, ${(layer * 20) + (-offset * layer / 5)}px);`
	}
</script>

<svelte:head>
	<title>Rhydian Jenkins</title>
</svelte:head>

<svelte:window bind:scrollY={y}/>

<div class="splash-container">
	<img class="splash-image" src="/img/me_background.jpg" alt="Rhydian Jenkins">
	<div class="splash">
		<h1>Rhydian Jenkins</h1>
		<h2>Full Stack Software Engineer</h2>
		<ul>
			{#if email}<li><a href="mailto:{ email }" target="blank">Email</a></li>{/if}
			{#if github}<li><a href="{ github }" target="blank">GitHub</a></li>{/if}
			{#if cv}<li><a href="{ cv }" target="blank">CV</a></li>{/if}
			{#if linkedin}<li><a href="{ linkedin }" target="blank">LinkedIn</a></li>{/if}
		</ul>
	</div>
</div>

<div class="waves">
	{#each layers as layer}
	<svg class="wave" style="{ waveStyles(layer) }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" shape-rendering="auto">
		<linearGradient id="grad{layer}" x1="0%" y1="0%" x2="0" y2="100%">
			<stop offset="0%" style="stop-color: {layerColors[layer]}; stop-opacity: 1" />
			<stop offset="100%" style="stop-color: rgba(0, 0, 0, 0.5); stop-opacity: 1" />
		</linearGradient>
		{#if layer < layers.length - 1}
			<path fill="url(#grad{layer})" d="{ layerPaths[layer] }" />
		{:else}
			<path fill="{ layerColors[layer] }" d="{ layerPaths[layer] }" />
		{/if}
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
			<svg class="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
				<path d="{ curvePaths[0] }" transform="translate(0-135.53)"/>
			</svg>
		</section>

		<section>
			<div class="container">
				<div class="title"><Fa class="fa-code" icon={faCode}/><h2>Skills</h2></div>
				<Skills/>
			</div>
			<svg class="curve opposite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path d="{ curvePaths[1] }"/>
			</svg>
		</section>
	</div>

	<footer>
		<p class="text-center">Site currently in development</p>
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

		&::before {
			content: '';
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1;
			box-shadow: inset 0 0 500px 100px rgba(0, 0, 0, 0.5);
		}

		.splash-image {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 300%;
			object-fit: cover;

			filter:
				blur(4px)
				brightness(40%)
				contrast(50%)
				grayscale(30%);
		}

		.splash {
			h1,
			h2,
			ul {
				position: fixed;
				width: 100%;
				color: var(--text-color);
				text-align: center;
				z-index: 1;
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
					color: var(--text-color);
					padding: 1rem 0;

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
				$sectionPadding: 20rem;
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

				.curve {
					position: relative;
					top: $sectionPadding;

					path {
						fill: var(--background-opacity);
					}

					&.opposite {
						path {
							fill: var(--primary-color);
						}
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
