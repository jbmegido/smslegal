/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        doc: {
          text: '#1a1a1a',
          secondary: '#4a4a4a',
          bg: {
            primary: '#ffffff',
            alt: '#f8f9fa',
            dark: '#f0f0f0'
          },
          border: '#cccccc',
          cta: '#2c3e50',
          link: '#1a1a1a'
        }
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
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
        doc: '680px'
      },
      spacing: {
        'section': '100px',
        'section-inner': '50px'
      }
    }
  },
  plugins: []
}
