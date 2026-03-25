import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Download, ChevronDown } from 'lucide-react';

const roles = [
  'Senior Software Engineer',
  'QA Architect (SDET)',
  'Full-Stack Developer',
  'Automation Expert',
  'Azure Certified Dev',
];

function useTypewriter(words, typingSpeed = 80, deletingSpeed = 40, pauseMs = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (phase === 'typing') {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseMs);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 200);
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deletingSpeed);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return display;
}

const stats = [
  { value: '12+', label: 'Years Experience' },
  { value: '5', label: 'Companies' },
  { value: 'AZ-204', label: 'Azure Certified' },
  { value: '4', label: 'Languages Spoken' },
];

export default function Hero() {
  const typedRole = useTypewriter(roles);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Lead Roles
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
            >
              Anand{' '}
              <span className="gradient-text">Bhat S</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="h-10 mb-6 flex items-center justify-center lg:justify-start"
            >
              <span className="font-mono text-xl sm:text-2xl text-indigo-400 font-semibold">
                {typedRole}
                <span className="animate-pulse text-emerald-400">|</span>
              </span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Results-driven engineer with <span className="text-white font-semibold">12+ years</span> delivering full-stack
              solutions at <span className="text-indigo-400 font-semibold">Wells Fargo</span>. Expert in
              Oracle Core Banking, Java Spring Boot, React, and AI-assisted development.
            </motion.p>

            {/* Contact Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 text-sm"
            >
              <span className="flex items-center gap-2 text-slate-400">
                <MapPin size={14} className="text-indigo-400" />
                Bengaluru, India
              </span>
              <a
                href="mailto:anandbhatmunna.s@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Mail size={14} className="text-indigo-400" />
                anandbhatmunna.s@gmail.com
              </a>
              <a
                href="tel:+918144883865"
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Phone size={14} className="text-indigo-400" />
                +91 81448 83865
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="/AnandBhatResume.pdf"
                download="AnandBhatResume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/anand-bhat-0a5063143"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all duration-200 border border-slate-700 hover:-translate-y-0.5"
              >
                <Linkedin size={16} className="text-sky-400" />
                LinkedIn
              </a>
              <a
                href="https://github.com/myCodeBhatta"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all duration-200 border border-slate-700 hover:-translate-y-0.5"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right: Stats Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-4 w-full max-w-sm"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card p-6 text-center glow-indigo hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="text-3xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}

            {/* Terminal Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="col-span-2 glass-card p-5 font-mono text-xs"
            >
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="space-y-1">
                <p><span className="text-emerald-400">~$</span> <span className="text-slate-300">whoami</span></p>
                <p className="text-indigo-400">anand-bhat-s</p>
                <p><span className="text-emerald-400">~$</span> <span className="text-slate-300">cat role.txt</span></p>
                <p className="text-slate-300">Senior Software Engineer @ Wells Fargo</p>
                <p><span className="text-emerald-400">~$</span> <span className="text-slate-300">experience --years</span></p>
                <p className="text-amber-400">12+ years ✓</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
