# Aciful Islam Khan — Personal Portfolio

A responsive, single-page personal portfolio built with **Next.js 15** and **React 19**. It presents my professional background, projects, research publications, certificates and experience in a clean, interactive interface with dark / light mode.

**Live site:** [swopnile-s-portfolio.vercel.app](https://swopnile-s-portfolio.vercel.app/)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Content Data Model](#content-data-model)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Customization](#customization)
- [Design System](#design-system)
- [Accessibility and Responsiveness](#accessibility-and-responsiveness)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)

---

## Overview

The site is a **static-first, single-page application** with no backend of its own. All content (projects, publications, certificates, experience, education, skills) lives in one data file, [`assets/assets.js`](assets/assets.js). Components only render that data, so adding a new project or job means editing data, not components.

The only external service is [Web3Forms](https://web3forms.com), which delivers contact-form messages by email.

---

## Tech Stack

| Layer          | Technology                                             |
| -------------- | ------------------------------------------------------ |
| Framework      | Next.js 15 (App Router, Turbopack in dev)              |
| UI library     | React 19                                               |
| Styling        | Tailwind CSS v4 (tokens defined in `app/globals.css`)  |
| Animations     | `motion` (`motion/react`, Framer Motion successor)     |
| Carousel       | Swiper.js (certificates)                               |
| PDF            | `react-pdf` / embedded viewer for certificates         |
| Fonts          | Ovo and Outfit via `next/font/google`                  |
| Contact form   | Web3Forms API                                          |
| Linting        | ESLint 9 with `eslint-config-next`                     |
| Deployment     | Vercel                                                 |

---

## Features

### Sections

| Section          | What it does |
| ---------------- | ------------ |
| **Home**         | Animated introduction with profile photo, current role, and buttons for contact and resume download. |
| **About**        | Personal summary with a "Read more" toggle that collapses the text to the height of the photo, three info cards (education, languages and tools, current role) and a tools grid. |
| **Education**    | Degree and school cards with years. |
| **Projects**     | Project cards with an auto-sliding image carousel, category badge, tech tags, GitHub link, demo video pop-up, full-screen image viewer, and paginated "See More / See Less". |
| **Publications** | Research papers with status badges (Published / Under Review / Preprint), expandable abstracts, tags, DOI links and paging. |
| **Achievements** | Swiper carousel of certificates with a pop-up that previews the certificate PDF. |
| **Experiences**  | 3D card carousel with auto-advance, arrow navigation and dots. Clicking a card opens a detailed pop-up with the role summary, projects worked on, a timeline and the tech stack. |
| **Contact**      | Working contact form (Web3Forms) with sending, success and error states. |
| **Footer**       | Email and social links, copyright and quick links (LinkedIn, GitHub, LeetCode, Codeforces, Kaggle). |

### Interaction details

- **Dark / light mode** toggle. First visit follows the operating system preference, and the choice is remembered in `localStorage`.
- **Experience pop-up** with role, period, location, summary, project cards, a vertical timeline and tech chips. Cards without detail data simply do not open a pop-up.
- **Project image viewer**: navigate with the on-screen arrows, the dots, the keyboard (`←` `→`), or by **dragging the image** with the mouse or finger. `Esc` closes it.
- **Demo video pop-up** for YouTube links or local `.mp4` files.
- **Certificate pop-up** with an embedded PDF preview.
- All pop-ups close with `Esc`, a click on the backdrop, or the close button, and lock page scrolling while open.
- Scroll-triggered entrance animations (`whileInView`) and hover effects on cards and buttons.

---

## Project Structure

```
/
├── app/
│   ├── layout.js            # Root layout: fonts, metadata, body classes
│   ├── page.js              # Page: theme state, renders all sections in order
│   └── globals.css          # Tailwind import, theme tokens, Swiper overrides
├── Components/
│   ├── Navbar.jsx                     # Fixed nav, mobile drawer, theme toggle
│   ├── Header.jsx                     # Home / hero (#home)
│   ├── About.jsx                      # About + info cards + tools (#about)
│   ├── Education.jsx                  # (#education)
│   ├── Projects.jsx                   # (#projects)
│   ├── Project_Image_Modal.jsx        # Full-screen image viewer (drag, keys)
│   ├── Project_Demo_Video_Modal.jsx   # Demo video pop-up
│   ├── Publications.jsx               # (#publications)
│   ├── Achievements.jsx               # Certificate carousel (#achievements)
│   ├── Pop_Up.jsx                     # Certificate PDF pop-up
│   ├── Experiences.jsx                # 3D experience carousel (#experiences)
│   ├── Experience_Detail_Modal.jsx    # Experience details pop-up
│   ├── Contact.jsx                    # Contact form (#contact)
│   ├── Footer.jsx
│   └── useModalA11y.js                # Shared hook: Esc to close + scroll lock
├── assets/
│   ├── assets.js            # All images, icons and content data (single source of truth)
│   └── *.png / *.svg / *.jpg
├── public/                  # CV, certificate PDFs, project screenshots, demo video
├── next.config.mjs
├── eslint.config.mjs
├── postcss.config.mjs
├── jsconfig.json            # "@/..." path alias to the project root
└── package.json
```

> The components folder is named `Components` (capital C) and imported as `@/Components/...`. Keep the casing exact so builds also work on case-sensitive systems such as Linux CI and Vercel.

### Page anchors

The navigation depends on these section ids. Keep them unchanged:

`#home` `#about` `#education` `#projects` `#publications` `#achievements` `#experiences` `#contact`

---

## Content Data Model

Everything shown on the site comes from exports in [`assets/assets.js`](assets/assets.js).

| Export             | Controls                          |
| ------------------ | --------------------------------- |
| `assets`           | All imported images and icons     |
| `workData`         | Projects section                  |
| `publicationsData` | Publications section              |
| `achievementsData` | Achievements / certificates       |
| `experienceData`   | Experiences carousel and pop-ups  |
| `educationData`    | Education cards                   |
| `infoList`         | The three info cards in About     |
| `toolsData`        | Tools icon grid in About          |

### Project (`workData`)

```js
{
  title: "Project name",
  description: "Short description",
  bgImage: "Folder/cover.png",          // path inside /public
  images: ["Folder/1.png", "Folder/2.png"],
  category: "Automation",               // badge label
  tech: ["Node.js", "TypeScript"],
  link: "https://github.com/...",       // GitHub link
  demo: "https://youtu.be/..." // or "./video.mp4"
}
```

### Experience (`experienceData`)

```js
{
  icon: assets.company_logo,
  title: "Company",
  description: "Role.\nJan 2025 – Present",   // "\n" splits lines on the card
  link: "",
  detail: {                                   // optional: enables the pop-up
    role: "Software Engineer",
    period: "Jan 2025 – Present",
    location: "City",                         // optional
    summary: "What the role is about.",
    projects: [
      { name: "Project", description: "…", points: ["…"], tech: ["…"] }
    ],
    pipeline: ["Step 1", "Step 2"],           // optional flow diagram
    timeline: [
      { date: "Jan 2025", title: "Joined", detail: "…" }
    ],
    techStack: ["React", "Node.js"]
  }
}
```

### Publication (`publicationsData`)

```js
{
  title, publisher, issueDate, volume, pages, doi, abstract,
  tags: ["Machine Learning"],
  status: "Published" // "Under Review" | "Preprint"
}
```

### Certificate (`achievementsData`)

```js
{
  icon, iconDark,
  backgroundImage: "/certificate.pdf",   // PDF in /public
  title, description, more_description, skills_gained
}
```

---

## Getting Started

### Prerequisites

- Node.js 18.18 or newer (Node 20+ recommended)
- npm (yarn or pnpm also work)

### Installation

```bash
git clone https://github.com/Elin-powS/Swopnile-s-Portfolio.git
cd Swopnile-s-Portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file in the project root (all `.env*` files are git-ignored):

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```

Get a free access key at [web3forms.com](https://web3forms.com).

> `NEXT_PUBLIC_` variables are bundled into the browser code, so the key is visible to visitors. This is normal for Web3Forms. In the Web3Forms dashboard, restrict the key to your domain to prevent misuse.

---

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (Turbopack)     |
| `npm run build` | Create an optimized production build |
| `npm start`     | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

---

## Customization

1. **Content**: edit the arrays in `assets/assets.js` (see [Content Data Model](#content-data-model)).
2. **Images and files**: put screenshots, PDFs and videos in `public/` and reference them by path. Put imported icons and logos in `assets/` and register them in the `assets` object.
3. **Resume**: replace `public/CV_Aciful_Islam_Khan.pdf` (keep the filename, or update the link in `Components/Header.jsx`).
4. **Metadata**: edit the page title and description in `app/layout.js`.
5. **Social links**: edit `Components/Footer.jsx`.

### Adding a new experience pop-up

1. Add the company logo to `assets/` and register it in `assets`.
2. Add an entry to `experienceData` with a `detail` object.
3. Only dates you are sure about should go in `timeline`.

---

## Design System

Tokens are defined in `app/globals.css` with Tailwind v4 `@theme`:

| Token          | Value     | Use                         |
| -------------- | --------- | --------------------------- |
| `lightHover`   | `#efdaf7` | Light hover / chip color    |
| `darkHover`    | `#8a50b5` | Dark hover / accent         |
| `darkTheme`    | `#11001f` | Dark-mode page background   |
| `font-Ovo`     | Ovo       | Headings and body text      |
| `font-Outfit`  | Outfit    | Navigation and UI text      |

Dark mode is class-based (`html.dark`) through `@custom-variant dark`. Every component ships `dark:` variants.

---

## Accessibility and Responsiveness

- Layout tested from 360px phones to 1920px desktops with no horizontal scrolling.
- The full navigation bar shows from 1280px; smaller screens use a slide-in menu.
- Icon-only buttons have accessible labels; pop-ups use `role="dialog"`, close with `Esc`, and lock background scroll.
- Content images have alt text; the contact form reports status through an `aria-live` region.

---

## Deployment

Deployed on **Vercel**:

1. Push the repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` under **Environment Variables**.
4. Click **Deploy**. Vercel rebuilds on every push to the main branch.

The project is a standard Next.js app and also works on any host that supports Next.js.

---

## Roadmap

- [ ] Real demo videos for every project (placeholders are used today)
- [ ] AI chatbot integration (in progress)
- [ ] SEO improvements and Open Graph metadata
- [ ] Automated tests and CI (lint and build)
- [ ] Spam protection (honeypot or rate limiting) for the contact form
- [ ] Analytics

---

## License

This project is open-source under the **MIT License**. You are free to use, copy, modify, merge, publish, distribute, sublicense and sell copies of the software. Attribution is appreciated but not required. See [LICENSE](LICENSE).

Personal content (photos, CV, certificates, text) belongs to its owner and should be replaced if you reuse the template.

---

## Contact

**Aciful Islam Khan**

[LinkedIn](https://www.linkedin.com/in/aciful-islam-khan/) · [GitHub](https://github.com/Elin-powS) · [Kaggle](https://www.kaggle.com/acifulsopnil) · sopnil493@gmail.com
