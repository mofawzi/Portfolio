import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { personalInfo } from '../data/resume';
import { Close, Download, Menu, Moon, Sun } from './icons';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Work', id: 'work' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = ({ darkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section crossing the upper part of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-ink-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/75'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${personalInfo.name}, back to top`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink-900 font-mono text-sm font-semibold text-white dark:bg-white dark:text-ink-950">
            MF
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">{personalInfo.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ name, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative isolate rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === id
                    ? 'text-ink-900 dark:text-white'
                    : 'text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white'
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ink-100 dark:bg-white/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                {name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={personalInfo.resume} download className="btn-secondary hidden !px-4 !py-2 sm:inline-flex">
            <Download width={16} height={16} />
            Résumé
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid h-9 w-9 place-items-center rounded-full text-ink-600 transition-colors hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-white/10"
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {darkMode ? <Sun width={18} height={18} /> : <Moon width={18} height={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full text-ink-600 transition-colors hover:bg-ink-100 md:hidden dark:text-ink-300 dark:hover:bg-white/10"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container-page space-y-1 pb-5 pt-2">
              {navLinks.map(({ name, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-base ${
                      active === id
                        ? 'bg-ink-100 text-ink-900 dark:bg-white/10 dark:text-white'
                        : 'text-ink-600 dark:text-ink-300'
                    }`}
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={personalInfo.resume} download className="btn-secondary w-full">
                  <Download width={16} height={16} />
                  Download résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
