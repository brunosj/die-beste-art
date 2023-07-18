<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import type { Page } from '$types/responseInterfaces';
	import Header from '$components/Header/Header.svelte';
	import TopSection from '$components/Sections/TopSection.svelte';
	import BannerSection from '$components/Sections/BannerSection.svelte';
	import BottomSection from '$components/Sections/BottomSection.svelte';
	import { CTA } from '$components';
	import Seo from '$components/SEO/SEO.svelte';

	let pageData: Page;

	onMount(async () => {
		const res = await fetch(
			`${env.PUBLIC_CMS_API_URL}entle-pages?filters[slug][$eq]=manufaktur&populate[topSektion][populate]=*&populate[unterSektion][populate]=*&populate[bannerSektion][populate]=*&populate[bild][populate]=*`
		);
		const data = await res.json();
		pageData = data.data[0];
	});
</script>

<svelte:head>
	<title>Manufaktur</title>
	<meta
		name="description"
		content={'Schweizer Milchschokolade mit seltenem Wildcacao aus Bolivien'}
	/>
	<meta
		property="og:image"
		content="https://res.cloudinary.com/dp4rdnqrh/image/upload/v1688423822/header_grand_cru_1df1886476.jpg"
	/>
</svelte:head>

{#if pageData}
	<!-- <Seo title={pageData.attributes.titel} /> -->
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
		rectangle1Color="#5c3929"
		rectangle2Color="#735464"
	/>
	<BannerSection
		title={pageData.attributes.bannerSektion.titel}
		text={pageData.attributes.bannerSektion.text}
		pictureSrc={pageData.attributes.bannerSektion.bild.data.attributes.url}
		gradientEndColor="to-purple-600"
	/>
	<BottomSection
		title={pageData.attributes.unterSektion.titel}
		text={pageData.attributes.unterSektion.text}
		picture1Src={pageData.attributes.unterSektion.bild1.data.attributes.url}
		picture2Src={pageData.attributes.unterSektion.bild2.data.attributes.url}
		rectangle1Color="#5c3929"
		rectangle2Color="#93cf72"
	/>
	<CTA path={env.PUBLIC_SHOP_URL} CTAIndex={1} />
{/if}
