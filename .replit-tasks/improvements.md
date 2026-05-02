# Replit Agent Task Spec

## Instructions for Replit Agent
You are building/improving this project. Read this file carefully before touching any code.
Commit all changes with prefix "replit: " and push to main when done.

## Stack Rules (non-negotiable)
- Static → Cloudflare Pages (never Vercel)
- DB → Supabase self-hosted Docker (never cloud Supabase)
- Auth → NextAuth.js (free, not Auth0/Clerk)
- AI → Claude Sonnet 4.6 via Anthropic API (model: claude-sonnet-4-6)
- Payments (adult) → CCBill or Segpay only

## Improvements To Make
1. **Audit current scaffold** — Read all files in src/ to understand what exists. Document in a comment at the top of App.tsx what was found vs what needs building.
2. **Build About section** — Create a compelling About page/section for AFU Social Club. Include: club mission statement (create placeholder text: "AFU Social Club — A community built on authenticity, creativity, and real connection"), founding story (placeholder), core values (3-4 values with icons), and team/leadership section (placeholder names/roles).
3. **Build Events section** — Create an Events page/section showing upcoming and past events. Use hardcoded placeholder events (3 upcoming, 3 past) in the format: event name, date, location, description, and a "RSVP" button. Style as modern event cards.
4. **Build Contact section** — Create a contact form (name, email, subject, message) using Formspree free tier for form submissions. Add social media placeholder links. Add a map embed placeholder (Google Maps iframe or Mapbox static).
5. **Modern design** — Use a dark, urban aesthetic with bold typography. Color palette: black (#0a0a0a) background, white text, gold accent (#D4AF37). Use a bold sans-serif font (Google Fonts: Space Grotesk or DM Sans). Add subtle animations (fade-in on scroll using Intersection Observer).
6. **Move from cloud Supabase to self-hosted config** — Update supabase/ config to use environment variables for the Supabase URL/key. Add a `.env.example` file showing `VITE_SUPABASE_URL=http://localhost:54321` and `VITE_SUPABASE_ANON_KEY=your-key`. Remove any hardcoded cloud Supabase URLs.
7. **Add navigation** — Build a responsive nav with: logo/wordmark "AFU", links to About/Events/Contact, and a hamburger menu on mobile. Sticky on scroll.
8. **Add Cloudflare Pages deploy config** — Add `public/_headers` with security headers. Update README with: `npm run build` → deploy `dist/` to Cloudflare Pages. Remove any Vercel references.
9. **Fix any TypeScript/lint errors** — Run `npm run build` and fix all errors.

## Do Not Touch
- supabase/ directory structure (update config values, don't restructure)
- tailwind.config.ts color system base (you may extend it)

## Definition of Done
- [ ] All improvements implemented and working
- [ ] No TypeScript/lint errors (`npm run build` passes)
- [ ] About, Events, and Contact sections all present
- [ ] Contact form submits via Formspree
- [ ] Mobile responsive (375px)
- [ ] Pushed to main with "replit: " commit prefix
