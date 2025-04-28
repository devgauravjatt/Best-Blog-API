import { Hono } from 'hono'
import {
	getAllCategories,
	getPostsByCategoryWithPageIndex,
	getPostsByPageIndex,
	getPostsBySlug,
} from '@/controllers/posts'

const PostsRoutes = new Hono()

PostsRoutes.get('/posts', async (c) => {
	const query = c.req.query()
	const page = query.page
	const posts = getPostsByPageIndex(Number(page) || 1)
	if (Number(page) > 0) {
		if (posts.posts.length > 0) {
			return c.json({
				success: true,
				page: Number(page),
				next_page_available: posts.nextPageAvailable,
				data: posts,
			})
		} else {
			return c.json(
				{
					success: false,
					message: 'No more data || Page Index Not Found',
				},
				404
			)
		}
	} else {
		return c.json({
			success: true,
			page: 1,
			next_page_available: true,
			posts: posts.posts,
		})
	}
})

PostsRoutes.get('/post/:slug', async (c) => {
	const { slug } = c.req.param()
	const page = slug
	const getPost = getPostsBySlug(page)
	if (getPost) {
		return c.json({
			success: true,
			post: getPost.data,
		})
	} else {
		return c.json(
			{
				success: false,
				message: 'post not found',
			},
			404
		)
	}
})

PostsRoutes.get('/posts/:category', async (c) => {
	const { page } = c.req.query()
	const { category } = c.req.param()

	const posts = getPostsByCategoryWithPageIndex(
		category || '',
		Number(page) || 1
	)

	if (!posts.categoryFound) {
		return c.json({
			success: false,
			message: 'Category Not Found',
		})
	}

	if (Number(page) > 0) {
		if (posts.posts.length > 0) {
			return c.json({
				success: true,
				page: Number(page),
				next_page_available: posts.nextPageAvailable,
				data: posts,
			})
		} else {
			return c.json({
				success: false,
				message: 'No more data || Page Index Not Found',
			})
		}
	} else {
		return c.json({
			success: true,
			page: 1,
			next_page_available: true,
			posts: posts.posts,
		})
	}
})

PostsRoutes.get('/categories', async (c) => {
	const categories = getAllCategories()

	return c.json({
		success: true,
		categories: categories,
	})
})

export default PostsRoutes
