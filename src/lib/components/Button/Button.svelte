<script lang="ts">
	import clsx from 'clsx';

	export let className: string = '';
	export let color: 'dark' | 'light';
	export let path: string;

	const isExternal = path.slice(0, 4) === 'http';
</script>

<button
	class={clsx(
		className,
		color === 'dark'
			? 'bg-brown-900  duration-300 hover:bg-brown-700 ease-in-out'
			: 'bg-brown-500  duration-300 hover:bg-brown-900 ease-in-out',
		'text-beige-500 flex py-3 px-4  text-sm uppercase rounded-md'
	)}
>
	{#if isExternal}
		<a href={path} rel="noopener noreferrer" target="_blank">
			<slot>Fallback</slot>
		</a>{:else}
		<a href={path}>
			<slot>Fallback</slot>
		</a>
	{/if}
</button>
