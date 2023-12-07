<script lang="ts">
	import { Image } from '@unpic/svelte';
	import { fade } from 'svelte/transition';

	export let headerImage: string;
	export let headerHeight: string;
	export let headerTitle: string;
</script>

<div class={headerHeight}>
	<div class={`${headerHeight} w-full top-0 -z-10 absolute gradient-overlay`}>
		<Image
			src={headerImage}
			layout="fullWidth"
			alt="Entlebuch Bild"
			priority={true}
			class="object-cover h-full w-full saturate-[1]"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="absolute layout bottom-6 lg:bottom-12">
			<h1 class="text-beige-500 font-semibold">{headerTitle}</h1>
		</div>
	</div>
</div>

<style>
	.gradient-overlay {
		position: relative;
		overflow: hidden;
	}

	.gradient-overlay::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0) 25%,
			rgba(0, 0, 0, 0)
		);
		z-index: 5;
	}
</style>
