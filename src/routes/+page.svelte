<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import type { Homepage } from '$types/responseInterfaces';
	import { CTA } from '$components';
	import Header from '$components/Header/Header.svelte';
	import UniqueSellingProposition from '$components/USP/UniqueSellingProposition.svelte';

	let pageData: Homepage;

	onMount(async () => {
		const res = await fetch(`${env.PUBLIC_CMS_API_URL}entle-homepages?populate=*`);
		const data = await res.json();
		pageData = data.data[0];
	});
</script>

<div class="">
	{#if pageData}
		<Header
			headerImage={`${env.PUBLIC_CMS_URL}${pageData.attributes.bild.data.attributes.url}`}
			headerHeight="h-80"
			headerTitle=""
		/>
		<CTA path={env.PUBLIC_SHOP_URL} CTAIndex={0} />
		<UniqueSellingProposition
			mainText={pageData.attributes.USPText}
			uspData={[
				{
					title: pageData.attributes.USP1Titel,
					subtitle: pageData.attributes.USP1Untertitel,
					picture: pageData.attributes.USP1Bild,
					path: pageData.attributes.USP1Pfad
				},
				{
					title: pageData.attributes.USP2Titel,
					subtitle: pageData.attributes.USP2Untertitel,
					picture: pageData.attributes.USP2Bild,
					path: pageData.attributes.USP2Pfad
				},
				{
					title: pageData.attributes.USP3Titel,
					subtitle: pageData.attributes.USP3Untertitel,
					picture: pageData.attributes.USP3Bild,
					path: pageData.attributes.USP3Pfad
				}
			]}
		/>
	{/if}
</div>

<style>
</style>
