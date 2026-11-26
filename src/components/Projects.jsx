import Reveal, { SectionHeader } from './Reveal';
import { caseStudies, featuredProject as tp, openSource } from '../data/resume';
import { ArrowUpRight, GitHub } from './icons';
import desktopShot from '../assets/tripzle-desktop.webp';
import mobileShot from '../assets/tripzle-mobile.webp';

// Live screenshots of tripzle.com (English desktop + Arabic mobile), captured Nov 2026.
const TripzlePreview = () => (
  <a
    href="https://tripzle.com"
    target="_blank"
    rel="noopener noreferrer"
    tabIndex={-1}
    aria-hidden
    className="group relative order-first block h-full min-h-[24rem] lg:order-none overflow-hidden rounded-xl bg-gradient-to-br from-[#255DD2] via-[#1c47a8] to-[#102142] sm:min-h-[30rem]"
  >
    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
    <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

    {/* Desktop browser window, bleeding off the right edge */}
    <div className="absolute left-6 top-8 w-[125%] overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/40 ring-1 ring-white/20 transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:left-8 sm:top-10">
      <div className="flex h-7 items-center gap-1.5 border-b border-ink-200 bg-ink-100 px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 rounded-md bg-white px-3 py-0.5 font-mono text-[0.65rem] text-ink-500">tripzle.com</span>
      </div>
      <img
        src={desktopShot}
        alt=""
        width={1440}
        height={900}
        loading="lazy"
        decoding="async"
        className="block w-full"
      />
    </div>

    {/* Phone, Arabic RTL version */}
    <div className="absolute bottom-6 right-6 w-[34%] max-w-[11.5rem] overflow-hidden rounded-[1.75rem] border-[6px] border-ink-950 bg-ink-950 shadow-2xl shadow-black/50 transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:bottom-8 sm:right-8">
      <img
        src={mobileShot}
        alt=""
        width={780}
        height={1688}
        loading="lazy"
        decoding="async"
        className="block w-full rounded-[1.25rem]"
      />
    </div>

    <span className="absolute bottom-6 left-6 hidden items-center gap-2 rounded-full bg-black/40 sm:inline-flex px-3 py-1 font-mono text-[0.7rem] text-white/90 backdrop-blur sm:bottom-8 sm:left-8">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      Live · Web · iOS · Android
    </span>
  </a>
);

const Projects = () => (
  <section id="work" className="section">
    <div className="container-page">
      <SectionHeader index="03" label="Selected work" title="Products I've built and led.">
        A product I co-founded, and the platforms I&apos;ve shipped for government and banking clients.
      </SectionHeader>

      {/* Featured: Tripzle */}
      <Reveal as="article" className="card grid gap-8 p-4 sm:p-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div className="flex flex-col p-2 sm:p-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 text-xs font-medium text-accent-700 dark:text-accent-300">
              Featured · Co-founded
            </span>
            <span className="font-mono text-xs text-ink-500 dark:text-ink-400">{tp.period}</span>
          </div>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">{tp.name}</h3>
          <p className="mt-1 text-sm font-medium text-ink-500 dark:text-ink-400">{tp.role}</p>
          <p className="mt-4 text-base leading-relaxed text-ink-700 dark:text-ink-300">{tp.description}</p>

          <ul className="mt-6 space-y-3">
            {tp.highlights.map((h) => (
              <li key={h.slice(0, 32)} className="relative pl-5 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-400">
                <span aria-hidden className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-accent-500/70" />
                {h}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {tp.tech.map((t) => (
              <li key={t} className="chip">{t}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
            {tp.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={l.primary ? 'btn-primary' : 'btn-secondary'}
              >
                {l.label}
                <ArrowUpRight width={16} height={16} />
              </a>
            ))}
          </div>
        </div>
        <TripzlePreview />
      </Reveal>

      {/* Professional case studies */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {caseStudies.map((c, i) => (
          <Reveal as="article" key={c.name} delay={i * 0.05} className="card flex flex-col p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">{c.context}</p>
            <h3 className="mt-2 flex items-center gap-2 text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
              {c.link ? (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 hover:text-accent-600 dark:hover:text-accent-400">
                  {c.name}
                  <ArrowUpRight width={18} height={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                c.name
              )}
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-400">{c.description}</p>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-ink-800 dark:text-ink-200">
              {c.metrics.map((m) => (
                <li key={m} className="inline-flex items-center gap-2">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-accent-500" />
                  {m}
                </li>
              ))}
            </ul>
            <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technologies">
              {c.tech.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Earlier open-source */}
      <Reveal className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500 dark:text-ink-400">Earlier open-source projects</h3>
        <ul className="mt-4 divide-y divide-ink-200/80 border-y border-ink-200/80 dark:divide-white/10 dark:border-white/10">
          {openSource.map((p) => (
            <li key={p.name} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr_auto] sm:items-center sm:gap-6">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink-900 hover:text-accent-600 dark:text-white dark:hover:text-accent-400"
              >
                {p.name}
              </a>
              <p className="text-sm text-ink-600 dark:text-ink-400">
                {p.description} <span className="text-ink-400 dark:text-ink-500">· {p.tech.join(', ')}</span>
              </p>
              <div className="mt-1 flex items-center gap-4 text-sm sm:mt-0">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="link-muted inline-flex items-center gap-1" aria-label={`${p.name} live demo`}>
                    Live
                    <ArrowUpRight width={14} height={14} />
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-muted inline-flex items-center gap-1.5" aria-label={`${p.name} source code on GitHub`}>
                  <GitHub width={16} height={16} />
                  Code
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Projects;
