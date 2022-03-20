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
</style>
