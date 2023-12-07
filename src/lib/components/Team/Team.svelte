<script lang="ts">
	import { PUBLIC_CMS_API_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import type { Team } from '$types/responseInterfaces';
	import SvelteMarkdown from 'svelte-markdown';
	import { Image } from '@unpic/svelte';
	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';

	let data: Team[];

	let element;
	let intersecting: boolean = false;

	onMount(async () => {
		const res = await fetch(`${PUBLIC_CMS_API_URL}entle-teams?populate=*`);
		const responseData = await res.json();
		data = responseData.data;
	});
</script>

{#if data}
	<div class=" sectionPy space-y-32 lg:space-y-24 mt-32 lg:mt-0">
		{#each data as item}
			<div class="layout relative bg-gold-500 bg-opacity-20 lg:grid grid-cols-3 max-h-fit">
				<div class=" relative">
					<div class="absolute -top-24 lg:top-12 aspect-square h-32 lg:h-64">
						<Image
							src={item.attributes.bild.data.attributes.url}
							layout="fullWidth"
							alt=""
							priority={true}
							class=" w-full h-full object-cover object-center saturate-[0.75] rounded-md"
						/>
					</div>
				</div>
				<div class="col-span-2 p-12 flex flex-col justify-center min-h-[12rem]">
					<div class="space-y-6 lg:space-y-12">
						<h2>{item.attributes.name}</h2>
						<SvelteMarkdown source={item.attributes.text} />
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}
