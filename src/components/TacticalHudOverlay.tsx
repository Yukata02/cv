import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Activity, Radio } from 'lucide-react';

export const TacticalHudOverlay: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mouseCoords, setMouseCoords] = useState({ x: 120, y: 340 });
  const [isPlayingAudioViz, setIsPlayingAudioViz] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle slightly
      setMouseCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden no-print">
      {/* 1. Top Screen Tactical Laser Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 origin-left z-50 shadow-[0_0_12px_rgba(0,240,255,0.8)]"
        style={{ scaleX }}
      />

      {/* 2. Floating Top-Left Corner Tactical Crosshair */}
      <div className="absolute top-24 left-6 hidden xl:flex items-center gap-2 text-[10px] font-mono text-cyan-500/50 dark:text-cyan-400/40 select-none">
        <div className="w-3 h-3 border-t border-l border-cyan-400 animate-pulse" />
        <span>SYS.LOC [DNSC-PH]</span>
      </div>

      {/* 3. Floating Top-Right Corner Decal */}
      <div className="absolute top-24 right-6 hidden xl:flex items-center gap-2 text-[10px] font-mono text-cyan-500/50 dark:text-cyan-400/40 select-none">
        <span>FREQ: 2.40 GHz</span>
        <div className="w-3 h-3 border-t border-r border-cyan-400 animate-pulse" />
      </div>

      {/* 4. Bottom-Left Floating Tactical Equalizer & Coordinates Display */}
      <div className="pointer-events-auto fixed bottom-6 left-6 hidden md:flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/80 dark:bg-[#07090e]/80 border border-slate-200/80 dark:border-cyan-500/30 backdrop-blur-md shadow-xl text-slate-700 dark:text-slate-300 hud-card">
        {/* Animated Equalizer Waveform */}
        <div className="flex items-end gap-1 h-4 w-6">
          <motion.span 
            animate={{ height: isPlayingAudioViz ? ['20%', '100%', '40%', '80%', '20%'] : '20%' }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 bg-cyan-500 rounded-full"
          />
          <motion.span 
            animate={{ height: isPlayingAudioViz ? ['60%', '20%', '100%', '30%', '60%'] : '40%' }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 bg-cyan-400 rounded-full"
          />
          <motion.span 
            animate={{ height: isPlayingAudioViz ? ['30%', '90%', '50%', '100%', '30%'] : '60%' }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 bg-indigo-500 rounded-full"
          />
          <motion.span 
            animate={{ height: isPlayingAudioViz ? ['90%', '40%', '80%', '20%', '90%'] : '30%' }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 bg-purple-500 rounded-full"
          />
        </div>

        {/* Tactical Status & Dynamic Mouse Coordinates */}
        <div className="border-l border-slate-200 dark:border-slate-800 pl-3 font-mono text-[10px] leading-tight">
          <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-bold">
            <Radio className="w-2.5 h-2.5 animate-ping text-cyan-400" />
            <span>PGR TACTICAL HUD // LIVE</span>
          </div>
          <div className="text-slate-400 mt-0.5">
            LOC: X: <span className="text-slate-700 dark:text-slate-200">{String(mouseCoords.x).padStart(3, '0')}</span> | Y: <span className="text-slate-700 dark:text-slate-200">{String(mouseCoords.y).padStart(3, '0')}</span>
          </div>
        </div>

        {/* Toggle Soundwave Animation Button */}
        <button
          onClick={() => setIsPlayingAudioViz(!isPlayingAudioViz)}
          title={isPlayingAudioViz ? "Pause Visualizer Pulse" : "Play Visualizer Pulse"}
          className="p-1 rounded-lg text-slate-400 hover:text-cyan-500 transition-colors"
        >
          <Activity className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
