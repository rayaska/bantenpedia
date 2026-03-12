<script lang="ts">
	import NavLink from './NavLink.svelte';
	import { resolve } from '$app/paths';

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<nav
	class="fixed top-0 z-50 w-full transition-colors duration-300 {scrollY > 50
		? 'bg-pedia-black-secondary/80 shadow-md backdrop-blur-xl'
		: 'bg-transparent'}"
>
	<div
		class="flex items-center justify-between px-5 {scrollY > 50 ? 'py-2' : 'py-3'}
             text-pedia-white transition-all duration-300 md:px-20"
	>
		<a href={resolve('/')} class="flex items-center gap-1">
			<img
				src="/images/icon-only.svg"
				alt="Banten Pedia Icon"
				class="{scrollY > 50 ? 'w-10 md:w-12' : 'w-10 md:w-15'} transition-all"
			/>
			<span class="pustaka-bali mb-2 text-lg hover:text-pedia-white-secondary md:text-xl"
				>ᬩᬦ᭄ᬢᭂᬦ᭄ᬧᬾᬤ᭄ᬬ᭟</span
			>
		</a>
		<ul class="hidden gap-5 text-pedia-white md:flex">
			<NavLink href="/" label="Beranda" />
			<NavLink href="/upakara" label="Upakara" />
			<NavLink href="/contribution" label="Kontribusi" />
			<NavLink href="/qna" label="Q&A" />
		</ul>

		<button
			aria-label="Toggle Menu"
			class="cursor-pointer rounded border border-pedia-white px-1 hover:border-pedia-white-secondary hover:text-pedia-white-secondary md:hidden"
		>
			<i class="bi bi-list"></i>
		</button>
	</div>
</nav>
