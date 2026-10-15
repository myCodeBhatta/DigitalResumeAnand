import { motion } from 'framer-motion';
import { Award, BadgeCheck, GraduationCap, PenLine, Trophy, User } from 'lucide-react';
import { achievements, certifications, education, misc, writing } from '../data/resume';
import { GlassCard, SectionHeader, reveal } from './Glass';

function Icon({ icon: I }) {
  return (
    <span
      className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0"
      style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.4)' }}
    >
      <I size={18} />
    </span>
  );
}

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="// certifications · education · writing" title="Credentials &" accent="beyond" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {certifications.map((c, i) => (
            <GlassCard key={c.title} tilt {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }} className="p-6 flex flex-col">
              <div className="flex items-start justify-between mb-5">
                <Icon icon={c.issuer === 'Microsoft' ? BadgeCheck : Award} />
                {c.code && <span className="chip font-mono !text-[13px]" style={{ color: 'var(--accent-2)' }}>{c.code}</span>}
              </div>
              <h3 className="font-semibold leading-snug mb-auto">{c.title}</h3>
              <div className="flex justify-between text-xs faint mt-4 font-mono">
                <span>{c.issuer}</span>
                <span>{c.date ?? ''}</span>
              </div>
            </GlassCard>
          ))}

          <GlassCard {...reveal} className="p-6 flex flex-col">
            <div className="mb-5"><Icon icon={GraduationCap} /></div>
            <h3 className="font-semibold leading-snug">{education.degree}</h3>
            <p className="muted text-sm mt-1">{education.school}</p>
            <div className="flex justify-between text-xs faint mt-auto pt-4 font-mono">
              <span>{education.university}</span>
              <span>{education.period}</span>
            </div>
          </GlassCard>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <GlassCard {...reveal} className="p-6">
            <div className="flex items-center gap-3 mb-5"><Icon icon={PenLine} /><h3 className="font-semibold">Writing</h3></div>
            <ul className="space-y-3">
              {writing.map((w) => (
                <li key={w} className="muted text-sm leading-relaxed flex gap-2"><span style={{ color: 'var(--accent)' }}>▸</span>{w}</li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard {...reveal} className="p-6">
            <div className="flex items-center gap-3 mb-5"><Icon icon={Trophy} /><h3 className="font-semibold">Achievements</h3></div>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li key={a.title} className="text-sm">
                  <p className="font-medium">{a.title}</p>
                  <p className="faint text-xs mt-0.5">{a.detail}</p>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard {...reveal} className="p-6">
            <div className="flex items-center gap-3 mb-5"><Icon icon={User} /><h3 className="font-semibold">Beyond work</h3></div>
            <dl className="space-y-3">
              {misc.map((m) => (
                <motion.div key={m.label} className="text-sm">
                  <dt className="font-mono text-xs mb-0.5" style={{ color: 'var(--accent)' }}>{m.label.toLowerCase()}</dt>
                  <dd className="muted leading-relaxed">{m.value}</dd>
                </motion.div>
              ))}
            </dl>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
