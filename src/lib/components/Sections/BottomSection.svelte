<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import SvelteMarkdown from 'svelte-markdown';
	import { observeIntersection } from '$lib/utils/observeIntersection';

	export let title: string;
	export let text: string;
	export let picture1Src: string;
	export let picture2Src: string;
	export let rectangle1Color: string;
	export let rectangle2Color: string;

	let showImage1 = false;
	let showImage2 = false;

	onMount(() => {
		const cleanup1 = observeIntersection(
			'.image1-container',
			() => {
				showImage1 = true;
			},
			1,
			'200px'
		);

		const cleanup2 = observeIntersection(
			'.image2-container',
			() => {
				showImage2 = true;
			},
			1,
			'200px'
		);

		return () => {
			cleanup1();
			cleanup2();
		};
	});
</script>

<section class="layout grid grid-cols-2 overflow-hidden pt-12 lg:pt-0">
	<div class="col-span-2 lg:col-span-1 flex flex-col my-auto w-full lg:w-3/4">
		<h2>{title}</h2>
		<div class="pt-6 lg:pt-12">
			<SvelteMarkdown source={text} />
		</div>
	</div>
	<div class="col-span-2 lg:col-span-1 flex gap-0 lg:gap-24 py-0 lg:py-12">
		<div class="relative aspect-square pt-[25vh] -ml-12 lg:-ml-0">
			<div class="aspect-square relative">
				<div class="absolute bottom-6 left-6 aspect-square w-48 h-48 lg:w-64 lg:h-64 -z-0">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
						<rect width="1" height="1" fill={rectangle1Color} />
					</svg>
				</div>
				<div class="image1-container">
					{#if showImage1}
						<div
							class="w-48 h-48 lg:w-64 lg:h-64 relative z-10 aspect-square"
							in:fly|once={{ x: 500, duration: 750, delay: 150, opacity: 0, easing: cubicInOut }}
						>
							<img src={picture1Src} alt="ENTLE" class="object-cover w-48 h-48 lg:w-64 lg:h-64" />
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div class="relative aspect-square ml-auto">
			<div class="aspect-square relative">
				<div class="absolute top-6 left-6 aspect-square w-40 h-40 lg:w-56 lg:h-56 -z-0">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
						<rect width="1" height="1" fill={rectangle2Color} />
					</svg>
				</div>
				<div class="image2-container">
					{#if showImage2}
						<div
							class="w-40 h-40 lg:w-56 lg:h-56 relative z-10 aspect-square"
							in:fly|once={{ x: 500, duration: 750, delay: 150, opacity: 0, easing: cubicInOut }}
						>
							<img src={picture2Src} alt="ENTLE" class="object-cover w-40 h-40 lg:w-56 lg:h-56" />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
