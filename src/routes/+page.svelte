<script lang="ts">
	import { PUBLIC_SHOP_URL } from '$env/static/public';
	import type { Homepage } from '$types/responseInterfaces';
	import { CTA } from '$components';
	import Header from '$components/Header/Header.svelte';
	import UniqueSellingProposition from '$components/USP/UniqueSellingProposition.svelte';
	import SEO from '$lib/components/SEO/index.svelte';

	// SEO
	let title = '';
	let metadescription = '';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
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
	let pageData: Homepage;

	$: pageData = data.page;
</script>

<SEO {...seoProps} />

<Header
	headerImage={pageData.attributes.bild.data.attributes.url}
	headerHeight="h-48 md:h-72 lg:h-96"
	headerTitle=""
/>
<CTA path={PUBLIC_SHOP_URL} CTAIndex={0} />
<UniqueSellingProposition
	mainText={pageData.attributes.heroText}
	uspData={pageData.attributes.USP.slice(0, 2)}
/>
