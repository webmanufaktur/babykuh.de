import { z, defineCollection } from "astro:content";

const faqs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  faqs: faqs,
};
