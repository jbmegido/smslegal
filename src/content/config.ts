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

export const collections = {
  'sections': sectionsCollection
};
