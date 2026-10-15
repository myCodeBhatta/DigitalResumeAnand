import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { profile, stats } from '../data/resume';
import { GlassCard } from './Glass';

function useTypewriter(words, { type = 70, erase = 35, pause = 1800 } = {}) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setText(words[0]);
      return undefined;
    }
    const word = words[i];
    let t;
    if (!deleting && text.length < word.length) t = setTimeout(() => setText(word.slice(0, text.length + 1)), type);
    else if (!deleting) t = setTimeout(() => setDeleting(true), pause);
    else if (text.length > 0) t = setTimeout(() => setText(word.slice(0, text.length - 1)), erase);
    else {
      setDeleting(false);
      setI((n) => (n + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, type, erase, pause, reduce]);

  return text;
}

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, value, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

const kw = { color: 'var(--code-kw)' };
const ty = { color: 'var(--code-ty)' };
const str = { color: 'var(--code-str)' };
const cm = { color: 'var(--text-3)' };
const an = { color: 'var(--code-an)' };

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="about" className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16">
      {/* A draggable Liquid Glass lens: purely decorative, shows the material refracting the backdrop. */}
      <motion.div
        aria-hidden
        drag
        dragMomentum={false}
        whileDrag={{ scale: 1.08 }}
        className="glass refract hidden lg:block absolute right-[3%] top-[12%] w-36 h-36 rounded-full cursor-grab active:cursor-grabbing z-20"
        style={{ borderRadius: '50%' }}
        animate={{ y: [0, -14, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        title="Drag me"
      />

      <div className="relative max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-10 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show" className="text-center lg:text-left">
            <motion.div variants={item} className="glass-pill inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium mb-7">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping" style={{ background: 'var(--accent-3)' }} />
                <span className="relative inline-flex w-2 h-2 rounded-full" style={{ background: 'var(--accent-3)' }} />
              </span>
              {profile.title} @ {profile.company}
            </motion.div>

            <motion.h1 variants={item} className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.95] mb-5">
              {profile.firstName}
              <br />
              <span className="gradient-text">{profile.lastName}</span>
            </motion.h1>

            <motion.p variants={item} className="font-mono text-lg sm:text-2xl h-9 mb-6" aria-label={profile.roles.join(', ')}>
              <span style={{ color: 'var(--accent)' }}>&gt;</span> <span aria-hidden>{role}</span>
              <span aria-hidden className="inline-block w-[2px] h-6 align-middle ml-0.5 animate-pulse" style={{ background: 'var(--accent-3)' }} />
            </motion.p>

            <motion.p variants={item} className="muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {profile.years} years in banking and fintech. I build Java Spring Boot microservices inside core banking
              workflows at <strong style={{ color: 'var(--text)' }}>{profile.company}</strong>, including a Tokenized Deposit
              service that settles on the Coreblock blockchain.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a href={profile.resumePdf} download className="btn-primary">
                <Download size={16} /> Download resume
              </a>
              <a href="#contact" className="btn-glass">
                <Mail size={16} /> Get in touch
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
              <span className="chip"><MapPin size={12} /> {profile.location}</span>
              <a className="chip hover:opacity-80" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={12} /> LinkedIn</a>
              <a className="chip hover:opacity-80" href={profile.github} target="_blank" rel="noreferrer"><Github size={12} /> GitHub</a>
              <span className="chip"><Sparkles size={12} /> AI-assisted dev daily</span>
            </motion.div>
          </motion.div>

          <motion.div className="min-w-0" initial={{ opacity: 0, scale: 0.94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <GlassCard tilt className="p-0 overflow-hidden">
              <div className="flex items-center gap-2 px-5 h-11" style={{ borderBottom: '1px solid var(--glass-stroke-2)' }}>
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs faint">AnandBhat.java</span>
              </div>
              <pre className="font-mono text-[12.5px] sm:text-[13.5px] leading-7 p-5 sm:p-6 overflow-x-auto">
                <code>
                  <span style={an}>@RestController</span> <span style={cm}>// currently @ Wells Fargo</span>{'\n'}
                  <span style={kw}>public class</span> <span style={ty}>AnandBhat</span> <span style={kw}>extends</span> <span style={ty}>JavaDeveloper</span> {'{'}{'\n'}
                  {'  '}<span style={kw}>String</span> role = <span style={str}>"Senior AVP, Technology"</span>;{'\n'}
                  {'  '}<span style={kw}>int</span> years = <span style={an}>12</span>; <span style={cm}>// BFSI</span>{'\n'}
                  {'  '}<span style={kw}>var</span> stack = <span style={ty}>List</span>.of({'\n'}
                  {'    '}
                  {profile.heroStack.map((s, i) => (
                    <span key={s}>
                      <span style={str}>"{s}"</span>
                      {i < profile.heroStack.length - 1 ? ', ' : ''}
                      {i === 3 ? '\n    ' : ''}
                    </span>
                  ))}
                  {'\n'}
                  {'  '});{'\n'}
                  {'  '}<span style={an}>@Featured</span> <span style={ty}>Project</span> tokenizedDeposit;{'\n'}
                  {'}'}
                </code>
              </pre>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-14"
        >
          {stats.map((s) => (
            <GlassCard key={s.label} className="p-5 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs sm:text-sm faint mt-1 font-medium">{s.label}</div>
            </GlassCard>
          ))}
        </motion.div>

        <a href="#project" className="hidden sm:flex mx-auto mt-12 w-10 h-10 glass-pill items-center justify-center no-print" aria-label="Scroll to featured project">
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ArrowDown size={16} />
          </motion.span>
        </a>
      </div>
    </section>
  );
}
