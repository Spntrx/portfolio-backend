# Avi Balsingh Portfolio

A responsive React portfolio for Web Application Development Assignment 1. The site includes six hash-routed views: Home, About, Projects, Education, Services, and Contact.

## Run locally

```sh
npm install
npm run dev
```

## Build and lint

```sh
npm run build
npm run lint
```

Run the production build locally with `npm run preview`. The built static site is written to `dist/`.

## Project assets

- Profile and project photographs are in `public/images/`.
- The résumé PDF is `public/resume.pdf` and is linked from the About page.
- The original AB brand mark is used in the main navigation and browser favicon.

## Contact form

The form requires a visitor's first name, last name, contact number, email address, and message. On submission, it captures the entered values in the current page session and returns the visitor to Home. It does not send or persist messages.

## Assignment handoff

- [ ] Review portfolio content and résumé before publishing.
- [x] Create a GitHub repository and push the complete source project: [Spntrx/React-Portfolio](https://github.com/Spntrx/React-Portfolio).
- [ ] Deploy the production build from `dist/` using a static host such as Netlify, Vercel, or Render.
- [ ] Add the live-site URL to the assignment submission.
- [x] Include a ZIP of the project source; exclude `node_modules/` and `dist/`.