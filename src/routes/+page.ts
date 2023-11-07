export async function load({ fetch }) {
	try {
		const res = await fetch(
			`${
				import.meta.env.VITE_CMS_API_URL
			}entle-startseite?populate[USP][populate]=*&populate[bild][populate]=*&populate[CTA1][populate]=*&populate[CTA2][populate]=*`
		);

		if (!res.ok) {
			throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
		}

		const data = await res.json();
		const page = data.data;

		return {
			page
		};
	} catch (error) {
		console.error('Error while fetching data:', error);

		return {
			status: 500,
			error: 'Failed to fetch data'
		};
	}
}
