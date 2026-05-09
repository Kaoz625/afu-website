# Replit Agent Task: afu-website

## Goal
Build a complete AFU Social Club website with About, Events, and Contact sections using a dark, modern aesthetic that reflects the club's community identity.

## Tasks
1. Audit the existing src/ — identify what's built vs. what's placeholder, preserve any working components
2. Design a dark-theme hero section: full-viewport, bold club name "AFU Social Club", tagline, and CTA button ("Join the Club" / "See Events")
3. Build an About section: club mission/story, founding members or key figures, core values — write compelling placeholder copy with NYC community energy
4. Build an Events section: card-based layout with upcoming events — each card shows event name, date, location, and a "RSVP" button; wire RSVP to a Supabase `rsvps` table or a simple Google Form link
5. Build a Contact section: email, Instagram link, and a simple contact form (name, email, message) that submits to Supabase `contact_submissions` table
6. Add a Members section or gallery: photo grid placeholder (use Unsplash NYC community photos as placeholders)
7. Implement smooth scroll navigation between sections
8. Add dark theme with modern design: deep blacks/charcoals, white text, single accent color (electric blue or burnt orange)
9. Add Open Graph meta tags for social sharing
10. Ensure full mobile responsiveness
11. Deploy to Cloudflare Pages (static build from dist/)
12. Set up `_headers` file with security headers

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- Supabase (RSVP and contact form storage)
- Cloudflare Pages (static deploy)

## Deploy Target
Cloudflare Pages — connect `Kaoz625/afu-website`. Build command: `npm run build`, output: `dist/`. Never Vercel.

## Done When
- [ ] All four sections (Hero, About, Events, Contact) are built and populated
- [ ] RSVP buttons on event cards are functional (Supabase or form link)
- [ ] Contact form submits successfully
- [ ] Dark theme is consistent across all sections
- [ ] Site is fully mobile-responsive at 375px
- [ ] Open Graph tags present
- [ ] All changes pushed to `Kaoz625/afu-website` main branch
