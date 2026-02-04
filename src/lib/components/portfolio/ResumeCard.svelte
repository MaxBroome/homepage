<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import { ChevronRightIcon } from 'lucide-svelte';
	import { quartOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	export let logoUrl: string = '';
	export let company: string = '';
	export let title: string = '';
	export let href: string = '';
	export let badges: string[]=[''];
	export let description: string = '';
	export let start: string = '';
	export let end: string = '';
	export let showArrow: boolean = true;
	export let positions: Array<{title: string, start: string, end: string, description: string}> | undefined = undefined;
	let isExpanded = false;

	let handleClick = (e: MouseEvent) => {
		if (description || positions) {
			e.preventDefault();
			isExpanded = !isExpanded;
		}
	};

	// Check if href is an external link
	$: isExternalLink = href && (href.startsWith('http://') || href.startsWith('https://'));
</script>

<a 
	href={href || '#'} 
	on:click={handleClick}
	target={isExternalLink ? '_blank' : undefined}
	rel={isExternalLink ? 'noopener noreferrer' : undefined}
>
	<div class="flex rounded-lg bg-card text-card-foreground">
		<div class="flex-none">
			<Avatar.Root class="bg-muted-background m-auto size-12 border dark:bg-foreground">
				<Avatar.Image src={logoUrl} alt={company} class="object-contain" />
				<Avatar.Fallback>{company[0]}</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<div class="group ml-4 flex-grow flex-col items-center">
			<div class="flex flex-col">
				<div class="flex items-center justify-between gap-x-2 text-base">
					<h3
						class="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm"
					>
						{company}
						{#if badges?.length > 0 && badges[0] !== ''}
							<span class="inline-flex gap-x-1">
								{#each badges as badge, index}
									<Badge variant="secondary" class="align-middle text-xs" key={index}>
										{badge}
									</Badge>
								{/each}
							</span>
						{/if}
						{#if showArrow}
							<ChevronRightIcon
								class={cn(
									'size-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1',
									isExpanded ? 'rotate-90' : 'rotate-0'
								)}
							/>
						{/if}
					</h3>
					<div class="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
						{start} - {end || 'Present'}
					</div>
				</div>
				{#if title}
					<div class="font-sans text-xs">{title}</div>
				{/if}
			</div>
			{#if positions}
				{#if isExpanded}
					<div
						class="mt-4 space-y-6"
						transition:slide={{
							duration: 700,
							easing: quartOut
						}}
					>
						{#each positions as position, index}
							<div class="relative pl-8">
								<!-- Timeline line -->
								{#if index < positions.length - 1}
									<div class="absolute left-[11px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 to-border"></div>
								{/if}
								<!-- Timeline dot -->
								<div class="absolute left-[6px] top-[6px] size-3 rounded-full border-2 border-primary bg-primary shadow-sm shadow-primary/50"></div>
								
								<div class="space-y-1.5">
									<div class="flex items-start justify-between gap-2 flex-wrap">
										<h4 class="font-semibold text-sm sm:text-base">{position.title}</h4>
										<span class="text-xs text-muted-foreground tabular-nums whitespace-nowrap">
											{position.start} - {position.end}
										</span>
									</div>
									<p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
										{position.description}
									</p>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			{:else if description}
				{#if isExpanded}
					<div
						class="mt-2 text-xs sm:text-sm"
						transition:slide={{
							duration: 700,
							easing: quartOut
						}}
					>
						{description}
					</div>
				{/if}
			{/if}
		</div>
	</div>
</a>
