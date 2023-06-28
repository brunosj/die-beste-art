import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			scale: 1.5
		})
	],
	server: {
		port: 3000,
		strictPort: false
	},

	preview: {
		port: 4000,
		strictPort: false
	}
});
