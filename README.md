# Aciful Islam Khan — Personal Portfolio

A modern, full-featured personal portfolio built with **Next.js** and **React**, designed to present my professional background, research publications, projects, and achievements in a clean, interactive interface.

**Live site:** [swopnile-s-portfolio.vercel.app](https://swopnile-s-portfolio.vercel.app/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| UI Library | React |
| Styling | Tailwind CSS |
| Animations | Framer Motion (`motion/react`) |
| Form Handling | Web3Forms API |
| Carousel | Swiper.js |
| Deployment | Vercel |

---

## Features

### Sections
- **Home** — Animated introduction with links to contact and resume
- **About** — Professional summary, skills info cards, and tools grid
- **Education** — Degree details and academic highlights
- **Projects** — Auto-sliding image carousel per card, demo video modal, image lightbox, tech tags, GitHub links, and paginated "See More / See Less"
- **Publications** — Research papers with status badges (Published / Under Review / Preprint), expandable abstracts, tag filters, and DOI links
- **Achievements** — Swiper carousel of certificates with PDF preview modal
- **Experiences** — 3D card carousel with auto-advance and keyboard navigation
- **Contact** — Functional contact form with email delivery via Web3Forms

### UI/UX
- Dark / light mode toggle with instant theme switching
- Fully responsive across mobile, tablet, and desktop
- Smooth entrance animations using Framer Motion `whileInView`
- Interactive hover states on all cards and buttons

---

## Project Structure

```
/
├── app/                    # Next.js App Router pages
├── assets/                 # Images, icons, and static data
│   └── assets.js           # Centralized asset and data exports
├── components/
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── About.jsx
│   ├── Education.jsx
│   ├── Projects.jsx
│   ├── Project_Demo_Video_Modal.jsx
│   ├── Project_Image_Modal.jsx
│   ├── Publications.jsx
│   ├── Achievements.jsx
│   ├── Pop_Up.jsx
│   ├── Experiences.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── public/                 # Static assets served directly
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/Elin-powS/Swopnile-s-Portfolio.git
cd Swopnile-s-Portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```

Get a free key at [web3forms.com](https://web3forms.com).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## Deployment

This project is deployed on **Vercel**.

1. Push the repository to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` under **Environment Variables**
4. Click **Deploy**

Vercel automatically rebuilds on every push to `main`.

---

## Customization

All content is driven from `assets/assets.js`. To update the portfolio with your own data, edit the exported arrays:

| Export | Controls |
|---|---|
| `workData` | Projects section |
| `publicationsData` | Publications section |
| `achievementsData` | Achievements / certificates |
| `experienceData` | Experiences carousel |
| `educationData` | Education cards |
| `infoList` | About info cards |
| `toolsData` | Tools grid in About |
| `assets` | All images and icons |

---

## Roadmap

- [ ] AI chatbot integration (in progress)
- [ ] SEO optimization and Open Graph metadata
- [ ] Analytics dashboard
- [ ] Enhanced micro-interactions
- [ ] Backend rate limiting and spam protection for contact form

---

## License

This project is open-source and available under the MIT License.

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.

Attribution is appreciated but not required.

---


## Contact

**Aciful Islam Khan**
[LinkedIn](https://www.linkedin.com/in/aciful-islam-khan/) · [GitHub](https://github.com/Elin-powS) · [Kaggle](https://www.kaggle.com/acifulsopnil) · sopnil493@gmail.com
