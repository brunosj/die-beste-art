<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type { Page } from '$types/responseInterfaces';
	import Header from '$components/Header/Header.svelte';
	import TopSection from '$components/Sections/TopSection.svelte';
	import BannerSection from '$components/Sections/BannerSection.svelte';
	import { CTA } from '$components';
	import Team from '$components/Team/Team.svelte';
	import Seo from '$components/SEO/SEO.svelte';

	export let data;

	let pageData: Page;
	$: pageData = data.page[0];
</script>

<svelte:head>
	<title>Mission</title>
	<meta
		name="description"
		content={'Schweizer Milchschokolade mit seltenem Wildcacao aus Bolivien'}
	/>
	<meta
		property="og:image"
		content="https://res.cloudinary.com/dp4rdnqrh/image/upload/v1688423822/header_grand_cru_1df1886476.jpg"
	/>

	<html lang="de" />
</svelte:head>

<!-- <Seo title={pageData.attributes.titel} /> -->
<!-- <Header
	headerImage={pageData.attributes.bild.data.attributes.url}
	headerHeight="h-48 lg:h-96"
	headerTitle={pageData.attributes.titel}
/>
<TopSection
	title={pageData.attributes.topSektion.titel}
	text={pageData.attributes.topSektion.text}
/>
<BannerSection
	title={pageData.attributes.bannerSektion.titel}
	text={pageData.attributes.bannerSektion.text}
	pictureSrc={pageData.attributes.bannerSektion.bild.data.attributes.url}
	gradientEndColor="to-gold-600"
/>
<Team />
<CTA path={env.PUBLIC_SHOP_URL} CTAIndex={1} /> -->
