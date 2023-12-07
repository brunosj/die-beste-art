<script lang="ts">
	import { PUBLIC_CMS_API_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import type { CTA } from '$types/responseInterfaces';
	import Button from '$components/Button/Button.svelte';
	import Topography from '$assets/svg/topography.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { cubicInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { Image } from '@unpic/svelte';

	let element;
	let intersecting: boolean = false;

	export let path: string;
	export let CTAIndex: number;
	let data: CTA;

	onMount(async () => {
		const res = await fetch(`${PUBLIC_CMS_API_URL}entle-CTAs?populate=*`);
		const responseData = await res.json();
		data = responseData.data[CTAIndex];
	});
</script>

{#if data}
	<div class="relative overflow-hidden">
		<div class="absolute w-full -z-50 opacity-[2%] overflow-hidden">
			<Topography />
		</div>
		<div class="layout sectionPy" bind:this={element}>
			<IntersectionObserver {element} bind:intersecting threshold={0.7} once>
				{#if intersecting}
					<div
						class="md:grid grid-cols-2"
						transition:fly={{ y: 50, duration: 750, delay: 250, opacity: 0, easing: cubicInOut }}
					>
						<div class="flex flex-col justify-between text-center lg:text-left">
							<div class="m-auto">
								<h2>
									{data.attributes.text}
								</h2>
							</div>
							<div class="hidden lg:block pt-6 pb-3 xl:pt-0 lg:pb-0">
								<Button color="dark" {path}>Jetzt probieren</Button>
							</div>
						</div>

						<div
							class={`${
								CTAIndex === 0 ? 'order-last ml-auto' : 'order-first mr-auto'
							} flex flex-col items-center space-y-6 pt-6`}
						>
							<div class="relative h-32 lg:h-40 w-full flex justify-center items-center">
								<Image
									src={data.attributes.bild.data.attributes.url}
									layout="fullWidth"
									alt="Cacao"
									priority={true}
									class="object-cover h-full w-full saturate-[1]"
									loading="eager"
								/>
							</div>
							<div class="block lg:hidden lg:pt-0 lg:pb-0">
								<Button color="dark" {path}>Jetzt probieren</Button>
							</div>
						</div>
					</div>
				{/if}
			</IntersectionObserver>
		</div>
	</div>
{/if}
