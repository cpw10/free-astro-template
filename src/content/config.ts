import { z, defineCollection } from 'astro:content';

const seoSchema = z.object({
  page_description: z.string().optional(),
  canonical_url: z.string().optional(),
  featured_image: z.string().optional(),
  featured_image_alt: z.string().optional(),
  author_twitter_handle: z.string().optional(),
  open_graph_type: z.string().optional(),
  no_index: z.boolean().optional(),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    _schema: z.literal('default').optional(),
    title: z.string(),
    seo: seoSchema.optional(),
    // Hero section
    hero_title: z.string().optional(),
    hero_subtitle: z.string().optional(),
    primaryCTA: z.object({
      text: z.string(),
      href: z.string(),
    }).optional(),
    secondaryCTA: z.object({
      text: z.string(),
      href: z.string(),
    }).optional(),
    // Header
    header: z.object({
      logo: z.string(),
    }).optional(),
    // Footer
    footer: z.object({
      heading: z.string(),
      subheading: z.string(),
      buttonText: z.string(),
      authorName: z.string(),
    }).optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
  blog: blogCollection,
};
