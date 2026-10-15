import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, ChevronDown, MapPin } from 'lucide-react';
import { experience } from '../data/resume';
import { GlassCard, SectionHeader } from './Glass';

function Job({ job, index }) {
  const [open, setOpen] = useState(index < 2);
  const preview = 2;
  const extra = job.points.length - preview;

  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 sm:pl-14"
    >
      <span
        className="absolute left-[7px] sm:left-[15px] top-8 w-[18px] h-[18px] rounded-full glass"
        style={{ borderRadius: '50%', boxShadow: job.current ? '0 0 0 6px color-mix(in srgb, var(--accent-3) 25%, transparent)' : undefined }}
      >
        <span className="absolute inset-[5px] rounded-full" style={{ background: job.current ? 'var(--accent-3)' : 'var(--accent)' }} />
      </span>

      <GlassCard className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <h3 className="text-lg sm:text-xl font-bold">{job.role}</h3>
              {job.current && (
                <span className="chip !py-0.5" style={{ color: 'var(--accent-3)' }}>Current</span>
              )}
            </div>
            <p className="font-semibold gradient-text text-base">@{job.company}</p>
          </div>
          <div className="flex sm:flex-col sm:items-end gap-x-4 gap-y-1 text-xs sm:text-sm faint">
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {job.period}</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} /> {job.location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {job.stack.map((s) => (
            <span key={s} className="chip !py-1 !text-[11px] font-mono">{s}</span>
          ))}
        </div>

        <ul className="space-y-2.5">
          {job.points.slice(0, preview).map((p) => (
            <Point key={p} text={p} />
          ))}
          <AnimatePresence initial={false}>
            {open &&
              job.points.slice(preview).map((p) => (
                <Point key={p} text={p} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} />
              ))}
          </AnimatePresence>
        </ul>

        {extra > 0 && (
          <button onClick={() => setOpen((o) => !o)} className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: 'var(--accent)' }} aria-expanded={open}>
            {open ? 'Show less' : `Show ${extra} more`}
            <ChevronDown size={15} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        )}
      </GlassCard>
    </motion.li>
  );
}

function Point({ text, ...motionProps }) {
  return (
    <motion.li className="flex gap-3 muted text-[15px] leading-relaxed overflow-hidden" {...motionProps}>
      <span className="font-mono text-xs mt-1" style={{ color: 'var(--accent)' }}>▸</span>
      <span>{text}</span>
    </motion.li>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="// experience" title="12+ years," accent="five companies" subtitle="From quality engineering for global banks to building settlement services at Wells Fargo." />

        <div ref={ref} className="relative">
          <div className="absolute left-[15px] sm:left-[23px] top-2 bottom-2 w-[2px] rounded-full" style={{ background: 'var(--glass-stroke-2)' }} />
          <motion.div
            className="absolute left-[15px] sm:left-[23px] top-2 bottom-2 w-[2px] rounded-full origin-top"
            style={{ scaleY: fill, background: 'linear-gradient(to bottom, var(--accent-3), var(--accent), var(--accent-2))' }}
          />
          <ol className="space-y-6">
            {experience.map((job, i) => (
              <Job key={`${job.company}-${job.period}`} job={job} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
