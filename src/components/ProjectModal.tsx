import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const fluidEase = [0.16, 1, 0.3, 1];

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: fluidEase }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0c101a] rounded-3xl border border-slate-200 dark:border-cyan-500/30 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col hud-card laser-shimmer font-mono"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header Bar with Close Button */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-cyan-500/20 bg-slate-50/80 dark:bg-slate-900/60">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 text-cyan-700 dark:bg-cyan-950/80 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40">
                // {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1.5 font-sans">
                {project.title}
              </h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              aria-label="Close project modal"
              className="p-2 rounded-xl text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            {/* Project Preview Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[10px] text-cyan-400 bg-slate-950/80 px-2 py-0.5 rounded font-mono">
                // ARCHIVE IMAGE PREVIEW
              </div>
            </div>

            {/* Subtitle & Full Description */}
            <div>
              <h4 className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mb-2 font-mono">
                {project.subtitle}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-cyan-500/20 hud-card">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>// ENGINEERING HIGHLIGHTS & ARCHITECTURE</span>
                </h5>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5 font-sans"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-500" />
                <span>// EMPLOYED MODULES & LIBRARIES</span>
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer with External Action Links */}
          <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-cyan-500/20 bg-slate-50/80 dark:bg-slate-900/60 flex flex-wrap items-center justify-end gap-3 font-mono">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE CODE</span>
            </motion.a>

            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase transition-colors shadow-sm shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>OPEN LIVE DEMO</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

