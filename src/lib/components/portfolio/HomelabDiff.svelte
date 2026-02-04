<script lang="ts">
	import { renderMarkdown } from '$lib/utils';

	export let schematicImage: string = '';
	export let photoImage: string = '';
	export let title: string = '';
	export let description: string = '';
	export let specs: { label: string; value: string }[] = [];

	let sliderPosition = 50;
	let isDragging = false;

	function handleMouseDown() {
		isDragging = true;
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDragging) return;
		const container = e.currentTarget as HTMLElement;
		const rect = container.getBoundingClientRect();
		const x = e.clientX - rect.left;
		sliderPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
	}

	function handleTouchStart() {
		isDragging = true;
	}

	function handleTouchEnd() {
		isDragging = false;
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isDragging) return;
		const container = e.currentTarget as HTMLElement;
		const rect = container.getBoundingClientRect();
		const x = e.touches[0].clientX - rect.left;
		sliderPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
	}
</script>

<svelte:window on:mouseup={handleMouseUp} on:touchend={handleTouchEnd} />

<div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
	<!-- Description and Specs (Left side on large screens) -->
	<div class="flex-[2] space-y-4 lg:order-1 lg:min-w-0">
		<div>
			<h3 class="mb-2 text-lg font-semibold">{title}</h3>
			<div
				class="prose dark:prose-invert max-w-full text-pretty font-sans text-sm text-muted-foreground text-left"
			>
				{@html renderMarkdown(description)}
			</div>
		</div>

		{#if specs && specs.length > 0}
			<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
				{#each specs as spec}
					<div class="flex flex-col gap-1 rounded-lg border bg-muted/50 p-3">
						<span class="text-xs font-medium text-muted-foreground">{spec.label}</span>
						<span class="text-sm font-semibold">{spec.value}</span>
					</div>
				{/each}
			</div>
		{/if}
	</div>

	<!-- Image Comparison (Right side on large screens) -->
	<div class="lg:order-2 lg:w-[300px] lg:flex-shrink-0">
		<div
			class="relative aspect-[3695/6354] w-full overflow-hidden rounded-lg border bg-muted select-none"
			on:mousemove={handleMouseMove}
			on:touchmove={handleTouchMove}
		>
			<!-- Photo (bottom layer) -->
			<div class="absolute inset-0">
				<img
					src={photoImage}
					alt="Homelab photo"
					class="h-full w-full object-cover"
					draggable="false"
				/>
				<div
					class="absolute bottom-4 right-4 rounded bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm"
				>
					Photo
				</div>
			</div>

			<!-- Schematic (top layer with clip) -->
			<div
				class="absolute inset-0"
				style="clip-path: inset(0 {100 - sliderPosition}% 0 0);"
			>
				<img
					src={schematicImage}
					alt="Homelab schematic"
					class="h-full w-full object-cover"
					draggable="false"
				/>
				<div
					class="absolute bottom-4 left-4 rounded bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm"
				>
					Schematic
				</div>
			</div>

			<!-- Slider -->
			<div
				class="absolute inset-y-0 w-1 cursor-ew-resize bg-white shadow-lg"
				style="left: {sliderPosition}%;"
				on:mousedown={handleMouseDown}
				on:touchstart={handleTouchStart}
				role="slider"
				aria-label="Image comparison slider"
				aria-valuenow={sliderPosition}
				aria-valuemin={0}
				aria-valuemax={100}
				tabindex="0"
			>
				<!-- Slider handle -->
				<div
					class="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
				>
					<svg
						class="h-6 w-6 text-muted-foreground"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 9l4-4 4 4m0 6l-4 4-4-4"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</div>
