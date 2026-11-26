// Quiet, static backdrop: one soft glow at the top and a faint grid that fades out.
// Replaces the old animated orbs/particles, which were distracting and costly on mobile.
const Background = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-white dark:bg-ink-950" />
    <div className="absolute left-1/2 top-[-20rem] h-[40rem] w-[70rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-500/15" />
    <div
      className="absolute inset-0 text-ink-900/[0.05] dark:text-white/[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)',
      }}
    />
  </div>
);

export default Background;
