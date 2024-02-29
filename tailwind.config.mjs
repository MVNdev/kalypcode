/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				letter: "#e6eeec",
				_gradient: "#5433FF",
				_gradient_: "#20BDFF",
				gradient_: "#A5FECB"
			}
		},
	},
	daisyui: {
		themes: [
			{
				kalypcode: {

					"primary": "#9FD3C3",

					"secondary": "#2A705A",

					"accent": "#56cda8",

					"neutral": "#1f252d",

					"base-100": "#0B1311",

					"info": "#A8DADC",

					"success": "#319d00",

					"warning": "#ffac4e",

					"error": "#FF3D3D",
				},
			},
		],
	},
	plugins: [require("daisyui")],
}
