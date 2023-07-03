<script lang="ts">
	import '../app.css';
	import '$styles/carousel.css';
	import { Footer } from '$components';
	import NavBar from '$components/Header/NavBar.svelte';
	import { fly, fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let data;
	$: pathname = data.pathname;

	const duration = 300;
	const delay = duration + 100;
	const y = 0;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -20, duration, delay };

	function scrollToTop() {
		window.scrollTo({ top: 0 });
	}
</script>

{#key pathname}
	<main>
		<NavBar />
		<section class="-mt-12 z-0 min-h-screen" in:fly={transitionIn} out:fly={transitionOut}>
			<slot />
		</section>
		<Footer />
	</main>
{/key}
