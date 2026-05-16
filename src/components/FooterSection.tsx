import React from 'react';

export default function FooterSection() {
  return (
    <footer className="border-t-2 border-border mt-8 h-[80px] flex items-center px-4 sm:px-6 relative">
      {/* Centered text */}
      <div className="absolute left-1/2 -translate-x-1/2 w-max max-w-[60%] text-center pointer-events-none hidden sm:block">
        <p className="text-sm font-semibold text-foreground">
          Thank you for scrolling this far 🩵 Designed and built with care by Himanshu!!!
        </p>
      </div>
      
      {/* Mobile-only centered text */}
      <div className="absolute left-4 right-[160px] pointer-events-none sm:hidden">
        <p className="text-xs font-semibold text-foreground truncate">
          Thank you for scrolling this far 🩵 Designed and built with care by Himanshu!!!
        </p>
      </div>

      {/* Right corner */}
      <div className="w-full flex items-center justify-end z-10 relative">
        <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground font-bold">
          <a href="#hello" className="hover:text-primary transition-colors uppercase tracking-wide pointer-events-auto">
            Back to Top
          </a>
          <span className="nb-border px-2 py-0.5 bg-muted text-foreground pointer-events-auto">
            © 2025
          </span>
        </div>
      </div>
    </footer>
  );
}