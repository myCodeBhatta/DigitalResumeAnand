import { Check, Copy, Download, Github, Linkedin, Mail, MapPin, Phone, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/resume';
import { copyText, useToast } from '../hooks/useToast';
import { downloadVCard } from '../lib/vcard';
import { GlassCard, SectionHeader, reveal } from './Glass';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: profile.email },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref, copy: profile.phone },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: profile.githubHandle, href: profile.github },
];

function Channel({ c, i }) {
  const toast = useToast();
  const [copied, setCopied] = useState(false);
  const Icon = c.icon;
  const external = c.href.startsWith('http');

  const onCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (await copyText(c.copy)) {
      setCopied(true);
      toast(`${c.label} copied`);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <GlassCard
      as="a"
      href={c.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      tilt
      {...reveal}
      transition={{ ...reveal.transition, delay: i * 0.07 }}
      className="p-6 flex flex-col gap-4 group"
    >
      <div className="flex items-center justify-between">
        <span
          className="w-11 h-11 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
          style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.4)' }}
        >
          <Icon size={19} />
        </span>
        {c.copy && (
          <button onClick={onCopy} className="chip !p-2" aria-label={`Copy ${c.label}`}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-xs faint font-medium mb-0.5">{c.label}</p>
        <p className="text-sm font-semibold break-all">{c.value}</p>
      </div>
    </GlassCard>
  );
}

export default function Contact() {
  return (
    <footer id="contact" className="pt-20 sm:pt-28 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="// contact" title="Let's" accent="build something" subtitle="Open to senior engineering leadership, architecture and fintech conversations." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {channels.map((c, i) => (
            <Channel key={c.label} c={c} i={i} />
          ))}
        </div>

        <GlassCard {...reveal} className="p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="flex items-center gap-2 muted text-sm">
            <MapPin size={16} style={{ color: 'var(--accent)' }} /> {profile.location} · open to hybrid and remote
          </span>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={downloadVCard} className="btn-glass">
              <UserPlus size={15} /> Save contact
            </button>
            <a href={profile.resumePdf} download className="btn-primary">
              <Download size={15} /> Download resume
            </a>
          </div>
        </GlassCard>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs faint font-mono">
          <span>{'}'} // end of class · {profile.name}</span>
          <span>© {new Date().getFullYear()} · React · Vite · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
