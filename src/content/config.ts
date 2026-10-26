import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    projectId: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    lang: z.enum(["zh-CN", "en"]),
    title: z.string().min(1),
    subtitle: z.string().min(1),
    description: z.string().min(1),
    stage: z.enum(["prototype", "specification"]),
    order: z.number().int(),
    reviewedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    repository: z.string().url(),
    revision: z.string().regex(/^[a-f0-9]{40}$/),
    repositoryAccess: z.enum(["public", "restricted"]),
    tags: z.array(z.string()).min(1),
    deliverables: z.array(z.string()).min(1),
    unverified: z.array(z.string()).min(1),
    sources: z.array(z.object({
      label: z.string().min(1),
      path: z.string().min(1),
    })).min(1),
  }),
});

export const collections = { projects };
