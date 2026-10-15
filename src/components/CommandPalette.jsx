import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Copy, Download, Github, Hash, Linkedin, Mail, Moon, Search, UserPlus } from 'lucide-react';
import { profile, sections } from '../data/resume';
import { copyText, useToast } from '../hooks/useToast';
import { downloadVCard } from '../lib/vcard';

export default function CommandPalette({ open, onClose, onToggleTheme }) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);
  const toast = useToast();

  const actions = useMemo(
    () => [
      ...sections.map((s) => ({
        id: `go-${s.id}`,
        label: `Go to ${s.label}`,
        icon: Hash,
        run: () => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }),
      })),
      { id: 'copy-email', label: 'Copy email address', icon: Copy, run: async () => (await copyText(profile.email)) && toast('Email copied') },
      { id: 'mail', label: 'Send an email', icon: Mail, run: () => (window.location.href = `mailto:${profile.email}`) },
      { id: 'cv', label: 'Download resume (PDF)', icon: Download, run: () => window.open(profile.resumePdf, '_blank') },
      { id: 'vcard', label: 'Save contact card', icon: UserPlus, run: () => downloadVCard() },
      { id: 'linkedin', label: 'Open LinkedIn', icon: Linkedin, run: () => window.open(profile.linkedin, '_blank', 'noopener') },
      { id: 'github', label: 'Open GitHub', icon: Github, run: () => window.open(profile.github, '_blank', 'noopener') },
      { id: 'theme', label: 'Toggle light / dark theme', icon: Moon, run: onToggleTheme },
    ],
    [onToggleTheme, toast],
  );

  const filtered = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (open) {
      setQuery('');
      setIndex(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  const run = (a) => {
    onClose();
    setTimeout(a.run, 80);
  };

  const onKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && filtered[index]) {
      run(filtered[index]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center pt-[14vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.94, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            className="glass relative w-full max-w-lg overflow-hidden"
            onKeyDown={onKey}
          >
            <div className="flex items-center gap-3 px-5 h-14" style={{ borderBottom: '1px solid var(--glass-stroke-2)' }}>
              <Search size={18} className="faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search…"
                className="flex-1 bg-transparent outline-none text-sm placeholder:opacity-60"
                style={{ color: 'var(--text)' }}
              />
              <kbd className="chip !py-0.5 !px-2 font-mono">esc</kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && <li className="px-4 py-6 text-center text-sm faint">No matches</li>}
              {filtered.map((a, i) => {
                const Icon = a.icon;
                const selected = i === index;
                return (
                  <li key={a.id}>
                    <button
                      onMouseEnter={() => setIndex(i)}
                      onClick={() => run(a)}
                      className="relative w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm text-left"
                    >
                      {selected && <motion.span layoutId="palette-sel" className="absolute inset-0 rounded-2xl" style={{ background: 'var(--chip)' }} />}
                      <Icon size={16} className="relative" style={{ color: 'var(--accent)' }} />
                      <span className="relative flex-1">{a.label}</span>
                      {selected && <ArrowRight size={14} className="relative faint" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
