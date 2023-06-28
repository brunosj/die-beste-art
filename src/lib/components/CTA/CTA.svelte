<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import type { CTA } from '$types/responseInterfaces';
	import Button from '$components/Button/Button.svelte';
	import Topography from '$assets/svg/topography.svelte';

	export let path: string;
	export let CTAIndex: number;
	let data: CTA;

	onMount(async () => {
		const res = await fetch(`${env.PUBLIC_CMS_API_URL}entle-CTAs?populate=*`);
		const responseData = await res.json();
		data = responseData.data[CTAIndex];
	});
</script>

{#if data}
	<div class="relative overflow-hidden">
		<div class="absolute w-full -z-50 opacity-[2%] overflow-hidden">
			<Topography />
		</div>
		<div class="layout lg:grid grid-cols-2 py-12 lg:py-24">
			<div class="flex flex-col justify-between">
				<div>
					<h1>
						{data.attributes.text}
					</h1>
				</div>
				<div class="pt-6 pb-3 lg:pt-0 lg:pb-0">
					<Button color="light" {path} className="">Jetzt probieren</Button>
				</div>
			</div>
			<div class={`${CTAIndex === 0 ? 'order-last ml-auto' : 'order-first mr-auto'}`}>
				<div class="relative h-40 w-full">
					<img
						src={`${env.PUBLIC_CMS_URL}${data.attributes.bild.data.attributes.url}`}
						alt="Cacao"
						class="object-cover h-full"
					/>
				</div>
			</div>
		</div>
	</div>
{/if}
