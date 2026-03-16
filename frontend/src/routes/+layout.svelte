<script lang="ts">
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/common/navbar/Navbar.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import BottomNav from '$lib/components/common/bottomNav/BottomNav.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Navbar />
{@render children()}
<Footer />
<BottomNav />
