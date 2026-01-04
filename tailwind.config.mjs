/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'doc-text': '#1a1a1a',
        'doc-secondary': '#4a4a4a',
        'doc-bg-primary': '#ffffff',
        'doc-bg-alt': '#f8f9fa',
        'doc-bg-dark': '#f0f0f0',
        'doc-border': '#cccccc',
        'doc-cta': '#2c3e50',
        'doc-link': '#1a1a1a'
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['IBM Plex Serif', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'Courier New', 'monospace']
      },
      fontSize: {
        'doc-body': ['16px', { lineHeight: '1.7' }],
        'doc-heading': ['26px', { lineHeight: '1.3' }],
        'doc-subheading': ['20px', { lineHeight: '1.4' }],
        'doc-mono': ['14px', { lineHeight: '1.6' }]
      },
      maxWidth: {
        'doc': '680px'
      },
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
        'section': '5rem'
      },
      padding: {
        'section': '5rem'
      },
      margin: {
        'section': '5rem'
      }
    }
  },
  plugins: []
}
