<script lang="ts">
	import { metadata } from '$data/config';

	export let title: string = '';
	export let description: string = '';
</script>

<svelte:head>
	<title>{title || metadata.title}</title>
	<link rel="icon" href="/favicon.ico" />
	<meta name="description" content={description} />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:url" content={metadata.url} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metadata.title} />
	<meta name="twitter:description" content={metadata.description} />
</svelte:head>
