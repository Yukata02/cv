import React from 'react';
import { ArrowUp, Heart, Sparkles, Github } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 no-print transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Student Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold shadow-md shadow-brand-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">
                {cvData.profile.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Curriculum Vitae & Developer Portfolio
              </p>
            </div>
          </div>

          {/* Vercel Deployment & Stack Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Engineered with React, TypeScript & Tailwind</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
              Deployed on ▲ Vercel
            </span>
          </div>

          {/* Back to Top & Repo Link */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/alexrivera-dev/personal-cv-website"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              aria-label="View Source Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {cvData.profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with dedication <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for academic & career excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
