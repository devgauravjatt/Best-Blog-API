import { getCollection } from 'astro:content'

const allBlogPosts = await getCollection('blog')

const allPosts = allBlogPosts.map((post) => {
	return {
		title: post.data.title,
		slug: post.data.slug,
		date: post.data.date,
		categorie: post.data.categorie,
		image: post.data.image,
		description: post.data.meta_seo.description,
	}
})

export function getPostsByPageIndex(pageIndex: number) {
	const nextPageAvailableIs = allPosts.length > 10 * pageIndex

	const sendPosts = allPosts.slice(10 * (pageIndex - 1), 10 * pageIndex)

	return {
		posts: sendPosts,
		nextPageAvailable: nextPageAvailableIs,
	}
}

export function getPostsBySlug(slug: string) {
	const post = allBlogPosts.find((post) => post.data.slug === slug)
	return post
}

export function getPostsByCategoryWithPageIndex(
	category: string,
	pageIndex: number
) {
	const allCategoryPosts = allPosts.filter(
		(post) => post.categorie.slug === category
	)

	const categoryFound = allCategoryPosts.length > 0

	const nextPageAvailableIs = allCategoryPosts.length > 10 * pageIndex

	const sendPosts = allCategoryPosts.slice(10 * (pageIndex - 1), 10 * pageIndex)

	return {
		posts: sendPosts,
		nextPageAvailable: nextPageAvailableIs,
		categoryFound: categoryFound,
	}
}

export function getAllCategories() {
	const categories = allPosts.map((post) => post.categorie)

	const uniqueCategoriesMap = new Map()

	categories.forEach((category) => {
		uniqueCategoriesMap.set(category.slug, category)
	})

	const filteredCategories = Array.from(uniqueCategoriesMap.values())

	return filteredCategories
}
