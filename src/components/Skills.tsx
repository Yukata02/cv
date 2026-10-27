import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Palette, 
  Users, 
  Search, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { cvData } from '../data/cvData';

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
    <section id="skills" className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Learned Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills Learned
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            A comprehensive list of programming languages, frameworks, databases, developer tools, and professional practices learned through BSIT coursework and practical projects.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-brand-600 text-white shadow-sm shadow-brand-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
            />
          </div>

        </div>

        {/* Skills Cards Grid - Badge / List View (No Progress Meters) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 border border-brand-200/50 dark:border-brand-800/50">
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

                {/* Skills Learned Badges List */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium bg-slate-50 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/70 hover:border-brand-500/60 hover:bg-brand-50/50 dark:hover:bg-slate-800 transition-all shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Count Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>{category.skills.length} skills learned</span>
                <span className="text-emerald-500 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Learned & Applied
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No skills found matching "<span className="font-semibold">{searchQuery}</span>". Try another search keyword.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
