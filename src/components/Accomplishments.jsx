import { motion } from 'framer-motion';
import { Trophy, Heart, Presentation } from 'lucide-react';

const accomplishments = [
  {
    icon: Trophy,
    color: 'amber',
    title: 'Guiding Light & Pillar of the Month',
    description: 'Awarded by the project team at Accenture for outstanding contributions and leadership on the Standard Chartered Bank QA engagement.',
  },
  {
    icon: Heart,
    color: 'rose',
    title: 'Customer Appreciation Letters',
    description: 'Received multiple appreciation letters from clients for exceptional service delivery, reliability, and commitment to quality outcomes.',
  },
  {
    icon: Presentation,
    color: 'emerald',
    title: 'Training & Knowledge Transfer Lead',
    description: 'Prepared and conducted training sessions on test processes and automation frameworks, measurably reducing testing errors across the team.',
  },
];

const extra = [
  { label: 'Languages Spoken', value: 'English, Tamil, Konkani, Kannada, Malayalam' },
  { label: 'Interests', value: 'Photography, Music, Graphic Designing, Travelling, Gaming' },
  { label: 'Personal Skills', value: 'Attentive listening, Communication, Leadership, Teamwork, Multitasking' },
];

const colorMap = {
  amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', border: 'hover:border-amber-500/30' },
  rose: { bg: 'bg-rose-500/10', icon: 'text-rose-400', border: 'hover:border-rose-500/30' },
  emerald: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', border: 'hover:border-emerald-500/30' },
};

export default function Accomplishments() {
  return (
    <section id="accomplishments" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-indigo-400 text-sm mb-3">{'// achievements'}</p>
          <h2 className="section-title">Accomplishments & <span className="gradient-text">Beyond</span></h2>
          <p className="section-subtitle">Recognition, personal attributes and interests</p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {accomplishments.map((item, i) => {
            const colors = colorMap[item.color];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`glass-card p-7 transition-all duration-300 hover:-translate-y-1 group ${colors.border}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className={colors.icon} />
                </div>
                <h3 className="text-white font-bold text-base mb-3 leading-snug">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {extra.map((item) => (
              <div key={item.label} className="pt-4 sm:pt-0 sm:px-6 first:pt-0 first:pl-0 last:pr-0">
                <p className="text-xs font-mono text-indigo-400 mb-2">{item.label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
