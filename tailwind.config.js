/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#c799ff',
				secondary: '#17deca',
				tertiary: '#ffabf3',
				surface: {
					DEFAULT: '#0e0e0e',
					container: {
						low: '#141414',
						high: '#1a1a1a',
						highest: '#222222'
					}
				}
			},
			fontFamily: {
				epilogue: ['"Epilogue"', 'sans-serif'],
				grotesk: ['"Space Grotesk"', 'sans-serif']
			},
			boxShadow: {
				'neon-primary': '0 0 10px rgba(199, 153, 255, 0.7), 0 0 20px rgba(199, 153, 255, 0.5)',
				'neon-secondary': '0 0 10px rgba(23, 222, 202, 0.7), 0 0 20px rgba(23, 222, 202, 0.5)',
				'neon-tertiary': '0 0 10px rgba(255, 171, 243, 0.7), 0 0 20px rgba(255, 171, 243, 0.5)'
			},
			borderRadius: {
				none: '0px',
				sm: '0px',
				DEFAULT: '0px',
				md: '0px',
				lg: '0px',
				xl: '0px',
				'2xl': '0px',
				'3xl': '0px',
				full: '0px'
			}
		}
	},
	plugins: []
};
