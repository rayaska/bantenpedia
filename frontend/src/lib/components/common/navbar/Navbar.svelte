<script lang="ts">
	import NavLink from './NavLink.svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { navLinks } from '$lib/constants/NavLinks';

	let scrollY = $state(0);
	let navClass = $state(
		'fixed top-0 z-50 w-full transition-color duration-300 bg-pedia-black-secondary/80 shadow-md backdrop-blur-xl py-2'
	);
	let brandClass = $state('w-10 md:w-12');

	$effect(() => {
		if (page.url.pathname !== '/' || scrollY > 50) {
			navClass =
				'fixed top-0 z-50 w-full transition-color duration-300 bg-pedia-black-secondary/80 shadow-md backdrop-blur-xl py-2';
			brandClass = 'w-10 md:w-12 transition-all';
		} else {
			navClass = 'fixed top-0 z-50 w-full transition-colors duration-300 bg-transparent py-3';
			brandClass = 'w-10 md:w-15 transition-all';
		}
	});
</script>

<svelte:window bind:scrollY />

<nav class={navClass}>
	<div
		class="flex items-center justify-between px-5 text-pedia-white transition-all duration-300 md:px-20"
	>
		<a href={resolve('/')} class="flex items-center gap-1">
			<img src="/images/icon-only.svg" alt="Banten Pedia Icon" class={brandClass} />
			<span class="pustaka-bali mb-2 text-lg hover:text-pedia-white-secondary md:text-xl"
				>ᬩᬦ᭄ᬢᭂᬦ᭄ᬧᬾᬤ᭄ᬬ᭟</span
			>
		</a>
		<ul class="hidden gap-5 text-pedia-white md:flex">
			{#each navLinks as navLink (navLink.id)}
				<NavLink href={navLink.href} label={navLink.label} />
			{/each}
		</ul>
	</div>
</nav>
