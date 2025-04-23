import { Hono } from 'hono'
import type { APIRoute } from 'astro'
import { cors } from 'hono/cors'
import PostsRoutes from './routes/posts'

export const prerender = false

const app = new Hono().basePath('/api/v1/')

app.use('*', cors())

app.get('/', (c) => {
	return c.text('Hello! Dev Gaurav Jatt')
})

app.route('/', PostsRoutes)

export const ALL: APIRoute = (context) => app.fetch(context.request)
