<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import type { Team } from '$types/responseInterfaces';
	import SvelteMarkdown from 'svelte-markdown';
	import { Image } from '@unpic/svelte';

	let data: Team[];

	onMount(async () => {
		const res = await fetch(`${env.PUBLIC_CMS_API_URL}entle-teams?populate=*`);
		const responseData = await res.json();
		data = responseData.data;
		console.log(data);
	});
</script>

{#if data}
	<div class=" sectionPy space-y-32 lg:space-y-24 mt-32 lg:mt-0">
		{#each data as item}
			<div class="layout relative bg-gold-500 bg-opacity-20 lg:grid grid-cols-3 max-h-fit">
				<div class=" relative">
					<div class="absolute -top-24 lg:top-12 aspect-square h-32 lg:h-64">
						<Image
							src={`${env.PUBLIC_CMS_URL}${item.attributes.bild.data.attributes.url}`}
							layout="fullWidth"
							alt="ENTLE"
							priority={true}
							class=" w-full h-full object-cover object-center saturate-[0.75] rounded-md"
						/>
					</div>
				</div>
				<div class="flex flex-col justify-center col-span-2 p-12 space-y-6 lg:space-y-12">
					<h2>{item.attributes.name}</h2>

					<SvelteMarkdown source={item.attributes.text} />
				</div>
			</div>
			<!-- content here -->
		{/each}
	</div>
{/if}
