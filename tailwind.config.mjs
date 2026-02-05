/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			fontFamily: {
				// otra fuente
				// https://all-free-download.com/font/download/roman_font_7_6914693.html 
			 	roman: ['"Roman SD"', ...defaultTheme.fontFamily.serif],
				lato: ['Lato', ...defaultTheme.fontFamily.sans],
				garamond: ['EB Garamond', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				"theme-black": "#191919",
				"theme-white": "#f4f2ef",
				"theme-red": "#991b1e",
				"theme-gold": "#88753a",
				"theme-silver": "#8a8b8d",
			},
			height: {
				nav: '100px',
			},
			spacing: {
				nav: '100px',
			},

		}
	},
	plugins: [
	],
}
