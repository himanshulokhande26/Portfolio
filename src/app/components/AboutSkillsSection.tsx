'use client';

import React from 'react';

const SKILLS = {
  Languages: {
    color: 'bg-secondary',
    items: ['Java', 'Python', 'C++'],
  },
  'Tech Stack': {
    color: 'bg-primary',
    items: [
      'React', 'Node.js', 'HTML', 'CSS', 'MongoDB', 'MySQL',
      'JavaScript', 'TypeScript', 'Tailwind CSS', 'Git', 'GitHub',
      'Postman', 'MS Office', 'Canva', 'Figma',
    ],
  },
  'Core CS': {
    color: 'bg-accent',
    items: ['DSA', 'OOPs', 'DBMS', 'Computer Networks'],
  },
  'Soft Skills': {
    color: 'bg-muted',
    items: ['Communication', 'Problem-Solving', 'Adaptability', 'Learning Agility', 'Teamwork'],
  },
};

export default function AboutSkillsSection() {
  return (
    <section id="about" className="py-20">
      {/* Section header */}
      <div className="section-reveal stagger-1 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
          — Who I Am
        </span>
        <h2 className="text-heading text-3xl sm:text-4xl text-foreground">
          About + Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
        {/* About text */}
        <div className="section-reveal stagger-2">
          <div className="nb-card p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary nb-border flex items-center justify-center">
                <span className="text-heading text-lg text-primary-foreground">H</span>
              </div>
              <div>
                <h3 className="text-heading text-lg text-foreground">Himanshu Lokhande</h3>
                <span className="text-xs text-muted-foreground font-semibold">
                  B.Tech CSE · TIT Bhopal
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              I am a pre-final year B.Tech CSE student (Class of 2027) who enjoys turning complex ideas into clean, functional digital experiences. With hands-on expertise in full-stack web development and AI integration, I build with curiosity, intent, and a focus on delivering polished, production-grade applications.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              My portfolio spans RAG-based AI systems, 3D interactive tools, and real-time collaborative platforms, supported by a growing foundation in cloud technologies like Microsoft Azure and Oracle OCI.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Beyond the screen, my background in public speaking, stand-up comedy, and event hosting equips me with a highly collaborative mindset and strong communication skills. I am seeking a software engineering role where I can blend my technical problem-solving abilities with my passion for building seamless, user-centric end-to-end solutions.
            </p>

            {/* Fun stats row */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { label: 'Projects', value: '4+' },
                { label: 'CGPA', value: '8.1' },
                { label: 'Certs', value: '4+' },
              ]?.map((stat) => (
                <div
                  key={stat?.label}
                  className="nb-border bg-muted p-3 text-center nb-shadow"
                >
                  <div className="text-heading text-2xl text-primary">{stat?.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="section-reveal stagger-3 flex flex-col gap-5">
          {Object.entries(SKILLS)?.map(([category, categoryData], idx) => (
            <div
              key={category}
              className={`nb-card p-4 section-reveal stagger-${idx + 2}`}
            >
              <div className={`inline-flex items-center gap-2 ${categoryData?.color} nb-border px-2 py-1 mb-3`}>
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categoryData?.items?.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}