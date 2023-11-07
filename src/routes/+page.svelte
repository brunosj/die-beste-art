<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type { Homepage } from '$types/responseInterfaces';
	import { CTA } from '$components';
	import Header from '$components/Header/Header.svelte';
	import UniqueSellingProposition from '$components/USP/UniqueSellingProposition.svelte';
	import Seo from '$components/SEO/SEO.svelte';

	export let data;
	let pageData: Homepage;

	$: pageData = data.page;
</script>

<svelte:head>
	<title>Entlebuch</title>
	<meta
		name="description"
		content={'Schweizer Milchschokolade mit seltenem Wildcacao aus Bolivien'}
	/>
	<meta
		property="og:image"
		content="https://res.cloudinary.com/dp4rdnqrh/image/upload/v1688423822/header_grand_cru_1df1886476.jpg"
	/>
</svelte:head>

<Header
	headerImage={pageData.attributes.bild.data.attributes.url}
	headerHeight="h-48 lg:h-96"
	headerTitle=""
/>
<CTA path={env.PUBLIC_SHOP_URL} CTAIndex={0} />
<UniqueSellingProposition
	mainText={pageData.attributes.heroText}
	uspData={pageData.attributes.USP.slice(0, 2)}
/>
