<script lang="ts">
	import '../app.css';
	import { Footer } from '$components';
	import NavBar from '$components/Header/NavBar.svelte';
</script>

<main>
	<NavBar />
	<section class="-mt-12 z-0 relative">
		<slot />
	</section>
	<Footer />
</main>
