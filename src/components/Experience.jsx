import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Wells Fargo',
    location: 'Bengaluru, India',
    period: 'Mar 2023 – Present',
    current: true,
    color: 'indigo',
    achievements: [
      'Full-stack development using Java Spring Boot (backend), React (frontend), and Python for scripting and automation.',
      'Working on Oracle Core Banking products — OBLM (Oracle Banking Liquidity Management) and OBPM (Oracle Banking Payments).',
      'Designing and implementing RESTful APIs and microservices integrated with core banking workflows.',
      'Hands-on experience with AI-assisted development tools including Claude AI, GitHub Copilot, and Cursor to accelerate coding productivity.',
      'Foundational knowledge and exploration of LLM, LangGraph, and LangChain for AI workflow integrations.',
      'Collaborated with cross-functional teams across onshore and offshore to deliver banking product features.',
      'Achieved Microsoft Azure certifications AZ-900 (Azure Fundamentals) and AZ-204 (Azure Developer Associate).',
    ],
  },
  {
    role: 'Architect Specialist (SDET)',
    company: 'Accenture',
    location: 'Bengaluru, India',
    period: 'Dec 2020 – Feb 2023',
    current: false,
    color: 'violet',
    achievements: [
      'Led QA Architecture for Standard Chartered Bank — designed automation framework from scratch covering API and UI layers.',
      'Automated RESTful services using BDD Cucumber + Rest Assured; built mock servers with Spring Boot.',
      'Implemented Headless browser automation for DDX Portal using Page Object Model with PhantomJS and Gradle.',
      'Developed and configured Batch jobs in AUTOSYS using JIL files.',
      'Primary liaison for offshore/onsite knowledge transfer across all delivery phases.',
    ],
  },
  {
    role: 'Associate Projects',
    company: 'Cognizant Technology Solutions',
    location: 'Chennai, India',
    period: 'Jun 2019 – Dec 2020',
    current: false,
    color: 'emerald',
    achievements: [
      'Played a key role in Discover e-Wallets (Discover Bank US) — from requirements to execution.',
      'Developed TSP cash logic for payment transactions for Singapore country operations.',
      'Supported production installs and DB operations (image restore, REORG, RUNSTATS) using Kiosk tool.',
      'Prepared Daily Test Progress Reports and coordinated with business teams for test case creation.',
      'Supported production install for South Africa and validated all major functionality within tight timelines.',
    ],
  },
  {
    role: 'Associate Consultant',
    company: 'Capgemini',
    location: 'Chennai, India',
    period: 'Jun 2017 – Jun 2019',
    current: false,
    color: 'amber',
    achievements: [
      'Automation Test Lead for Standard Chartered Bank — led 24-month engagement on Discover Personal Loan project.',
      'Handled Web Services testing using SOAP UI and RIT for API test case design.',
      'Coordinated with Dev teams to develop automation scripts aligned with business requirements.',
    ],
  },
  {
    role: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    location: 'Chennai, India',
    period: 'Jul 2014 – May 2017',
    current: false,
    color: 'rose',
    achievements: [
      'Automation Tester for Discover Bank US — validated and reviewed test results; delivered reports to clients.',
    ],
  },
];

const colorMap = {
  indigo: { dot: 'bg-indigo-500', ring: 'ring-indigo-500/30', badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', card: 'hover:border-indigo-500/30' },
  violet: { dot: 'bg-violet-500', ring: 'ring-violet-500/30', badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20', card: 'hover:border-violet-500/30' },
  emerald: { dot: 'bg-emerald-500', ring: 'ring-emerald-500/30', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', card: 'hover:border-emerald-500/30' },
  amber: { dot: 'bg-amber-500', ring: 'ring-amber-500/30', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20', card: 'hover:border-amber-500/30' },
  rose: { dot: 'bg-rose-500', ring: 'ring-rose-500/30', badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20', card: 'hover:border-rose-500/30' },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-indigo-400 text-sm mb-3">{'// career'}</p>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle">12+ years across banking, fintech & enterprise engineering</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-12">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-emerald-500 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color];
              return (
                <motion.div
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-8 sm:-left-12 top-6 w-4 h-4 rounded-full ${colors.dot} ring-4 ${colors.ring} flex items-center justify-center`}>
                    {exp.current && (
                      <span className={`absolute w-6 h-6 rounded-full ${colors.dot} opacity-30 animate-ping`} />
                    )}
                  </div>

                  {/* Card */}
                  <div className={`glass-card p-6 sm:p-8 transition-all duration-300 ${colors.card}`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className="text-slate-500" />
                          <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                          {exp.current && (
                            <span className="tag bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs">
                              Current
                            </span>
                          )}
                        </div>
                        <p className={`font-semibold text-base border px-2 py-0.5 rounded-md inline-block ${colors.badge}`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2.5">
                      {exp.achievements.map((item, j) => (
                        <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
