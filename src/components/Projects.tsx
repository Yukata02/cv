import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Eye, 
  ArrowUpRight
} from 'lucide-react';
import { cvData } from '../data/cvData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

const fluidEase = [0.16, 1, 0.3, 1];

export const Projects: React.FC = () => {
  const { projects } = cvData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Academic / Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: fluidEase }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-100/80 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 mb-3.5 backdrop-blur-md">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-500" />
            <span>FEATURED PORTFOLIO CREATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects & Technical Creations
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Showcasing real-world applications, academic capstone systems, open-source utilities, and responsive web platforms.
          </p>
        </motion.div>

        {/* Category Filters with Sliding Layout Pill */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none font-mono">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors z-10 ${
                  isActive
                    ? 'text-slate-950 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectCategory"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-xl shadow-lg shadow-cyan-500/25 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Staggered Fluid Motion */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: fluidEase }}
                whileHover={{ y: -8, transition: { duration: 0.35, ease: fluidEase } }}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col overflow-hidden hud-card laser-shimmer transition-colors"
              >
                {/* Project Image & Interactive Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-mono font-bold shadow-lg hover:bg-cyan-400 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>PREVIEW</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-900/90 text-white hover:bg-slate-800 hover:text-cyan-400 transition-colors border border-slate-700"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-brand-600 text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Top Tactical Tag: Category & Unit Code */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-cyan-600 dark:text-cyan-300 border border-slate-200 dark:border-cyan-500/30 backdrop-blur-md shadow-xs">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-slate-950/80 text-slate-400 backdrop-blur-xs">
                      // ID: 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                      <span>{project.title.split(' - ')[0]}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-cyan-500 -translate-x-1 group-hover:translate-x-0" />
                    </h3>

                    <p className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mt-1 mb-2.5">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-cyan-500 dark:text-cyan-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Card Bottom Links */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between font-mono">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                      >
                        <Layers className="w-3.5 h-3.5 text-cyan-500" />
                        <span>CASE SPECS</span>
                      </button>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-500 hover:text-cyan-400 transition-colors"
                          title="GitHub Source"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-600 dark:text-cyan-400 hover:underline text-xs font-semibold flex items-center gap-1"
                            title="Live Demo"
                          >
                            <span>DEMO</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Render Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

