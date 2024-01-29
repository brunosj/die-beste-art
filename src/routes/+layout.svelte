<script lang="ts">
	import '../app.css';
	import '$styles/carousel.css';
	import { Footer } from '$components';
	import NavBar from '$components/Header/NavBar.svelte';
	import { fly, fade } from 'svelte/transition';
	import { cubicIn, cubicOut, cubicInOut } from 'svelte/easing';
	import { menuOpen } from '$stores/store';

	export let data;
	$: pathname = data.pathname;

	let isMenuOpen = false;
	menuOpen.subscribe((value) => {
		isMenuOpen = value;
	});

	const duration = 750;
	const delay = 0;
	const y = 0;
	const opacity = 1;

	const transitionIn = { easing: cubicInOut, y: 0, duration: 1000, delay, opacity };
	const transitionOut = { easing: cubicInOut, y: -50, duration: 500, delay, opacity };

	function scrollToTop() {
		window.scrollTo({ top: 0 });
	}
</script>

{#key pathname}
	<main in:fly={transitionIn} out:fly={transitionOut} on:outroend={scrollToTop}>
		<NavBar />
		<section
			class={isMenuOpen
				? 'filter blur-sm duration-700 ease-in-out -mt-12 z-0 min-h-screen'
				: '-mt-12 z-0 min-h-screen'}
		>
			<slot />
		</section>
		<Footer />
	</main>
{/key}
