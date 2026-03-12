<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let { href, label }: { href: string; label: string } = $props();
</script>

<li class="hover:text-pedia-white-secondary {page.url.pathname === href ? 'text-pedia-red' : ''}">
	<a href={resolve(href as '/')} aria-current={page.url.pathname === href}>{label}</a>
</li>
