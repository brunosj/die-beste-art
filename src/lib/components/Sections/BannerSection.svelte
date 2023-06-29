<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { Image } from '@unpic/svelte';
	import clsx from 'clsx';
	export let title: string;
	export let text: string;
	export let pictureSrc: string;
	export let gradientEndColor: string;
</script>

<section
	class={clsx(
		gradientEndColor,
		'bg-gradient-to-l lg:bg-gradient-to-r from-transparent to-100% lg:to-90% h-[50vh] relative'
	)}
>
	<div class="layout h-full">
		<div class="w-full lg:w-1/2 flex flex-col ml-auto text-beige-500 h-full justify-center">
			<h2>{title}</h2>
			<div class="pt-12 markdownFontSec text-2xl">
				<SvelteMarkdown source={text} />
			</div>
		</div>
	</div>
	<div class="absolute top-0 -z-10 w-full h-full">
		<Image
			src={pictureSrc}
			layout="fullWidth"
			alt="ENTLE"
			class="h-full w-full object-cover object-center"
		/>
	</div>
</section>
