/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				"3xl": "1.25rem",
				"4xl": "1.5rem"
			},
			fontFamily: {
				"outfit": ["Outfit", ...fontFamily.sans]
			}
		},
	},
	plugins: [],
}
