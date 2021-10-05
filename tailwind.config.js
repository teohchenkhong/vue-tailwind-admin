module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			colors:{
				"primary": "#3506a0",
				"secondary": "#684dd8",
				"info": "#4a6ee9",
				"warning": "#ce8506",
				"danger": "#c92f61",
				"success": "#17ecb2",
				"light": "#6f5499",
				"dark": "#1b0738"
			}
		},
	},
	variants: {
		extend: {
			width: ["responsive"],
			flexGrow: ["focus-within"],
			translate: ["responsive"]
		},
	},
	plugins: [],
}