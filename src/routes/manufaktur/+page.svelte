<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import type { Page } from '$types/responseInterfaces';
	import Header from '$components/Header/Header.svelte';

	let pageData: Page;

	onMount(async () => {
		const res = await fetch(
			`${env.PUBLIC_CMS_API_URL}entle-pages?filters[slug][$eq]=manufaktur&populate[topSektion][populate]=*&populate[unterSektion][populate]=*&populate[bannerSektion][populate]=*&populate[bild][populate]=*`
		);
		const data = await res.json();
		pageData = data.data[0];
		console.log(pageData);
	});
</script>

{#if pageData}
	<Header
		headerImage={`${env.PUBLIC_CMS_URL}${pageData.attributes.bild.data.attributes.url}`}
		headerHeight="h-80"
		headerTitle={pageData.attributes.titel}
	/>
	<section class="layout">
		<div>
			{pageData.attributes.topSektion.titel}
		</div>
		<div>
			<SvelteMarkdown source={pageData.attributes.topSektion.text} />
		</div>
	</section>
{/if}

<style>
</style>
