import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/articles",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["industry", "literature", "reflections"]),
    excerpt: z.string().optional(),
  }),
});

export const collections = { articles };
