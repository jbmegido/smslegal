# SMS Legal - Landing Institucional

Landing page institucional para servicio de infraestructura SMS con tono de informe de riesgos y memorando técnico. Implementado con Astro 4 SSG puro, Tailwind CSS y Content Collections.

## 🚀 Stack Técnico

- **Framework**: Astro 4 (Static Site Generation)
- **Estilos**: Tailwind CSS 4 con custom properties
- **Contenido**: Astro Content Collections con validación Zod
- **Formularios**: Netlify Forms con prequalificación
- **Deploy**: Netlify (CDN global, custom domain, HTTPS automático)
- **Tipografía**: IBM Plex Sans, IBM Plex Serif, IBM Plex Mono (Google Fonts)

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Landing principal con Content Collections
│   │   ├── privacidad.astro      # Política de privacidad RGPD
│   │   ├── terminos.astro        # Términos del servicio
│   │   └── 404.astro             # Página de error
│   ├── content/
│   │   ├── config.ts             # Schema Zod para validación
│   │   └── sections/             # 10 secciones en Markdown
│   │       ├── 00-encabezado.md
│   │       ├── 01-marco-legal.md
│   │       ├── 02-definicion-servicio.md
│   │       ├── 03-criterios-admision.md
│   │       ├── 04-responsabilidad.md
│   │       ├── 05-especificaciones.md
│   │       ├── 06-proceso-activacion.md
│   │       ├── 07-cancelacion.md
│   │       ├── 08-acceso-cta.md
│   │       └── 09-pie-legal.md
│   ├── layouts/
│   │   └── DocumentoBase.astro   # Layout base con SEO
│   ├── components/
│   │   ├── SeccionDocumental.astro     # Wrapper de secciones
│   │   ├── FormularioSolicitud.astro   # Formulario Netlify
│   │   ├── SeparadorDiscrete.astro     # Separador 1px
│   │   ├── ListaTecnica.astro          # Listas tipográficas
│   │   └── TablaBipartita.astro        # Tabla incluye/no incluye
│   ├── utils/
│   │   └── sectionHelpers.ts     # Helpers tipados
│   └── styles/
│       └── global.css            # Variables CSS + reset
├── public/
│   ├── robots.txt
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

## 🎨 Paleta de Colores

```css
--doc-text: #1a1a1a           /* Texto principal */
--doc-secondary: #4a4a4a      /* Texto secundario */
--doc-bg-primary: #ffffff     /* Fondo principal */
--doc-bg-alt: #f8f9fa         /* Fondo alternativo */
--doc-bg-dark: #f0f0f0        /* Fondo oscuro */
--doc-border: #cccccc         /* Bordes discretos */
--doc-cta: #2c3e50            /* Botón CTA */
--doc-link: #1a1a1a           /* Enlaces */
```

## 📋 Content Collections Schema

Las 10 secciones están validadas con Zod:

```typescript
{
  orden: number (0-10),
  titulo: string (5-100 chars),
  tipo: enum (encabezado, marco-legal, etc.),
  tonalidad: enum (informe-riesgos, memorando-interno, etc.),
  backgroundColor: enum (primary, alt, dark),
  showSeparator: boolean
}
```

## 🛠️ Comandos Disponibles

### Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### Build para Producción

```bash
npm run build
```

Genera el sitio estático en `/dist`.

### Preview Local del Build

```bash
npm run preview
```

### TypeScript Check

```bash
npm run astro check
```

## 🌐 Deploy en Netlify

### Método 1: Deploy Manual (UI de Netlify)

1. Haz build local: `npm run build`
2. Sube la carpeta `/dist` en [netlify.com/drop](https://app.netlify.com/drop)

### Método 2: Deploy desde Git (Recomendado)

1. Sube el repositorio a GitHub/GitLab/Bitbucket
2. Conecta en [netlify.com](https://app.netlify.com)
3. Configuración automática desde `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

### Método 3: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## 📧 Configuración del Formulario Netlify

El formulario en `/` envía automáticamente emails a **legal@smslegal.es**.

### Post-deploy:

1. Ve a tu dashboard de Netlify
2. Site settings → Forms
3. Configura notificaciones a: **legal@smslegal.es**
4. Activa filtro de spam
5. (Opcional) Integra con Zapier/Slack

**Nota**: El formulario incluye honeypot `bot-field` para prevenir spam.

## 🔍 SEO y Schema.org

La landing incluye:

- ✅ Meta tags (title, description, canonical)
- ✅ Open Graph tags
- ✅ Twitter Card
- ✅ Schema.org JSON-LD:
  - ProfessionalService
  - Offer (Plan 199€/mes)
- ✅ Sitemap.xml auto-generado
- ✅ robots.txt

## 📊 Performance Esperada

**Lighthouse Score Target**: 100/100 en las 4 métricas

- **Performance**: 100 (SSG puro, sin JS runtime)
- **Accessibility**: 100 (contraste WCAG AAA, HTML semántico)
- **Best Practices**: 100 (HTTPS, sin vulnerabilidades)
- **SEO**: 100 (meta tags, schema.org, sitemap)

**Tiempo de carga**: < 1s (con CDN de Netlify)

## 🎯 Criterios de Diseño

- **Tipografía**: IBM Plex (Sans 400/600, Serif 600, Mono 400)
- **Sin animaciones**: Diseño estático, profesional
- **Sin JavaScript runtime**: Solo HTML/CSS (formulario Netlify nativo)
- **Sin ilustraciones**: Solo texto y estructuras tabulares
- **Sin cookies de seguimiento**: No analytics, no tracking
- **Imprimible**: Puede exportarse a PDF como informe técnico

## 📄 Contenido Legal

El contenido está diseñado para:

1. ✅ Poder enviarse a un abogado sin vergüenza
2. ✅ Pasar auditoría RGPD/LSSI
3. ✅ Servir como documento contractual
4. ✅ Ser imprimible como PDF técnico

**Tono**: Informe de riesgos + memorando técnico. Sin marketing, sin claims, sin promesas.

## 🔒 Privacidad y Compliance

- Sin cookies de terceros
- Sin Google Analytics ni herramientas de tracking
- Solo cookies técnicas de Netlify Forms
- Formularios con consentimientos explícitos RGPD
- Políticas legales incluidas: `/privacidad` y `/terminos`

## 🚨 Sin Garantías

Este servicio se presenta "tal cual" sin garantías de:

- Uptime 24/7
- Tasa de entrega específica
- Asesoramiento legal incluido
- Soporte telefónico

**Es infraestructura técnica, no plataforma de marketing.**

## 📞 Contacto

**Email técnico y legal**: legal@smslegal.es  
**Respuesta**: 48-72 horas laborables

---

## 🛡️ Licencia

Todos los derechos reservados. Contenido y diseño propietario de SMS Infrastructure.

---

**Última actualización**: Enero 2025
