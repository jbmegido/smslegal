import { z, defineCollection } from 'astro:content';

const sectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    orden: z.number().int().min(0).max(10),
    titulo: z.string().min(5).max(100),
    tipo: z.enum([
      'encabezado',
      'marco-legal',
      'definicion-servicio',
      'criterios-admision',
      'responsabilidad',
      'especificaciones',
      'proceso-activacion',
      'cancelacion',
      'formulario-cta',
      'pie-legal'
    ]),
    tonalidad: z.enum([
      'informe-riesgos',
      'memorando-interno',
      'clausula-contractual',
      'manual-operaciones'
    ]),
    backgroundColor: z.enum(['primary', 'alt', 'dark']).default('primary'),
    showSeparator: z.boolean().default(true)
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10).max(200),
    description: z.string().min(20).max(300),
    pubDate: z.date(),
    author: z.string(),
    category: z.enum(['Marco Legal', 'Técnico', 'Casos Prácticos']),
    tags: z.array(z.string()),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  'sections': sectionsCollection,
  'blog': blogCollection
};
