import adapter from "@sveltejs/adapter-static";
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	//preprocess: [ vitePreprocess()],
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer]
		}
	}),
	
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			precompress: false
		})
	},
	serviceWorker: {
		register: false
	}
};
export default config;