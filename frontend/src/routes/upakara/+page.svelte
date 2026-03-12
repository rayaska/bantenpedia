<script lang="ts">
</script>

<section class="mt-20 flex flex-col items-center justify-center gap-3 px-10 md:mt-30">
	<p class="text-center text-sm md:text-base">
		Temukan berbagai upakara yang ingin kamu cari. Gunakan filter untuk memudahkan pencarian.
	</p>
	<form class="my-3 w-full md:w-1/2">
		<div
			class="flex items-center overflow-hidden rounded-xl border border-pedia-black-secondary bg-white text-sm focus-within:border-pedia-red focus-within:ring-1 focus-within:ring-pedia-red md:text-base"
		>
			<div class="px-4 text-pedia-black-secondary">
				<i class="bi bi-search"></i>
			</div>
			<input
				type="text"
				placeholder="Masukkan kata kunci..."
				class="mr-2 w-full appearance-none bg-transparent py-2 outline-none placeholder:text-pedia-black-secondary"
			/>
			<button
				class="cursor-pointer bg-pedia-red px-4 py-2 font-medium text-pedia-white transition-colors hover:bg-pedia-red/90 md:px-8"
				type="submit"
			>
				Cari
			</button>
		</div>
	</form>
</section>

<section class="mt-20 flex flex-col items-center justify-center gap-3 px-10">
	<h2 class="mb-3 text-xl font-semibold text-pedia-black md:text-3xl">Pencarian Populer</h2>
	<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"></div>
</section>
