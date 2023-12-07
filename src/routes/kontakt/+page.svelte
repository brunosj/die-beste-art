<script lang="ts">
	import type { Page } from '$types/responseInterfaces';
	import TitleHeader from '$components/Header/TitleHeader.svelte';
	import ContactForm from '$components/Form/ContactForm.svelte';
	import SEO from '$lib/components/SEO/index.svelte';

	// SEO
	let title = 'Kontakt';
	let metadescription = '';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Kontakt',
			slug: 'kontakt'
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
<TitleHeader title={pageData.attributes.titel} text={pageData.attributes.text} />
<!-- <ContactForm /> -->
