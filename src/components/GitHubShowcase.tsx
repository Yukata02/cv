import React from 'react';
import { Github, Star, GitFork, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';

export const GitHubShowcase: React.FC = () => {
  const { githubProfile } = cvData;

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-brand-300 border border-slate-700 mb-3">
              <Github className="w-3.5 h-3.5" />
              <span>Open Source & Version Control</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              GitHub Profile & Featured Repositories
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl">
              Committed to transparent software development, continuous commits, and contributing clean, open-source codebases.
            </p>
          </div>

          <a
            href={githubProfile.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>Follow on GitHub</span>
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </a>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubProfile.pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-brand-400" />
                    <span className="font-mono font-bold text-white text-base group-hover:text-brand-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-700/80 text-slate-300 border border-slate-600">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-700/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-400" />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 hover:text-amber-300 transition-colors">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-blue-300 transition-colors">
                    <GitFork className="w-3.5 h-3.5 text-blue-400" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Git Stats Ribbon */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-wrap items-center justify-around gap-4 text-center">
          <div>
            <span className="block text-xl font-bold text-brand-400">{githubProfile.publicRepos}+</span>
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
        </div>

      </div>
    </section>
  );
};
