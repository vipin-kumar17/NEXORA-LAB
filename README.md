# Nexora Lab Website

Official website of **Nexora Lab**, a software development company building websites, web and mobile apps, business software and automation.

Built with Next.js (App Router), React and Tailwind CSS. Lightweight by design: no heavy animation or 3D libraries.

---

## Table of contents

1. [Tech stack](#tech-stack)
2. [Features](#features)
3. [Getting started](#getting-started)
4. [Environment variables](#environment-variables)
5. [Project structure](#project-structure)
6. [Pages and routes](#pages-and-routes)
7. [How to edit common things](#how-to-edit-common-things)
8. [Contact form and email](#contact-form-and-email)
9. [SEO](#seo)
10. [Deploying to Vercel](#deploying-to-vercel)
11. [Troubleshooting](#troubleshooting)

---

## Tech stack

| Purpose | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI library | React 19 |
| Styling | Tailwind CSS v4 + custom CSS in `app/globals.css` |
| Icons | `lucide-react` (UI icons), `react-icons` (technology and social logos) |
| Fonts | Space Grotesk (headings) and Inter (body) via `next/font/google` |
| Email | Resend (REST API, no SDK) |
| Language | JavaScript |

Animations are plain CSS plus a small `IntersectionObserver` component. No GSAP, Framer Motion, Three.js or Lenis is used.

---

## Features

- Responsive layout for mobile, tablet and desktop
- Navbar with active-page indicator, blurred background and animated mobile menu
- Home page with hero, technology strip (logo and name), services, why us, featured projects, process, stack and CTA
- Services page with all services listed as information cards
- Projects page with real project cards (image, name, type, description and a **Live Preview** button)
- Contact page with validated form, email and phone details
- Floating WhatsApp button on every page
- Social media links in the footer
- Light scroll and page-load animations (respects "reduce motion" setting)
- SEO: per-page metadata, Open Graph, Twitter cards, canonical URLs, sitemap, robots and structured data
- Favicon via `app/icon.png`

---

## Getting started

**Requirements:** Node.js 20.9 or newer (Node 22 LTS recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file (see next section)

# 3. Run the development server
npm run dev
```

Open `http://localhost:3000`.

Other commands:

```bash
npm run build   # production build
npm run start   # run the production build
```

If `react-icons` is missing after a fresh install, run `npm install react-icons`.

---

## Environment variables

Create a file named **`.env.local`** in the project root (next to `package.json`). Never commit it to Git.

```
RESEND_API_KEY=re_your_full_api_key
CONTACT_TO_EMAIL=you@example.com
# Optional, once your domain is verified in Resend:
CONTACT_FROM_EMAIL=Nexora Lab <hello@yourdomain.com>
```

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | API key from resend.com. Shown in full only once, when created. |
| `CONTACT_TO_EMAIL` | Yes | Inbox that receives contact form messages. |
| `CONTACT_FROM_EMAIL` | No | Sender address. Defaults to `Nexora Lab <onboarding@resend.dev>`. |

Restart the dev server after changing this file.

---

## Project structure

```
app/
  layout.js            Root layout: fonts, global metadata, navbar, footer, WhatsApp button
  page.js              Home page
  globals.css          Design tokens, utility classes, animations
  icon.png             Favicon
  sitemap.js           /sitemap.xml
  robots.js            /robots.txt
  about/page.js
  services/page.js
  projects/page.js
  contact/
    page.js
    ContactForm.js     Client-side form with validation
  privacy/page.js      Draft legal page
  terms/page.js        Draft legal page
  api/contact/route.js Email sending endpoint (Resend)

components/
  Navbar.js            Responsive navbar and mobile menu
  Footer.js            Footer with links, contact and social icons
  UI.js                Heading, ServiceCard, CTA, ProcessList and Icon helpers
  ProjectCard.js       Project card with Live Preview button
  TechItem.js          Technology name with its logo
  SocialLinks.js       LinkedIn, X, Instagram and Facebook icons
  EmailLink.js         Opens Gmail on desktop, mail app on phones
  WhatsAppButton.js    Floating WhatsApp button
  ScrollReveal.js      Scroll animations

lib/
  constants.js         Site data: edit most content here

public/
  logo-mark.png        Navbar logo
  logo-full.png        Link preview (Open Graph) image
  projects/            Project screenshots
```

---

## Pages and routes

| Route | Description |
|---|---|
| `/` | Home |
| `/about` | About, mission, vision, values |
| `/services` | All services |
| `/projects` | Project showcase |
| `/contact` | Contact form and details |
| `/privacy` | Privacy Policy (draft text, replace before launch) |
| `/terms` | Terms and Conditions (draft text, replace before launch) |
| `/api/contact` | POST endpoint used by the contact form |
| `/sitemap.xml`, `/robots.txt` | Generated automatically |

---

## How to edit common things

Almost all content lives in **`lib/constants.js`**.

### Add or edit a project

1. Put the image in `public/projects/` (for example `public/projects/my-site.jpg`).
2. Add a block inside `projects` in `lib/constants.js`:

```js
{
  name: "Project name",
  type: "Project type",
  desc: "One or two lines about the project.",
  image: "/projects/my-site.jpg",
  link: "https://project-link.com",
},
```

Rules: end every block with a comma, match the image file name exactly (including `.jpg`/`.png`), and start links with `https://`. The home page shows the first 3 projects (`projects.slice(0, 3)` in `app/page.js`).

### Change contact details

Edit `contactInfo` in `lib/constants.js`:

```js
export const contactInfo = { email: "you@example.com", phone: "+91 98765 43210" };
```

The footer and contact page update automatically.

### Change WhatsApp number and message

Edit `whatsapp` in `lib/constants.js`. The number must include the country code and contain digits only (for example `919876543210`).

### Add social media links

Replace the `"#"` values in `socials` in `lib/constants.js` with your real profile URLs.

### Change services, process steps or "why us" points

Edit `services`, `process` and `why` in `lib/constants.js`.

### Change technologies shown

Edit `tech` in `lib/constants.js`. To show a logo for a new technology, add it to the `map` in `components/TechItem.js` using an icon from `react-icons`.

### Change colors and fonts

Colors are CSS variables at the top of `app/globals.css` (`--bg`, `--p`, `--s`, `--hl`, and so on). Fonts are set in `app/layout.js`.

### Change the logo or favicon

Replace the files in `public/` and `app/icon.png`, keeping the same names. Keep logos small: navbar logo under 30 KB, link preview image 1200x630 and under 300 KB, favicon 512x512 and under 50 KB.

---

## Contact form and email

The form posts to `/api/contact` (`app/api/contact/route.js`), which validates the data and sends an email through Resend.

- If `RESEND_API_KEY` or `CONTACT_TO_EMAIL` is missing, the API returns a clear "not connected" message instead of a fake success.
- The visitor's email is set as the reply-to address, so you can reply directly from your inbox.
- The subject includes the sender's name so Gmail does not merge messages into one thread.
- With the default `onboarding@resend.dev` sender, some messages may land in Spam. Create a Gmail filter for that sender, or verify your own domain in Resend and set `CONTACT_FROM_EMAIL`.
- Until your domain is verified, Resend only delivers to the email you signed up with.

---

## SEO

- Default title, description, Open Graph and Twitter metadata in `app/layout.js`
- Per-page `metadata` in each `page.js`
- `app/sitemap.js` and `app/robots.js`
- Organization structured data in `app/layout.js`

**Before launch:** set the real domain in `SITE.url` inside `lib/constants.js` (it currently holds a placeholder). The sitemap, canonical URLs and link previews are built from it.

**After launch:**
1. Add your domain as a **Domain property** in Google Search Console and verify it with the DNS TXT record.
2. Submit `https://yourdomain.com/sitemap.xml` under **Sitemaps**.
3. Use **Request indexing** for the main pages.
4. Create a Google Business Profile for local search.
5. Check speed at pagespeed.web.dev.

Indexing can take days to weeks, and no ranking is guaranteed.

---

## Deploying to Vercel

1. Push the project to a GitHub repository. Make sure `.env.local` and `node_modules` are in `.gitignore`.
2. Import the repository on vercel.com.
3. Under **Settings > Environment Variables**, add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` (and `CONTACT_FROM_EMAIL` if used).
4. Deploy, then connect your custom domain under **Settings > Domains**.
5. Update `SITE.url` in `lib/constants.js` to match the domain and redeploy.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Dev server stops right after "Ready" | Delete `node_modules`, `package-lock.json` and `.next`, then run `npm install` again. Check `node -v` is 20.9 or newer. |
| Favicon does not show | File must be exactly `app/icon.png` (watch for `icon.png.png` on Windows). Restart the server and test in an incognito window. |
| "Name defined multiple times" error | The same import appears twice at the top of the file. Delete the duplicate line. |
| Footer shows twice | `<Footer />` is rendered both in `app/layout.js` and in a page file. Keep it only in the layout. |
| Contact form says "not connected" | `.env.local` is missing, misnamed or not loaded. Check the file name and restart the server. |
| Contact emails missing | Check Spam, and the Emails log in the Resend dashboard. |
| Email link does nothing on desktop | No mail app is set. `EmailLink` opens Gmail in the browser on desktop for this reason. |
| Project image not showing | The file name or extension in `constants.js` does not match the file in `public/projects/`. |

---

## Notes

- Privacy Policy and Terms pages contain placeholder text. Replace them with reviewed legal content before launch.
- Only show client work and names you have permission to display.

© Nexora Lab