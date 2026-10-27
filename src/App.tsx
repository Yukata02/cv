import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BasicInfo } from './components/BasicInfo';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubShowcase } from './components/GitHubShowcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrintableCV } from './components/PrintableCV';
import { CyberParticles } from './components/CyberParticles';
import { TacticalHudOverlay } from './components/TacticalHudOverlay';

export const App: React.FC = () => {
  const handlePrintCV = () => {
    window.print();
  };

  return (
    <ThemeProvider>
      {/* Interactive Background Particle Field */}
      <CyberParticles />

      {/* Futuristic Tactical HUD Overlay (Laser progress bar, live coordinates, equalizer) */}
      <TacticalHudOverlay />

      {/* Screen Interactive Website */}
      <div className="min-h-screen flex flex-col no-print relative z-10">
        {/* Sticky Header Navigation */}
        <Navbar onPrintCV={handlePrintCV} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Section 1: Personal Profile Hero */}
          <Hero onPrintCV={handlePrintCV} />

          {/* Section 2: Basic Information & Personal Narrative */}
          <BasicInfo />

          {/* Section 3: Education */}
          <Education />

          {/* Section 4: Technical & Professional Skills */}
          <Skills />

          {/* Section 5: Completed Projects Showcase */}
          <Projects />

          {/* Section 6: GitHub Profile & Repositories Spotlight */}
          <GitHubShowcase />

          {/* Section 7: Contact Inquiries, LinkedIn & Social Media Links */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Optimized Print/PDF Layout (Appears exclusively when printing or saving as PDF) */}
      <PrintableCV />
    </ThemeProvider>
  );
};

export default App;
