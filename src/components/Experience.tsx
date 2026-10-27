import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { cvData } from '../data/cvData';

export const Experience: React.FC = () => {
  const { experience } = cvData;
  const [filterType, setFilterType] = useState<string>('All');

  const types = ['All', 'Leadership', 'Freelance', 'Academic Project', 'Volunteer'];

  const filteredExperience = filterType === 'All'
    ? experience
    : experience.filter((exp) => exp.type === filterType);

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience & Leadership
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Student developer leadership roles, freelance client deliverables, academic systems architecture, and community technical mentorship.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filterType === type
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {filteredExperience.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Type Badge & Date */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700 dark:bg-brand-950/80 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60">
                  {item.type}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Role & Organization */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {item.role}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-600 dark:text-brand-400 mt-1 mb-2">
                <span>{item.organization}</span>
                <span className="text-slate-400 font-normal">•</span>
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-normal text-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2 mb-6">
                {item.bulletPoints.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <ChevronRight className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Skills Used Tags */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-500" />
                  Skills:
                </span>
                {item.skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
