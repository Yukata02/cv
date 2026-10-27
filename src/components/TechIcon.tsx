import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Users, 
  CheckCircle2, 
  Smartphone,
  Box
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
  const normalized = name.toLowerCase();

  // HTML5
  if (normalized.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 3l1.8 16.2L12 21l6.2-1.8L20 3H4z" fill="#E34F26" stroke="none" />
        <path d="M12 4.6v14.7l4.7-1.3 1.4-12.4H12z" fill="#EF652A" stroke="none" />
        <path d="M8.2 7.7h7.6l-.3 2.8h-7l.3 2.8h6.4l-.5 5.5-2.7.8-2.7-.8-.2-2.1H7.5l.3 3.8 4.2 1.2 4.2-1.2.6-7H8l-.2-2z" fill="#FFFFFF" stroke="none" />
      </svg>
    );
  }

  // CSS3
  if (normalized.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.8 16.2L12 21l6.2-1.8L20 3H4z" fill="#1572B6" />
        <path d="M12 4.6v14.7l4.7-1.3 1.4-12.4H12z" fill="#33A9DC" />
        <path d="M8.2 7.7h7.6l-.3 2.8h-7l.3 2.8h6.4l-.5 5.5-2.7.8-2.7-.8-.2-2.1H7.5l.3 3.8 4.2 1.2 4.2-1.2.6-7H8l-.2-2z" fill="#FFFFFF" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M6.5 17.5c.7.9 1.6 1.4 2.8 1.4 1.5 0 2.5-.8 2.5-2.7v-7.3H9.7v7.2c0 .9-.4 1.3-1.1 1.3-.6 0-1-.3-1.3-.7l-.8.8zm8.1.1c.9.8 2.1 1.3 3.5 1.3 2.2 0 3.6-1.1 3.6-2.9 0-1.6-1-2.4-2.8-3.1-.9-.4-1.4-.7-1.4-1.3 0-.6.5-1 1.3-1 .8 0 1.4.3 1.9.8l.8-.8c-.7-.7-1.6-1.1-2.7-1.1-1.9 0-3.3 1.1-3.3 2.7 0 1.5 1 2.3 2.7 3 .9.4 1.5.8 1.5 1.4 0 .7-.6 1.2-1.6 1.2-1 0-1.8-.4-2.4-1.1l-1.1 1z" fill="#000000" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M4 9.5h6v1.8H7.9V18H6.1v-6.7H4V9.5zm9 5.8c.8.7 1.8 1.1 3 1.1 1.5 0 2.4-.7 2.4-1.7 0-1.1-.9-1.6-2.2-2.1-1.7-.6-3.2-1.2-3.2-3.2 0-1.8 1.5-3.1 3.7-3.1 1.3 0 2.4.4 3.2 1.1l-.8 1.4c-.7-.5-1.5-.8-2.4-.8-1.1 0-1.8.6-1.8 1.4 0 .9.7 1.3 2 1.8 1.8.7 3.3 1.4 3.3 3.5 0 2-1.6 3.4-4.2 3.4-1.5 0-2.8-.5-3.8-1.4l.8-1.4z" fill="#FFFFFF" />
      </svg>
    );
  }

  // React
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  // Vue
  if (normalized.includes('vue')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M2 3h4.5L12 13.5 17.5 3H22L12 21 2 3z" fill="#42B883" />
        <path d="M6.5 3H10L12 6.5 14 3h3.5L12 12.5 6.5 3z" fill="#35495E" />
      </svg>
    );
  }

  // Three.js / 3D
  if (normalized.includes('three') || normalized.includes('webgl') || normalized.includes('3d')) {
    return (
      <div className={`flex items-center justify-center rounded-md bg-slate-900 text-white font-bold text-[10px] ${className}`}>
        <Box className="w-4 h-4 text-purple-400" />
      </div>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5 1 .3 1.8 1.1 2.6 2 1.3 1.4 2.8 3 6.4 3 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-1-.3-1.8-1.1-2.6-2C17.1 7.6 15.6 6 12 6zm-7 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5 1 .3 1.8 1.1 2.6 2 1.3 1.4 2.8 3 6.4 3 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-1-.3-1.8-1.1-2.6-2C10.1 13.6 8.6 12 5 12z" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2l10 5.8v11.5L12 25 2 19.3V7.8L12 2zm0 2.3L4 8.9v9.2l8 4.6 8-4.6V8.9l-8-4.6z" />
        <path d="M11 9h2v6h-2zm-3 2h2v4H8zm6 0h2v4h-2z" />
      </svg>
    );
  }

  // Express
  if (normalized.includes('express')) {
    return (
      <div className={`flex items-center justify-center rounded bg-slate-800 text-white font-mono text-[9px] font-bold ${className}`}>
        ex
      </div>
    );
  }

  // PostgreSQL / SQL / MySQL / Database
  if (normalized.includes('postgres') || normalized.includes('sql') || normalized.includes('mysql') || normalized.includes('database')) {
    return (
      <div className="text-blue-500">
        <Database className={className} />
      </div>
    );
  }

  // MongoDB
  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#47A248">
        <path d="M12 2C8 7 7 13 12 22c5-9 4-15 0-20zm0 2.5c2.5 4 3 9 0 14.5-3-5.5-2.5-10.5 0-14.5z" />
      </svg>
    );
  }

  // Firebase / Supabase
  if (normalized.includes('firebase') || normalized.includes('supabase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FFCA28">
        <path d="M4 18l3-14 4 6-3 8H4zm6-2l3-11 5 13-8-2zm5 2l5-9-1.5 7L15 18z" />
      </svg>
    );
  }

  // Git & GitHub
  if (normalized.includes('git') && !normalized.includes('hub')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.8 4.6l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.2.3.4.3.7 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.3-1.1.8-1.3V8.8c-.5-.2-.8-.7-.8-1.3 0-.4.1-.7.4-1L7.7 3.5 2.4 8.8c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.5c.6-.6.6-1.5 0-2z" />
      </svg>
    );
  }

  if (normalized.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  // Vite
  if (normalized.includes('vite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M19.8 4L12.5 17.4c-.2.4-.8.4-1 0L4.2 4c-.3-.5.1-1.1.7-.9l7.1 2.4L19.1 3c.6-.2 1 .4.7 1z" fill="#BD34FE" />
        <path d="M13.2 2l-6.8 2.4c-.6.2-1 .8-.7 1.4l5.3 16.2c.2.5.9.5 1.1 0l5.8-17.6c.2-.6-.2-1.2-.8-1.4L13.2 2z" fill="#41D1FF" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13 8h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm6 6h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4z" />
        <path d="M22.5 12.5c-.5-.4-1.4-.4-1.9 0-.2.2-.4.4-.5.7-.7-.3-1.6-.3-2.1.2-.4.4-.5 1-.2 1.5-.7.4-1.3 1-1.6 1.8-.8-.2-1.8-.1-2.4.4-.3.2-.5.5-.6.9H1c-.3 1.8.2 3.6 1.4 4.8 1.5 1.6 3.7 2.2 6.1 2.2 6.5 0 11.2-4.1 12.3-9.4.6-.2 1.2-.7 1.5-1.3.4-.6.4-1.4.2-1.8z" />
      </svg>
    );
  }

  // Figma
  if (normalized.includes('figma')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M8 2h4v5H8a2.5 2.5 0 010-5z" fill="#F24E1E" />
        <path d="M12 2h4a2.5 2.5 0 010 5h-4V2z" fill="#FF7262" />
        <path d="M8 7h4v5H8a2.5 2.5 0 010-5z" fill="#A259FF" />
        <path d="M12 7h4a2.5 2.5 0 110 5h-4V7z" fill="#1ABCFE" />
        <path d="M8 12h4v5a2.5 2.5 0 01-5 0 2.5 2.5 0 011-2.5V12z" fill="#0ACF83" />
      </svg>
    );
  }

  // Postman
  if (normalized.includes('postman') || normalized.includes('api')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF6C37">
        <circle cx="12" cy="12" r="10" />
        <path d="M15 8l-5 4 5 4V8z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Vercel / Deployment
  if (normalized.includes('vercel') || normalized.includes('deploy')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1z" />
      </svg>
    );
  }

  // VS Code
  if (normalized.includes('code') || normalized.includes('ide')) {
    return (
      <div className="text-blue-500">
        <Code2 className={className} />
      </div>
    );
  }

  // Responsive / Mobile
  if (normalized.includes('responsive') || normalized.includes('mobile')) {
    return (
      <div className="text-indigo-500">
        <Smartphone className={className} />
      </div>
    );
  }

  // Soft Skills / Teamwork / Problem Solving
  if (normalized.includes('team') || normalized.includes('people') || normalized.includes('collaborat')) {
    return (
      <div className="text-emerald-500">
        <Users className={className} />
      </div>
    );
  }

  if (normalized.includes('problem') || normalized.includes('analytic') || normalized.includes('logic')) {
    return (
      <div className="text-amber-500">
        <Cpu className={className} />
      </div>
    );
  }

  if (normalized.includes('communicat') || normalized.includes('public')) {
    return (
      <div className="text-purple-500">
        <Globe className={className} />
      </div>
    );
  }

  // Default fallback
  return (
    <div className="text-brand-500">
      <CheckCircle2 className={className} />
    </div>
  );
};
