import Reveal, { SectionHeader } from './Reveal';
import { skillCategories } from '../data/resume';

const Skills = () => (
  <section id="skills" className="section">
    <div className="container-page">
      <SectionHeader index="04" label="Skills" title="Tools I use to ship." />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-200/80 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
        {skillCategories.map((cat, i) => (
          <Reveal
            key={cat.name}
            delay={(i % 3) * 0.05}
            className={`bg-white/90 p-6 dark:bg-ink-950/90 ${i === skillCategories.length - 1 && skillCategories.length % 3 === 1 ? 'sm:col-span-2 lg:col-span-3' : ''}`}
          >
            <h3 className="text-base font-semibold text-ink-900 dark:text-white">{cat.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
