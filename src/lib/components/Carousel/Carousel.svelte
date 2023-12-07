<script lang="ts">
	import { onMount } from 'svelte';

	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-svelte';
	import PrevButton from './PrevButton.svelte';
	import NextButton from './NextButton.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import type { Testimonial } from '$types/responseInterfaces';
	import { Image } from '@unpic/svelte';

	export let slides: Testimonial[];

	let emblaRef: HTMLDivElement;
	let emblaApi: EmblaCarouselType;
	let options: EmblaOptionsType = { loop: false };
	let prevBtnEnabled = false;
	let nextBtnEnabled = false;
	let selectedIndex = 0;
	let scrollSnaps: number[] = [];

	const onInit = (event: CustomEvent<EmblaCarouselType>) => {
		emblaApi = event.detail;

		const onSelect = () => {
			prevBtnEnabled = emblaApi.canScrollPrev();
			nextBtnEnabled = emblaApi.canScrollNext();
			selectedIndex = emblaApi.selectedScrollSnap();
			scrollSnaps = emblaApi.scrollSnapList();
		};

		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', onSelect);
		onSelect();
	};

	const scrollPrev = () => {
		if (emblaApi) {
			emblaApi.scrollPrev();
		}
	};

	const scrollNext = () => {
		if (emblaApi) {
			emblaApi.scrollNext();
		}
	};

	onMount(() => {
		if (emblaApi) {
			emblaApi.reInit();
		}
	});
</script>

<div
	class="embla relative"
	use:emblaCarouselSvelte={{ options, plugins: [] }}
	on:emblaInit={onInit}
>
	<div class="embla__container">
		{#each slides as slide, i}
			<div class="layout w-full 2xl:max-w-7xl max-w-5xl gap-12">
				<div class=" mt-3 flex flex-col ounded-md p-6 items-center space-y-6">
					<div class="text-center">
						<SvelteMarkdown source={slide.attributes.text} />
					</div>
					<div class="flex items-center space-x-3">
						<div class="aspect-square h-20 w-20">
							<Image
								src={slide.attributes.bild.data.attributes.url}
								layout="fullWidth"
								alt="Entlebuch Bild"
								aspectRatio={1}
								class="h-full object-cover w-full"
							/>
						</div>
						<div>
							<h3 class="font-bold">{slide.attributes.name}</h3>
							<h4>{slide.attributes.jobtitel}</h4>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<PrevButton {scrollPrev} enabled={prevBtnEnabled} />
	<NextButton {scrollNext} enabled={nextBtnEnabled} />
</div>
