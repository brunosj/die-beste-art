<script lang="ts">
	import '../app.css';
	import '$styles/carousel.css';
	import { Footer } from '$components';
	import NavBar from '$components/Header/NavBar.svelte';
	import { fly, fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { menuOpen } from '$stores/store';

	export let data;
	$: pathname = data.pathname;

	let isMenuOpen = false;
	menuOpen.subscribe((value) => {
		isMenuOpen = value;
	});

	const duration = 200;
	const delay = duration + 100;
	const y = 0;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -20, duration, delay };

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
