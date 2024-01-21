<script lang="ts">
	import { PUBLIC_SHOP_URL } from '$env/static/public';
	import type { Page } from '$types/responseInterfaces';
	import Header from '$components/Header/Header.svelte';
	import TopSection from '$components/Sections/TopSection.svelte';
	import BannerSection from '$components/Sections/BannerSection.svelte';
	import BottomSection from '$components/Sections/BottomSection.svelte';
	import { CTA } from '$components';
	import SEO from '$lib/components/SEO/index.svelte';

	// SEO
	let title = 'Manufaktur';
	let metadescription = 'Beste Schokolade braucht Zeit: 60 lange Stunden';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Manufaktur',
			slug: 'manufaktur'
		}
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: '',
		datePublished: '2023-12-05T14:19:33.000+0100',
		lastUpdated: '2021-12-05T14:19:33.000+0100'
	};

	// Logic
	export let data;
	let pageData: Page;

	$: pageData = data.page[0];
</script>

<SEO {...seoProps} />
<Header
	headerImage={pageData.attributes.bild.data.attributes.url}
	headerHeight="h-48 md:h-72 lg:h-96"
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
<CTA path={PUBLIC_SHOP_URL} CTAIndex={1} />
