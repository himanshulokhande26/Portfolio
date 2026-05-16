'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [toast, setToast] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({
    show: false,
    type: 'success',
    message: '',
  });

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xldvvobz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setFormState('success');
        form.reset();
        showToast('success', "Message sent! I'll get back to you soon 🎉");
      } else {
        setFormState('error');
        showToast('error', 'Something went wrong. Please try again!');
      }
    } catch {
      setFormState('error');
      showToast('error', 'Network error. Please try again!');
    }

    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <section id="contact" className="py-20">
      {/* Section header */}
      <div className="section-reveal stagger-1 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
          — Let&apos;s Connect
        </span>
        <h2 className="text-heading text-3xl sm:text-4xl text-foreground">
          Contact Me!
        </h2>
        <p className="text-base text-muted-foreground mt-3 font-medium max-w-lg">
          Have a project in mind? Let&apos;s build it together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
        {/* Form */}
        <div className="section-reveal stagger-2">
          <form onSubmit={handleSubmit} className="nb-card p-6 sm:p-8 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="form-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="form-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground">
                Your Message For Me?
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, idea, or just say hi!"
                className="form-input resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground nb-border-4 nb-shadow-xl font-bold px-6 py-3 nb-hover text-sm uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {formState === 'submitting' ? (
                <>
                  <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
                  Sending...
                </>
              ) : formState === 'success' ? (
                <>
                  <Icon name="CheckIcon" size={18} />
                  Sent!
                </>
              ) : (
                <>
                  <Icon name="PaperAirplaneIcon" size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact info sidebar */}
        <div className="section-reveal stagger-3 flex flex-col gap-4 lg:w-64">
          {/* Direct links */}
          {[
            {
              label: 'GitHub',
              value: '@himanshulokhande26',
              href: 'https://github.com/himanshulokhande26',
              bg: 'bg-card',
            },
            {
              label: 'LinkedIn',
              value: 'himanshu-lokhandee',
              href: 'https://www.linkedin.com/in/himanshu-lokhandee-840a78295/',
              bg: 'bg-secondary',
            },
            {
              label: 'Instagram',
              value: '@ftt.himanshuu',
              href: 'https://www.instagram.com/ftt.himanshuu/',
              bg: 'bg-accent',
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.bg} nb-border nb-shadow p-4 nb-hover flex items-center justify-between group`}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                  {link.label}
                </span>
                <span className="text-sm font-bold text-foreground">{link.value}</span>
              </div>
              <Icon
                name="ArrowTopRightOnSquareIcon"
                size={16}
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              />
            </a>
          ))}

          {/* Availability note */}
          <div className="nb-border nb-shadow bg-primary p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground">
                Available
              </span>
            </div>
            <p className="text-xs font-medium text-primary-foreground leading-relaxed">
              Open to internships, collaborations, and freelance projects.
            </p>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {toast.show && (
        <div
          className={`fixed bottom-24 lg:bottom-6 right-6 z-50 nb-border-4 nb-shadow-xl px-5 py-3 max-w-xs font-bold text-sm toast-enter ${
            toast.type === 'success' ? 'bg-accent text-foreground' : 'bg-primary text-primary-foreground'
          }`}
        >
          <div className="flex items-center gap-2">
            {toast.type === 'success' ? (
              <Icon name="CheckCircleIcon" size={18} />
            ) : (
              <Icon name="XCircleIcon" size={18} />
            )}
            {toast.message}
          </div>
        </div>
      )}
    </section>
  );
}