import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Terminal, MessageSquare } from 'lucide-react';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anandbhatmunna.s@gmail.com',
    href: 'mailto:anandbhatmunna.s@gmail.com',
    color: 'indigo',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 81448 83865',
    href: 'tel:+918144883865',
    color: 'emerald',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'anand-bhat-0a5063143',
    href: 'https://linkedin.com/in/anand-bhat-0a5063143',
    color: 'sky',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'myCodeBhatta',
    href: 'https://github.com/myCodeBhatta',
    color: 'slate',
  },
  {
    icon: MessageSquare,
    label: 'Microsoft Teams',
    value: 'anandbhatmunna@outlook.com',
    href: 'https://teams.microsoft.com/l/chat/0/0?users=anandbhatmunna@outlook.com',
    color: 'teams',
  },
];

const colorMap = {
  indigo: { bg: 'bg-indigo-500/10', icon: 'text-indigo-400', border: 'hover:border-indigo-500/30' },
  emerald: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', border: 'hover:border-emerald-500/30' },
  sky: { bg: 'bg-sky-500/10', icon: 'text-sky-400', border: 'hover:border-sky-500/30' },
  slate: { bg: 'bg-slate-700/50', icon: 'text-slate-300', border: 'hover:border-slate-500/30' },
  teams: { bg: 'bg-violet-500/10', icon: 'text-violet-400', border: 'hover:border-violet-500/30' },
};

export default function Contact() {
  return (
    <footer id="contact" className="py-24 border-t border-slate-800/60 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-indigo-400 text-sm mb-3">{'// get in touch'}</p>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Open to senior engineering roles, consulting, and collaboration. Reach out via any channel below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {links.map((link, i) => {
            const colors = colorMap[link.color];
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`glass-card p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 ${colors.border} group`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className={colors.icon} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1 font-medium">{link.label}</p>
                  <p className="text-white text-sm font-medium break-all leading-tight">{link.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Location + Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 glass-card p-6"
        >
          <div className="flex items-center gap-3 text-slate-400">
            <MapPin size={16} className="text-indigo-400 flex-shrink-0" />
            <span className="text-sm">Bengaluru, India — Open to remote & hybrid opportunities</span>
          </div>
          <a
            href="/AnandBhatResume.pdf"
            download="AnandBhatResume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 flex-shrink-0"
          >
            <Download size={15} />
            Download Resume PDF
          </a>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <div className="flex items-center gap-2 font-mono">
            <Terminal size={12} className="text-indigo-500" />
            <span>Anand Bhat S — Senior Software Engineer / QA Architect</span>
          </div>
          <span>Built with React + Vite + Tailwind + Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
