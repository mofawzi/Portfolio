import { motion } from 'framer-motion';

// Subtle fade-up on first scroll into view. Honors reduced motion via <MotionConfig> in App.
const Reveal = ({ as = 'div', delay = 0, className, children, ...rest }) => {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const SectionHeader = ({ index, label, title, children }) => (
  <Reveal className="mb-10 max-w-2xl">
    <p className="eyebrow">
      {index} / {label}
    </p>
    <h2 className="section-title">{title}</h2>
    {children && <p className="mt-4 text-lg text-ink-600 dark:text-ink-400">{children}</p>}
  </Reveal>
);

export default Reveal;
