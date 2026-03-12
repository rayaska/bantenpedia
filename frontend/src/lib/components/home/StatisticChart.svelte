<script lang="ts">
	let {
		id,
		labels,
		data,
		yTitle,
		xTitle,
		title,
		chartBg,
		chartBorder
	}: {
		id: string;
		labels: string[];
		data: number[];
		yTitle: string;
		xTitle: string;
		title: string;
		chartBg: string;
		chartBorder: string;
	} = $props();

	import {
		Chart as ChartJS,
		BarController,
		BarElement,
		CategoryScale,
		LinearScale,
		Chart,
		Tooltip,
		Title,
		type ChartConfiguration
	} from 'chart.js';
	import { onDestroy, onMount } from 'svelte';

	ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Title);

	let canvas: HTMLCanvasElement;

	let chart: Chart | null = null;

	onMount(() => {
		chart?.destroy();

		if (canvas) {
			const ctx = canvas.getContext('2d');

			const config: ChartConfiguration<'bar'> = {
				type: 'bar',
				data: {
					labels,
					datasets: [
						{
							label: yTitle,
							data: data,
							backgroundColor: chartBg,
							borderColor: chartBorder,
							borderWidth: 1,
							borderRadius: 5
						}
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						title: {
							display: true,
							text: title,
							font: { size: 16, family: 'Inter' }
						},
						tooltip: {
							titleFont: {
								family: 'Inter'
							},
							bodyFont: {
								family: 'Inter'
							}
						}
					},
					scales: {
						y: {
							title: {
								display: true,
								text: yTitle,
								font: {
									weight: 'bold',
									family: 'Inter'
								}
							},
							ticks: {
								font: {
									family: 'Inter'
								}
							}
						},
						x: {
							title: {
								display: true,
								text: xTitle,
								font: {
									weight: 'bold',
									family: 'Inter'
								}
							},
							ticks: {
								font: {
									family: 'Inter'
								}
							}
						}
					}
				}
			};

			chart = new ChartJS(ctx as CanvasRenderingContext2D, config);
		}
	});

	onDestroy(() => {
		chart?.destroy();
	});
</script>

<div class="relative h-80 w-full lg:h-104 lg:w-[48%]">
	<canvas {id} bind:this={canvas}></canvas>
</div>
