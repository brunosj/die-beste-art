<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import type { Page } from '$types/responseInterfaces';
	import TitleHeader from '$components/Header/TitleHeader.svelte';
	import Seo from '$components/SEO/SEO.svelte';
	import ContactForm from '$components/Form/ContactForm.svelte';

	let pageData: Page;

	onMount(async () => {
		const res = await fetch(
			`${env.PUBLIC_CMS_API_URL}entle-extraseites?filters[slug][$eq]=kontakt&populate=*`
		);
		const data = await res.json();
		pageData = data.data[0];
		console.log(pageData);
	});
</script>

<svelte:head>
	<title>Kontakt</title>
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
	<TitleHeader title={pageData.attributes.titel} text={pageData.attributes.text} />
	<!-- <ContactForm /> -->
{/if}
