import { useState } from 'react';
import Reveal from './Reveal';
import { personalInfo } from '../data/resume';
import { ArrowUpRight, Check, Copy, GitHub, LinkedIn, Mail, Phone } from './icons';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const channels = [
    { label: 'LinkedIn', value: 'in/mohamed-fawzi', href: personalInfo.linkedin, Icon: LinkedIn, external: true },
    { label: 'GitHub', value: 'mofawzi', href: personalInfo.github, Icon: GitHub, external: true },
    { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, Icon: Phone },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <Reveal className="card overflow-hidden p-8 sm:p-12 lg:p-16">
          <p className="eyebrow">05 / Contact</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-5xl dark:text-white">
            Building something ambitious? Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-600 dark:text-ink-400">
            I&apos;m open to senior and lead frontend roles, architecture work and product collaborations.
            The fastest way to reach me is email.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary !px-6 !py-3 !text-base">
              <Mail width={18} height={18} />
              {personalInfo.email}
            </a>
            <button type="button" onClick={copyEmail} className="btn-secondary !py-3" aria-live="polite">
              {copied ? <Check width={16} height={16} /> : <Copy width={16} height={16} />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-ink-200/80 bg-ink-200/80 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex h-full items-center gap-4 bg-white/90 p-5 transition-colors hover:bg-ink-50 dark:bg-ink-950/90 dark:hover:bg-ink-900"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink-100 text-ink-700 dark:bg-white/10 dark:text-ink-200">
                    <Icon width={18} height={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-ink-500 dark:text-ink-400">{label}</span>
                    <span className="block truncate text-sm font-medium text-ink-900 dark:text-white">{value}</span>
                  </span>
                  <ArrowUpRight width={16} height={16} className="ml-auto text-ink-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
