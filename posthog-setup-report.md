# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this SvelteKit portfolio homepage. The following files were created or modified:

**Created:**
- `src/hooks.client.ts` — PostHog client-side initialization (reverse proxy via `/ingest`, `capture_exceptions: true`) and `handleError` for automatic client-side error tracking
- `src/hooks.server.ts` — Reverse proxy handler routing `/ingest/*` to PostHog servers to bypass ad blockers, plus `handleError` for server-side error capture
- `src/lib/server/posthog.ts` — Server-side PostHog singleton using `posthog-node`

**Modified:**
- `svelte.config.js` — Added `paths: { relative: false }` required for session replay with SSR
- `src/routes/contact/+page.svelte` — Added `contact_page_viewed` on mount, `email_copied` on copy success, `captureException` on copy failure
- `src/lib/components/portfolio/ProjectCard.svelte` — Added `project_link_clicked` on card image/link click
- `src/routes/blog/[slug]/+page.svelte` — Added `blog_post_viewed` on mount with title, date, and categories
- `src/lib/components/portfolio/Navbar.svelte` — Added `nav_item_clicked` on navbar item click, `social_link_clicked` on social link click
- `src/routes/+page.svelte` — Added `hats_modal_opened` when the easter egg modal is triggered

## Events

| Event | Description | File |
|---|---|---|
| `contact_page_viewed` | User navigates to the /contact page — top of the contact funnel | `src/routes/contact/+page.svelte` |
| `email_copied` | User clicks to copy the email address — key conversion event | `src/routes/contact/+page.svelte` |
| `project_link_clicked` | User clicks the link on a project card | `src/lib/components/portfolio/ProjectCard.svelte` |
| `blog_post_viewed` | User opens a specific blog post | `src/routes/blog/[slug]/+page.svelte` |
| `social_link_clicked` | User clicks a social media link in the dock navbar | `src/lib/components/portfolio/Navbar.svelte` |
| `nav_item_clicked` | User clicks a navigation item in the dock navbar | `src/lib/components/portfolio/Navbar.svelte` |
| `hats_modal_opened` | User clicks the 'hats' easter egg link in the about section | `src/routes/+page.svelte` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://us.posthog.com/project/374783/dashboard/1446508
- **Contact Conversion Funnel** (contact_page_viewed → email_copied): https://us.posthog.com/project/374783/insights/X6xnV3DT
- **Key Events Daily Active Users** (all 4 key events over time): https://us.posthog.com/project/374783/insights/HOqjCR2J
- **Blog Posts by Popularity** (blog_post_viewed by title): https://us.posthog.com/project/374783/insights/jKCvVrXC
- **Social Links Clicked by Platform** (social_link_clicked by name): https://us.posthog.com/project/374783/insights/WbdyU3xT
- **Projects Clicked by Title** (project_link_clicked by title): https://us.posthog.com/project/374783/insights/Or2jYSuR

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
