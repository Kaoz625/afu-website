# Replit Agent Task: afu-website

## Goal
Complete the AFU Social Club website — a community hub for NYC street culture — by building out all missing pages, wiring Supabase for event data, and polishing the dark modern aesthetic already established in the codebase.

## Tasks
1. Audit the existing src/pages and src/components — the React+Vite+Supabase stack is already scaffolded; identify which pages are stubs vs. complete
2. Build the **About** page: full-bleed hero with the AFU tagline "United, Anything Is Possible", mission statement, founding story, leadership grid with photo + name + role cards, Brooklyn roots section with NYC street photography placeholder images
3. Build the **Events** page: pull upcoming events from Supabase `events` table (columns: id, title, date, location, description, image_url, rsvp_link); render as a card grid sorted by date; add a past events archive section; if no Supabase data yet, seed with 3 placeholder events in the Supabase schema
4. Build the **Contact** page: contact form (name, email, subject, message) that POSTs to Supabase `contact_submissions` table; include social links for Instagram/TikTok/Twitter; add a Brooklyn map embed placeholder
5. Ensure global dark theme is consistent across all pages: near-black background (#0a0a0a), white text, accent color gold or red (match existing brand), bold sans-serif headings (already using a Google Font — keep it)
6. Add mobile hamburger nav — the existing nav likely breaks on mobile; make it responsive
7. Add a "Community Gallery" section on the About page: a masonry CSS grid of placeholder images for member photos/events
8. Wire the RSVP button on event cards to open the event's `rsvp_link` in a new tab or show a modal with the link
9. Run `npm run build` — fix any TypeScript errors until it compiles cleanly
10. Update the Supabase schema SQL in a `supabase/migrations/` file so the next dev can recreate the DB

## Tech Stack
- React 18 + TypeScript + Vite
- Supabase (existing — @supabase/supabase-js already in package.json)
- TanStack Query (already in package.json)
- Radix UI components (already in package.json)
- Tailwind CSS or existing CSS

## Deploy Target
Cloudflare Pages (static build, `npm run build` → `dist/`). Never Vercel.

## Done When
- [ ] About, Events, and Contact pages all render without errors
- [ ] Events page pulls from Supabase (or shows seeded placeholder data)
- [ ] Contact form submits to Supabase successfully
- [ ] Mobile nav works on 375px viewport
- [ ] `npm run build` completes with zero TypeScript errors
- [ ] Dark theme is consistent across all pages
