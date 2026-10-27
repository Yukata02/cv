import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Terminal, 
  Palette, 
  Users, 
  Search, 
  Layers,
  Cpu
} from 'lucide-react';
import { cvData } from '../data/cvData';
import { TechIcon } from './TechIcon';

const fluidEase = [0.16, 1, 0.3, 1];

export const Skills: React.FC = () => {
  const { skillCategories } = cvData;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Code2 className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4" />;
      case 'Palette':
        return <Palette className="w-4 h-4" />;
      case 'Users':
        return <Users className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  // Filter skills based on selected category and search query
  const filteredCategories = skillCategories
    .filter((cat) => activeCategory === 'All' || cat.category === activeCategory)
    .map((cat) => {
      const matchingSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: matchingSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  const allCategories = ['All', ...skillCategories.map((c) => c.category)];

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: fluidEase }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-100/80 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 mb-3.5 backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-emerald-500" />
            <span>LEARNED COMPETENCIES & MODULES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills Learned
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            A visual overview of technologies, programming languages, libraries, and tools learned and practiced throughout BSIT studies.
          </p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs with Animated Sliding Pill */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none font-mono">
            {allCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors z-10 ${
                    isActive
                      ? 'text-slate-950 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-cyan-400 dark:bg-cyan-400 rounded-xl shadow-md shadow-cyan-500/25 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Active Glow */}
          <div className="relative w-full md:w-64 font-mono group">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-500 group-hover:scale-110 transition-transform" />
            <input
              type="text"
              placeholder="Search skill (React, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all shadow-xs"
            />
          </div>

        </div>

        {/* Skills Cards Grid - Fluid Staggered Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category, catIdx) => (
              <motion.div
                key={category.category}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: catIdx * 0.07, ease: fluidEase }}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all flex flex-col justify-between hud-card laser-shimmer group/card"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-200/50 dark:border-cyan-800/50 group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {category.category}
                      </h3>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Individual Skill Items with Technology Icons and Fluid Micro-interactions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.2, ease: fluidEase }}
                        className="group flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 hover:border-cyan-500/70 hover:bg-cyan-50/30 dark:hover:bg-slate-800/90 transition-all shadow-xs cursor-default"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-115 group-hover:rotate-6 transition-transform shadow-[0_0_8px_rgba(0,240,255,0)] group-hover:shadow-[0_0_8px_rgba(0,240,255,0.4)]">
                          <TechIcon name={skill.name} className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                            {skill.name}
                          </span>
                          <span className="block text-[10px] text-slate-400 font-mono">
                            Learned Skill
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skill Count Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{category.skills.length} skills in {category.category.split(' ')[0]}</span>
                  <span className="text-emerald-500 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Verified</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-mono">
              No skills found matching "<span className="font-semibold text-cyan-500">{searchQuery}</span>". Try another keyword.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

