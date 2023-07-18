<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import type { Homepage } from '$types/responseInterfaces';
	import { CTA } from '$components';
	import Header from '$components/Header/Header.svelte';
	import UniqueSellingProposition from '$components/USP/UniqueSellingProposition.svelte';
	import Seo from '$components/SEO/SEO.svelte';
	import { metadata } from '$data/config';

	let pageData: Homepage;

	onMount(async () => {
		const res = await fetch(
			`${env.PUBLIC_CMS_API_URL}entle-startseite?populate[USP][populate]=*&populate[bild][populate]=*&populate[CTA1][populate]=*&populate[CTA2][populate]=*`
		);
		const data = await res.json();
		pageData = data.data;
	});
</script>

<svelte:head>
	<title>'Entle'</title>
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

{#if pageData}
	<!-- <Seo title={pageData.attributes.titel} /> -->
	<Header
		headerImage={pageData.attributes.bild.data.attributes.url}
		headerHeight="h-48 lg:h-96"
		headerTitle=""
	/>
	<CTA path={env.PUBLIC_SHOP_URL} CTAIndex={0} />
	<UniqueSellingProposition
		mainText={pageData.attributes.heroText}
		uspData={pageData.attributes.USP}
	/>
{/if}
