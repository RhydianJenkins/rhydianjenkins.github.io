<script>
	import { dev } from '$app/env';
</script>

<header>
	{#if dev}
		<div class="corner-left">
			<p alt="Development build">🛠</p>
		</div>
	{/if}
</header>

<style lang="scss">
	.corner-left {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
