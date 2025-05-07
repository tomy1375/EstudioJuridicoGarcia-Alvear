/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				amber: {
					300: '#FCD34D',
					400: '#FBBF24',
					500: '#F59E0B',
					600: '#D97706',
					700: '#B45309',
					800: '#92400E',
					900: '#78350F',
				},
				brand: {
					50: "#ECEEED",
					100: "#D9DEDA",
					200: "#B2BDB5",
					300: "#8C9C90",
					400: "#68786C",
					500: "#465149",
					600: "#39423B",
					700: "#2B312C",
					800: "#1C211E",
					900: "#0E100F",
					950: "#070807"
				}
			},
			fontFamily: {
				'playfair': ['"Playfair Display"', 'serif'],
				'raleway': ['Raleway', 'sans-serif'],
			},
		},
	},
	plugins: [],
	
}
