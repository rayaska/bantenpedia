<script lang="ts">
	import StatisticCard from '$lib/components/home/StatisticCard.svelte';
	import StatisticChart from '$lib/components/home/StatisticChart.svelte';
</script>

<section
	class="mx-10 flex min-h-dvh flex-col items-center justify-center gap-5 md:gap-10"
	id="hero"
>
	<figure>
		<img src="/images/icon-with-name.svg" alt="Banten Pedia Icon" class="w-xs md:w-sm" />
	</figure>
	<header class="flex flex-col items-center text-center">
		<h1 class="mb-3 text-3xl font-semibold text-pedia-black md:text-5xl">Banten Pedia</h1>
		<div class="flex flex-col gap-2 text-base text-pedia-black-secondary md:w-200 md:text-lg">
			<p>
				Banten Pedia menyediakan kumpulan upakara yang digunakan oleh masyarakat Hindu di Bali.
				<span class="hidden md:inline">
					Pengetahuan tentang upakara disediakan dalam bentuk tertulis yang mudah dipelajari oleh
					generasi baru. Selain menyediakan pengetahuan, kita juga bisa berkontribusi dengan
					mencatat pengetahuan tentang upakara sehingga koleksinya lebih lengkap.
				</span>
			</p>
			<p>Banten Pedia adalah cara modern untuk kita menjaga warisan budaya Bali.</p>
		</div>
	</header>
</section>

<section class="mx-10 my-15 flex flex-col items-center gap-5 md:gap-10" id="statistic">
	<header class="flex flex-col items-center text-center">
		<h2 class="mb-3 text-2xl font-semibold text-pedia-black md:text-4xl">Statistik Banten Pedia</h2>
		<p class="text-base text-pedia-black-secondary md:w-200 md:text-lg">
			Pembaruan dapat dipantau secara langsung, memungkinkan kita untuk mengetahui data terbaru
			Banten Pedia.
		</p>
	</header>
	<div class="flex w-full max-w-7xl flex-col gap-10">
		<div class="flex flex-wrap justify-center gap-6">
			<StatisticCard count={1000} label="Upakara" />
			<StatisticCard count={8} label="Kontributor" />
			<StatisticCard count={4} label="Penyarikan" />
			<StatisticCard count={1234} label="Pencarian" />
		</div>
		<div
			class="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap lg:gap-5"
		>
			<StatisticChart
				id="yadnya-canvas"
				labels={['Dewa Yadnya', 'Pitra Yadnya', 'Manusa Yadnya', 'Rsi Yadnya', 'Butha Yadnya']}
				data={[20, 11, 3, 34, 22]}
				yTitle="Jumlah Upakara"
				xTitle="Jenis Yadnya"
				title="Distribusi Upakara Berdasarkan Jenis Yadnya"
				chartBg="rgba(255, 72, 72, 0.5)"
				chartBorder="rgba(255, 72, 72, 1)"
			/>
			<StatisticChart
				id="kabupaten-canvas"
				labels={[
					'Badung',
					'Bangli',
					'Buleleng',
					'Denpasar',
					'Gianyar',
					'Karangasem',
					'Jembrana',
					'Klungkung',
					'Tabanan',
					'General'
				]}
				data={[20, 11, 34, 11, 50, 22, 1, 30, 18, 40]}
				yTitle="Jumlah Upakara"
				xTitle="Kabupaten"
				title="Distribusi Upakara Berdasarkan Kabupaten"
				chartBg="rgba(49, 49, 49, 0.5)"
				chartBorder="rgba(49, 49, 49, 1)"
			/>
		</div>
	</div>
</section>

<section class="mx-10 my-15 flex flex-col items-center gap-5 md:gap-10" id="upakara">
	<header class="flex flex-col items-center text-center">
		<h2 class="mb-3 text-2xl font-semibold text-pedia-black md:text-4xl">Upakara</h2>
		<div class="flex flex-col gap-2 text-base text-pedia-black-secondary md:w-200 md:text-lg">
			<p>
				Berbagai macam upakara disediakan oleh Banten Pedia. Mulai satu upakara utuh, hingga
				bagian-bagian penyusunnya. Sistem kontribusi memungkinkan upakara yang terindeks bertambah
				seiring waktu.
			</p>
			<p>Ayo temukan upakaramu!</p>
		</div>
	</header>
	<a
		href="#hero"
		class="rounded-xl bg-pedia-black-secondary px-4 py-2 text-base font-semibold text-pedia-white transition-all hover:bg-pedia-black hover:shadow hover:shadow-pedia-black-secondary/50 md:text-lg"
	>
		<span class="flex items-center gap-2">
			Cari Upakara <i class="bi bi-box-arrow-up-right"></i>
		</span>
	</a>
</section>

<footer class="bg-pedia-red py-5 md:px-10">
	<div class="flex flex-col items-center md:flex-row">
		<div class="order-2 flex items-center md:order-1 md:w-full">
			<img src="/images/silhouette.svg" alt="Banten Pedia Icon" class="w-25 md:w-35" />
			<p class="pustaka-bali mb-4 text-4xl text-pedia-black md:text-5xl">ᬩᬦ᭄ᬢᭂᬦ᭄ᬧᬾᬤ᭄ᬬ᭟</p>
		</div>
		<div class="order-1 flex text-pedia-white md:order-2 md:w-full">
			<ul class="flex flex-col items-center gap-1 text-sm md:items-start md:gap-2 md:text-base">
				<li class="flex gap-1">
					<i class="bi bi-github"></i><a href="https://github.com/rayaska/bantenpedia">GitHub</a>
				</li>
				<li><p class="text-pedia-white">© 2026 Banten Pedia</p></li>
			</ul>
		</div>
	</div>
</footer>

<svelte:head>
	<title>Beranda | Banten Pedia</title>
</svelte:head>
