<script lang="ts">
	import { onMount } from 'svelte';
	import { menu, additionalMenu } from '$data/menu';
	import Menu from 'virtual:icons/material-symbols/menu-rounded';
	import Close from 'virtual:icons/material-symbols/close-rounded';
	import { menuOpen } from '$stores/store';
	import Button from '$components/Button/Button.svelte';
	import { env } from '$env/dynamic/public';

	let menuRef: HTMLDivElement;
	let isOpen = false;
	let menuWidth = 0;
	let resizeListener: () => void;

	onMount(() => {
		const handleClickOutside = (e: Event) => {
			if (menuRef && !menuRef.contains(e.target as Node)) {
				menuOpen.set(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);

		resizeListener = () => {
			if (menuRef) {
				menuWidth = menuRef.offsetWidth;
			}
		};
		window.addEventListener('resize', resizeListener);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			window.removeEventListener('resize', resizeListener);
		};
	});
</script>

<div class="relative flex items-center lg:hidden">
	<nav class="ml-3 flex items-center lg:ml-4 space-x-3">
		<button
			type="button"
			aria-label="change theme"
			class="textHover text-beige-500"
			on:click={() => menuOpen.set(true)}
		>
			<Menu />
		</button>
	</nav>
	<div
		bind:this={menuRef}
		class={`fixed bg-beige-500 top-0 right-0 h-full  w-4/5 overflow-auto  transform duration-300 ease-in-out text-neutral-900 ${
			$menuOpen ? 'translate-x-0' : `translate-x-full`
		} transition-transform`}
	>
		<div class=" bg-taupe absolute inset-0 w-full h-auto -z-50" />
		<div class="flex justify-end">
			<button
				class="px-6 pt-3 text-neutral-900"
				on:click={() => menuOpen.set(false)}
				aria-label="Close menu"
			>
				<Close />
			</button>
		</div>
		<div class="flex flex-col px-12 justify-center h-full space-y-6 relative z-10">
			<div>
				{#each menu as item, i}
					<a
						href={item.slug}
						rel={item.slug.startsWith('http') ? 'noopener noreferrer' : ''}
						target={item.slug.startsWith('http') ? '_blank' : ''}
						class="block px-4 py-2 text-xl textHover"
						on:click={() => menuOpen.set(false)}
					>
						{item.name}
					</a>
				{/each}
			</div>
			<div class="px-4 py-0">
				<Button color="dark" path={env.PUBLIC_SHOP_URL}>Online-Shop</Button>
			</div>

			<div class="border-t border-neutral-300 pt-6">
				{#each additionalMenu as item, i}
					<a
						href={item.slug}
						rel={item.slug.startsWith('http') ? 'noopener noreferrer' : ''}
						target={item.slug.startsWith('http') ? '_blank' : ''}
						class="block px-4 py-2 text-sm textHover"
						on:click={() => menuOpen.set(false)}
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
