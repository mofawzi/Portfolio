import Reveal, { SectionHeader } from './Reveal';
import { experiences } from '../data/resume';

const Experience = () => (
  <section id="experience" className="section">
    <div className="container-page">
      <SectionHeader index="02" label="Experience" title="Where I've worked.">
        Government e-services and Islamic digital banking, from component libraries to release pipelines.
      </SectionHeader>

      <ol className="relative space-y-6">
        {experiences.map((exp, i) => (
          <Reveal as="li" key={exp.company} delay={i * 0.05} className="card grid gap-6 p-6 sm:p-8 lg:grid-cols-[14rem_1fr] lg:gap-10">
            <div>
              <p className="font-mono text-sm text-ink-500 dark:text-ink-400">{exp.period}</p>
              <p className="mt-1 text-sm text-ink-400 dark:text-ink-500">{exp.location}</p>
              {exp.current && (
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Current
                </span>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
                {exp.title} <span className="text-accent-600 dark:text-accent-400">· {exp.company}</span>
              </h3>
              {exp.companyFull && <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-400">{exp.companyFull}</p>}
              <p className="mt-3 text-base text-ink-700 dark:text-ink-300">{exp.summary}</p>

              <ul className="mt-5 space-y-3">
                {exp.highlights.map((h) => (
                  <li key={h.slice(0, 32)} className="relative pl-5 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-400">
                    <span aria-hidden className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-accent-500/70" />
                    {h}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {exp.tech.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
