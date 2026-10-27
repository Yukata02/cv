import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  MapPin, 
  Clock, 
  Sparkles,
  Terminal
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { cvData } from '../data/cvData';

const fluidEase = [0.16, 1, 0.3, 1];

export const Contact: React.FC = () => {
  const { basicInfo, socials } = cvData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setError(null);
    setLoading(true);

    // Simulate async network request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback if canvas is unavailable
      }

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: fluidEase }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-rose-100/80 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-500/30 mb-3.5 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-rose-500" />
            <span>COMMUNICATION TERMINAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Have an internship opening, freelance project, or collaboration in mind? Feel free to reach out via message or professional social channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Connections */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: fluidEase }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/30 shadow-sm hud-card laser-shimmer transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Let's Build Together
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I am actively seeking software engineering and web development opportunities. Open for technical discussions, collaboration, and building impactful digital solutions.
              </p>

              {/* Quick Contact Items */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase text-slate-400">// DIRECT EMAIL</span>
                    <a href={`mailto:${basicInfo.email}`} className="font-semibold text-slate-900 dark:text-white hover:text-cyan-500 font-mono transition-colors">
                      {basicInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase text-slate-400">// RESPONSE WINDOW</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Typically responds within 24 hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase text-slate-400">// CAMPUS / BASE</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{basicInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  // VERIFIED SOCIAL MEDIA LINKS
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map((social) => (
                    <motion.a
                      key={social.platform}
                      whileHover={{ scale: 1.04, y: -2 }}
                      transition={{ duration: 0.2, ease: fluidEase }}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center gap-2.5 group"
                    >
                      <div className="text-slate-600 dark:text-slate-400 group-hover:text-cyan-500 transition-colors">
                        {getSocialIcon(social.platform)}
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-bold text-slate-900 dark:text-white truncate">
                          {social.platform}
                        </span>
                        <span className="block text-[10px] text-slate-400 truncate font-mono">
                          {social.username}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: fluidEase }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/30 shadow-sm hud-card laser-shimmer transition-colors"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-500" />
              <span>Send a Direct Message</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill in your details below and I will get back to you promptly.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: fluidEase }}
                  className="p-8 text-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center mb-3 shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 font-mono">
                    MESSAGE TRANSMITTED!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-4">
                    Thank you for reaching out. Your message has been logged, and I will reply to <span className="font-semibold text-cyan-600 dark:text-cyan-400">{formData.email || 'your email'}</span> shortly.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 shadow-sm"
                  >
                    SEND ANOTHER MESSAGE
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-medium border border-rose-200 dark:border-rose-900 font-mono"
                    >
                      {error}
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maria Santos"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. maria@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Subject / Reason for Inquiry
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Internship Inquiry / Web Development Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your message, project specifications, or collaboration ideas here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none font-mono"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-slate-400 text-center sm:text-left font-mono">
                      // DIRECT TRANSMISSION TO DEVELOPER INBOX
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: fluidEase }}
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-600 hover:from-brand-500 hover:to-cyan-500 text-white font-mono font-bold text-sm transition-all shadow-md shadow-cyan-500/25 active:scale-95 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND MESSAGE</span>
                          <Sparkles className="w-3.5 h-3.5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

