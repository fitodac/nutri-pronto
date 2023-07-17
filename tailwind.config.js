/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.svg',
  ],
	theme: {
		extend: {
			colors: {
				brand: {
					dark: '#1E272E',
					aqua: {
						DEFAULT: '#71C3BD',
						600: '#28A399'
					}
				}
			},

			fontSize: {
				xxs: '0.65rem'
			}
		},
	},
  plugins: [],
}
