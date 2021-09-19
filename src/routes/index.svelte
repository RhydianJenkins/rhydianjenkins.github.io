<script context="module">
	export const prerender = true;
	import Fa from 'svelte-fa';
	import { faCode, faBriefcase, faBook, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import githubLogo from '/static/github-logo.png';
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
	<title>Home</title>
</svelte:head>

<svelte:window bind:scrollY={y}/>

<div class="splash-container">
	<h1>Rhydian Jenkins</h1>
	<p>Full Stack Web Developer</p>
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
			<div class="title"><Fa color="var(--accent-color)" size="lg" icon={faCode}/><h2>Skills</h2></div>
			<p>
				Node
				Javascript
				JS Frameworks (Vue / Svelte)
				html
				sass
				Java
				PHP
				DevOps
				Docker
				SQL / DQL / Mongo
				MVC frameworks - Laravel / Symfony (Doctrine)
				Agile Methodologies
				Git / GitHub
				Unit testing (Jest/JUnit/PHPUnit)
				C++
				ROS
				Latex
			</p>
		</section>

		<section>
			<div class="title"><Fa color="var(--accent-color)" size="lg" pull="left" icon={faBriefcase}/><h2>Experience</h2></div>
			<div class="items">
				<div class="item">
					<div class="item-title">Full Stack Web Developer</div>
					<div class="item-left">
						<span class="top">WCBS</span>
						<span class="bottom">2021 - present</span>
					</div>
					<p class="item-content">
						Test test test
					</p>
				</div>
				<div class="item">
					<div class="item-title">University Tutor</div>
					<div class="item-left">
						<span class="top">Abersytwyth University</span>
						<span class="bottom">2018 - 2021</span>
					</div>
					<p class="item-content">
						Test test test
					</p>
				</div>
				<div class="item">
					<div class="item-title">PHP Software Engineer</div>
					<div class="item-left">
						<span class="top">Lexis Nexis</span>
						<span class="bottom">2018 (9 months)</span>
					</div>
					<p class="item-content">
						Test test test
					</p>
				</div>
			</div>
		</section>

		<section>
			<div class="title"><Fa color="var(--accent-color)" size="lg" icon={faBook}/><h2>Education</h2></div>
			<div>
				<p>PhD</p>
				<p>Bsc</p>
				<p>A levels</p>
			</div>
		</section>

		<section>
			<div class="title"><Fa color="var(--accent-color)" size="lg" icon={faFolder}/><h2>Portfolio</h2></div>
			<div>
				<p>Some example projects...</p>
			</div>
		</section>

		<section>
			<div class="title"><Fa color="var(--accent-color)" size="lg" icon={faEnvelope}/><h2>Contact</h2></div>
			<div>
				<p>Phone, email, address</p>
			</div>
			<span class="fa fa-github"></span>
		</section>
	</div>

	<footer>
		<p>🔧 Site currently in development 🔨</p>
		<a class="logo" target="blank" href="https://github.com/rhydianjenkins">
			<img src={githubLogo} alt="GitHub" />
		</a>
	</footer>
</div>

<style lang="scss">
	$top-title-gap: 40vh;
	$wave-height: 50vh;

	.splash-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100vh;
		z-index: -1;
		background-color: var(--secondary-color);

		p,
		h1 {
			position: fixed;
			width: 100%;
			color: var(--text-color-secondary);
			text-align: center;
		}

		h1 {
			color: var(--accent-color);
			top: $top-title-gap;
			font-size: 3.5em;
		}
		p {
			top: calc(#{$top-title-gap} + 5em);
		}
	}

	.waves {
		margin-top: 100vh;
		width: 100%;

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
				padding-bottom: 5em;
				padding-top: 5em;
				padding-right: 15em;
				padding-left: 15em;

				@media (max-width: 720px) {
					padding: 5em;
				}

				&:nth-child(2n) {
					background-color: var(--background-opacity);
				}

				.title {
					display: flex;
					align-items: baseline;

					h1,
					h2 {
						margin-left: .2em;
						color: var(--accent-color);
					}
				}

				.items {
					border-left: 2px solid var(--secondary-color);
					margin-top: 5em;

					@media (max-width: 720px) {
						margin-left: 50%;
					}

					.item {
						position: relative;
						margin-bottom: 5em;
						min-height: 5em;


						&-title {
							display: flex;
							justify-content: left;
							align-items: center;
							font-size: 1em;
							color: var(--text-color);


							&::before {
								content: '';
								position: relative;
								display: inline-block;
								width: .75em;
								height: .75em;
								left: -.43em;
								background-color: var(--primary-color);
								border: 2px solid var(--secondary-color);
								border-radius: 50%;
							}

						}

						&-left {
							position: absolute;
							display: flex;
							align-items: center;
							flex-direction: column;
							left: -14em;
							width: 12em;
							top: -1em;
							padding: .5em;
							color: var(--text-color);
							font-size: .75em;
							box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
							border-radius: 4px;
							background-color: var(--background-opacity);

						}

						&-content {
							margin-left: 2em;
							font-weight: 100;
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
	}
</style>
