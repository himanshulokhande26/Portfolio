'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const TYPEWRITER_STRINGS = [
'Computer Science Student.',
'Full Stack Developer.',
'UI/UX Enthusiast.',
'Problem Solver.'];


export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentString = TYPEWRITER_STRINGS[stringIndex];
    const typingSpeed = isDeleting ? 50 : 90;
    const pauseDelay = 1800;

    if (!isDeleting && charIndex === currentString.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDelay);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % TYPEWRITER_STRINGS.length);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayText(currentString.slice(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, stringIndex]);

  return (
    <section
      id="hello"
      className="min-h-screen flex flex-col justify-center py-20 lg:py-0">
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
        {/* Left: Text content */}
        <div className="section-reveal stagger-1">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 nb-border nb-shadow bg-accent px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-foreground">
              Open to Opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-heading text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 text-foreground">
            Hello, I&apos;m Himanshu.
          </h1>

          {/* Typewriter */}
          <div className="text-heading text-xl sm:text-2xl lg:text-3xl text-primary mb-6 min-h-[2em] typewriter-cursor">
            {displayText}
          </div>

          {/* Description */}
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8 font-medium">
            Engineering clean experiences powered by curiosity, clarity, and just enough
            rebellion to turn ideas into real, meaningful projects.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/Himanshu_resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground nb-border-4 nb-shadow-xl font-bold px-6 py-3 nb-hover text-sm uppercase tracking-wide">
              
              <Icon name="ArrowDownTrayIcon" size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-background text-foreground nb-border-4 nb-shadow font-bold px-6 py-3 nb-hover text-sm uppercase tracking-wide">
              
              <Icon name="ChatBubbleLeftIcon" size={18} />
              Say Hello
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 mt-8">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Find me on
            </span>
            <div className="flex gap-2">
              <a
                href="https://github.com/himanshulokhande26"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="nb-border nb-shadow p-2 bg-card nb-hover inline-flex">
                
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/himanshu-lokhandee-840a78295/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="nb-border nb-shadow p-2 bg-card nb-hover inline-flex">
                
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ftt.himanshuu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="nb-border nb-shadow p-2 bg-card nb-hover inline-flex">
                
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Profile photo card */}
        <div className="flex justify-center lg:justify-end section-reveal stagger-2">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Offset shadow block */}
            <div
              className="absolute inset-0 bg-secondary nb-border-4"
              style={{ transform: 'translate(8px, 8px)' }} />
            
            {/* Profile image */}
            <div className="relative rotate-neg2 nb-border-4 overflow-hidden profile-card-hover w-full h-full">
              <AppImage
                src="/Himanshu_profile.jpg"
                alt="Himanshu Lokhande, Computer Science student and Full Stack Developer, smiling portrait"
                fill
                className="object-cover"
                priority />
              
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 bg-primary nb-border-4 nb-shadow px-3 py-2 z-10"
              style={{ transform: 'rotate(2deg)' }}>
              
              <span className="text-heading text-xs text-primary-foreground uppercase tracking-wider">
                Full Stack Dev
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-16 lg:mt-12">
        <a
          href="#projects"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to projects">
          
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <Icon name="ChevronDownIcon" size={20} className="animate-bounce" />
        </a>
      </div>
    </section>);

}