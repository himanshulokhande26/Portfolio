'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const NAV_ITEMS = [
  { id: 'hello', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'user' },
  { id: 'projects', label: 'Projects', icon: 'code' },
  { id: 'achievements', label: 'Awards', icon: 'trophy' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];

function NavIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    user: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    code: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    trophy: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
      </svg>
    ),
    mail: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    sun: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
    moon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  };
  return <span className="flex-shrink-0">{icons[name] ?? null}</span>;
}

export default function LeftNav() {
  const [activeSection, setActiveSection] = useState('hello');
  const { theme, toggleTheme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const sectionEls = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="hidden lg:flex fixed left-0 top-0 h-full z-40 flex-col items-stretch bg-background border-r-2 border-border transition-all duration-300"
      style={{ width: expanded ? '180px' : '72px' }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      aria-label="Main navigation"
    >
      {/* Logo / brand */}
      <div className="flex items-center gap-3 px-4 py-5 border-b-2 border-border overflow-hidden">
        <div className="w-9 h-9 bg-primary nb-border flex items-center justify-center flex-shrink-0">
          <span className="text-heading text-base text-primary-foreground">H</span>
        </div>
        {expanded && (
          <span className="text-heading text-sm text-foreground whitespace-nowrap overflow-hidden">
            Himanshu
          </span>
        )}
      </div>

      {/* Nav links */}
      <div className="flex flex-col gap-1 px-2 py-4 flex-1">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`left-nav-item ${activeSection === item.id ? 'active' : ''}`}
            aria-label={item.label}
          >
            <NavIcon name={item.icon} />
            {expanded && (
              <span className="text-sm font-bold whitespace-nowrap overflow-hidden">
                {item.label}
              </span>
            )}
          </a>
        ))}
      </div>

      {/* Theme toggle */}
      <div className="px-2 h-[80px] flex flex-col justify-center border-t-2 border-border">
        <button
          onClick={toggleTheme}
          className="left-nav-item w-full"
          aria-label="Toggle theme"
        >
          <NavIcon name={theme === 'dark' ? 'sun' : 'moon'} />
          {expanded && (
            <span className="text-sm font-bold whitespace-nowrap overflow-hidden">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}