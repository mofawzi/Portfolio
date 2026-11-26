export const personalInfo = {
  name: "Mohamed Fawzy",
  firstName: "Mohamed",
  title: "Senior Frontend Engineer",
  specialty: "Frontend Architecture",
  headline:
    "I build fast, scalable frontends for government, fintech and travel platforms.",
  email: "mohamedfawzy.dev@gmail.com",
  phone: "+966550615504",
  location: "Riyadh, Saudi Arabia",
  origin: "Alexandria, Egypt",
  linkedin: "https://www.linkedin.com/in/mohamed-fawzi/",
  github: "https://github.com/mofawzi",
  website: "https://mohamedfawzy96.vercel.app",
  resume: "/Mohamed-Fawzy-Resume.pdf",
  summary: [
    "Senior Frontend Engineer with 7+ years of experience building enterprise web and cross-platform applications for Saudi government and financial-services platforms. I specialize in React, Next.js and TypeScript, with deep experience in frontend architecture, legacy modernization, performance optimization, monorepos and mobile integrations (Angular, Ionic, Capacitor).",
    "Beyond my day job, I co-founded Tripzle, an Arabic-first travel platform for the MENA region, where I own the product end to end: web, iOS and Android apps, backend services and infrastructure.",
  ],
};

// Hero stats. Numbers count up when scrolled into view; `display` is the final text when it isn't
// a plain number (page load counts down from 6 to 2, then settles on "2–3s").
export const stats = [
  { from: 0, to: 7, suffix: "+", label: "Years building for the web" },
  { from: 0, to: 100, suffix: "K+", label: "Users on platforms I've led" },
  { from: 0, to: 200, suffix: "K+", label: "Monthly requests served" },
  { from: 6, to: 2, suffix: "s", display: "2–3s", label: "Page load, down from ~6s" },
];

export const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "SDAIA",
    companyFull: "Saudi Data & AI Authority",
    location: "Riyadh, KSA",
    period: "Sep 2023 – Present",
    current: true,
    summary:
      "Saudi Business Center (business.sa): Saudi Arabia's unified business services platform for investors, covering commercial records, business licensing and government digital services.",
    highlights: [
      "Led frontend development within an 11-engineer team building Saudi Business Center digital services for investors across Saudi Arabia; the platform serves 100K+ users and processes 200K+ requests monthly.",
      "Modernized large-scale legacy React applications by migrating class-based components and Redux Saga to functional components and modern React patterns, reducing unnecessary re-renders and improving maintainability.",
      "Cut initial page load from ~6s to 2–3s through lazy loading, memoization, bundle-size optimization and more efficient API data fetching.",
      "Contributed to migrating complex established applications to a monorepo architecture, building reusable shared components that improved code reuse and consistency across teams.",
      "Delivered digital licensing services for multiple government authorities: General Authority of Media, Ministry of Health, General Entertainment Authority, Saudi Ports Authority (MAWANI) and Ministry of Industry and Mineral Resources.",
      "Built Digital Branch Licensing, Delegation Management and e-authentication workflows, and a Bash-based build and deployment automation workflow for internal servers.",
    ],
    tech: ["React", "TypeScript", "Vite", "Zustand", "Redux", "Monorepo", "REST APIs"],
  },
  {
    title: "Software Developer",
    company: "Azentio",
    location: "Cairo, Egypt",
    period: "Mar 2022 – Sep 2023",
    summary:
      "OMNI: a cross-platform Islamic digital banking platform serving multiple financial institutions across web, iOS and Android.",
    highlights: [
      "Architected and delivered UI for the OMNI Islamic banking platform across web, iOS and Android using Angular, Ionic and SASS.",
      "Owned shared components used across banking applications, including forms, masked inputs and security-sensitive UI, standardizing implementation across clients.",
      "Implemented biometric authentication from scratch for native iOS and Android apps and led the migration from Cordova to Capacitor.",
      "Owned mobile release infrastructure across banking clients: Firebase environments, APK/IPA generation, signing, analytics, crash reporting and push notifications.",
    ],
    tech: ["Angular", "Ionic", "Capacitor", "SASS", "Firebase", "TypeScript"],
  },
  {
    title: "Frontend Developer",
    company: "Path Solutions",
    location: "Cairo, Egypt",
    period: "Jun 2019 – Mar 2022",
    summary:
      "Islamic banking software vendor; frontend for the OMNI digital banking platform.",
    highlights: [
      "Delivered cross-platform frontend solutions for the OMNI Islamic digital banking platform across web, iOS and Android.",
      "Developed white-label banking interfaces customized to each financial institution's branding and regulatory requirements.",
      "Built and maintained dynamic report-generation modules with the Reporting team using JasperReports.",
    ],
    tech: ["Angular", "Ionic", "SASS", "JasperReports"],
  },
];

// Featured project shown as the large card at the top of the Work section.
export const featuredProject = {
  name: "Tripzle",
  role: "Co-founder & Lead Engineer",
  period: "Jan 2026 – Present",
  tagline: "Compare more. Travel better.",
  description:
    "An Arabic-first travel comparison and discovery platform built around how the Middle East and North Africa travels. One search compares flights, hotels, car rentals, activities and eSIMs across partner sites, alongside a live flight tracker and destination guides, then hands the traveller off to book directly with the provider.",
  highlights: [
    "Built the platform end to end: a Next.js web app and React Native (Expo) apps for iOS and Android, with bilingual Arabic/English RTL-first experiences and a shared design system.",
    "Developed backend services with Node.js/Express and NestJS/Prisma/PostgreSQL, including a multi-provider integration layer, SSE streaming of search results and Redis caching.",
    "Designed the architecture and delivery: a Turborepo monorepo of shared packages (UI, i18n, config), CI/CD pipelines and over-the-air mobile updates.",
  ],
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "React Native",
    "Expo",
    "NestJS",
    "Prisma",
    "PostgreSQL",
    "Redis",
    "Turborepo",
  ],
  links: [
    { label: "tripzle.com", href: "https://tripzle.com", primary: true },
    { label: "App Store", href: "https://apps.apple.com/app/id6821729454" },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.tripzle.app",
    },
  ],
};

// Professional case studies (client / employer work).
export const caseStudies = [
  {
    name: "Saudi Business Center",
    context: "SDAIA · business.sa",
    description:
      "E-services for investors to obtain commercial records and business licenses. Led the frontend of a high-traffic service and delivered licensing applications for five government authorities.",
    metrics: ["100K+ users", "200K+ requests / month", "6s → 2–3s load"],
    tech: ["React", "TypeScript", "Zustand", "Monorepo"],
    link: "https://business.sa",
  },
  {
    name: "OMNI Digital Banking",
    context: "Azentio · Path Solutions",
    description:
      "White-label, Sharia-compliant digital banking for multiple financial institutions on web, iOS and Android, with biometric login and a shared component library.",
    metrics: ["Web · iOS · Android", "Multi-bank white-label", "Cordova → Capacitor"],
    tech: ["Angular", "Ionic", "Capacitor", "Firebase"],
  },
];

// Earlier open-source work, shown as a compact list. `demo` only where the live link still works.
export const openSource = [
  {
    name: "Shopilla",
    description: "Full-stack e-commerce store with JWT auth, product image uploads and PayPal checkout.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mofawzi/shopilla",
  },
  {
    name: "DevBook",
    description: "Social network for developers: profiles, posts and comments, plus each user's latest GitHub repos via the GitHub API.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Passport JWT"],
    github: "https://github.com/mofawzi/DevBook",
  },
  {
    name: "Netflix Clone",
    description: "Streaming UI with live TMDB data, trailer playback and Firebase auth and hosting.",
    tech: ["React", "Redux Toolkit", "Firebase", "TMDB API"],
    github: "https://github.com/mofawzi/netflix-clone-react",
    demo: "https://netflix-442be.web.app",
  },
  {
    name: "Item Catalog",
    description: "Udacity Full Stack Nanodegree project: CRUD catalog with Google OAuth and per-user permissions.",
    tech: ["Python", "Flask", "SQLAlchemy", "OAuth"],
    github: "https://github.com/mofawzi/Item-Catalog",
  },
];

export const education = {
  degree: "B.Sc. Computer Science & Information Systems",
  institution: "Cairo University",
  period: "2014 – 2018",
};

export const languages = ["Arabic (Native)", "English (Advanced)"];

export const skillCategories = [
  {
    name: "Frontend & Architecture",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "HTML/CSS", "Micro Frontends", "Monorepos"],
  },
  {
    name: "Performance & Quality",
    skills: ["Performance Optimization", "Core Web Vitals", "Lazy Loading", "Memoization", "Unit & Integration Testing", "Cypress"],
  },
  {
    name: "State & Data",
    skills: ["Zustand", "Redux", "NgRx", "Context API", "REST APIs", "SWR", "Caching", "JWT Auth"],
  },
  {
    name: "Mobile",
    skills: ["React Native", "Expo", "Ionic", "Capacitor", "Native Modules", "Biometric Auth", "Push Notifications", "Firebase"],
  },
  {
    name: "UI & Styling",
    skills: ["Tailwind CSS", "SASS/SCSS", "shadcn/ui", "Angular Material", "Styled Components", "Framer Motion", "Design Systems", "RTL / i18n"],
  },
  {
    name: "Backend & Integration",
    skills: ["Node.js", "NestJS", "Express", "Prisma", "PostgreSQL", "MongoDB", "Redis", "SSE", "Third-party APIs"],
  },
  {
    name: "Tools & Delivery",
    skills: ["Git", "Docker", "Vite", "Webpack", "Bun", "Turborepo", "CI/CD", "AWS", "Azure", "Vercel"],
  },
];
