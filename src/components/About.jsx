import Reveal from './Reveal';
import { education, experiences, featuredProject, languages, personalInfo } from '../data/resume';
import { ArrowRight, Devices, Gauge, GraduationCap, Globe, Layers, MapPin, Refresh } from './icons';

const focusAreas = [
  { Icon: Layers, title: 'Frontend architecture', body: 'Monorepos, shared component libraries and design systems that let large teams ship consistently.' },
  { Icon: Refresh, title: 'Legacy modernization', body: 'Moving class components and Redux Saga codebases to modern React without stopping delivery.' },
  { Icon: Gauge, title: 'Performance', body: 'Lazy loading, memoization, bundle trimming and smarter data fetching, measured against real load times.' },
  { Icon: Devices, title: 'Cross-platform', body: 'Web plus native iOS and Android through Ionic, Capacitor and React Native, including releases and biometrics.' },
];

const current = [
  { org: experiences[0].company, role: experiences[0].title },
  { org: featuredProject.name, role: featuredProject.role },
];

const Mark = ({ children }) => (
  <span className="font-medium text-ink-900 dark:text-white">{children}</span>
);

const ProfileCard = () => (
  <div className="card relative overflow-hidden p-6 sm:p-7">
    <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-accent-500/20 via-accent-500/5 to-transparent" />

    <div className="relative flex items-center gap-4">
      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-ink-900 font-mono text-xl font-semibold text-white shadow-lg shadow-accent-500/20 ring-4 ring-white dark:bg-white dark:text-ink-950 dark:ring-ink-950">
        MF
      </span>
      <div>
        <p className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">{personalInfo.name}</p>
        <p className="text-sm text-ink-500 dark:text-ink-400">{personalInfo.title}</p>
      </div>
    </div>

    <div className="relative mt-7">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-400 dark:text-ink-500">Currently</p>
      <ul className="mt-3 space-y-2">
        {current.map((c) => (
          <li key={c.org} className="flex items-center justify-between gap-3 rounded-xl border border-ink-200/80 bg-white/60 px-3.5 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-ink-900 dark:text-white">{c.org}</span>
              <span className="block truncate text-xs text-ink-500 dark:text-ink-400">{c.role}</span>
            </span>
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          </li>
        ))}
      </ul>
    </div>

    <ul className="relative mt-7 space-y-4 text-sm">
      <li className="flex gap-3">
        <MapPin width={18} height={18} className="mt-0.5 shrink-0 text-ink-400" />
        <span className="text-ink-700 dark:text-ink-300">
          {personalInfo.location}
          <span className="block text-xs text-ink-500 dark:text-ink-500">Originally from {personalInfo.origin}</span>
        </span>
      </li>
      <li className="flex gap-3">
        <GraduationCap width={18} height={18} className="mt-0.5 shrink-0 text-ink-400" />
        <span className="text-ink-700 dark:text-ink-300">
          {education.degree}
          <span className="block text-xs text-ink-500 dark:text-ink-500">
            {education.institution} · {education.period}
          </span>
        </span>
      </li>
      <li className="flex gap-3">
        <Globe width={18} height={18} className="mt-0.5 shrink-0 text-ink-400" />
        <span className="flex flex-wrap gap-1.5">
          {languages.map((l) => (
            <span key={l} className="chip">{l}</span>
          ))}
        </span>
      </li>
    </ul>

    <a href="#contact" className="btn-primary relative mt-7 w-full">
      Let&apos;s work together
      <ArrowRight width={16} height={16} />
    </a>
  </div>
);

const About = () => (
  <section id="about" className="section">
    <div className="container-page">
      <Reveal>
        <p className="eyebrow">01 / About</p>
        <h2 className="section-title">Engineering frontends that scale with the product.</h2>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[21rem_1fr] lg:gap-12">
        <Reveal as="aside" className="order-last lg:order-first lg:sticky lg:top-24 lg:self-start">
          <ProfileCard />
        </Reveal>

        <div>
          <Reveal delay={0.05}>
            <p className="text-xl leading-relaxed text-ink-600 sm:text-2xl sm:leading-relaxed dark:text-ink-400">
              I&apos;m a Senior Frontend Engineer with <Mark>7+ years</Mark> building enterprise web and
              cross-platform applications for <Mark>Saudi government</Mark> and <Mark>financial-services</Mark>{' '}
              platforms, specializing in <Mark>React, Next.js and TypeScript</Mark>.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg dark:text-ink-400">
              My work sits where architecture meets delivery: modernizing legacy codebases, cutting load
              times, and building monorepos and shared components that keep big teams consistent. Outside my
              day job I co-founded <Mark>Tripzle</Mark>, an Arabic-first travel platform for MENA, where I own
              the product end to end across web, iOS, Android, backend and infrastructure.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-400 dark:text-ink-500">What I focus on</p>
            <ul className="mt-4 grid overflow-hidden rounded-2xl border border-ink-200/80 sm:grid-cols-2 dark:border-white/10">
              {focusAreas.map(({ Icon, title, body }, i) => (
                <li
                  key={title}
                  className={`group relative bg-white/70 p-6 transition-colors hover:bg-white dark:bg-white/[0.02] dark:hover:bg-white/[0.05]
                    ${i % 2 === 0 ? 'sm:border-r' : ''} ${i < 2 ? 'border-b' : i === 2 ? 'border-b sm:border-b-0' : ''}
                    border-ink-200/80 dark:border-white/10`}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-600 transition-transform group-hover:-translate-y-0.5 dark:text-accent-400">
                    <Icon width={20} height={20} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink-900 dark:text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-400">{body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
