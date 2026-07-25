import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cursos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/cursos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    section: z.enum([
      'introduccion',
      'lenguajes-base',
      'framework-moderno',
      'proyecto-integrador',
      'profesionalizacion',
    ]),
    moduleBadge: z.string(),
    icon: z.string(),
    iconColor: z.string().default('primary'),
    prevSlug: z.string().nullable().default(null),
    prevLabel: z.string().optional(),
    nextSlug: z.string().nullable().default(null),
    nextLabel: z.string().optional(),
    sidebarLabel: z.string(),
  }),
});

export const collections = { cursos };
