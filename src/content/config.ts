import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.number(),
    created_at: z.string(),
    display: z.boolean(),
    name: z.string(),
    quote: z.string(),
    platform: z.string(),
    link: z.string().url(),
    location: z.string(),
    type: z.enum(['Restaurant', 'Catering']),
  }),
});

const press = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    publish_date: z.string(),
    link: z.string().url(),
    image: z.string(),
  }),
});

const tacoOfTheMonth = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  reviews,
  press,
  'taco-of-the-month': tacoOfTheMonth,
};
