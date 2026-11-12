# MS Fit Poster: Shopify theme

The `/demo-3` page of the Next.js site, rebuilt as a Shopify theme (Online Store 2.0). Same
design, same Polish copy, but Marta edits every text, photo and link herself in Shopify's theme
editor, and Shopify handles products, checkout, downloads, the contact form and the newsletter.

- Anton (headlines) and Poppins (text), self-hosted in `assets/` (SIL Open Font License 1.1)
- Only white, black and the accent pink `#C62B6E` (Theme settings → Kolory), with their shades
- Plain CSS (`assets/theme.css`) and a few lines of JavaScript (`assets/theme.js`), no build step
- Checked with Shopify's Theme Check: 0 errors, 0 warnings

---

## What's in it

| Home page section (`templates/index.json`) | Editable in the theme editor |
| ------------------------------------------ | ---------------------------- |
| Hero                                       | Headline (Enter = new line), pink second part, text, 2 buttons, photo, caption |
| Liczby                                     | The three figures under the hero |
| Problem i wykres                           | Title, intro, three points with icons, the yo-yo chart labels |
| O mnie                                     | Photo, story, qualifications list, Instagram link |
| Jak pracuję                                | Steps, plus the pink-framed 1:1 offer |
| Metamorfozy                                | Before/after pairs, each with a "sample content" switch |
| Opinie                                     | Reviews, each with a "sample content" switch |
| Produkty                                   | Products from a collection |
| Darmowe materiały                          | Free products (price 0) from another collection |
| FAQ                                        | Questions and answers |
| Zakończenie i kontakt                      | The closing question, application button and Shopify's contact form |
| Newsletter                                 | Signup form (name + email) |

Header and footer are section groups (menu links, button, email, disclaimer); the phone sticky
button is in the footer group. Product, collection, cart, search, blog, 404 and password pages
use the same look.

**Two editor habits for Marta:**

- **Pink words:** in any title, select the words and press *italic*. Italics show in pink.
- **Placeholders:** reviews and transformations have a "Przykładowa treść" switch that shows a
  visible badge. Leave it on until the content is real and consented (invented reviews are illegal
  in the UK, DMCC Act 2024).

---

## Setting up the store

1. **Create the store** on the Basic plan or above. In *Settings → Languages* make Polish the
   default, set the currency to GBP, and add a Poland market in *Settings → Markets* if prices
   should also show in złoty.
2. **Install the theme.** Zip the *contents* of this folder (so `layout/`, `sections/`… are at the
   root of the zip) and upload it in *Online Store → Themes → Add theme → Upload zip file*, or use
   Shopify CLI: `shopify theme push --path shopify-theme`. Preview, then *Publish*.
3. **Products.** Add each PDF as a product with *This is a physical product* unticked, so checkout
   doesn't ask for an address. The *Product type* (e.g. "E-book PDF") shows as the label on the
   card. Use a 4:3 image, at least 1200 × 900 px.
4. **Free materials** are products with the price set to 0.
5. **Collections.** Make two manual collections, e.g. "Produkty" and "Darmowe materiały", and pick
   them in the two *Produkty z kolekcji* sections on the home page. A section stays hidden while
   its collection is empty.
6. **Delivering the files:** install Shopify's free *Digital Downloads* app and attach the file to
   each product. Buyers get a download link on the order confirmation page and by email.
   Test it with the free products first: some merchants report the link not showing on the
   thank-you page until the app's block is added there.
7. **Checkout** (*Settings → Checkout*): turn on *Show a sign-up option at checkout* for email
   marketing, with *Preselected* off. That's the optional, unticked newsletter box for freebies.
8. **Newsletter:** people who sign up appear in *Customers*, subscribed to email marketing and
   tagged `newsletter`. Write and send newsletters with Shopify Email. If Marta wants people to
   confirm by email first, turn on double opt-in (search Settings for "double opt-in").
9. **Contact form** messages go to the store's sender email (*Settings → Notifications*).
   Shopify's spam protection (hCaptcha) is on by default for contact and signup forms.
10. **Policies** (*Settings → Policies*): paste the privacy policy and terms from the Next.js site
    (`/polityka-prywatnosci`, `/regulamin`), updated for Shopify as the shop, payment and newsletter
    provider. They appear in the footer automatically, and the FAQ, contact form and newsletter link
    to them.
11. **Cookies:** unlike the Next.js site, Shopify sets cookies. Turn on the cookie banner in
    *Settings → Customer privacy* for UK and EU visitors.
12. **Photos:** pick Marta's photos in the *Hero* and *O mnie* sections. Until then the theme shows
    the interim photos it ships with (`assets/marta-hero.jpg`, `assets/marta-o-mnie.jpg`).
    Transformation photos only with each client's written consent.
13. **Launch:** connect the domain in *Settings → Domains* and remove the store password.

## How it differs from the Next.js `/demo-3`

- **Freebies go through Shopify's checkout** (price 0) instead of the name + email form: Marta
  adds them herself as products, but people fill in the checkout's contact form to get them.
- **Newsletter** signups go to Shopify's customer list instead of a separate mailing system.
- **"Kup teraz"** goes straight to Shopify's checkout with that one product (no Payhip popup).
- **Contact form** is Shopify's: messages arrive by email, with a consent tick box.
- **Only the Polish home page.** The English version, `/demo` and `/demo-2` aren't part of it.
- **Speed:** Shopify loads its own scripts, so expect lower Lighthouse scores than the Next.js
  site. Check with a real store.

## Working on the theme

```bash
npm install -g @shopify/cli
shopify theme dev --store your-store.myshopify.com --path shopify-theme   # live preview
shopify theme check --path shopify-theme                                  # lint
```

The theme was built before the store existed, so it has been checked with Theme Check and a local
Liquid preview with sample products, but not yet on a real store. Test the whole buying flow
(paid and free product, download link, emails) on the store before launch.

Fonts: Anton © The Anton Project Authors, Poppins © Indian Type Foundry. Both SIL Open Font
License 1.1 (https://openfontlicense.org).
