# One Stop By N prototype

Branded with the supplied One Stop By N logo.

An editable React/Vite prototype of the interactive rack at snugwrld.netlify.app and its linked shop. Includes all 42 public catalog products, their images and variants, seven collections, search/filter/sort, product galleries, a persistent cart, and demo checkout/account/order/contact flows.

This is a prototype: no payments, real authentication, emails, or orders are processed. Demo data stays in the current browser. All runtime images and fonts are included locally; the app does not need the original sites to run. Product availability and prices are a snapshot, not a live inventory feed.

## Run

Use Node.js 22.12+ or 24.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5173. The rack is `/`; the shop is `/shop`.

## Deploy to Vercel

Import this GitHub repository in Vercel. Keep the root directory at the repository root. `vercel.json` configures Vite, `npm ci`, `npm run build`, the `dist` output directory, and SPA deep-link rewrites. No environment variables or backend services are required.

[Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsntracore%2FonestopbyN)

[Vercel's Vite documentation](https://vercel.com/docs/frameworks/frontend/vite)

## Build and verify

```sh
npm run build
npm run preview
```

For the browser checks, keep the dev server running in another terminal:

```sh
npx playwright install chromium
npm test
```

Set `PROTOTYPE_URL` to check a different local server. `PLAYWRIGHT_CHROMIUM_EXECUTABLE` optionally selects an already installed Chromium executable. Screenshots and results are written to the ignored `qa/` directory. The checks cover every catalog product and collection, rack interactions, search, filters, variants, cart persistence, checkout totals, demo orders, account/contact flows, mobile layouts, missing assets, and external network requests.

## Edit

- `src/Rack.jsx`: rack geometry, products, spring motion, front/back and colour transitions.
- `src/rack.css`: reference rack styling and responsive rules.
- `src/Shop.jsx` and `src/shop.css`: shop pages and interactions.
- `src/catalog.json`, `src/collections.json`: editable catalog snapshot.
- `src/store.js`: browser-local cart and demo persistence.
- `public/products`, `public/shop`, `public/fonts`: local assets.

The original rack's About and Contact anchors had no content. This prototype connects them to local About and Contact pages. Checkout, account, orders, and contact submission are explicit local demos. The privacy page describes this prototype's behavior.
