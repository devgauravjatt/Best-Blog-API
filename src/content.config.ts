import { defineCollection, z } from 'astro:content'
import { file } from 'astro/loaders'

const blog = defineCollection({
	loader: file('src/data/posts.json', {
		parser: (text) => JSON.parse(text).posts,
	}),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		date: z.string(),
		categorie: z.object({
			name: z.string(),
			slug: z.string(),
		}),
		content: z.string(),
		image: z.string().optional(),
		meta_seo: z.object({
			title: z.string(),
			description: z.string(),
			image: z.string().optional(),
			url: z.string(),
		}),
	}),
})

export const collections = { blog }
