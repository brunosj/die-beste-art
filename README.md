![logo](./static/header_grand_cru.jpg)

## Description

This repo contains the website of [Entlebuch](https://die-beste.art).

## Technologies

The site is a [Sveltekit](https://kit.svelte.dev/) project written in TypeScript and deployed on [IONOS Deploy Now](https://www.ionos.com/hosting/deploy-now). Data is sourced from [Strapi](https://strapi.io/) and styling is done with [Tailwind CSS](https://tailwindcss.com).

## Installation

1. Use the git CLI to close the repo

```
gh repo clone brunosj/die-beste-art
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Navigate into the site's directory and start the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

```
.
├── node_modules
└── src
    ├── lib
    ├── routes
    ├── app.d.ts
    ├── app.html
    ├── app.css
├── static
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrrc
├── pnpm-lock.yaml
├── package.json
├── postcss.config.cjs
├── README.md
├── svelte.config.js
├── tailwind.config.cjs
├── tsconfig.json
└── vite.config.ts
```

## Further development

This repository is maintained by [brunosj](https://github.com/brunosj).
