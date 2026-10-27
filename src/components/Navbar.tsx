import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cvData } from '../data/cvData';

interface NavbarProps {
  onPrintCV: () => void;
}

const fluidEase = [0.16, 1, 0.3, 1];

export const Navbar: React.FC<NavbarProps> = ({ onPrintCV }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-white/85 dark:bg-[#07090e]/85 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-cyan-500/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Tactical Tag */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform hud-card">
              <Sparkles className="w-5 h-5 text-cyan-200" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-brand-700 dark:from-white dark:via-cyan-200 dark:to-indigo-300 bg-clip-text text-transparent font-mono">
                {cvData.profile.name.split(' ')[0]}
              </span>
              <span className="text-[10px] block text-cyan-600 dark:text-cyan-400 font-mono font-medium tracking-wider">
                // SYS.ARCHIVE
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/80 dark:border-cyan-500/20 backdrop-blur-md font-mono">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow-sm shadow-cyan-500/25 border border-cyan-400/40'
                      : 'text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-300 hover:bg-white/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Theme Toggle & CV Download */}
          <div className="hidden sm:flex items-center gap-3 font-mono">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-cyan-500/30 text-slate-600 dark:text-cyan-300 hover:bg-slate-100 dark:hover:bg-cyan-950/40 transition-colors hud-card"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-cyan-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2, ease: fluidEase }}
              onClick={onPrintCV}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold uppercase rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 active:scale-95 hud-card"
            >
              <Download className="w-4 h-4" />
              <span>PRINT CV</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden font-mono">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-cyan-500/30 text-slate-600 dark:text-cyan-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-cyan-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-slate-200 dark:border-cyan-500/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl font-mono"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onPrintCV();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold uppercase shadow-md shadow-cyan-500/20"
                >
                  <Download className="w-4 h-4" />
                  <span>PRINT CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

