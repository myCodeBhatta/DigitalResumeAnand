import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Command, Download, Menu, Moon, Sun, X } from 'lucide-react';
import { profile, sections } from '../data/resume';
import { useActiveSection } from '../hooks/useActiveSection';

const ids = sections.map((s) => s.id);

export default function Navbar({ theme, onToggleTheme, onOpenPalette }) {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 no-print">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-pill refract mx-auto max-w-5xl h-14 pl-2 pr-2 flex items-center justify-between gap-2 overflow-hidden"
        aria-label="Primary"
      >
        <button onClick={() => go('about')} className="flex items-center gap-2 pl-1 pr-3 h-10 rounded-full shrink-0">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
          >
            AB
          </span>
          <span className="font-mono text-sm font-semibold hidden sm:block">
            anand<span style={{ color: 'var(--accent)' }}>bhat</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-0.5">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                className="relative px-3.5 h-9 text-sm font-medium rounded-full transition-colors"
                style={{ color: active === s.id ? 'var(--text)' : 'var(--text-2)' }}
                aria-current={active === s.id ? 'true' : undefined}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-bubble"
                    className="absolute inset-0 glass-pill"
                    style={{ borderRadius: 999 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={onOpenPalette}
            className="hidden sm:flex items-center gap-1.5 h-9 px-3 rounded-full text-xs font-medium muted hover:opacity-80"
            aria-label="Open command palette"
          >
            <Command size={14} /> K
          </button>
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <a href={profile.resumePdf} download className="btn-primary !py-2 !px-4 hidden sm:inline-flex">
            <Download size={14} /> CV
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <motion.span
          className="absolute left-6 right-6 bottom-0 h-[2px] origin-left rounded-full"
          style={{ scaleX: progress, background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3))' }}
        />
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            className="glass md:hidden mt-2 mx-auto max-w-5xl p-2"
          >
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className="w-full text-left px-4 py-3 rounded-2xl text-sm font-medium"
                style={{ color: active === s.id ? 'var(--accent)' : 'var(--text)' }}
              >
                {s.label}
              </button>
            ))}
            <a href={profile.resumePdf} download className="btn-primary w-full mt-1">
              <Download size={14} /> Download resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
