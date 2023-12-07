![logo](./static/header_grand_cru.jpg)

## Description

This repo contains the website of [Entlebuch](https://die-beste.art).

## Technologies

The site is a [Next.js](https://nextjs.org/) project deployed on [Vercel](https://vercel.com/). Data is sourced from [Strapi](https://strapi.io/) and styling is done with [Tailwind CSS](https://tailwindcss.com). It is a multilingual site, using <code>next-i18next</code> to handle localizations and translations. It features both <code>dark</code> and <code>light</code> mode.

## Installation

1. Use the git CLI to close the repo

```
gh repo clone brunosj/Studio-deremetz
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
├── public
    ├── locales
└── src
    ├── components
    ├── lib
    ├── pages
    ├── styles
    ├── utils
├── .env
├── .eslintrc.json
├── .gitignore
├── jsconfig.js
├── next-i18next.config.js
├── next-sitemap.config.json
├── next-config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Further development

This repository is maintained by [brunosj](https://github.com/brunosj).
