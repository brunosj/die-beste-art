<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { Image } from '@unpic/svelte';
	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Topography from '$assets/svg/topography.svelte';

	export let title: string;
	export let text: string;
	export let picture1Src: string = '';
	export let picture2Src: string = '';
	export let rectangle1Color: string = '';
	export let rectangle2Color: string = '';

	let element;
	let intersecting: boolean = false;
</script>

<section
	class={`layout relative ${
		picture1Src ? 'grid grid-cols-4 grid-rows-3 pt-12 md:pt-0' : 'sectionPy'
	} overflow-hidden `}
>
	<div class="absolute w-full -z-50 opacity-[2%] overflow-hidden">
		<Topography />
	</div>
	<div
		class="col-span-4 md:col-span-2 row-span-3 flex flex-col my-auto w-full md:w-3/4"
		bind:this={element}
	>
		<IntersectionObserver {element} bind:intersecting threshold={1} once rootMargin={'0px'}>
			{#if intersecting}
				<div transition:fade={{ duration: 750, delay: 250, easing: cubicInOut }} class="md:py-12">
					<h2>{title}</h2>
					<div class="pt-6 md:pt-12">
						<SvelteMarkdown source={text} />
					</div>
				</div>
			{/if}
		</IntersectionObserver>
	</div>
	{#if picture1Src}
		<div class="col-span-2 md:col-span-1 row-span-3">
			<div class="row-span-1 aspect-square">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
					<rect width="1" height="1" fill={rectangle1Color} />
				</svg>
			</div>

			<div class="row-span-1 aspect-square image1-container">
				{#if intersecting}
					<div class="aspect-square">
						<Image
							src={picture1Src}
							layout="constrained"
							width={400}
							alt="Entlebuch Bild"
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
		<div class="col-span-2 md:col-span-1 row-span-3">
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
				<div class="aspect-square">
					<Image
						src={picture2Src}
						layout="constrained"
						width={400}
						alt="Entlebuch Bild"
						aspectRatio={1}
						class="h-full object-cover w-full"
					/>
				</div>
			</div>
		</div>
	{/if}
</section>
