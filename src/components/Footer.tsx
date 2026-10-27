import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Sparkles, Github } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-[#07090e] border-t border-slate-200 dark:border-cyan-500/20 no-print transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Student Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-cyan-500/20 hud-card">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-extrabold text-slate-900 dark:text-white text-sm font-mono">
                {cvData.profile.name}
              </p>
              <p className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono">
                // 4TH YEAR BSIT • DNSC
              </p>
            </div>
          </div>

          {/* Vercel Deployment & Stack Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>React + TypeScript + Tailwind</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 font-semibold text-cyan-600 dark:text-cyan-400">
              Deployed on ▲ Vercel
            </span>
          </div>

          {/* Back to Top & Repo Link */}
          <div className="flex items-center gap-3 font-mono">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              href={`${cvData.githubProfile.url}/cv`}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-cyan-500/30 text-slate-600 dark:text-cyan-300 hover:text-cyan-400 transition-colors hud-card"
              aria-label="View Source Repository"
            >
              <Github className="w-4 h-4" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 hover:border-cyan-500 text-slate-700 dark:text-cyan-300 text-xs font-semibold transition-all hud-card"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-500" />
            </motion.button>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} {cvData.profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with dedication <Heart className="w-3 h-3 text-cyan-400 fill-cyan-400" /> for academic & career excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

