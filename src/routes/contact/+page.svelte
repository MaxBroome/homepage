<script>
  import BlurFade from "$lib/components/magic/BlurFade.svelte";
  import { DATA } from "$lib/data/resume";
  import { Copy, Check } from "lucide-svelte";
  import posthog from "posthog-js";
  import { onMount } from "svelte";
  let BLUR_FADE_DELAY = 0.04;

  const email = DATA.contact.email;
  const [username, domain] = email.split("@");

  let copied = false;

  onMount(() => {
    posthog.capture("contact_page_viewed");
  });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      copied = true;
      posthog.capture("email_copied");
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      posthog.captureException(err);
    }
  }
</script>

<svelte:head>
  <title>Contact - {DATA.name}</title>
  <meta name="description" content="Get in touch with {DATA.name}" />
</svelte:head>

<main class="flex flex-col space-y-10 items-center">
  <section id="contact-hero" class="w-full">
    <div class="mx-auto w-full max-w-2xl space-y-8 pt-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div class="space-y-3 text-center">
          <h1 class="text-3xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p class="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Want to chat? Here's how to reach me.
          </p>
        </div>
      </BlurFade>
    </div>
  </section>

  <section id="email-diagram" class="w-full">
    <div class="mx-auto w-full max-w-4xl px-4">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div class="diagram-wrapper relative">
          <div class="diagram-grid">
            <div class="label-me">// me</div>
            <div></div>
            <div class="label-website">// website</div>

            <div class="bracket-me-top">
              <span>┌</span><span class="line"></span><span>┐</span>
            </div>
            <div></div>
            <div class="bracket-website-top">
              <span>┌</span><span class="line"></span><span>┐</span>
            </div>

            <button
              on:click={copyEmail}
              class="email-link {copied ? 'email-copied' : ''}"
              style="grid-column: 1 / 4;"
            >
              <span class="email-username">{username}</span><span
                class="email-at">@</span
              ><span class="email-domain">{domain}</span>
            </button>

            <div class="bracket-email-bottom" style="grid-column: 1 / 4;">
              <span>└</span><span class="line"></span><span>┘</span>
            </div>

            <div class="label-email" style="grid-column: 1 / 4;">// email</div>
          </div>
          <button
            on:click={copyEmail}
            class="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {#if copied}
              <Check class="h-5 w-5" />
            {:else}
              <Copy class="h-5 w-5" />
            {/if}
          </button>
        </div>
      </BlurFade>
    </div>
  </section>

  <section id="contact-footer" class="w-full">
    <div class="mx-auto w-full max-w-2xl px-4">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div class="text-center space-y-4">
          <p class="text-sm text-muted-foreground">
            <span class="text-muted-foreground/50">{"// "}</span>I'll respond
            whenever I can. Looking forward to hearing from you!
          </p>
          <p class="text-xs text-muted-foreground/70">
            <span class="text-muted-foreground/40">{"// "}</span>Why is this its
            own page? Well, because I don't want bots or AI scraping this page
            to get my email.
            <br />
            You are human, right?
          </p>
        </div>
      </BlurFade>
    </div>
  </section>
</main>
