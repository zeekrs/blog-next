module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			rotate: {
				360: '360deg',
			},
		},
	},
	variants: {
		extend: {
			scale: ['group-hover'],
		},
	},
	plugins: [],
}
