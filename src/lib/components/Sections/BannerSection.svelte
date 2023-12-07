<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { Image } from '@unpic/svelte';

	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';

	export let title: string;
	export let text: string;
	export let pictureSrc: string;
	export let gradientEndColor: string;

	let element;
	let intersecting: boolean = false;
</script>

<section
	class={`${gradientEndColor} bg-gradient-to-l lg:bg-gradient-to-r from-transparent to-100% lg:to-90% h-[50vh] relative`}
>
	<div class="layout h-full">
		<div
			class="w-full lg:w-1/2 flex flex-col ml-auto text-beige-500 h-full justify-center"
			bind:this={element}
		>
			<IntersectionObserver {element} bind:intersecting threshold={0} once rootMargin={'0px'}>
				{#if intersecting}
					<div
						transition:fade={{ duration: 750, delay: 250, easing: cubicInOut }}
						class="mt-6 lg:mt-0 space-y-6 lg:space-y-12"
					>
						<h2>{title}</h2>
						<div class="markdownFontSec text-2xl">
							<SvelteMarkdown source={text} />
						</div>
					</div>
				{/if}
			</IntersectionObserver>
		</div>
	</div>
	<div class="absolute top-0 -z-10 w-full h-full">
		<Image
			src={pictureSrc}
			layout="fullWidth"
			alt="Entlebuch Bild"
			class="h-full w-full object-cover object-center"
		/>
	</div>
</section>
