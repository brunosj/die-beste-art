<script lang="ts">
	import '../app.css';
	import '$styles/carousel.css';
	import { Footer } from '$components';
	import NavBar from '$components/Header/NavBar.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

{#key data.currentPath}
	<main>
		<NavBar />
		<section
			class="-mt-12 z-0"
			in:fly={{ y: -30, duration: 200, delay: 150 }}
			out:fly={{ y: -30, duration: 150 }}
		>
			<slot />
		</section>
		<Footer />
	</main>
{/key}
