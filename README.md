# MS Fit Coaching: landing page

A one-page site for **Marta Sim / MS Fit Coaching**, an online personal trainer working with
Polish-speaking women in the UK and Poland. All copy is in Polish.

- Next.js 14 (App Router), TypeScript, Tailwind CSS 3, React Server Components by default
- No UI libraries. Icons are small inline SVGs (`components/Icons.tsx`)
- **All content lives in one file: [`lib/data.ts`](lib/data.ts)**
- Contact form → `app/api/contact/route.ts` → email via [Resend](https://resend.com)
- No cookies and no tracking scripts. Only cookieless `@vercel/analytics`
- Legal pages: `/polityka-prywatnosci` and `/regulamin` (templates, see below)

---

## Run it locally

```bash
npm install
cp .env.example .env.local   # optional for local work, see "Contact form"
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`.

Node 20 or newer is required (the Resend SDK needs it).

---

## Project structure

```
app/
  layout.tsx                 <html lang="pl">, metadata, Analytics (shared by every route)
  (site)/                    the main site (route group: doesn't change URLs)
    layout.tsx               Archivo font, header, footer
    page.tsx                 the landing page (section order lives here)
    polityka-prywatnosci/    privacy policy (template)
    regulamin/               terms for digital products (template)
  demo/                      /demo: editorial redesign (own fonts, header, footer)
  demo-2/                    /demo-2: poster-campaign redesign (own fonts, header, footer)
  demo-3/                    /demo-3: main-page content in the /demo-2 poster style
  not-found.tsx              404 page
  globals.css                base styles, focus rings, legal text styles, animations
  api/contact/route.ts       contact form endpoint (Resend)
  sitemap.ts, robots.ts      SEO files, built from site.url
  icon.svg                   favicon
components/                  one file per section + small shared pieces
  demo/                      sections of the /demo page
  demo2/                     poster sections (shared by /demo-2 and /demo-3)
  demo3/                     sections only /demo-3 needs
lib/
  data.ts                    ALL text, links, prices, products, FAQ, legal/business info
  fonts.ts                   main-site font (Archivo)
  fonts-poster.ts            poster fonts for /demo-2 and /demo-3
  metadata.ts                per-page SEO/OpenGraph helper
  format.ts                  price formatting (PLN / GBP)
public/images/               photos (some interim, see "Swapping images")
tailwind.config.ts           colour palettes and type scale
```

---

## Demo page (`/demo`)

A second, complete redesign for showing the client, aimed only at women who want to lose weight
and move more. Art direction: a premium editorial fitness campaign.

- **Palette** (`ed` in `tailwind.config.ts`): warm ivory and paper, muted beige, deep charcoal,
  and a little dusty pink for small details (status dot, rules, the "Polecam" badge). Contrast
  ratios are noted next to the tokens.
- **Type:** Bodoni Moda (fashion Didone, optical size pinned in `globals.css` so hairlines stay
  readable) for headlines, Jost for body text and UI. Scale tokens: `text-ed-hero`,
  `text-ed-statement`, `text-ed-h2`, `text-ed-h3`, `text-ed-lead`.
- **System** (`components/demo/ui.tsx`): one content width (`wrap`), one section rhythm
  (`sectionY`), dark sections as inset rounded panels (`darkPanel`), and `EdButton`
  (primary / light / outline) plus `TextLink`. Photos share one treatment: a single large
  rounded corner.
- **Sections:** split hero with the trust figures as a ruled strip, a recognition bento with
  icons, Marta's quote as an editorial pause, the 1:1 offer with icon benefits, a numbered
  timeline, the before/after mounted like a print spread, pricing cards on a CSS subgrid (so
  names, prices and buttons line up) with 1:1 coaching as the recommended dark card, an
  accordion FAQ (answers slide open where the browser supports it), the closing panel and an
  oversized wordmark footer.
- **Motion:** one hero load sequence; everything else moves only on hover or click. All of it
  is off with reduced motion.
- **Copy** lives in `demo` at the bottom of `lib/data.ts`. Steps, the transformation, products
  (including the new `features` bullets) and the FAQ are reused from the main site's data.
- The campaign mentions **3 places in November**: keep the number and month accurate if the page
  is ever used for real. No specific weight-loss numbers are promised.
- It is `noindex, nofollow` and not in the sitemap. The footer links back to the standard
  version.
- Lighthouse (local, simulated mobile): Performance 95, Accessibility 100, Best Practices 96
  (the Vercel Analytics 404 that only happens locally). SEO shows 69 only because of the
  intentional `noindex`.


## Demo 2 (`/demo-2`)

A third design, built to look like the same campaign as Marta's "Otwieram 3 wolne miejsca na
listopad" Instagram poster. Same content as `/demo`, completely different art direction.

- **Palette** (`poster` in `tailwind.config.ts`): black `#050505`, almost-black `#101014`,
  charcoal `#1C1C22`, hot pink `#F12A98`, bright pink `#FF39A6`, grey `#A5A5A5`, plus a dark
  wine glow. Pink buttons use black text (white on pink fails contrast); small pink text on
  charcoal uses the brighter pink.
- **Type:** Abril Fatface (heavy display Didone, the closest match to the poster's lettering)
  for headlines, DM Sans for body and UI. Playfair Display and Bodoni Moda Black were tested
  first, but both put visible gaps into Polish words ("konsultac ja", "W sparcie").
- **Pink highlights:** the words shown in pink are listed in `demo2.pink` in `lib/data.ts`.
  The `Pink` component colours any listed phrase it finds in the copy, so changing the text
  never breaks the layout (a phrase that no longer appears simply stays white).
- **Poster wording** lives in `demo2.hero` ("Poszukuję 3 kobiet…", the LISTOPAD sign-off);
  everything else is read from `demo`. The poster's "5–7 kg" line is deliberately left out.
- **Sections:** full-screen poster hero with the photo dissolving into black, stats strip,
  recognition list with pink icons, centred statement on a wine glow, half-bleed offer photo,
  full-width numbered steps, before/after, dark pricing cards (subgrid-aligned, 1:1 coaching
  as the pink-framed recommendation), dark FAQ with pink plus/minus, a duotone closing photo
  and an oversized "MS Fit." footer.
- **Buttons** (`PButton` in `components/demo2/ui.tsx`): solid pink or white outline with a pink
  hover, slightly rounded rectangles, sizes `md`, `sm` and `card`.
- `noindex, nofollow`, not in the sitemap; the footer links to the standard page and to `/demo`.
- Lighthouse (local, simulated mobile): Performance 97–98, Accessibility 100, Best Practices 96
  (the local-only Vercel Analytics 404), SEO 69 only because of the intentional `noindex`.

## Demo 3 (`/demo-3`)

The main page (`/`) rebuilt in the `/demo-2` poster style: same content, same section order,
same working contact form, but black, hot pink, Abril Fatface headlines and dramatic photos.

- **Content:** read straight from the main-site data in `lib/data.ts` (`hero`, `problem`,
  `about`, `howIWork`, `offers`, `transformations`, `testimonials`, `products`, `faq`,
  `finalCta`, `contactForm`), so editing the main page updates this one too. Only the poster
  line breaks of the hero headline and the words shown in pink live in `demo3`.
- **Shared with `/demo-2`:** header, hero, stats strip, steps, FAQ and footer come from
  `components/demo2/` and take their content as props; both pages use `PosterRoot` and
  `lib/fonts-poster.ts`.
- **Shared with the main site:** the contact form, the yo-yo chart and the "Przykładowa treść"
  badge are the same components with a dark `tone`, so validation, the honeypot, the API call
  and the screen-reader behaviour are identical.
- **Section rhythm:** black and charcoal alternate; the 1:1 offer is the one pink-framed panel;
  the closing section pairs the big question with the contact form on a wine glow.
- Placeholder testimonials and transformations keep their visible badge, as on the main page.
- `noindex, nofollow`, not in the sitemap; the footer links back to `/`, `/demo` and `/demo-2`.
- Lighthouse (local, simulated mobile): Performance 97, Accessibility 100, Best Practices 96
  (the local-only Vercel Analytics 404), SEO 69 only because of the intentional `noindex`.
---

## Editing content (`lib/data.ts`)

Everything visible on the site comes from `lib/data.ts`. Each export matches a section:

| Export            | Where it appears                                              |
| ----------------- | ------------------------------------------------------------- |
| `site`            | Site name, SEO title/description, email, Instagram, application link, OG image |
| `applyCta`        | Every "Aplikuj na współpracę" button                          |
| `nav`             | Header links                                                  |
| `hero`            | Headline, lead, buttons, the three trust stats, hero photo    |
| `problem`         | Dark "Znasz to aż za dobrze?" section and the yo-yo chart     |
| `about`           | "Cześć, jestem Marta": story, qualifications, photo          |
| `howIWork`        | The 4 steps                                                   |
| `offers`          | The "Współpraca online 1:1" panel under the steps            |
| `transformations` | Before/after cards and the consent note                       |
| `testimonials`    | Reviews                                                       |
| `products`        | Digital products, prices, checkout links                      |
| `faq`             | Questions and answers (an answer can have an optional `link`) |
| `finalCta`        | "Jesteś gotowa na zmianę?"                                    |
| `contactForm`     | Form labels, messages and length limits (shared with the API) |
| `footer`          | Tagline, health disclaimer, legal links                       |
| `business`        | Legal name, address, ICO number, VAT note, payment provider   |
| `legal`           | Template flag, last-updated date, data processors, retention  |

Tips:

- Search the file for **`[PLACEHOLDER]`** and **`TODO`**. Everything still to confirm is marked.
- Testimonials and transformations have `placeholder: true`, which shows a visible
  "Przykładowa treść – do podmiany" badge. Remove it (or set it to `false`) once the item is real.
  Publishing invented reviews is illegal in the UK (DMCC Act 2024), so keep the badge until then.
- Adding a testimonial, transformation, product or FAQ is just adding an object to the array.
  Layouts adapt to any count.
- Keep the copy free of guaranteed results or specific weight-loss numbers ("schudniesz 10 kg").
- To reorder or remove sections, edit `app/page.tsx`.

---

## Swapping images

Replace the files in `public/images/` **keeping the same file names**, and nothing else needs to
change. If you use different names or sizes, update `src`, `width`, `height` in `lib/data.ts`.
Always update the `alt` text to describe the real photo.

| File                                       | Used for                 | Shape / minimum size      |
| ------------------------------------------ | ------------------------ | ------------------------- |
| `images/marta-hero.jpg`                    | Hero portrait (arch frame) | Portrait 4:5, 1200×1500 |
| `images/marta-o-mnie.jpg`                  | "O mnie" photo           | Portrait 4:5, 1200×1500   |
| `images/metamorfozy/<imię>-przed.jpg`      | Before photo             | Portrait 3:4, 900×1200    |
| `images/metamorfozy/<imię>-po.jpg`         | After photo              | Portrait 3:4, 900×1200    |
| `images/produkty/<id>.jpg`                 | Product mockup           | Landscape 4:3, 1200×900   |
| `images/og.jpg`                            | Link preview (Instagram, WhatsApp, Facebook) | 1200×630 exactly |

Images are cropped to fill their frame (`object-cover`), so keep faces near the centre. `next/image`
resizes and converts them to AVIF/WebP automatically; upload good-quality JPGs (under ~1 MB each).
Before/after pairs look best when shot in the same place, light and pose.

**Current state.** Some photos are interim crops from
[@msfit_coaching_](https://www.instagram.com/msfit_coaching_/), with the Instagram text overlays
cropped out:

| File                                  | Source                                                       | Size     |
| ------------------------------------- | ------------------------------------------------------------ | -------- |
| `marta-hero.jpg`                      | Slide 4 of the "−9 KG" transformation post (28 Oct 2026)     | 678×848  |
| `marta-o-mnie.jpg`                    | Cover of the "4 ćwiczenia na krągłe pośladki" reel           | 640×800  |
| `metamorfozy/klientka-1-przed/po.jpg` | Slide 3 of the "−9 KG" post (front view, no face)            | 514×685  |
| `og.jpg`                              | Generated text card + the hero photo                         | 1200×630 |

They are below the recommended sizes and look slightly soft on high-resolution screens. Swap in the
original files from Marta's photo shoots when she sends them (same file names, then update
`width`/`height` in `lib/data.ts`). The two other transformation cards and the product mockups
are still labelled placeholders.

---

## Connecting checkout links

Each product in `lib/data.ts` has a `checkoutUrl` (currently `"#"` with a `TODO`). The "Kup teraz"
button opens it in a new tab. Works with any hosted checkout:

- **Payhip**: product page → "Share" → copy the product or "Buy Now" link
- **Lemon Squeezy**: Products → product → "Share" → checkout link
- **Stripe**: Payment Links → create a link per product → copy the `https://buy.stripe.com/...` URL

Prices on the site are display-only. `price: { pln: 79, gbp: 15 }` shows "79 zł lub £15"; drop
either key to show one currency. Keep them in sync with the checkout.

When the provider is chosen, also:

1. Make sure the checkout shows a **consent checkbox for immediate access and loss of the 14-day
   withdrawal right**, and sends it in the confirmation email (all three providers support this
   for digital products). The Regulamin relies on it.
2. Update `business.paymentProvider` and the last item of `legal.processors` in `lib/data.ts`.

---

## Contact form (Resend)

The form posts to `/api/contact`, which validates on the server (required fields, email format,
max lengths, consent), filters bots with a hidden honeypot field and a minimum fill time, and
emails Marta through Resend with `reply-to` set to the sender.

1. Create a Resend account and **verify the sending domain** (Domains → Add domain → DNS records).
2. Create an API key (API Keys → Create).
3. Set the environment variables (below).

Without `RESEND_API_KEY` / `CONTACT_TO_EMAIL`, messages are printed to the terminal in development
and the form shows an error in production, so enquiries are never dropped silently.

---

## Deploying on Vercel

1. Push the project to GitHub and import it in Vercel (framework preset: Next.js, no settings to change).
2. **Project → Settings → Environment Variables** (Production, and Preview if you want to test there):

   | Variable               | Required | Value                                                          |
   | ---------------------- | -------- | -------------------------------------------------------------- |
   | `RESEND_API_KEY`       | yes      | `re_...` from Resend                                           |
   | `CONTACT_TO_EMAIL`     | yes      | Inbox that receives messages                                   |
   | `CONTACT_FROM_EMAIL`   | recommended | Sender on the verified domain, e.g. `MS Fit Coaching <formularz@msfitcoaching.pl>`. Without it Resend's test sender is used, which only delivers to the Resend account owner. |
   | `NEXT_PUBLIC_SITE_URL` | once the domain is live | `https://www.final-domain.pl`, used for canonical, sitemap, OG and JSON-LD URLs. If empty, Vercel's production domain is used. |

3. **Analytics → Enable** Web Analytics (cookieless, no consent banner needed).
4. **Settings → Domains** to add the custom domain, then set `NEXT_PUBLIC_SITE_URL` and redeploy.

Changing environment variables needs a redeploy to take effect.

---

## Legal pages

`/polityka-prywatnosci` (UK GDPR) and `/regulamin` (digital products: 14-day withdrawal right and
its loss on immediate download, refunds for faulty files, English & Welsh law while keeping
consumer protection where the buyer lives, health disclaimer) are **templates**. While
`legal.isTemplate` is `true`, both pages show a "Wzór dokumentu" notice. After Marta (ideally with
a lawyer) approves the text, fill in the `[PLACEHOLDER]` parts in `business`/`legal` and set
`isTemplate: false`.

The body text of each page is in its `page.tsx`; names, addresses, processors and dates come from
`lib/data.ts`. If a new tool that handles personal data is added (newsletter, booking, chat),
add it to `legal.processors`.

---

## Design notes

- Palette in `tailwind.config.ts`: porcelain `#FBF8F6` background, ink `#231F20` text, one deep
  rose accent `#B4235A`, with a blush tint and sand neutral. Contrast ratios are listed in the file
  and all text pairings pass WCAG AA.
- Type: **Archivo** (self-hosted via `next/font`, Polish characters included). Headings use its
  expanded width (`font-expanded`) for a strong, athletic look; body text uses the normal width.
- The one animated moment: the "plan szyty na miarę" line in the yo-yo chart draws itself as it
  scrolls into view (CSS only, and only when the visitor hasn't asked for reduced motion).
- On phones, a sticky "Aplikuj na współpracę" bar appears once the hero buttons scroll away and
  hides while the contact section is on screen.

## Checks run on this build

Local production build (`next start`), Lighthouse 12, simulated mobile:

| Page         | Performance | Accessibility | Best Practices | SEO |
| ------------ | ----------- | ------------- | -------------- | --- |
| `/`          | 94–97       | 100           | 96*            | 100 |
| `/regulamin` | 96          | 100           | 96*            | 100 |

\* The only deduction is a console 404 for `/_vercel/insights/script.js`, a route that exists only
on Vercel, so expect 100 once deployed. Home-page Performance varies between runs (LCP is the
hero photo on simulated slow 4G); it was re-measured with the interim Instagram photos. Keep
replacement photos reasonably sized, and re-check on the deployed site, where the CDN usually
makes it faster. Also verified: one `h1` and sequential
headings, labels on every input, alt text on every image, keyboard focus rings, Escape closes the
mobile menu, form validation messages announced to screen readers, API validation/honeypot.

---

## Placeholders to collect from the client

**Brand and contact**

- [ ] Contact email shown on the site and in legal pages (`site.email`, currently `kontakt@msfitcoaching.pl`)
- [ ] Final domain (`NEXT_PUBLIC_SITE_URL`)
- [ ] Confirm the **"1000+ podopiecznych"** claim (exact number and wording)
- [x] Application link `https://martaciupak.onlinecoaching.io/pre-application` (matches the link in her Instagram bio)
- [x] Instagram handle `@msfit_coaching_`

**Photos** (with written consent for anyone other than Marta)

- [ ] Original, full-size files of the two Marta photos now taken from Instagram (seated with a dumbbell; pink top in the gym), or new 4:5 portraits
- [ ] Confirm the client in the "−9 KG" post agreed to her photos being used **on the website**, not just Instagram; optionally her first name and a quote for the card
- [ ] At least 2 more before/after pairs (3:4), with each client's **written consent** to publish
- [ ] Product mockups for each product (4:3)

**Copy**

- [ ] Marta's story for "O mnie", in her own words
- [ ] Qualifications and certificates (names, issuing bodies), years of experience
- [ ] Coaching offer: what is included, check-in frequency, whether to show a price
- [ ] How contact works: app name, check-in frequency, reply times (FAQ "Jak wygląda kontakt z Tobą?")
- [ ] Review all FAQ answers
- [ ] Transformation quotes + first names for the remaining cards
- [ ] Real testimonials (quote, first name, city) with permission

**Products**

- [ ] Product names, descriptions and formats
- [ ] Prices in PLN and/or GBP
- [ ] Payment provider choice (Payhip / Lemon Squeezy / Stripe) and a checkout link per product

**Legal and business**

- [ ] Legal name and structure (sole trader or Ltd; company number if Ltd)
- [ ] Business/correspondence address for the legal pages
- [ ] ICO registration number (data protection fee)
- [ ] VAT status
- [ ] onlinecoaching.io: legal entity and where data is stored
- [ ] Retention periods (contact messages, coaching client data)
- [ ] Terms for 1:1 coaching, if they exist (to link from the Regulamin)
- [ ] Legal review of both pages, then set `legal.isTemplate: false`

**Accounts and setup**

- [ ] Resend account, verified sending domain, inbox for `CONTACT_TO_EMAIL`
- [ ] Vercel project with Web Analytics enabled and the custom domain connected
