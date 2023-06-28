<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import WorldMap from '$assets/world.svelte';
	import UspChild from './USPChild.svelte';
	import type { Picture } from '$types/responseInterfaces';
	import { CTA } from '$components';

	export let mainText: string;
	export let uspData: { title: string; subtitle: string; path: string; picture: Picture }[] = [];
	let mapHeight: number;
	onMount(() => {
		mapHeight = window.innerWidth < 640 ? 200 : 400;

		window.addEventListener('resize', () => {
			mapHeight = window.innerWidth < 640 ? 200 : 400;
		});
	});
</script>

<div class=" bg-gradient-to-b from-purple-500 to-beige-500 max-h-fit overflow-hidden">
	<div class=" layout relative">
		<div class="flex items-center xl:h-[52vh] max-h-fit 2xl:h-[37vh] h-[35vh]">
			<div class="flex items-center flex-col w-full lg:w-1/2">
				<div class="">
					<h3 class="text-white">{mainText}</h3>
				</div>
			</div>
		</div>
		<div
			class="absolute top-12 lg:top-0 -right-48 lg:right-0 opacity-20 lg:opacity-40 h-[50vh] lg:-ml-24"
		>
			<WorldMap height={mapHeight} countryColor="#bdac7d" />
		</div>
	</div>
	{#each uspData as uspItem (uspItem.title)}
		<UspChild
			title={uspItem.title}
			subtitle={uspItem.subtitle}
			path={uspItem.path}
			picture={uspItem.picture}
		/>
	{/each}
	<CTA path={env.PUBLIC_SHOP_URL} CTAIndex={1} />
</div>
