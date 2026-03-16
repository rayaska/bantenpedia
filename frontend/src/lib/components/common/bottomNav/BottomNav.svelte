<script>
	import BottomNavLink from './BottomNavLink.svelte';
	import { navLinks } from '$lib/constants/NavLinks';
</script>

<nav class="sticky bottom-0 bg-pedia-black-secondary px-5 py-2 md:hidden">
	<ul class="flex items-center justify-between text-pedia-white">
		{#each navLinks as navLink (navLink.id)}
			<BottomNavLink
				href={navLink.href}
				label={navLink.label}
				inactiveIcon={navLink.inactiveIcon}
				activeIcon={navLink.activeIcon}
			/>
		{/each}
	</ul>
</nav>
