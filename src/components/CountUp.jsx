import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

// Animates a number from `from` to `to` the first time it scrolls into view.
// Writes to the DOM directly so the count doesn't re-render React on every frame.
// Server/no-JS and reduced-motion users see the final value.
const CountUp = ({ from = 0, to, suffix = '', display, duration = 1.6, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const finalText = display ?? `${to}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce) return;
    const controls = animate(from, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
      onComplete: () => {
        el.textContent = finalText;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, from, to, suffix, duration, delay, finalText]);

  // Changing digits are hidden from screen readers; callers render the final value as sr-only text.
  return (
    <span ref={ref} aria-hidden className="tabular-nums">
      {reduce ? finalText : `${from}${suffix}`}
    </span>
  );
};

export default CountUp;
