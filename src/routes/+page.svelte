<script lang="ts">
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import FunStuffCard from '$lib/components/portfolio/FunStuffCard.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import ImageModal from '$lib/components/ui/dialog/ImageModal.svelte';
	import { DATA } from '$lib/data/resume';
	import { renderMarkdown } from '$lib/utils';
	import NumberFlow from '@number-flow/svelte';
	import { onMount } from 'svelte';
	import hatsImg from '$lib/imgs/hats.png';

	const BLUR_FADE_DELAY = 0.04;
	const getAge = () => (Date.now() - new Date(DATA.birthday).getTime()) / 31557600000;
	// that huge number is the number of ms in a year
	// returns age in years by subtracting birthday from current time

	let age = getAge();
	let isModalOpen = false;

	onMount(() => {
		const id = setInterval(() => (age = getAge()), 100);
		
		// Add click listener for hats trigger
		const hatsButton = document.getElementById('hats-trigger');
		if (hatsButton) {
			hatsButton.addEventListener('click', openHatsModal);
		}
		
		return () => {
			clearInterval(id);
			if (hatsButton) {
				hatsButton.removeEventListener('click', openHatsModal);
			}
		};
	});
	
	function openHatsModal() {
		isModalOpen = true;
	}
</script>

<svelte:head>
	<title>{DATA.name}</title>
	<meta name="description" content={DATA.description} />
	<meta property="og:title" content={DATA.name} />
	<meta property="og:description" content={DATA.description} />
	<meta property="og:url" content={DATA.url} />
	<meta property="og:site_name" content={DATA.name} />
	<meta property="og:image" content={DATA.img} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
	<meta name="twitter:title" content={DATA.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={DATA.img} />
	<meta name="twitter:description" content={DATA.description} />
</svelte:head>
<main class="flex min-h-[100dvh] flex-col space-y-10">
	<section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-1.5">
					<BlurFade
						delay={BLUR_FADE_DELAY}
						class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
						yOffset={8}>Hi, I'm Max 👋</BlurFade
					>
					<BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}
						>{DATA.description}</BlurFade
					>
					<BlurFade delay={BLUR_FADE_DELAY * 1.2}>
						<div class="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
							<div class="flex items-center gap-1.5">
								<svelte:component this={DATA.icons.location} class="h-4 w-4" />
								<span>{DATA.location}</span>
							</div>
							<div class="flex items-center gap-1.5">
								<svelte:component this={DATA.icons.age} class="h-4 w-4" />
								<span class="tabular-nums">
									<NumberFlow 
										value={age} 
										format={{ 
											minimumFractionDigits: 10, 
											maximumFractionDigits: 10 
										}} 
									/> years old
								</span>
							</div>
						</div>
					</BlurFade>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY}>
					<Avatar.Root class="size-28 border">
						<Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
						<Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
					</Avatar.Root>
				</BlurFade>
			</div>
		</div>
	</section>
	<section id="about">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-xl font-bold">About</h2>
		</BlurFade>
		<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
			<div
				class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
			>
				{@html renderMarkdown(DATA.summary.replace('I wear a lot of hats', 'I wear a lot of <button id="hats-trigger" class="underline decoration-dotted hover:text-foreground transition-colors cursor-pointer">hats</button>'))}
			</div>
		</BlurFade>
	</section>
	
	<ImageModal 
		bind:isOpen={isModalOpen}
		imageSrc={hatsImg}
		title="hats.png"
		caption="Quite literally sometimes. I hate this photo, but - hat!"
	/>
	<section id="work">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Work Experience</h2>
			</BlurFade>
			{#each DATA.work as work, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard {...work} />
				</BlurFade>
			{/each}
		</div>
	</section>
	<section id="education">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Education</h2>
			</BlurFade>
			{#each DATA.education as edu, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard
						href={edu.href}
						logoUrl={edu.logoUrl}
						company={edu.school}
						title={edu.degree}
						start={edu.start}
						end={edu.end}
						showArrow={false}
					/>
				</BlurFade>
			{/each}
		</div>
	</section>
	<section id="skills">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Skills</h2>
			</BlurFade>
			<div class="flex flex-wrap gap-1">
				{#each DATA.skills as skill, id}
					<BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
						<Badge>{skill}</Badge>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>
	<section id="projects">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
							My Projects
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							Check out my latest work
						</h2>
						<p
							class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							I&apos;ve worked on a variety of projects, from simple scripts to complex SaaS
							applications. Here are a few of my favorites.
						</p>
					</div>
				</div>
			</BlurFade>
			<div class="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
				{#each DATA.projects as project, id}
					<BlurFade delay={BLUR_FADE_DELAY * 1.5 + id * 0.05}>
						<ProjectCard
							href={project.href}
							title={project.title}
							description={project.description}
							dates={project.dates}
							tags={project.technologies}
							image={project.image}
							video={project.video}
							links={project.links}
						/>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>
	<!-- <section id="fun-stuff">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
							Fun Stuff
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">I like building things</h2>
						<p
							class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							During my time in high school,
							I was the executive producer for Halo, a student-lead news and sports broadcasting club.
							It taught me a lot about how to lead a team of people, 
						</p>
					</div>
				</div>
			</BlurFade>
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<ul class="mb-4 ml-4 divide-y divide-dashed border-l">
					{#each DATA.funstuff as project}
						<BlurFade delay={BLUR_FADE_DELAY}>
							<FunStuffCard {...project} />
						</BlurFade>
					{/each}
				</ul>
			</BlurFade>
		</div>
	</section> -->
	<section id="contact">
		<div class="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<div class="space-y-3">
					<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
						Contact
					</div>
					<h2 class="text-3xl font-bold tracking-tight sm:text-5xl">Get in Touch</h2>
					<p
						class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						Want to chat? Just
						<a href="/contact" class="text-blue-500 hover:underline">
							shoot me an email
						</a>
						and I'll respond whenever I can.
					</p>
				</div>
			</BlurFade>
		</div>
	</section>
</main>
