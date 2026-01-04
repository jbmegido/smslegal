# Deployment Checklist - SMS Legal Landing

## ✅ Pre-Deployment Verification

### Files & Structure
- [x] 10 content sections in `/src/content/sections/` (00-09)
- [x] Content Collections schema with Zod validation (`/src/content/config.ts`)
- [x] All components created (5 components)
- [x] All pages created (index, privacidad, terminos, 404)
- [x] Base layout with SEO tags
- [x] Tailwind config with custom colors
- [x] Global CSS with variables
- [x] Favicon.svg
- [x] robots.txt
- [x] netlify.toml configuration
- [x] Comprehensive README.md

### Build Verification
- [x] `npm run build` completes successfully
- [x] `npx astro check` passes with 0 errors
- [x] Sitemap generated (`sitemap-index.xml`, `sitemap-0.xml`)
- [x] All pages rendered correctly in `/dist`
- [x] Schema.org JSON-LD included in index.html

### Content Verification
- [x] Section 00: Encabezado - SMS Infrastructure intro
- [x] Section 01: Marco Legal - RGPD/LSSI regulations
- [x] Section 02: Definición del Servicio - Service definition table
- [x] Section 03: Criterios de Admisión - Admission criteria with ✓/✗
- [x] Section 04: Responsabilidad - Client responsibility declaration
- [x] Section 05: Especificaciones - Technical specs and pricing (199€/mes)
- [x] Section 06: Proceso Activación - Activation process
- [x] Section 07: Cancelación - Cancellation policy
- [x] Section 08: Acceso CTA - Access form section
- [x] Section 09: Pie Legal - Legal footer with contact info

### Form Configuration
- [x] Netlify Forms markup in place (`data-netlify="true"`)
- [x] Honeypot field (`bot-field`) included
- [x] All required fields with validation
- [x] Prequalification selects (tipo negocio, origen lista, volumen)
- [x] Required checkboxes with RGPD declarations

### SEO & Schema.org
- [x] Title and meta description optimized
- [x] Canonical URLs configured
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Schema.org ProfessionalService JSON-LD
- [x] Schema.org Offer JSON-LD (199€ plan)
- [x] Sitemap auto-generated
- [x] robots.txt with sitemap reference

### Styling & Typography
- [x] IBM Plex Sans, Serif, Mono loaded from Google Fonts
- [x] Custom CSS variables for doc colors
- [x] Tailwind custom classes configured
- [x] Responsive design (mobile-first)
- [x] Background colors alternating (primary/alt/dark)
- [x] Discrete separators (1px border)
- [x] Typography sizing (26-34px headings, 16px body, 14px mono)

### Accessibility & Performance
- [x] Semantic HTML5 elements
- [x] Proper heading hierarchy
- [x] Color contrast meets WCAG standards
- [x] No JavaScript runtime (pure SSG)
- [x] Forms accessible with labels
- [x] Keyboard navigable

## 🚀 Netlify Deployment Steps

### Method 1: Git-based Deployment (Recommended)

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "feat: Complete SMS Legal landing page implementation"
   git push origin feat-landing-sms-legal-astro4-tailwind-netlify
   ```

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select the repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Deploy!

3. **Configure Form Notifications** (Post-deployment)
   - Go to Site settings → Forms
   - Add notification email: **legal@smslegal.es**
   - Enable spam filtering
   - (Optional) Add Slack/Zapier integrations

4. **Configure Custom Domain** (Optional)
   - Site settings → Domain management
   - Add custom domain: `smslegal.es`
   - Update DNS records as instructed
   - HTTPS certificate auto-provisioned

### Method 2: Manual Drag & Drop

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `/dist` folder
   - Site deployed instantly!

3. **Configure form notifications** (same as above)

### Method 3: Netlify CLI

```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy to production
netlify deploy --prod
```

## 📧 Post-Deployment Configuration

### 1. Form Email Setup
- Navigate to: Site settings → Forms → Form notifications
- Add email notification to: **legal@smslegal.es**
- Subject line: "Nueva solicitud de acceso SMS Legal"
- Enable spam filtering (honeypot already in place)

### 2. Environment Variables (if needed)
Currently no env vars required, but for future:
- Site settings → Environment variables

### 3. Custom Domain (Optional)
- Add domain: `smslegal.es`
- DNS Configuration:
  - A record: `104.198.14.52` (Netlify load balancer)
  - CNAME for www: `[your-site].netlify.app`

### 4. SSL/HTTPS
- Automatically provisioned by Netlify
- No action required

## 🧪 Post-Deployment Testing

### Functional Testing
- [ ] Homepage loads correctly (`https://[site].netlify.app`)
- [ ] Privacy page accessible (`/privacidad`)
- [ ] Terms page accessible (`/terminos`)
- [ ] 404 page works for invalid URLs
- [ ] Form submission works (test with real email)
- [ ] Form validation prevents empty submissions
- [ ] Honeypot field is hidden
- [ ] Sitemap accessible (`/sitemap-index.xml`)
- [ ] Robots.txt accessible (`/robots.txt`)
- [ ] All internal links work

### SEO Testing
- [ ] Google Rich Results Test: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] Schema.org validator: [validator.schema.org](https://validator.schema.org)
- [ ] Open Graph preview: [opengraph.xyz](https://www.opengraph.xyz)

### Performance Testing
- [ ] Lighthouse audit (target: 100/100/100/100)
- [ ] PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] Load time < 1s (with CDN)

### Accessibility Testing
- [ ] WAVE accessibility checker: [wave.webaim.org](https://wave.webaim.org)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible

### Print/PDF Testing
- [ ] Browser print preview looks professional
- [ ] PDF export maintains formatting
- [ ] All content visible in print version

## 🔍 Troubleshooting

### Form submissions not working
1. Check Netlify dashboard → Forms → Active forms
2. Verify `data-netlify="true"` in form markup
3. Ensure form `name` attribute matches hidden input
4. Check spam folder for notifications

### Build fails
1. Check build logs in Netlify dashboard
2. Verify `npm run build` works locally
3. Check Node version (should be 18)
4. Clear build cache and retry

### Styles not loading
1. Check Tailwind config paths
2. Verify global.css import in layout
3. Clear browser cache

### 404s for pages
1. Check `_redirects` file generated by Netlify adapter
2. Verify pages exist in `/dist` after build
3. Check for trailing slashes in URLs

## 📊 Analytics (Optional)

**Current Implementation: NO ANALYTICS** (by design - privacy-first)

If analytics needed in future:
- Use privacy-focused alternatives: Plausible, Fathom, Simple Analytics
- Update privacy policy accordingly
- Add cookie consent banner if tracking cookies used

## 🎯 Success Criteria

✅ **Technical**
- Build completes without errors
- Lighthouse scores all 100
- All pages render correctly
- Forms functional

✅ **Content**
- All 10 sections present
- Legal copy accurate
- Contact info correct (legal@smslegal.es)
- Tone: institutional, no marketing

✅ **Legal/Compliance**
- RGPD compliant
- LSSI compliant
- No tracking without consent
- Privacy policy accessible
- Terms accessible

✅ **Business**
- Can be sent to lawyer
- Can be printed as PDF
- Professional appearance
- Clear CTAs

---

**Deployment completed when all checklist items marked ✅**

Last updated: January 2025
