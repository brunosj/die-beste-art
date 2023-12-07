<script lang="ts">
	import { PUBLIC_CMS_API_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import type { Testimonial } from '$types/responseInterfaces';
	import Carousel from '$components/Carousel/Carousel.svelte';

	let data: Testimonial[];

	onMount(async () => {
		const res = await fetch(`${PUBLIC_CMS_API_URL}entle-kundenstimmen?populate=*`);
		const responseData = await res.json();
		data = responseData.data;
	});
</script>

{#if data}
	<Carousel slides={data} />
{/if}
