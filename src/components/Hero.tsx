import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Send, 
  MapPin, 
  Briefcase, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  ArrowRight,
  Code2
} from 'lucide-react';
import { cvData } from '../data/cvData';

interface HeroProps {
  onPrintCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrintCV }) => {
  const { profile, basicInfo } = cvData;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % profile.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [profile.titles.length]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows and Decorative Grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/15 dark:bg-brand-500/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200/80 dark:bg-brand-950/60 dark:text-brand-300 dark:border-brand-800/80 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
              <span>{basicInfo.availability}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 dark:from-brand-400 dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            {/* Dynamic Title Switcher */}
            <div className="h-10 mt-3 flex items-center">
              <span className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                <span className="text-brand-600 dark:text-brand-400 transition-opacity duration-300">
                  {profile.titles[currentTitleIndex]}
                </span>
              </span>
            </div>

            {/* Introduction */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {profile.summary}
            </p>

            {/* Career Objective Callout Card */}
            <div className="mt-6 w-full p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Career Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{profile.objective}"
              </p>
            </div>

            {/* Location & Quick Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{basicInfo.location}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-indigo-500" />
                <span>BSIT Undergraduate</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all shadow-md shadow-brand-500/25 active:scale-95 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onPrintCV}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all shadow-sm active:scale-95"
              >
                <FileText className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Download / Print CV</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mr-2">
                Connect:
              </span>
              <a
                href={cvData.socials.find(s => s.platform === 'GitHub')?.url || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500 transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={cvData.socials.find(s => s.platform === 'LinkedIn')?.url || 'https://linkedin.com'}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${basicInfo.email}`}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-500 transition-all hover:scale-105"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture Card with Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 md:w-96 group">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-600 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />
              
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />
                  
                  {/* Overlay text on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-brand-300 font-semibold">
                      IT Student & Developer
                    </p>
                    <p className="text-lg font-bold">
                      {profile.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce-subtle">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Dean's Lister
                </span>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-xs">
                  3+
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-none">Hands-on</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Years Coding</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
