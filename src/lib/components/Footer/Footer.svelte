<script>
	import { menu, additionalMenu } from '$data/menu';
</script>

<section class=" bg-brown-900">
	<nav
		class=" layout flex flex-col lg:flex-row lg:items-start justify-between h-full pt-6 lg:pt-12 pb-0 lg:pb-6 font-secondary text-beige-500"
	>
		<!-- <div class="text-center">
		<a href="/" data-sveltekit-noscroll>
			<span class="text-7xl lg:text-8xl font-bold tracking-[0.2em] track textHover text-brown-500"
				>ENTLE</span
			>
		</a>
	</div> -->
		<div class="ml-auto lg:ml-0">
			<span class="font-semibold text-sm lg:text-base"> Original Food GmbH </span>
			<br />
			Kartäuserstr. 61 <br />
			79104 Freiburg <br />
			Deutschland
		</div>
		<div class="flex flex-col space-y-3 pt-6 lg:pt-0">
			{#each menu as item}
				<a href={item.slug} class="textHover inline text-sm lg:text-base" data-sveltekit-noscroll
					>{item.name}</a
				>
			{/each}
		</div>
		<div class="flex flex-col space-y-3 pt-3 lg:pt-0">
			{#each additionalMenu as item}
				<a href={item.slug} class="textHover text-sm lg:text-base" data-sveltekit-noscroll
					>{item.name}</a
				>
			{/each}
		</div>
	</nav>
	<div class=" text-xs flex p-6 text-beige-700">
		<span class="ml-auto">
			Webentwicklung von
			<a
				href="https://www.landozone.net/"
				class="textHover underline"
				data-sveltekit-noscroll
				target="_blank"
				rel="noopener noreferrer"
			>
				landozone
			</a>
		</span>
	</div>
</section>
