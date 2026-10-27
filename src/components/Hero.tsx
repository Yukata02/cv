import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Code2,
  Terminal,
  Crosshair,
  ShieldCheck
} from 'lucide-react';
import { cvData } from '../data/cvData';

interface HeroProps {
  onPrintCV: () => void;
}

// PGR Fluid Transition Easing Curve
const fluidEase = [0.16, 1, 0.3, 1];

export const Hero: React.FC<HeroProps> = ({ onPrintCV }) => {
  const { profile, basicInfo } = cvData;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % profile.titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [profile.titles.length]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows and Decorative Cyber Grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-brand-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content with Fluid Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: fluidEase }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* PGR Tactical Callsign Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: fluidEase }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 dark:border-cyan-400/40 bg-cyan-50/80 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-xs"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
              <span>SYS.OPERATIONAL // 4TH YEAR BSIT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </motion.div>

            {/* Name with Fluid Animated Gradient */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: fluidEase }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 dark:from-cyan-400 dark:via-brand-300 dark:to-purple-300 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            {/* Dynamic Title Switcher with Lively Cursor Pulse */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="h-10 mt-3 flex items-center"
            >
              <span className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 animate-bounce-subtle" />
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={currentTitleIndex}
                    initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4, ease: fluidEase }}
                    className="text-cyan-600 dark:text-cyan-400 font-mono flex items-center gap-1.5"
                  >
                    <span>{profile.titles[currentTitleIndex]}</span>
                    <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            {/* Introduction */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: fluidEase }}
              className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              {profile.summary}
            </motion.p>

            {/* Tactical Career Objective Callout Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: fluidEase }}
              className="mt-6 w-full p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-cyan-500/20 shadow-sm hud-card laser-shimmer"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>// CAREER OBJECTIVE</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{profile.objective}"
              </p>
            </motion.div>

            {/* Location & Quick Meta */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{basicInfo.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-cyan-500" />
                <span>4th Year BSIT Student</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>DNSC 2023 - 2027</span>
              </div>
            </motion.div>

            {/* Call to Actions with Fluid Hover States */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: fluidEase }}
              className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: fluidEase }}
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-600 hover:from-brand-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95 group font-mono"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: fluidEase }}
                onClick={onPrintCV}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-cyan-500/30 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all shadow-sm active:scale-95 hud-card font-mono"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>PRINT CV</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: fluidEase }}
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium text-sm transition-colors font-mono"
              >
                <Send className="w-4 h-4" />
                <span>CONTACT</span>
              </motion.a>
            </motion.div>

            {/* Social Icons row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mr-2">
                CHANNELS:
              </span>
              <motion.a
                whileHover={{ scale: 1.15, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                href={cvData.socials.find(s => s.platform === 'GitHub')?.url || 'https://github.com/Yukata02'}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
                href={cvData.socials.find(s => s.platform === 'LinkedIn')?.url || 'https://linkedin.com'}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${basicInfo.email}`}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-400 hover:border-rose-500 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Column: Kuro Games / PGR Tactical Holographic Avatar Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: fluidEase }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 md:w-96 group">
              
              {/* Outer PGR Holographic Rotating Reticle Ring 1 (Clockwise) with Orbiting Beacon */}
              <div className="absolute -inset-8 pointer-events-none flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-dashed border-cyan-500/30 dark:border-cyan-400/40 animate-spin-slow relative">
                  {/* Orbiting Beacon Node 1 */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-ping" />
                  {/* Orbiting Beacon Node 2 */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#8b5cf6]" />
                </div>
              </div>

              {/* Holographic Counter-Rotating Ring 2 with Ticks (Counter-Clockwise) */}
              <div className="absolute -inset-14 pointer-events-none hidden sm:flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-dotted border-purple-500/30 dark:border-purple-400/35 animate-spin-reverse relative">
                  {/* Orbiting Beacon Node 3 */}
                  <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#00f0ff]" />
                </div>
              </div>

              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700" />
              
              {/* Main Avatar HUD Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 shadow-2xl p-3 hud-card laser-shimmer">
                
                {/* HUD Top Status Bar */}
                <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-slate-100 dark:border-slate-800 text-[10px] font-mono text-cyan-600 dark:text-cyan-400">
                  <span className="flex items-center gap-1">
                    <Crosshair className="w-3 h-3 text-cyan-400" />
                    <span>TARGET.LOCKED</span>
                  </span>
                  <span>ID: YUKATA-02</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80" />
                  
                  {/* Subtle HUD scanline sweep overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

                  {/* Overlay text on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-semibold">
                      // CONSTRUCT: IT STUDENT & DEVELOPER
                    </p>
                    <p className="text-xl font-bold tracking-tight">
                      {profile.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating PGR Badge 1: Top Right */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-cyan-500/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 hud-card"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-800 dark:text-cyan-300">
                  4th Year BSIT
                </span>
              </motion.div>

              {/* Floating PGR Badge 2: Bottom Left */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-purple-500/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 hud-card"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                  3+
                </div>
                <div>
                  <p className="text-[9px] font-mono uppercase text-slate-400 leading-none">Code Mastery</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Years Applied</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

