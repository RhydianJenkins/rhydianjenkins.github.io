<script context="module">
	export const prerender = true;

	import Fa from 'svelte-fa';
	import { faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';
	import About from '$lib/About.svelte';
	import Recruiters from '$lib/Recruiters.svelte';

	const email = "rhydz@msn.com";
	const github = "https://github.com/RhydianJenkins";
	const cv = "https://github.com/RhydianJenkins/CV/blob/master/cv.pdf";
	const linkedin = "https://www.linkedin.com/in/rhydian-jenkins-30309085";
</script>

<script>
	const layers = [ 0, 1, 2, 3, 4 ];
	const layerColors = [
		'#E1FCFD',
		'#9CF6FB',
		'#9DAAF2',
		'#394F8A',
		'#1A2238', // needs to be primary color to blend with page
	]
	const layerPaths = [
		'M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,208C672,203,768,149,864,112C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,128L48,106.7C96,85,192,43,288,74.7C384,107,480,213,576,224C672,235,768,149,864,106.7C960,64,1056,64,1152,101.3C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,96L48,128C96,160,192,224,288,208C384,192,480,96,576,101.3C672,107,768,213,864,224C960,235,1056,149,1152,122.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
		'M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,208C672,213,768,171,864,181.3C960,192,1056,256,1152,256C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
	];

	let y = 0;

	$: waveStyles = layer => {
		const maxOffset = 1024; // px
		const offset = Math.min(y, maxOffset);
		return `transform: translate(0, ${(layer * 20) + (-offset * layer / 5)}px);`
	}

    function scrollToRecruiters() {
        const recruitersEl = document.querySelector('.recruiters');
        if (!recruitersEl) return;

        recruitersEl.scrollIntoView({ behavior: 'smooth' });
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
			{#if email}<li><a href="mailto:{ email }" target="blank">Email</a></li>{/if}
			{#if github}<li><a href="{ github }" target="blank">GitHub</a></li>{/if}
			{#if cv}<li><a href="{ cv }" target="blank">CV</a></li>{/if}
			{#if linkedin}<li><a href="{ linkedin }" target="blank">LinkedIn</a></li>{/if}
		</ul>
        <div class="button-wrapper">
            <button on:click={scrollToRecruiters}>Recruiters click here!</button>
        </div>
	</div>
</div>

<div class="waves">
	{#each layers as layer}
		<svg
			class="wave"
			style="{ waveStyles(layer) }"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 320"
			preserveAspectRatio="none"
		>
			<path fill="{ layerColors[layer] }" d="{ layerPaths[layer] }" />
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

		<section>
			<div class="container">
				<div class="title"><Fa class="fa-briefcase" icon={faBriefcase}/><h2>Are you a recruiter?</h2></div>
				<Recruiters email={email}/>
			</div>
		</section>
	</div>
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
		background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);

		&::before {
			content: '';
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1;
			box-shadow: inset 0 0 50rem 20rem rgba(0, 0, 0, 0.15);
		}

		.splash {
			h1,
			h2,
            .button-wrapper,
			ul {
				position: fixed;
				width: 100%;
				color: var(--text-color);
				text-align: center;
				z-index: 1;
			}

			h1 {
				color: var(--text-color);
				top: $top-title-gap;
				font-size: min(10vw, 15rem);
			}

			h2 {
				top: calc(#{$top-title-gap} + min(17rem, max(15vh, 5rem)));
				font-size: min(6vw, 4rem);
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

            .button-wrapper {
				top: calc(#{$top-title-gap} + 22rem);

                button {
                    padding: 1rem;
                    margin: 1rem;
                    color: var(--text-color);
                    background-color: rgba(0, 0, 0, 0.2);
                    border-radius: 0.5rem;
                    border: 2px 2px 0 0 solid var(--text-color);
                    position: relative;
                    font-size: 2rem;

					&:hover {
						color: var(--accent-color);

						&:before {
							left: 0;
                            margin: 0 auto;
							width: 90%;
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
			}
		}
	}
</style>
