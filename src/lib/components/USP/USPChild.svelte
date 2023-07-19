<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type { Picture } from '$types/responseInterfaces';
	import ArrowRight from 'virtual:icons/mdi-light/arrow-right';
	import { Image } from '@unpic/svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';

	let element;
	let intersecting: boolean = false;
	let mapHeight: number;

	export let title: string;
	export let subtitle: string;
	export let path: string;
	export let picture: Picture;
</script>

<div class="layout py-12 lg:py-3">
	<a href={path} data-sveltekit-noscroll>
		<div class="relative group" bind:this={element}>
			<div class="ml-auto w-5/6 lg:w-2/3 h-48 lg:h-64">
				<Image
					src={picture.data.attributes.url}
					layout="fullWidth"
					alt="Entlebuch Bild"
					priority={true}
					class=" w-full h-full object-cover object-center rounded-md saturate-[0.70] group-hover:saturate-100 duration-500"
				/>
			</div>
			<IntersectionObserver {element} bind:intersecting threshold={0} once>
				<div
					class="absolute top-0 lg:translate-y-[50%] -translate-y-[50%] left-0 w-3/4 lg:w-1/2 bg-beige-500 h-28 lg:h-32 p-6 lg:p-12 rounded-md group-hover:translate-x-5 duration-500 ease-in-out"
				>
					<div class="relative flex flex-col justify-evenly h-full space-y-2 lg:space-y-3">
						{#if intersecting}
							<h2
								transition:fly={{
									y: 20,
									duration: 400,
									delay: 750,
									opacity: 0,
									easing: cubicInOut
								}}
							>
								{title}
							</h2>
							<p
								class="pr-2 lg:pr-0 text-sm lg:text-base"
								transition:fly={{
									y: 20,
									duration: 400,
									delay: 850,
									opacity: 0,
									easing: cubicInOut
								}}
							>
								{subtitle}
							</p>

							<div
								class="absolute -right-3 lg:right-0 duration-500"
								transition:fly={{
									y: 20,
									duration: 400,
									delay: 850,
									opacity: 0,
									easing: cubicInOut
								}}
							>
								<ArrowRight />
							</div>
						{/if}
					</div>
				</div>
			</IntersectionObserver>
		</div>
	</a>
</div>
