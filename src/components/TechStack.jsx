import { motion } from 'framer-motion';
import { Code2, Layers, FlaskConical, Brain, Cloud, Database, GitBranch, Bug, Landmark } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    color: 'indigo',
    skills: ['Java (Core)', 'Python', 'JavaScript', 'JSON'],
  },
  {
    icon: Layers,
    title: 'Frameworks',
    color: 'violet',
    skills: ['Spring Boot', 'React', 'BDD Cucumber', 'TestNG', 'JUnit', 'Rest Assured'],
  },
  {
    icon: FlaskConical,
    title: 'Testing Tools',
    color: 'rose',
    skills: ['Selenium', 'Appium', 'UFT', 'RIT', 'PEGA', 'Perfecto'],
  },
  {
    icon: Brain,
    title: 'AI / LLM Tools',
    color: 'emerald',
    skills: ['Claude AI', 'GitHub Copilot', 'Cursor', 'LangChain', 'LangGraph', 'LLM (Basic)'],
  },
  {
    icon: Cloud,
    title: 'Cloud / DevOps',
    color: 'sky',
    skills: ['Azure AZ-900', 'Azure AZ-204', 'Jenkins', 'OpenShift'],
  },
  {
    icon: Database,
    title: 'Databases',
    color: 'amber',
    skills: ['MongoDB', 'PostgreSQL', 'SQL'],
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    color: 'emerald',
    skills: ['Git', 'GitHub', 'BitBucket'],
  },
  {
    icon: Bug,
    title: 'Defect Management',
    color: 'rose',
    skills: ['Jira', 'ALM'],
  },
  {
    icon: Landmark,
    title: 'Banking Products',
    color: 'indigo',
    skills: ['Oracle OBLM', 'Oracle OBPM', 'Finacle', 'eBBS', 'T24'],
  },
];

const colorMap = {
  indigo: { card: 'hover:border-indigo-500/40', icon: 'bg-indigo-500/15 text-indigo-400', tag: 'tag-indigo' },
  violet: { card: 'hover:border-violet-500/40', icon: 'bg-violet-500/15 text-violet-400', tag: 'tag-violet' },
  rose: { card: 'hover:border-rose-500/40', icon: 'bg-rose-500/15 text-rose-400', tag: 'tag-rose' },
  emerald: { card: 'hover:border-emerald-500/40', icon: 'bg-emerald-500/15 text-emerald-400', tag: 'tag-emerald' },
  sky: { card: 'hover:border-sky-500/40', icon: 'bg-sky-500/15 text-sky-400', tag: 'tag-sky' },
  amber: { card: 'hover:border-amber-500/40', icon: 'bg-amber-500/15 text-amber-400', tag: 'tag-amber' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-indigo-400 text-sm mb-3">{'// expertise'}</p>
          <h2 className="section-title">Technical <span className="gradient-text">Arsenal</span></h2>
          <p className="section-subtitle">Tools, frameworks and platforms I work with daily</p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories.map((cat) => {
            const colors = colorMap[cat.color] || colorMap.indigo;
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                className={`glass-card p-6 transition-all duration-300 group cursor-default ${colors.card}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.icon} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{cat.title}</h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className={`tag ${colors.tag} hover:scale-105 transition-transform duration-150`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
