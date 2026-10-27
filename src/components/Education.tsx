import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { cvData } from '../data/cvData';

const fluidEase = [0.16, 1, 0.3, 1];

export const Education: React.FC = () => {
  const { education } = cvData;

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: fluidEase }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-100/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 mb-3.5 backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
            <span>ACADEMIC TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            A continuous progression through computing and information technology studies at Davao del Norte State College.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Tactical Connecting Line with Glow */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-300 dark:to-slate-700 shadow-sm shadow-cyan-500/30" />

          <div className="flex flex-col gap-10">
            {education.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: fluidEase }}
                className="relative flex flex-col sm:flex-row gap-6 items-start group"
              >
                {/* Timeline Icon Node with HUD Glow */}
                <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-cyan-500 text-cyan-500 items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform z-10 hud-card">
                  <GraduationCap className="w-8 h-8" />
                </div>

                {/* Timeline Card */}
                <div className="flex-1 w-full bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all hud-card laser-shimmer">
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 text-cyan-700 dark:bg-cyan-950/80 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800/60">
                      {item.type === 'university' ? '// TERTIARY EDUCATION' : '// SECONDARY EDUCATION'}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>

                  <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                    {item.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-2 mb-4 font-mono">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>{item.location}</span>
                    </div>
                    {item.currentYear && (
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        • {item.currentYear}
                      </span>
                    )}
                    {item.gpa && (
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        • GPA: {item.gpa}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Academic Achievements / Honors if any */}
                  {item.honors && item.honors.length > 0 && (
                    <div className="mb-5 p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/60">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5 mb-2.5 font-mono">
                        <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span>Academic Honors & Recognition</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {item.honors.map((honor, hIdx) => (
                          <li
                            key={hIdx}
                            className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
                          >
                            <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                            <span>{honor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Relevant Coursework */}
                  {item.courses && item.courses.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5 font-mono">
                        <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                        <span>Core Coursework & Modules</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course) => (
                          <span
                            key={course}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-mono"
                          >
                            <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                            <span>{course}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

