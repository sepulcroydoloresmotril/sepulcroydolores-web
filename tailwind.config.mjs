/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// otra fuente
				// https://all-free-download.com/font/download/roman_font_7_6914693.html 
			 	roman: ['"Roman SD"', ...defaultTheme.fontFamily.serif],
			},
		},
		colors: {},
	},
	plugins: [],
}
