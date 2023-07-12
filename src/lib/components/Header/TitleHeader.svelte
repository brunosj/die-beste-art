<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount, afterUpdate } from 'svelte';
	import { processMarkdownLinks } from '$lib/utils/processMarkdownLinks';

	export let title: string;
	export let text: String;

	let markdownRef: Element;

	onMount(() => processMarkdownLinks(markdownRef));
	afterUpdate(() => processMarkdownLinks(markdownRef));
</script>

<section>
	<div class="py-32 bg-purple-500">
		<h1 class="text-beige-500 layout">
			{title}
		</h1>
	</div>
	<div class="layout sectionPy markdown" bind:this={markdownRef}>
		<SvelteMarkdown source={text} />
	</div>
</section>
