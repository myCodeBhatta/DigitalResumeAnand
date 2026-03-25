import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-indigo-400 text-sm mb-3">{'// education'}</p>
          <h2 className="section-title">Academic <span className="gradient-text">Background</span></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 hover:border-indigo-500/30 transition-all duration-300 group">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                <GraduationCap size={28} className="text-indigo-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-1">
                  Bachelor of Science in Computer Technology
                </h3>
                <p className="text-indigo-400 font-semibold mb-3">Bharathiar University</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    Jul 2011 – May 2014
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    Coimbatore, Tamil Nadu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
