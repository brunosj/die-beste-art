<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Topography from '$assets/svg/topography.svelte';
	export let title: string;
	export let text: string;
	export let picture1Src: string;
	export let picture2Src: string;
	export let rectangle1Color: string;
	export let rectangle2Color: string;

	let element;
	let intersecting: boolean = false;
</script>

<section class="layout grid grid-cols-2 overflow-hidden pt-12 md:pt-0 relative" bind:this={element}>
	<div class="absolute w-full -z-50 opacity-[2%] overflow-hidden">
		<Topography />
	</div>
	<IntersectionObserver {element} bind:intersecting threshold={0} once rootMargin={''}>
		{#if intersecting}
			<div class="col-span-2 md:col-span-1 flex flex-col my-auto w-full md:w-3/4">
				<div transition:fade={{ duration: 750, delay: 500, easing: cubicInOut }} class="md:py-12">
					<h2>{title}</h2>
					<div class="pt-6 md:pt-12">
						<SvelteMarkdown source={text} />
					</div>
				</div>
			</div>
			<div class="col-span-2 md:col-span-1 flex gap-0 md:gap-24 py-0 md:py-12">
				<div class="relative aspect-square pt-[25vh] -ml-12 md:-ml-0">
					<div class="aspect-square relative">
						<div class="absolute bottom-6 left-6 aspect-square w-48 h-48 md:w-64 md:h-64 -z-0">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
								<rect width="1" height="1" fill={rectangle1Color} />
							</svg>
						</div>
						<div
							class="w-48 h-48 md:w-64 md:h-64 relative z-10 aspect-square"
							transition:fly|once={{
								y: 500,
								duration: 1000,
								delay: 500,
								opacity: 0,
								easing: cubicInOut
							}}
						>
							<img src={picture1Src} alt="ENTLE" class="object-cover w-48 h-48 md:w-64 md:h-64" />
						</div>
					</div>
				</div>

				<div class="relative aspect-square ml-12 md:-ml-48 lg:ml-auto">
					<div class="aspect-square relative">
						<div class="absolute top-6 left-6 aspect-square w-40 h-40 md:w-56 md:h-56 -z-0">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
								<rect width="1" height="1" fill={rectangle2Color} />
							</svg>
						</div>
						<div
							class="w-40 h-40 md:w-56 md:h-56 relative z-10 aspect-square"
							transition:fly|once={{
								x: 500,
								duration: 1000,
								delay: 750,
								opacity: 0,
								easing: cubicInOut
							}}
						>
							<img src={picture2Src} alt="ENTLE" class="object-cover w-40 h-40 md:w-56 md:h-56" />
						</div>
					</div>
				</div>
			</div>
		{/if}
	</IntersectionObserver>
</section>
