<script lang="ts">
	import type { Page } from '$types/responseInterfaces';
	import TitleHeader from '$components/Header/TitleHeader.svelte';
	import Seo from '$components/SEO/SEO.svelte';

	export let data;
	let pageData: Page;

	$: pageData = data.page[0];
</script>

<svelte:head>
	<title>Datenschutz</title>
	<meta
		name="description"
		content={'Schweizer Milchschokolade mit seltenem Wildcacao aus Bolivien'}
	/>
	<meta
		property="og:image"
		content="https://res.cloudinary.com/dp4rdnqrh/image/upload/v1688423822/header_grand_cru_1df1886476.jpg"
	/>
</svelte:head>

<!-- <Seo /> -->
<TitleHeader title={pageData.attributes.titel} text={pageData.attributes.text} />
