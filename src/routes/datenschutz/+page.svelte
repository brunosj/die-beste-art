<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import type { Page } from '$types/responseInterfaces';
	import TitleHeader from '$components/Header/TitleHeader.svelte';
	import Seo from '$components/SEO/SEO.svelte';
	import { page } from '$app/stores';

	let pageData: Page;

	onMount(async () => {
		const res = await fetch(
			`${env.PUBLIC_CMS_API_URL}entle-extraseites?filters[slug][$eq]=datenschutz&populate=*`
		);
		const data = await res.json();
		pageData = data.data[0];
		console.log(pageData);
	});
</script>

{#if pageData}
	<Seo />
	<TitleHeader title={pageData.attributes.titel} text={pageData.attributes.text} />
{/if}
