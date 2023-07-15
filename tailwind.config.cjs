/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryColor: '#333333',
				secondaryColor: '#f2f2f2',
				tertiaryColor: 'rgb(255, 192, 83)',
				fourthColor: 'rgb(225, 225, 225)',
			},
			backgroundColor: {
				secondaryColor: '#f2f2f2'
			},
			boxShadow: {
				lowShadow: '2px 2px 4px rgba(0,0,0, 0.8);'
			}
		},
	},
	plugins: [],
}
