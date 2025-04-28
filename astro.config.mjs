// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: 'DM Sans',
				cssVariable: '--font-dm-sans',
			},
		],
	},
	env: {
		schema: {
			API_BASE_URL: envField.string({
				context: 'server',
				access: 'public',
			}),
		},
	},
})
