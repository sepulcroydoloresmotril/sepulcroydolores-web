/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				// otra fuente
				// https://all-free-download.com/font/download/roman_font_7_6914693.html 
			 	roman: ['"Roman SD"', ...defaultTheme.fontFamily.serif],
				lato: ['Lato', ...defaultTheme.fontFamily.sans],
				garamond: ['"EB Garamond"', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				brand: {
					black: '#191919',
					red: '#991B1E',
					gold: '#8B753A',
					pearl: '#F4F2EF',
					white: '#F4F2EF',
				},
			},
			letterSpacing: {
				'cofrade': '0.3em',    // Espaciado para subtítulos y branding
			},
		},
	},
	plugins: [],
}
