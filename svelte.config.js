import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: ['/mission'],
			handleHttpError: 'warn'
		},
		alias: {
			$components: 'src/lib/components',
			$assets: 'src/lib/assets',
			$data: 'src/lib/data',
			$types: 'src/lib/types',
			$styles: 'src/lib/styles',
			$stores: 'src/lib/stores'
		}
		// csp: {
		// 	directives: {
		// 		'script-src': ['self']
		// 	}
		// }
	}
};

export default config;
