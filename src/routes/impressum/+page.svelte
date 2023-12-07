<script lang="ts">
	import type { Page } from '$types/responseInterfaces';
	import TitleHeader from '$components/Header/TitleHeader.svelte';
	import SEO from '$lib/components/SEO/index.svelte';

	// SEO
	let title = 'Impressum';
	let metadescription = '';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Impressum',
			slug: 'impressum'
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
