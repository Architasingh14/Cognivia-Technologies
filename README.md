# Cognivia Technologies website (Vite)

The same website as before, split into a standard Vite project. Nothing in the design, text or behaviour was changed.

## Run it
Requires Node.js 20.19+ (or 22.12+).

```bash
npm install
npm run dev        # local dev server with live reload
npm run build      # production build into /dist
npm run preview    # preview the production build
```

Upload the contents of `dist/` to your hosting (Netlify, Vercel, GitHub Pages, any web server).

## Structure
```
index.html          page markup, meta/SEO tags, structured data
src/style.css       all styles
src/main.js         all JavaScript (menu, scroll reveal, form, back to top)
src/assets/logo.png logo (used in header and footer)
public/             favicon set, og-image, robots.txt, sitemap.xml, site.webmanifest
```

## Before going live
- Replace `YOUR-DOMAIN.com` in `public/robots.txt` and `public/sitemap.xml`.
- In `index.html`, enable the canonical / og:url / og:image tags (see the comment in the `<head>`).
- The enquiry form sends through FormSubmit; the first submission asks for an email confirmation.
