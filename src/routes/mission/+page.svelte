<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import type { Page } from '$types/responseInterfaces';
	import Header from '$components/Header/Header.svelte';
	import TopSection from '$components/Sections/TopSection.svelte';
	import BannerSection from '$components/Sections/BannerSection.svelte';
	import BottomSection from '$components/Sections/BottomSection.svelte';
	import { CTA } from '$components';
	import Team from '$components/Team/Team.svelte';
	import Seo from '$components/SEO/SEO.svelte';

	let pageData: Page;

	onMount(async () => {
		const res = await fetch(
			`${env.PUBLIC_CMS_API_URL}entle-pages?filters[slug][$eq]=mission&populate[topSektion][populate]=*&populate[unterSektion][populate]=*&populate[bannerSektion][populate]=*&populate[bild][populate]=*`
		);
		const data = await res.json();
		pageData = data.data[0];
	});
</script>

{#if pageData}
	<Seo title={pageData.attributes.titel} />
	<Header
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
	<CTA path={env.PUBLIC_SHOP_URL} CTAIndex={1} />
{/if}
