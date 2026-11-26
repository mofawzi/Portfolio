import { motion } from 'framer-motion';
import { personalInfo, stats } from '../data/resume';
import { ArrowRight, Download, GitHub, LinkedIn, MapPin } from './icons';
import CountUp from './CountUp';

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const Hero = () => (
  <section id="top" className="relative pb-10 pt-32 sm:pb-14 sm:pt-40">
    <div className="container-page">
      <motion.div {...fade(0)} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-500 dark:text-ink-400">
        <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-3 py-1 dark:border-white/10 dark:bg-white/5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {personalInfo.title} · {personalInfo.specialty}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin width={16} height={16} />
          {personalInfo.location}
        </span>
      </motion.div>

      <motion.h1
        {...fade(0.08)}
        className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl dark:text-white"
      >
        Hi, I&apos;m {personalInfo.firstName}.{' '}
        <span className="text-ink-400 dark:text-ink-500">{personalInfo.headline}</span>
      </motion.h1>

      <motion.p {...fade(0.16)} className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl dark:text-ink-300">
        7+ years shipping enterprise React, Next.js and TypeScript applications, from Saudi government
        e-services at SDAIA to multi-bank digital banking, and co-founder of{' '}
        <a href="#work" className="font-medium text-ink-900 underline decoration-accent-500/50 underline-offset-4 hover:decoration-accent-500 dark:text-white">
          Tripzle
        </a>
        .
      </motion.p>

      <motion.div {...fade(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
        <a href="#work" className="btn-primary">
          View my work
          <ArrowRight width={16} height={16} />
        </a>
        <a href={personalInfo.resume} download className="btn-secondary">
          <Download width={16} height={16} />
          Download résumé
        </a>
        <div className="ml-1 flex items-center gap-1">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="link-muted grid h-10 w-10 place-items-center rounded-full hover:bg-ink-100 dark:hover:bg-white/10">
            <LinkedIn />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="link-muted grid h-10 w-10 place-items-center rounded-full hover:bg-ink-100 dark:hover:bg-white/10">
            <GitHub />
          </a>
        </div>
      </motion.div>

      <motion.dl
        {...fade(0.32)}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-200/80 lg:grid-cols-4 dark:border-white/10 dark:bg-white/10"
      >
        {stats.map((s, i) => (
          <div key={s.label} className="bg-white/90 p-6 dark:bg-ink-950/90">
            <dt className="text-sm text-ink-500 dark:text-ink-400">{s.label}</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
              <CountUp from={s.from} to={s.to} suffix={s.suffix} display={s.display} delay={0.4 + i * 0.1} />
              <span className="sr-only">{s.display ?? `${s.to}${s.suffix}`}</span>
            </dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default Hero;
