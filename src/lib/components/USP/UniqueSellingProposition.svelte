<script lang="ts">
	import { PUBLIC_SHOP_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import WorldMap from '$assets/world.svelte';
	import UspChild from './USPChild.svelte';
	import type { USP } from '$types/responseInterfaces';
	import { CTA } from '$components';
	import Testimonials from '$components/Testimonials/Testimonials.svelte';
	export let mainText: string;
	export let uspData: USP[];
	import IntersectionObserver from 'svelte-intersection-observer';
	import { cubicInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let element;
	let intersecting: boolean = false;
	let mapHeight: number;

	onMount(() => {
		mapHeight = window.innerWidth < 640 ? 200 : 400;

		window.addEventListener('resize', () => {
			mapHeight = window.innerWidth < 640 ? 200 : 400;
		});
	});
</script>

<div class=" bg-gradient-to-b from-purple-500 to-beige-500 max-h-fit overflow-hidden">
	<div class=" layout relative" bind:this={element}>
		<div class="flex items-center xl:h-[52vh] max-h-fit 2xl:h-[37vh] h-[40vh]">
			<div class="flex items-center flex-col w-full lg:w-1/2 z-10 py-6 lg:py-0">
				<IntersectionObserver {element} bind:intersecting threshold={1} rootMargin={'100px'} once>
					{#if intersecting}
						<h3
							class="text-white"
							transition:fade={{ duration: 750, delay: 750, easing: cubicInOut }}
						>
							{mainText}
						</h3>
					{/if}
				</IntersectionObserver>
			</div>
		</div>
		<div
			class="absolute top-12 lg:top-0 -right-48 lg:right-0 opacity-20 lg:opacity-40 h-[50vh] lg:-ml-24"
		>
			<WorldMap height={mapHeight} countryColor="#bdac7d" />
		</div>
	</div>
	<div>
		{#each uspData as item}
			<UspChild
				title={item.titel}
				subtitle={item.untertitel}
				path={item.pfad}
				picture={item.bild}
			/>
		{/each}
	</div>
	<!-- <div class="pt-0 lg:pt-24">
		<Testimonials />
	</div> -->

	<CTA path={PUBLIC_SHOP_URL} CTAIndex={1} />
</div>
