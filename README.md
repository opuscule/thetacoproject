# The Taco Project Website

Marketing website and content-driven pages for The Taco Project.

## Stack

- Astro 5
- Tailwind CSS 4
- React components (via Astro)
- Keystatic CMS for managed content
- Netlify for deployment and redirects

## Deployment

- Built with Astro and deployed on Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Canonical domain is `https://thetacoproject.com`
- Requests to `https://thetacoproject.netlify.app/*` are redirected to the canonical domain

## Content

- Structured content lives in `src/content/`
- Keystatic config is in `keystatic.config.ts`
- Taco of the Month assets are served from `public/taco-of-the-month/`

## Local Development

```sh
npm install
npm run dev
```

Useful scripts:

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run preview` - preview production build locally