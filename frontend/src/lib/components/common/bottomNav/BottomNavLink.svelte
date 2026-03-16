<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let {
		href,
		label,
		inactiveIcon,
		activeIcon
	}: { href: string; label: string; inactiveIcon: string; activeIcon: string } = $props();
</script>

<li>
	<a
		href={resolve(href as '/')}
		aria-current={page.url.pathname === href}
		class="flex flex-col items-center {page.url.pathname === href ? 'text-pedia-red' : ''}"
	>
		<i class="bi bi-{page.url.pathname === href ? activeIcon : inactiveIcon} text-lg"></i>
		<span class="text-xs">{label}</span>
	</a>
</li>
