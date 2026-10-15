import { motion } from 'framer-motion';
import { Blocks, Boxes, Database, Radio } from 'lucide-react';
import { featuredProject, profile } from '../data/resume';
import { GlassCard, SectionHeader, reveal } from './Glass';

const flowIcons = [Database, Radio, Boxes, Blocks];

export default function AboutProject() {
  return (
    <section id="project" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="// about & featured_project" title="Building the rails of" accent="modern banking" />

        <div className="grid lg:grid-cols-5 gap-5">
          <GlassCard {...reveal} className="lg:col-span-2 p-7 sm:p-8">
            <p className="eyebrow mb-4">// about</p>
            <div className="space-y-4 muted leading-relaxed text-[15px]">
              {profile.about.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </GlassCard>

          <GlassCard {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="lg:col-span-3 p-7 sm:p-8 flex flex-col">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <p className="eyebrow mb-2">// featured_project</p>
                <h3 className="text-2xl sm:text-3xl font-bold">{featuredProject.name}</h3>
              </div>
              <span className="chip">{featuredProject.org}</span>
            </div>

            <ul className="space-y-3 my-6">
              {featuredProject.points.map((p) => (
                <li key={p} className="flex gap-3 muted text-[15px] leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                  {p}
                </li>
              ))}
            </ul>

            {/* Animated settlement pipeline */}
            <div className="relative mt-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
                {featuredProject.flow.map((step, i) => {
                  const Icon = flowIcons[i];
                  return (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.12 }}
                      className="glass p-4 text-center"
                      style={{ borderRadius: 20 }}
                    >
                      <div
                        className="w-10 h-10 mx-auto mb-2 rounded-2xl flex items-center justify-center text-white"
                        style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
                      >
                        <Icon size={18} />
                      </div>
                      <div className="text-sm font-semibold">{step.label}</div>
                      <div className="text-[11px] faint font-mono mt-0.5">{step.sub}</div>
                    </motion.div>
                  );
                })}
              </div>
              <div aria-hidden className="hidden sm:block absolute left-[12%] right-[12%] top-[38px] h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3))', opacity: 0.4 }}>
                {[0, 0.9, 1.8].map((d) => (
                  <span key={d} className="packet absolute -top-[3px] w-2 h-2 rounded-full" style={{ animationDelay: `${d}s`, background: 'var(--accent-3)', boxShadow: '0 0 12px var(--accent-3)' }} />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {featuredProject.stack.map((s) => (
                <span key={s} className="chip font-mono">{s}</span>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
