<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { Image } from '@unpic/svelte';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { observeIntersection } from '$lib/utils/observeIntersection';

	export let title: string;
	export let text: string;
	export let picture1Src: string = '';
	export let picture2Src: string = '';
	export let rectangle1Color: string = '';
	export let rectangle2Color: string = '';

	let showImage1 = false;
	let showImage2 = false;

	onMount(() => {
		const cleanup1 = observeIntersection(
			'.image1-container',
			() => {
				showImage1 = true;
			},
			0
		);

		const cleanup2 = observeIntersection(
			'.image2-container',
			() => {
				showImage2 = true;
			},
			0
		);

		return () => {
			cleanup1();
			cleanup2();
		};
	});
</script>

<section
	class={`layout ${
		picture1Src ? 'grid grid-cols-4 grid-rows-3 pt-12 lg:pt-0' : 'sectionPy'
	} overflow-hidden `}
>
	<div class="col-span-4 lg:col-span-2 row-span-3 flex flex-col my-auto w-full lg:w-3/4">
		<h2>{title}</h2>
		<div class="pt-6 lg:pt-12">
			<SvelteMarkdown source={text} />
		</div>
	</div>
	{#if picture1Src}
		<div class="col-span-2 lg:col-span-1 row-span-3">
			<div class="row-span-1 aspect-square">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
					<rect width="1" height="1" fill={rectangle1Color} />
				</svg>
			</div>
			<div class="row-span-1 aspect-square image1-container">
				{#if showImage1}
					<div
						in:fly|once={{ x: 500, duration: 750, delay: 150, opacity: 0, easing: cubicInOut }}
						class="aspect-square"
					>
						<Image
							src={picture1Src}
							layout="fullWidth"
							alt="ENTLE"
							aspectRatio={1}
							class="h-full object-cover w-full"
						/>
					</div>
				{/if}
			</div>
			<div />
		</div>
	{/if}
	{#if picture2Src}
		<div class="col-span-2 lg:col-span-1 row-span-3">
			<div class="row-span-1 aspect-square">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
					<rect width="1" height="1" fill="transparent" />
				</svg>
			</div>
			<div class="row-span-1 aspect-square">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
					<rect width="1" height="1" fill={rectangle2Color} />
				</svg>
			</div>
			<div class="row-start-3 row-span-1 aspect-square image2-container">
				{#if showImage2}
					<div
						in:fly|once={{ x: 500, duration: 750, delay: 500, opacity: 0, easing: cubicInOut }}
						class="aspect-square"
					>
						<Image
							src={picture2Src}
							layout="fullWidth"
							alt="ENTLE"
							aspectRatio={1}
							class="h-full object-cover w-full"
						/>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</section>
