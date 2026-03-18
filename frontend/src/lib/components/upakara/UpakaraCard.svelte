<script>
	import Tag from '../common/Tag.svelte';
</script>

<div
	class="group flex w-[calc(50%-0.625rem)] flex-col overflow-hidden rounded-2xl bg-pedia-white shadow-lg hover:cursor-pointer md:w-[calc(30%-0.625rem)] lg:w-[calc(20%)]"
>
	<div class="relative aspect-square w-full overflow-hidden">
		<div
			class="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm backdrop-blur-md md:text-sm"
		>
			<i class="bi bi-search"></i>
			1.234
		</div>
		<img
			src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/67/2024/01/30/pejati12-1559327608.jpg"
			alt="Upakara Example"
			class="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
		/>
	</div>

	<div class="flex items-start justify-between gap-3 p-2 md:p-5">
		<div class="flex flex-col">
			<h3
				class="mb-2 text-lg font-bold tracking-tight text-pedia-black transition-colors group-hover:text-pedia-red md:text-xl"
			>
				Pejati
			</h3>
			<div class="flex flex-wrap items-center gap-2">
				<Tag label="Manusa Yadnya" />
				<Tag label="Umum" />
			</div>
		</div>
		<button
			class="flex items-center justify-center text-pedia-black-secondary transition-colors hover:cursor-pointer hover:text-pedia-red active:scale-95"
			aria-label="Simpan Upakara"
		>
			<i class="bi bi-bookmark text-xl md:text-2xl"></i>
		</button>
	</div>
</div>
