import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  Globe2, 
  Compass, 
  HeartHandshake, 
  Code
} from 'lucide-react';
import { cvData } from '../data/cvData';

export const BasicInfo: React.FC = () => {
  const { basicInfo } = cvData;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Basic Information & About Me
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            A comprehensive snapshot of my personal background, communication channels, and core technical passions.
          </p>
        </div>

        {/* 2-Column Grid: Left is Personal Narrative, Right is Basic Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-4">
                <HeartHandshake className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                <span>Personal Background & Philosophy</span>
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                {basicInfo.description}
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                As an Information Technology undergraduate, I bridge the gap between rigorous technical problem-solving and clean, human-centered digital experiences. I believe software engineering is more than just writing syntax—it is about designing resilient systems that simplify everyday human endeavors.
              </p>

              {/* Languages & Working Principles */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-indigo-500" />
                  <span>Languages Spoken</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {basicInfo.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Interests Tags */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-brand-500" />
                  <span>Primary Career Interests</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {basicInfo.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200/70 dark:border-brand-800/60 hover:scale-105 transition-transform"
                    >
                      #{interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-8 border-t border-slate-100 dark:border-slate-800 text-center">
              <div>
                <span className="block text-2xl font-extrabold text-brand-600 dark:text-brand-400">
                  4th
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Year Level (BSIT)</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  6+
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Web Projects</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-purple-600 dark:text-purple-400">
                  450+
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Students Reached</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Information Badges */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Location & Residence
                </p>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                  {basicInfo.location}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Open to On-site, Hybrid, and Remote Opportunities
                </p>
              </div>
            </div>

            {/* Email Address Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email Address
                </p>
                <a
                  href={`mailto:${basicInfo.email}`}
                  className="text-base font-bold text-slate-900 dark:text-white mt-0.5 block hover:text-brand-600 dark:hover:text-brand-400 transition-colors truncate"
                >
                  {basicInfo.email}
                </a>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => copyToClipboard(basicInfo.email, 'email')}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Number Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Contact Number
                </p>
                <a
                  href={`tel:${basicInfo.phone}`}
                  className="text-base font-bold text-slate-900 dark:text-white mt-0.5 block hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {basicInfo.phone}
                </a>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => copyToClipboard(basicInfo.phone, 'phone')}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Phone</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="p-4 rounded-xl bg-slate-200/40 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Privacy Notice: </span>
              In accordance with academic portfolio and privacy guidelines, sensitive personal identification (IDs, banking, passwords) is strictly omitted. Contact channels provided are designated for professional correspondence.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
