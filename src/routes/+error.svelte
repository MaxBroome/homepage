<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} | Not Found</title>
</svelte:head>

<div class="flex min-h-[60dvh] flex-col items-center justify-center gap-6 text-center">
	<img
		src="/404.gif"
		alt="404 not found"
		class="w-full max-w-md rounded-xl"
	/>
	<div class="space-y-2">
		<h1 class="text-4xl font-bold tracking-tighter">{$page.status}</h1>
		<p class="text-muted-foreground">{$page.error?.message ?? "This page doesn't exist."}</p>
        <p class="text-muted-foreground">{"Whatever you're looking for, it certainly doesn't exist here."}</p>
	</div>
	<a href="/" class="rounded-lg bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-90">
		Go home
	</a>
</div>