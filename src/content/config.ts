import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  schema: ({ image }: any) =>
    z.object({
      author: z.string,
      image: image(),
      date: z.string,
      title: z.string,
    }),
});

export const collection = {
  posts: postCollection,
};
