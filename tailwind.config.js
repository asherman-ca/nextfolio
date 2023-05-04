/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark_hover: '#1f1f1f',
				dark_font: '#888',
				dark_bg: '#111111',
				dark_bg2: '#000000',
			},
		},
	},
	plugins: [],
}
