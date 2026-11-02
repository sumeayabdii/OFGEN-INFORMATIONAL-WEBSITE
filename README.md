# OFGEN Africa — one-page website (Next.js + React)

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```
Requires Node 18.18+ (Node 20+ recommended). Deploys as-is to Vercel, Netlify or Cloudflare.

## Photos
The photos in `public/images/` were cut from the design mock-up (`design/mockup.png`, see `scripts/extract-photos.py`).
They match the design but are low resolution, so swap in high-resolution originals when you have them —
use the **same filename** and they appear automatically (any size works; they are cropped to fit).

| File | Where it shows | Suggested size |
|---|---|---|
| hero.jpg | Top banner | 2400×1200 |
| who-we-are.jpg | Who we are | 1200×930 |
| solutions-bg.jpg | Our Solutions background | 2400×1000 |
| solution-solar / storage / grid / telecom.jpg | Solution cards | 800×1000 |
| project-solar / storage / grid / telecom.jpg | Featured project cards | 900×460 |
| impact-bg.jpg | Our Impact band | 2400×500 |
| contact-bg.jpg | "Let's Build a Sustainable Future" panel | 1200×800 |
| africa-map.png | Footprint map (transparent PNG) | 600×650 |

## Sizing
All sizes are in `rem`, taken 1:1 from the 1440px design. On desktop the base font size follows the
screen width (`html { font-size: 1.1111vw }` in `app/globals.css`), so the page fills any monitor
exactly like the design. Below 1024px the layout switches to tablet/phone versions.

## Edit text and details
- `lib/content.ts` — all page text, English and French.
- `lib/site.ts` — email, phone, address, social links, impact numbers.
- `app/globals.css` — colours (top of file) and all styling.
- Fonts: Source Serif 4 (headings) and Inter (text), loaded in `app/layout.tsx`.

## Placeholders to check before going live
- Phone number in `lib/site.ts` (copied from the design mock-up).
- Social links in `lib/site.ts` (currently `#`).
- Impact figures (blank, matching the design) in `lib/site.ts`.
- The testimonial quote in `lib/content.ts` — replace with a real, approved quote.

## Contact form
"Send Message" opens the visitor's email app pre-filled to talk2us@ofgen.africa. To send from the website itself, connect a form service (e.g. Formspree) or an API route in `components/Contact.tsx`.

## Structure
`app/page.tsx` stacks the sections; each section lives in `components/` and has an id (`#home`, `#about`, `#expertise`, `#solutions`, `#sectors`, `#projects`, `#impact`, `#testimonials`, `#contact`) used by the menu.
