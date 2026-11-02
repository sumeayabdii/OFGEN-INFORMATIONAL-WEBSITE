# OFGEN Africa — Website

Official one-page website for **OFGEN Africa**, a pan-African energy infrastructure developer delivering solar, battery storage, grid and telecom energy projects across Sub-Saharan Africa.

Built with **Next.js 15**, **React 19** and **TypeScript**. Available in **English and French**.

## Features

- One-page layout with smooth-scrolling navigation
- English / French language switch
- Fully responsive (desktop, tablet, mobile)
- Sections: Hero, About, Expertise, Projects, Sectors & Regions, Clients, Impact, Testimonials, Contact
- Optimised images with `next/image`
- Contact form that opens the visitor’s email app pre-filled

## Getting started

Requires **Node.js 18.18+** (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Production build

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        Fonts, page metadata, <html> wrapper
  page.tsx          Order of the sections on the page
  globals.css       All styles (colours at the top)
components/         One file per section (Hero, About, Projects, …)
lib/
  content.ts        All page text, English + French
  site.ts           Contact details, social links, impact figures
  clients.ts        Client logo list
public/images/      Photos, logos, map
```

## Editing content

| What | Where |
|---|---|
| Any text on the page (EN + FR) | `lib/content.ts` |
| Email, phone, address, social links | `lib/site.ts` |
| Impact numbers (MWp, MWh, projects, years) | `lib/site.ts` |
| Client logos | `lib/clients.ts` + `public/images/clients/` |
| Project card photos | `components/ProjectsSection.tsx` (top of file) |
| Colours and fonts | `app/globals.css` (top of file) |

To replace a photo, put the new file in `public/images/` with the **same filename**.

## Deployment

Deployed on **Vercel**. Every push to the `main` branch redeploys the site automatically.

## Contact

OFGEN Africa — No 7 Diani Close, Kilimani, Nairobi, Kenya
talk2us@ofgen.africa · www.ofgen.africa
