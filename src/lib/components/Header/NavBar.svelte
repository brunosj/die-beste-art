<script lang="ts">
	import { menu } from '$data/menu';
	import { PUBLIC_SHOP_URL } from '$env/static/public';
	import Button from '$components/Button/Button.svelte';
	import MobileMenu from './MobileMenu.svelte';
</script>

<nav
	class="layout flex items-center justify-between bg-transparent h-12 relative z-10 text-beige-500 font-semibold font-secondary"
>
	<div>
		<a href="/">
			<h4 class="font-bold tracking-widest textHover">ENTLEBUCH</h4>
		</a>
	</div>
	<div class="hidden lg:flex items-center space-x-12">
		{#each menu as item}
			<a href={item.slug} class="textHover">{item.name}</a>
		{/each}
		<Button color="dark" path={PUBLIC_SHOP_URL}>Online-Shop</Button>
	</div>
	<MobileMenu />
</nav>
