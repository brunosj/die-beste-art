<script lang="ts">
	import clsx from 'clsx';
	export let headerImage: string;
	export let headerHeight: string;
	export let headerTitle: string;
</script>

<div class={headerHeight}>
	<div class={clsx(headerHeight, 'w-full top-0 -z-10 absolute')}>
		<img src={headerImage} alt="Cacao" class="w-full h-full object-cover" />
		<div class="absolute layout bottom-12">
			<span class="text-5xl text-beige-500 font-semibold">
				{headerTitle}
			</span>
		</div>
	</div>
</div>
