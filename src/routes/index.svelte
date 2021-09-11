<script context="module">
	export const prerender = true;
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
		return `z-index: ${layer + 1}; transform: translate(0, ${-y * layer / 3}px);`
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
			<path fill="{ layerColors[layer] }" fill-opacity="1" d="{ layerPaths[layer] }"/>
		</svg>
	{/each}

	<div class="page-cover" style="{ waveStyles(layers.length) }"/>
</div>

<div class="page-wrapper">
	<div class="page-body">
		<p>Page content goes here!</p>
	</div>
</div>

<style lang="scss">
	.splash-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 50vh;
		z-index: -1;
		background-color: var(--secondary-color);

		h1 {
			margin-top: 4em;
			text-align: center;
		}
		p {
			margin-top: 0.5em;
			text-align: center;
		}
	}

	.waves {
		margin-top: 30vh;

		.wave {
			width: 100%;
			height: 25vh;
			margin-top: -20vh;
		}

		.page-cover {
			width: 100%;
			height: 100vh;
			background-color: var(--primary-color);
		}
	}

	.page-wrapper {
		position: absolute;
		top: 60vh;
		width: 100%;

		.page-body {
			margin-right: 20%;
			margin-left: 20%;
		}
	}
</style>
