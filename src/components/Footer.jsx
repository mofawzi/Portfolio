import { personalInfo } from '../data/resume';

const Footer = () => (
  <footer className="border-t border-ink-200/80 py-10 dark:border-white/10">
    <div className="container-page flex flex-col gap-4 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between dark:text-ink-400">
      <p>
        © {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite and Tailwind CSS.
      </p>
      <div className="flex gap-5">
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link-muted">LinkedIn</a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-muted">GitHub</a>
        <a href={personalInfo.resume} download className="link-muted">Résumé</a>
        <a href="#top" className="link-muted">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
