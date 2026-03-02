import { defineCollection, z } from "astro:content";

// individual blog pages
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    readTimeMins: z.number(),
    draft: z.boolean(),
    cover: z.string().optional(),
  })
});

export const collections = { blog };