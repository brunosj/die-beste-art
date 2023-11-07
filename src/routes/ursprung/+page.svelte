<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { CTA } from '$components';
	export let data;

	import type { Page } from '$types/responseInterfaces';
	import Header from '$components/Header/Header.svelte';
	import TopSection from '$components/Sections/TopSection.svelte';
	import BannerSection from '$components/Sections/BannerSection.svelte';
	import BottomSection from '$components/Sections/BottomSection.svelte';
	import Seo from '$components/SEO/SEO.svelte';

	let pageData: Page;

	$: pageData = data.page[0];
</script>

<svelte:head>
	<title>Ursprung</title>
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
	headerTitle={pageData.attributes.titel}
/>

<TopSection
	title={pageData.attributes.topSektion.titel}
	text={pageData.attributes.topSektion.text}
	picture1Src={pageData.attributes.topSektion.bild1.data.attributes.url}
	picture2Src={pageData.attributes.topSektion.bild2.data.attributes.url}
	rectangle1Color="#735464"
	rectangle2Color="#93cf72"
/>
<BannerSection
	title={pageData.attributes.bannerSektion.titel}
	text={pageData.attributes.bannerSektion.text}
	pictureSrc={pageData.attributes.bannerSektion.bild.data.attributes.url}
	gradientEndColor="to-green-800"
/>
<BottomSection
	title={pageData.attributes.unterSektion.titel}
	text={pageData.attributes.unterSektion.text}
	picture1Src={pageData.attributes.unterSektion.bild1.data.attributes.url}
	picture2Src={pageData.attributes.unterSektion.bild2.data.attributes.url}
	rectangle1Color="#735464"
	rectangle2Color="#93cf72"
/>
<CTA path={env.PUBLIC_SHOP_URL} CTAIndex={1} />
