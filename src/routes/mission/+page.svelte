<script lang="ts">
	import { PUBLIC_SHOP_URL } from '$env/static/public';
	import type { Page } from '$types/responseInterfaces';
	import Header from '$components/Header/Header.svelte';
	import TopSection from '$components/Sections/TopSection.svelte';
	import BannerSection from '$components/Sections/BannerSection.svelte';
	import { CTA } from '$components';
	import Team from '$components/Team/Team.svelte';
	import SEO from '$lib/components/SEO/index.svelte';

	// SEO
	let title = 'Mission';
	let metadescription = 'Unsere Mission';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Mission',
			slug: 'mission'
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
<!-- <Header
	headerImage={pageData.attributes.bild.data.attributes.url}
	headerHeight="h-48 md:h-72 lg:h-96"
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
<CTA path={PUBLIC_SHOP_URL} CTAIndex={1} /> -->
