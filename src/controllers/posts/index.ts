import { getCollection } from 'astro:content'

const allBlogPosts = await getCollection('blog')

const allPosts = allBlogPosts.map((post) => post.data)

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
	console.log('🚀 category :- ', category)
	const allCategoryPosts = allPosts.filter(
		(post) => post.categorie.slug === category
	)
	console.log('🚀 allCategoryPosts :- ', allCategoryPosts.length)

	const categoryFound = allCategoryPosts.length > 0

	const nextPageAvailableIs = allCategoryPosts.length > 10 * pageIndex
	const sendPosts = allCategoryPosts.slice(10 * (pageIndex - 1), 10 * pageIndex)
	return {
		posts: sendPosts,
		nextPageAvailable: nextPageAvailableIs,
		categoryFound: categoryFound,
	}
}
