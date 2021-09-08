import adapter from '@sveltejs/adapter-netlify';
import dotenv from 'dotenv';
import sveltePreprocess from 'svelte-preprocess';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// Svelte requires an adapter for deployment
        adapter: adapter()
	},
	preprocess: sveltePreprocess()
};

export default config;
