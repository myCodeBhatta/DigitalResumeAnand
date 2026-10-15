import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { techStack } from '../data/resume';
import { GlassCard, SectionHeader, reveal } from './Glass';

const all = techStack.flatMap((g) => g.items);

export default function Skills() {
  const [filter, setFilter] = useState('all');
  const groups = filter === 'all' ? techStack : techStack.filter((g) => g.key === filter);

  return (
    <section id="skills" className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="// tech_stack" title="The" accent="toolkit" subtitle="From core Java services to on-chain settlement, cloud delivery and AI-assisted engineering." />
      </div>

      {/* Infinite marquee */}
      <div className="relative mb-12 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee flex w-max gap-3">
          {[...all, ...all].map((s, i) => (
            <span key={`${s}-${i}`} className="chip !text-sm !px-4 !py-2 font-mono whitespace-nowrap">{s}</span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Segmented control */}
        <motion.div {...reveal} className="flex justify-center mb-10">
          <div className="glass-pill p-1.5 flex flex-wrap justify-center gap-1 max-w-full" role="tablist" aria-label="Filter skills">
            {[{ key: 'all', label: 'All' }, ...techStack].map((g) => (
              <button
                key={g.key}
                role="tab"
                aria-selected={filter === g.key}
                onClick={() => setFilter(g.key)}
                className="relative px-3.5 sm:px-4 h-9 rounded-full text-xs sm:text-sm font-medium transition-colors"
                style={{ color: filter === g.key ? '#fff' : 'var(--text-2)' }}
              >
                {filter === g.key && (
                  <motion.span
                    layoutId="skill-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.4)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{g.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {groups.map((g) => (
              <GlassCard
                key={g.key}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`p-6 ${filter !== 'all' ? 'sm:col-span-2 lg:col-span-3' : ''}`}
              >
                <p className="font-mono text-sm mb-4">
                  <span style={{ color: 'var(--accent)' }}>&gt;</span> {g.key}
                  <span className="faint"> ({g.items.length})</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <motion.span key={s} whileHover={{ y: -2, scale: 1.04 }} className="chip !text-[13px]">{s}</motion.span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
