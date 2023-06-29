<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type { Picture } from '$types/responseInterfaces';
	import ArrowRight from 'virtual:icons/mdi-light/arrow-right';
	import { Image } from '@unpic/svelte';

	export let title: string;
	export let subtitle: string;
	export let path: string;
	export let picture: Picture;
</script>

<div class="layout py-12 lg:py-3">
	<a href={path} class="">
		<div class="relative group">
			<div class="ml-auto w-5/6 lg:w-2/3 h-48 lg:h-64">
				<Image
					src={`${env.PUBLIC_CMS_URL}${picture.data.attributes.url}`}
					layout="fullWidth"
					alt="ENTLE"
					priority={true}
					class=" w-full h-full object-cover object-center rounded-md saturate-[0.70] group-hover:saturate-100 duration-500"
				/>
			</div>
			<div
				class="absolute top-0 lg:translate-y-[50%] -translate-y-[50%] left-0 w-3/4 lg:w-1/2 bg-beige-500 h-28 lg:h-32 p-6 lg:p-12 rounded-md group-hover:translate-x-5 duration-500 ease-in-out"
			>
				<div class="relative flex flex-col justify-evenly h-full space-y-2 lg:space-y-3">
					<h2 class="">{title}</h2>
					<p class="pr-2 lg:pr-0 text-sm lg:text-base">
						{subtitle}
					</p>
					<div class="absolute -right-3 lg:right-0 duration-500">
						<ArrowRight />
					</div>
				</div>
			</div>
		</div>
	</a>
</div>
