import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle, 
  ExternalLink, 
  Calendar, 
  Sparkles,
  Trophy,
  BookOpen,
  Users
} from 'lucide-react';
import { cvData } from '../data/cvData';

export const Achievements: React.FC = () => {
  const { achievements } = cvData;
  const [activeTab, setActiveTab] = useState<string>('All');

  const tabs = ['All', 'Certificate', 'Award', 'Seminar & Workshop', 'Organization'];

  const filteredAchievements = activeTab === 'All'
    ? achievements
    : achievements.filter((a) => a.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Award':
      case 'Competition':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'Certificate':
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'Seminar & Workshop':
        return <BookOpen className="w-5 h-5 text-blue-500" />;
      case 'Organization':
        return <Users className="w-5 h-5 text-purple-500" />;
      default:
        return <Award className="w-5 h-5 text-brand-500" />;
    }
  };

  return (
    <section id="achievements" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Achievements & Certifications
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Industry-recognized cloud and web credentials, inter-collegiate hackathon awards, leadership involvement, and speaking engagements.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Header with Type Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                    {getTypeIcon(item.type)}
                  </div>
                  {item.badge && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>{item.badge}</span>
                    </span>
                  )}
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 mt-1 mb-2">
                  {item.issuer}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Action / Credential Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  {item.type}
                </span>

                {item.credentialUrl ? (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Academic Record</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
