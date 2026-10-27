import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Code2, Sparkles, Terminal } from 'lucide-react';
import { cvData } from '../data/cvData';

const fluidEase = [0.16, 1, 0.3, 1];

export const GitHubShowcase: React.FC = () => {
  const { githubProfile } = cvData;

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: fluidEase }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-slate-800 text-cyan-300 border border-cyan-500/30 mb-3 backdrop-blur-md">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>// REPOSITORY ARCHIVE // YUKATA02</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              GitHub Profile & Featured Repositories
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl">
              Committed to transparent software development, continuous commits, and contributing clean, open-source codebases.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: fluidEase }}
            href={githubProfile.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-mono font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>FOLLOW ON GITHUB</span>
            <ExternalLink className="w-4 h-4 text-slate-900" />
          </motion.a>
        </motion.div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubProfile.pinnedRepos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: fluidEase }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: fluidEase } }}
              className="group p-6 rounded-2xl bg-slate-800/80 hover:bg-slate-800/95 border border-slate-700/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between hud-card laser-shimmer shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-700/80 text-cyan-300 border border-cyan-500/30">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-700/60 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 hover:text-amber-300 transition-colors">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                    <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quick Git Stats Ribbon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: fluidEase }}
          className="mt-8 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-wrap items-center justify-around gap-4 text-center font-mono hud-card"
        >
          <div>
            <span className="block text-xl font-bold text-cyan-400">{githubProfile.publicRepos}+</span>
            <span className="text-xs text-slate-400">Public Repositories</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-700" />
          <div>
            <span className="block text-xl font-bold text-emerald-400">100%</span>
            <span className="text-xs text-slate-400">Semantic Git Commits</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-700" />
          <div>
            <span className="block text-xl font-bold text-purple-400 flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4" /> Vercel CI/CD
            </span>
            <span className="text-xs text-slate-400">Automated Deployments</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

