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
    // 停產品不刪檔：標 discontinued 後從列表隱藏（搜尋型號仍找得到），產品頁保留並導向後繼機種
    status: z.enum(["active", "discontinued"]).default("active"),
    // 後繼機種的檔名 slug（如 2200r）或「分類/檔名」；build 時檢查是否存在。
    // coerce：純數字 slug（replacedBy: 2006）沒加引號時 YAML 會讀成數字
    replacedBy: z.coerce.string().trim().min(1).optional(),
    // 最後一次確認資料仍正確的日期（"2026-10-19"），npm run audit:products 據此列出待確認產品。
    // 沒加引號時 YAML 會讀成 Date，先轉回字串；不得晚於明天（留時區緩衝），防 2099 之類誤植
    lastReviewed: z
      .preprocess(
        (value) => (value instanceof Date ? value.toISOString().slice(0, 10) : value),
        z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/, "lastReviewed 格式須為 YYYY-MM-DD")
          .refine((value) => {
            const date = new Date(`${value}T00:00:00Z`);
            return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
          }, "lastReviewed 不是有效日期")
          .refine(
            (value) => Date.parse(`${value}T00:00:00Z`) <= Date.now() + 86_400_000,
            "lastReviewed 不能是未來日期",
          ),
      )
      .optional(),
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
