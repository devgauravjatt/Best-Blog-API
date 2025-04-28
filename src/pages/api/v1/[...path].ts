import { Hono } from 'hono'
import { logger } from 'hono/logger'
import type { APIRoute } from 'astro'
import { cors } from 'hono/cors'
import PostsRoutes from './routes/posts'

export const prerender = false

const app = new Hono().basePath('/api/v1')

app.use('*', cors())
app.use(logger())

app.get('/', (c) => {
	return c.json({
		success: true,
		message: 'Welcome to Best Blog API',
		version: '1',
	})
})

app.route('/', PostsRoutes)

app.notFound((c) => {
	return c.json(
		{
			success: false,
			message: 'Api Path Not Found',
		},
		404
	)
})

app.onError((err, c) => {
	console.log('😥 error get on serer side - ', {
		message: err.message,
	})
	return c.json(
		{
			success: false,
			message: 'Internal Server Error',
		},
		500
	)
})

export const ALL: APIRoute = (context) => app.fetch(context.request)
