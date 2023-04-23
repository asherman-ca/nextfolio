/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	target: 'serverless',
	prerender: false,
}

module.exports = nextConfig
