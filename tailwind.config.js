/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				beige: {
					100: '#fffefb',
					200: '#fffdf7',
					300: '#fffdf3',
					400: '#fffcef',
					500: '#fffbeb',
					600: '#ccc9bc',
					700: '#99978d',
					800: '#66645e',
					900: '#33322f'
				},
				gold: {
					100: '#f2eee5',
					200: '#e5decb',
					300: '#d7cdb1',
					400: '#cabd97',
					500: '#bdac7d',
					600: '#978a64',
					700: '#71674b',
					800: '#4c4532',
					900: '#262219'
				},
				green: {
					100: '#d1d5ce',
					200: '#a3ac9d',
					300: '#74826b',
					400: '#46593a',
					500: '#182f09',
					600: '#132607',
					700: '#0e1c05',
					800: '#0a1304',
					900: '#050902'
				},
				purple: {
					100: '#e3dde0',
					200: '#c7bbc1',
					300: '#ab98a2',
					400: '#8f7683',
					500: '#735464',
					600: '#5c4350',
					700: '#45323c',
					800: '#2e2228',
					900: '#171114'
				},
				brown: {
					100: '#ded7d4',
					200: '#beb0a9',
					300: '#9d887f',
					400: '#7d6154',
					500: '#5c3929',
					600: '#4a2e21',
					700: '#372219',
					800: '#251710',
					900: '#120b08'
				}
			},
			fontFamily: {
				regular: ['Myriad Pro'],
				secondary: ['Optima']
			}
		}
	},
	plugins: []
};
