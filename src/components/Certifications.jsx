import { motion } from 'framer-motion';
import { Award, Shield, Star } from 'lucide-react';

const certs = [
  {
    title: 'Azure Developer Associate',
    code: 'AZ-204',
    issuer: 'Microsoft',
    year: '2023',
    icon: Shield,
    color: 'sky',
    featured: true,
  },
  {
    title: 'Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    year: '2023',
    icon: Shield,
    color: 'sky',
    featured: true,
  },
  {
    title: 'Full Stack Business Technology Architect',
    code: null,
    issuer: 'Accenture',
    year: '01/2022',
    icon: Star,
    color: 'violet',
    featured: false,
  },
  {
    title: 'Technology Architect',
    code: null,
    issuer: 'Accenture',
    year: '08/2021',
    icon: Award,
    color: 'indigo',
    featured: false,
  },
  {
    title: 'L1 Banking Financial & Services Industry',
    code: null,
    issuer: 'Industry',
    year: '—',
    icon: Award,
    color: 'emerald',
    featured: false,
  },
];

const colorMap = {
  sky: {
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20 hover:border-sky-500/50',
    icon: 'text-sky-400',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    glow: 'hover:shadow-sky-500/10',
  },
  violet: {
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    icon: 'text-violet-400',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    glow: 'hover:shadow-violet-500/10',
  },
  indigo: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
    icon: 'text-indigo-400',
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    glow: 'hover:shadow-indigo-500/10',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    icon: 'text-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    glow: 'hover:shadow-emerald-500/10',
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-indigo-400 text-sm mb-3">{'// credentials'}</p>
          <h2 className="section-title">Certifications & <span className="gradient-text">Credentials</span></h2>
          <p className="section-subtitle">Verified expertise across cloud and enterprise tech</p>
        </motion.div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => {
            const colors = colorMap[cert.color];
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colors.border} ${colors.glow} ${cert.featured ? 'lg:col-span-1' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <Icon size={24} className={colors.icon} />
                </div>

                <h3 className="text-white font-semibold text-sm leading-snug mb-3">{cert.title}</h3>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 flex-wrap">
                    {cert.code && (
                      <span className={`tag border text-xs font-mono ${colors.badge}`}>{cert.code}</span>
                    )}
                    <span className="text-xs text-slate-500">{cert.issuer}</span>
                  </div>
                  <span className="text-xs text-slate-600 font-mono">{cert.year}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
