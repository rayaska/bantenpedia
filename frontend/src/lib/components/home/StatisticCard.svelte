<script lang="ts">
	let { count, label }: { count: number; label: string } = $props();
</script>

<div
	class="flex flex-col items-center justify-center rounded-2xl border border-pedia-black p-6 transition-all hover:shadow-lg"
>
	<p class="text-4xl font-bold text-pedia-black md:text-5xl">{count}</p>
	<p class="text-lg text-pedia-black-secondary">{label}</p>
</div>
