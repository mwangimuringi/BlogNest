import { z } from "zod";

export const siteSchema = z.object({
  name: z.string().min(1).max(35),
  description: z.string().min(1).max(150),
  subdirectory: z.string().min(1).max(40),
});

export const PostSchema = z.object({
  title: z.string().min(1).max(100),
  slug: z.string().min(1).max(190), //although its a json in models here its a string but it will be passed as a json in server action
  coverImage: z.string().min(1),
  smallDescription: z.string().min(1).max(200),
  articleContent: z.string().min(1),
});
