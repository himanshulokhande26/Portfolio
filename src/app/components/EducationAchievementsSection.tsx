'use client';

import React from 'react';

const EDUCATION = [
  {
    period: '2023 – 2027',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Technocrats Institute of Technology, Bhopal',
    detail: 'Current CGPA: 8.1',
    accent: 'bg-primary',
    accentText: 'text-primary-foreground',
  },
  {
    period: '2022 – 2023',
    degree: 'Senior Secondary (Class XII)',
    institution: "St. Paul's Co-Ed School, Bhopal",
    detail: 'Science Stream',
    accent: 'bg-secondary',
    accentText: 'text-foreground',
  },
  {
    period: '2020 – 2021',
    degree: 'Secondary (Class X)',
    institution: "St. Paul's Co-Ed School, Bhopal",
    detail: '',
    accent: 'bg-accent',
    accentText: 'text-foreground',
  },
];

const ACHIEVEMENTS = [
  {
    year: '2026',
    title: 'Microsoft Azure AZ-900 Certification',
    detail: 'Microsoft Certified: Azure Fundamentals',
    accent: 'bg-primary',
    accentText: 'text-primary-foreground',
    icon: '/assets/AZURE.svg',
  },
  {
    year: '2025',
    title: 'Oracle Cloud Infrastructure Certified',
    detail: 'Foundations Associate Certification',
    accent: 'bg-accent',
    accentText: 'text-foreground',
    icon: '/assets/OCI.svg',
  },
  {
    year: '2025',
    title: 'ICACIT — 2K25 Host',
    detail: '2nd International Conference on Advancement in Computational Intelligence',
    accent: 'bg-secondary',
    accentText: 'text-foreground',
    icon: '/assets/MIKE.svg',
  },
  {
    year: '2025',
    title: 'DBMS Elite — IIT Kharagpur',
    detail: 'NPTEL Certification with Elite Grades',
    accent: 'bg-primary',
    accentText: 'text-primary-foreground',
    icon: '/assets/DBMS.svg',
  },
  {
    year: '2024',
    title: '1st Position — Hack to Crack',
    detail: 'Cybersecurity Fundamentals Competition',
    accent: 'bg-secondary',
    accentText: 'text-foreground',
    icon: '/assets/TROPHY.svg',
  },
];

function EducationTimeline({
  items,
}: {
  items: typeof EDUCATION;
}) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4 items-stretch group">
          {/* Left: index + accent bar */}
          <div className="flex flex-col items-center gap-0 flex-shrink-0">
            <div
              className={`${item.accent} nb-border w-10 h-10 flex items-center justify-center font-bold text-sm ${item.accentText} flex-shrink-0`}
              style={{ minWidth: '2.5rem' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            {i < items.length - 1 && (
              <div className="w-0.5 flex-1 bg-border mt-1" />
            )}
          </div>
          {/* Right: content */}
          <div className="nb-card p-4 flex-1 mb-4 nb-hover">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">
              {item.period}
            </span>
            <h4 className="text-heading text-base text-foreground leading-tight mb-1">
              {item.degree}
            </h4>
            <p className="text-sm text-muted-foreground font-medium">{item.institution}</p>
            {item.detail && (
              <span
                className={`inline-block mt-2 text-xs font-bold px-2 py-0.5 nb-border ${item.accent} ${item.accentText}`}
              >
                {item.detail}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function AchievementsList({ items }: { items: typeof ACHIEVEMENTS }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="nb-card nb-hover flex items-start gap-4 p-4"
        >
          {/* Icon badge */}
          <div
            className={`${item.accent} nb-border w-10 h-10 flex items-center justify-center flex-shrink-0 overflow-hidden`}
          >
            {item.icon.startsWith('/') ? (
              <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
            ) : (
              <span className="text-lg">{item.icon}</span>
            )}
          </div>
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h4 className="text-heading text-sm text-foreground leading-tight">
                {item.title}
              </h4>
              <span className="text-xs font-bold text-muted-foreground ml-auto flex-shrink-0">
                {item.year}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EducationAchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      {/* Section header */}
      <div className="section-reveal stagger-1 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
          — Background & Wins
        </span>
        <h2 className="text-heading text-3xl sm:text-4xl text-foreground">
          Education + Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Education */}
        <div className="section-reveal stagger-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-secondary nb-border px-3 py-1.5 nb-shadow">
              <span className="text-heading text-sm text-foreground uppercase tracking-wide">
                Education
              </span>
            </div>
          </div>
          <EducationTimeline items={EDUCATION} />
        </div>

        {/* Achievements */}
        <div className="section-reveal stagger-3">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary nb-border px-3 py-1.5 nb-shadow">
              <span className="text-heading text-sm text-primary-foreground uppercase tracking-wide">
                Achievements
              </span>
            </div>
          </div>
          <AchievementsList items={ACHIEVEMENTS} />
        </div>
      </div>
    </section>
  );
}