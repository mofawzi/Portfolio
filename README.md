# Mohamed Fawzy · Senior Frontend Engineer

**Live site:** [mohamedfawzy96.vercel.app](https://mohamedfawzy96.vercel.app/)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-mohamed--fawzi-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/mohamed-fawzi/)
[![Email](https://img.shields.io/badge/Email-mohamedfawzy.dev%40gmail.com-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:mohamedfawzy.dev@gmail.com)
[![Tripzle](https://img.shields.io/badge/Co--founder-Tripzle-255DD2?style=flat)](https://tripzle.com)

Senior Frontend Engineer in Riyadh with **7+ years** building enterprise web and cross-platform applications for Saudi government and financial-services platforms. I specialize in **React, Next.js and TypeScript**, with deep experience in frontend architecture, legacy modernization, performance optimization, monorepos and mobile integrations (Angular, Ionic, Capacitor).

I also co-founded **[Tripzle](https://tripzle.com)**, an Arabic-first travel platform for the MENA region, which I build end to end across web, iOS, Android, backend and infrastructure.

---

## Experience

### Senior Frontend Engineer · SDAIA
*Sep 2023 – Present · Riyadh, KSA*

Saudi Business Center ([business.sa](https://business.sa)): Saudi Arabia's unified business services platform for investors.

- Led frontend development within an 11-engineer team; the platform serves **100K+ users** and processes **200K+ requests monthly**.
- Cut initial page load from **~6s to 2–3s** through lazy loading, memoization, bundle-size optimization and more efficient data fetching.
- Modernized large legacy React apps from class components and Redux Saga to functional components and modern React patterns.
- Helped migrate established applications to a monorepo with reusable shared components.
- Delivered digital licensing services for the General Authority of Media, Ministry of Health, General Entertainment Authority, Saudi Ports Authority and Ministry of Industry and Mineral Resources.

### Software Developer · Azentio
*Mar 2022 – Sep 2023 · Cairo, Egypt*

- Architected and delivered UI for the OMNI Islamic banking platform across web, iOS and Android (Angular, Ionic, SASS).
- Owned shared components used across banking clients, including forms, masked inputs and security-sensitive UI.
- Implemented biometric authentication from scratch and led the migration from Cordova to Capacitor.
- Owned mobile release infrastructure: Firebase environments, APK/IPA builds, signing, analytics, crash reporting and push notifications.

### Frontend Developer · Path Solutions
*Jun 2019 – Mar 2022 · Cairo, Egypt*

- Delivered cross-platform frontend for the OMNI Islamic digital banking platform.
- Built white-label banking interfaces tailored to each institution's branding and regulatory requirements.
- Built report-generation modules with JasperReports.

---

## Featured project: Tripzle

**Co-founder & Lead Engineer · Jan 2026 – Present** · [tripzle.com](https://tripzle.com) · [App Store](https://apps.apple.com/app/id6821729454) · [Google Play](https://play.google.com/store/apps/details?id=com.tripzle.app)

An Arabic-first travel comparison and discovery platform for MENA. One search compares flights, hotels, car rentals, activities and eSIMs across partner sites, alongside a flight tracker and destination guides.

- Web (Next.js) and mobile (React Native / Expo) apps with bilingual Arabic/English experiences and a shared design system.
- Backend services in Node.js/Express and NestJS/Prisma/PostgreSQL, with a multi-provider integration layer, SSE streaming and Redis caching.
- Turborepo monorepo of shared packages, CI/CD and over-the-air mobile updates.

**Earlier open-source work:** [Shopilla](https://github.com/mofawzi/shopilla) (MERN e-commerce with PayPal) · [DevBook](https://github.com/mofawzi/DevBook) (MERN social network for developers) · [Netflix Clone](https://github.com/mofawzi/netflix-clone-react) ([live](https://netflix-442be.web.app)) · [Item Catalog](https://github.com/mofawzi/Item-Catalog) (Flask + OAuth)

---

## Skills

| Area | Tools |
|---|---|
| Frontend & Architecture | JavaScript, TypeScript, React, Next.js, Angular, Micro Frontends, Monorepos |
| Performance & Quality | Core Web Vitals, lazy loading, memoization, unit & integration testing, Cypress |
| State & Data | Zustand, Redux, NgRx, Context API, REST APIs, SWR, caching, JWT auth |
| Mobile | React Native, Expo, Ionic, Capacitor, native modules, biometric auth, push notifications, Firebase |
| UI & Styling | Tailwind CSS, SASS/SCSS, shadcn/ui, Angular Material, Styled Components, Framer Motion |
| Backend & Integration | Node.js, NestJS, Express, Prisma, PostgreSQL, MongoDB, Redis, SSE |
| Tools & Delivery | Git, Docker, Vite, Webpack, Bun, Turborepo, CI/CD, AWS, Azure, Vercel |

**Education:** B.Sc. Computer Science & Information Systems, Cairo University (2014 – 2018)
**Languages:** Arabic (native), English (advanced)

---

## About this site

Built with **React 19**, **Vite**, **Tailwind CSS** and **Framer Motion**, deployed on **Vercel**.

- All content lives in [`src/data/resume.js`](src/data/resume.js); components in `src/components/` only render it.
- Light and dark themes, remembered between visits and applied before first paint.
- Respects the system "reduce motion" setting.
- Résumé PDF served from `public/Mohamed-Fawzy-Resume.pdf`.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```
