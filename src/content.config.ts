import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const categorySlugs = [
  "electrical-testing",
  "environmental",
  "pressure",
  "temperature",
  "resistance-recorders",
  "clamp-meters",
  "field-testing",
  "high-voltage",
  "power-quality",
  "infrared",
] as const;

const products = defineCollection({
  loader: glob({
    base: "./src/content",
    pattern: "products/**/*.md",
    generateId: ({ entry }) =>
      entry
        .replace(/^products[\\/]/, "")
        .replace(/\.(md|mdx)$/i, ""),
  }),
  schema: z.object({
    title: z.string(),
    model: z.string(),
    category: z.enum(categorySlugs),
    brand: z.string().optional(),
    image: z.string(),
    features: z.array(z.string()),
    order: z.number().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ base: "./src/content/news", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { products, news };
