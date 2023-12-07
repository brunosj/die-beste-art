<script lang="ts">
	import ArrowRight from 'virtual:icons/mdi-light/arrow-right';

	export let color: 'dark' | 'light';
	export let path: string;

	const isExternal = path.slice(0, 4) === 'http';
</script>

<button
	class={`${
		color === 'dark'
			? 'bg-brown-900  duration-300 hover:bg-purple-500 ease-in-out'
			: 'bg-brown-500  duration-300 hover:bg-brown-900 ease-in-out'
	}
		text-beige-500 text-xs uppercase rounded-md`}
	aria-label={`Go to ${path}`}
>
	<div class="flex flex-row h-8 group items-center">
		{#if isExternal}
			<a
				href={path}
				rel="noopener noreferrer"
				target="_blank"
				class="flex items-center px-4 leading-none"
			>
				<slot>Fallback</slot>
			</a>{:else}
			<a href={path}>
				<slot>Fallback</slot>
			</a>
		{/if}
		<div
			class="bg-purple-500 px-2 rounded-r-md duration-300 flex items-center h-8 text-beige-500 group-hover:translate-x-1"
		>
			<ArrowRight />
		</div>
	</div>
</button>
