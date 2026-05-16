import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSkillsSection from './components/AboutSkillsSection';
import EducationAchievementsSection from './components/EducationAchievementsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import LeftNav from '../components/LeftNav';
import BottomNav from '../components/BottomNav';
import FooterSection from '../components/FooterSection';
import ThemeProvider from '../components/ThemeProvider';
import ScrollRevealInit from './components/ScrollRevealInit';

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Left sidebar nav — desktop only */}
        <LeftNav />

        {/* Main content area — offset for left nav on desktop */}
        <main
          id="main-content"
          className="lg:ml-[72px] transition-all duration-300"
        >
          {/* Max-width container */}
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <HeroSection />
            <AboutSkillsSection />
            <EducationAchievementsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
          <FooterSection />
        </main>

        {/* Bottom pill nav — mobile/tablet only */}
        <BottomNav />

        {/* Scroll reveal initializer */}
        <ScrollRevealInit />
      </div>
    </ThemeProvider>
  );
}