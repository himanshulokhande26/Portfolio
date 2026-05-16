'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  title: string;
  year: string;
  badge: string;
  badgeType: 'winner' | 'mint' | 'orange';
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  sourceUrl: string;
  accentColor: string;
}

const PROJECTS: Project[] = [
{
  title: 'PixelSync',
  year: '2025',
  badge: 'Live Project 🚀',
  badgeType: 'mint',
  description:
  'A pixel-perfect design sync tool that bridges the gap between design and development, enabling seamless collaboration and real-time visual consistency.',
  tech: ['React', 'Node.js', 'CSS'],
  image: "/Pixelsync_thumbnail.png",
  imageAlt:
  'PixelSync interface showing design synchronization dashboard with pixel-perfect layout tools and collaboration features',
  liveUrl: 'https://pixel-sync-mu.vercel.app/',
  sourceUrl: 'https://github.com/himanshulokhande26/PixelSync',
  accentColor: 'bg-accent'
},
{
  title: 'EcoScan',
  year: '2025',
  badge: 'Hackday Winner 🏆',
  badgeType: 'winner',
  description:
  'AI-powered web app using Google Gemini API to classify waste (recyclable, compostable) and suggest eco-friendly disposal methods.',
  tech: ['Flask', 'Gemini API', 'HTML/CSS'],
  image: "/assets/images/Ecoscan.png",
  imageAlt:
  'EcoScan app interface showing waste classification results on a green-themed dashboard, dark background with vibrant data cards',
  liveUrl: 'https://eco-scan-himanshu-hackday.vercel.app/',
  sourceUrl: 'https://github.com/himanshulokhande26/Eco-Scan',
  accentColor: 'bg-accent'
},
{
  title: 'AstroYantra',
  year: '2025',
  badge: 'SIH 2025',
  badgeType: 'mint',
  description:
  'Web platform to generate 2D/3D models of ancient Indian astronomical instruments using real coordinates.',
  tech: ['Three.js', 'React.js', 'Node.js'],
  image: "/assets/images/Astroyantra.png",
  imageAlt:
  'AstroYantra platform displaying a 3D model of an ancient Indian astronomical instrument on a dark starfield background',
  liveUrl: 'https://astroyantra.netlify.app/',
  sourceUrl: 'https://github.com/himanshulokhande26/AstroYantra',
  accentColor: 'bg-secondary'
},
{
  title: 'Smart Curriculum App',
  year: '2024',
  badge: 'MERN Stack',
  badgeType: 'orange',
  description:
  'MERN app for attendance via QR codes and NEP-aligned schedule suggestions. Reduced manual attendance time by 90%.',
  tech: ['MongoDB', 'Express', 'React', 'Node'],
  image: "/assets/images/Attendence.png",
  imageAlt:
  'Smart Curriculum App dashboard showing attendance QR code scanner and schedule management interface on light background',
  liveUrl: 'https://smart-curriculum-attendance-hub.netlify.app/',
  sourceUrl: 'https://github.com/himanshulokhande26/Smart-Curriculum-Attendance-Hub',
  accentColor: 'bg-primary'
}];


function ProjectCard({ project }: {project: Project;}) {
  const badgeClass =
  project.badgeType === 'winner' ? 'badge-winner' :
  project.badgeType === 'mint' ? 'badge-mint' : 'badge-orange';

  return (
    <article className="nb-card overflow-hidden flex flex-col sm:flex-row h-full">
      {/* Image */}
      <div className="overflow-hidden sm:w-2/5 flex-shrink-0">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          width={400}
          height={300}
          className="w-full object-cover border-b-2 sm:border-b-0 border-border sm:h-full sm:border-r-2 h-52" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-heading text-xl text-foreground leading-tight">
              {project.title}
            </h3>
            <span className="text-xs text-muted-foreground font-semibold">{project.year}</span>
          </div>
          <span className={badgeClass}>{project.badge}</span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) =>
          <span
            key={t}
            className="text-xs font-bold px-2 py-0.5 nb-border bg-muted text-foreground">
            {t}
          </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground nb-border nb-shadow font-bold text-xs px-3 py-2 nb-hover uppercase tracking-wide">
            <Icon name="ArrowTopRightOnSquareIcon" size={14} />
            Live Demo
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-card text-foreground nb-border nb-shadow font-bold text-xs px-3 py-2 nb-hover uppercase tracking-wide">
            <Icon name="CodeBracketIcon" size={14} />
            Source
          </a>
        </div>
      </div>
    </article>);
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  // 'next' = card flies up-left out, 'prev' = card flies down-right out
  const [animDir, setAnimDir] = useState<'next' | 'prev'>('next');
  // Which card index is currently flying out
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const accumulatedDelta = useRef(0);
  const SCROLL_THRESHOLD = 80;

  const goNext = useCallback(() => {
    if (animating) return;
    setAnimDir('next');
    setExitingIndex(activeIndex);
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
      setExitingIndex(null);
      setAnimating(false);
    }, 420);
  }, [animating, activeIndex]);

  const goPrev = useCallback(() => {
    if (animating) return;
    setAnimDir('prev');
    setExitingIndex(activeIndex);
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
      setExitingIndex(null);
      setAnimating(false);
    }, 420);
  }, [animating, activeIndex]);

  // Wheel handler — attached directly to section element with passive:false
  // so we can call preventDefault() and stop page scroll propagation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const inView =
      rect.top <= window.innerHeight * 0.6 &&
      rect.bottom >= window.innerHeight * 0.4;

      if (!inView) return;

      // Prevent the page from scrolling while we handle it
      e.preventDefault();
      e.stopPropagation();

      accumulatedDelta.current += e.deltaY;

      if (Math.abs(accumulatedDelta.current) >= SCROLL_THRESHOLD) {
        if (accumulatedDelta.current > 0) {
          goNext();
        } else {
          goPrev();
        }
        accumulatedDelta.current = 0;
      }
    };

    // passive: false is required to allow preventDefault()
    section.addEventListener('wheel', handleWheel, { passive: false });
    return () => section.removeEventListener('wheel', handleWheel);
  }, [goNext, goPrev]);

  // Touch support
  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 40) {
        if (diff > 0) goNext();else goPrev();
      }
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goNext, goPrev]);

  // Build stack order: offset 0 = top card, 1 = second, 2 = third
  const stackOrder = PROJECTS.map((_, i) => {
    const offset = (i - activeIndex + PROJECTS.length) % PROJECTS.length;
    return { project: PROJECTS[i], index: i, offset };
  }).sort((a, b) => b.offset - a.offset); // render back cards first (lower z)

  return (
    <section id="projects" className="py-20" ref={sectionRef}>
      {/* Section header */}
      <div className="section-reveal stagger-1 flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
            — What I&apos;ve Built
          </span>
          <h2 className="text-heading text-3xl sm:text-4xl text-foreground">Projects</h2>
        </div>
        <a
          href="https://github.com/himanshulokhande26"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 nb-border nb-shadow bg-card px-4 py-2 text-sm font-bold nb-hover">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View All on GitHub
        </a>
      </div>

      {/* Stacked card deck */}
      <div className="flex gap-6 items-start">
        {/* Left counter */}
        <div className="flex flex-col items-center gap-3 flex-shrink-0 pt-4">
          {/* Up arrow */}
          <button
            onClick={goPrev}
            className="nb-border bg-card nb-shadow nb-hover w-9 h-9 flex items-center justify-center text-foreground"
            aria-label="Previous project">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>

          {/* Counter numbers */}
          <div className="flex flex-col items-center gap-1">
            {PROJECTS.map((_, i) =>
            <button
              key={i}
              onClick={() => {
                if (!animating && i !== activeIndex) {
                  const dir = i > activeIndex ? 'next' : 'prev';
                  setAnimDir(dir);
                  setExitingIndex(activeIndex);
                  setAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(i);
                    setExitingIndex(null);
                    setAnimating(false);
                  }, 420);
                }
              }}
              className={`w-9 h-9 nb-border font-bold text-sm transition-all duration-300 ${
              i === activeIndex ?
              'bg-primary text-primary-foreground nb-shadow scale-110' :
              'bg-card text-muted-foreground nb-hover'}`}
              aria-label={`Go to project ${i + 1}`}>
              {String(i + 1).padStart(2, '0')}
            </button>
            )}
          </div>

          {/* Down arrow */}
          <button
            onClick={goNext}
            className="nb-border bg-card nb-shadow nb-hover w-9 h-9 flex items-center justify-center text-foreground"
            aria-label="Next project">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {/* Scroll hint */}
          <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-2 [writing-mode:vertical-rl] rotate-180 select-none">
            scroll
          </span>
        </div>

        {/* Card stack */}
        <div className="relative flex-1" style={{ height: '340px' }}>
          {stackOrder.map(({ project, index, offset }) => {
            const isTop = offset === 0;
            const isSecond = offset === 1;
            const isThird = offset === 2;
            const isExiting = index === exitingIndex;

            // Base stack positions
            let translateY = 0;
            let translateX = 0;
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;
            let rotate = 0;

            if (isTop) {
              translateY = 0;translateX = 0;scale = 1;zIndex = 30;opacity = 1;rotate = 0;
            } else if (isSecond) {
              translateY = 14;translateX = 12;scale = 0.96;zIndex = 20;opacity = 0.88;rotate = 1;
            } else if (isThird) {
              translateY = 28;translateX = 24;scale = 0.92;zIndex = 10;opacity = 0.65;rotate = 2;
            } else {
              translateY = 42;translateX = 36;scale = 0.88;zIndex = 5;opacity = 0;rotate = 3;
            }

            // Exit animation: top card flies out
            let exitTranslateY = translateY;
            let exitTranslateX = translateX;
            let exitOpacity = opacity;
            let exitScale = scale;
            let exitRotate = rotate;

            if (isExiting && animating) {
              if (animDir === 'next') {
                // Fly up and slightly left with a tilt
                exitTranslateY = -120;
                exitTranslateX = -30;
                exitOpacity = 0;
                exitScale = 0.85;
                exitRotate = -8;
              } else {
                // Fly down and slightly right
                exitTranslateY = 120;
                exitTranslateX = 30;
                exitOpacity = 0;
                exitScale = 0.85;
                exitRotate = 8;
              }
            }

            return (
              <div
                key={project.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  transform: `translateY(${isExiting && animating ? exitTranslateY : translateY}px) translateX(${isExiting && animating ? exitTranslateX : translateX}px) scale(${isExiting && animating ? exitScale : scale}) rotate(${isExiting && animating ? exitRotate : rotate}deg)`,
                  zIndex,
                  opacity: isExiting && animating ? exitOpacity : opacity,
                  transition: isExiting && animating ?
                  'transform 0.42s cubic-bezier(0.55, 0, 0.85, 0.3), opacity 0.35s ease-out' :
                  'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease',
                  transformOrigin: 'top center',
                  height: '300px',
                  willChange: 'transform, opacity'
                }}>
                <div style={{ height: '100%' }}>
                  <ProjectCard project={project} />
                </div>
              </div>);

          })}
        </div>
      </div>

      {/* Mobile swipe hint */}
      <p className="text-xs text-muted-foreground text-center mt-6 sm:hidden">
        Swipe up/down to browse projects
      </p>
    </section>);

}