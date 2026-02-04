<script lang="ts">
	import { X } from 'lucide-svelte';
	import { onDestroy } from 'svelte';

	export let isOpen = false;
	export let imageSrc = '';
	export let title = '';
	export let caption = '';

	function closeModal() {
		isOpen = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') closeModal();
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) closeModal();
	}

	function portal(node: HTMLElement) {
		document.body.appendChild(node);
		return {
			destroy() {
				node.remove();
			}
		};
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		use:portal
		class="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-md p-4"
		on:click={handleBackdropClick}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="modal-enter relative flex max-h-[80vh] w-full max-w-sm flex-col overflow-hidden rounded-lg border border-border shadow-lg">
			<button
				on:click={closeModal}
				class="absolute right-2 top-2 z-10 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
				aria-label="Close modal"
			>
				<X class="h-4 w-4" />
			</button>

			<div class="relative min-h-0 flex-1">
				<img src={imageSrc} alt={title} class="max-h-full w-full rounded-lg object-contain" />

				{#if caption || title}
					<div class="absolute inset-x-0 bottom-0 rounded-b-lg bg-card/80 backdrop-blur-sm px-3 py-2">
						{#if title}
							<p class="font-mono text-xs text-muted-foreground">{title}</p>
						{/if}
						{#if caption}
							<p class="mt-0.5 text-sm text-muted-foreground">{caption}</p>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-enter {
		animation: modal-pop 0.2s ease-out;
	}

	@keyframes modal-pop {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
