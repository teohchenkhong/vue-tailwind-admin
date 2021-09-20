module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			colors:{
				primary: "#60023",
				dark: "#1111",
				light: "#EFEFEF",
				lightHover: "#d7d7d7",
				muted: "#717171"
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}