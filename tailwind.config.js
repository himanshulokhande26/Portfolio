/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'var(--radius)',
        md: 'var(--radius)',
        lg: 'var(--radius)',
        xl: 'var(--radius)',
        '2xl': 'var(--radius)',
        full: '9999px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        syne: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        nb: '4px 4px 0px var(--border)',
        'nb-lg': '6px 6px 0px var(--border)',
        'nb-xl': '8px 8px 0px var(--border)',
        'nb-primary': '4px 4px 0px var(--primary)',
        'nb-secondary': '4px 4px 0px var(--secondary)',
        'nb-accent': '4px 4px 0px var(--accent)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};