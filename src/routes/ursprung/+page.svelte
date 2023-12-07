<script lang="ts">
	export let data;

	import { PUBLIC_SHOP_URL } from '$env/static/public';
	import { CTA } from '$components';
	import type { Page } from '$types/responseInterfaces';
	import Header from '$components/Header/Header.svelte';
	import TopSection from '$components/Sections/TopSection.svelte';
	import BannerSection from '$components/Sections/BannerSection.svelte';
	import BottomSection from '$components/Sections/BottomSection.svelte';
	import SEO from '$lib/components/SEO/index.svelte';

	// SEO
	let title = 'Urpsrung';
	let metadescription = 'Seltener Wildcacao aus Baure / Bolivien';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Ursprung',
			slug: 'ursprung'
		}
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: 'ursprung',
		datePublished: '2023-12-05T14:19:33.000+0100',
		lastUpdated: '2021-12-05T14:19:33.000+0100'
	};

	// Logic
	let pageData: Page;

	$: pageData = data.page[0];
</script>

<SEO {...seoProps} />

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
<CTA path={PUBLIC_SHOP_URL} CTAIndex={1} />
