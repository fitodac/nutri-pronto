/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
	theme: {
		extend: {
			colors: {
				brand: {
					dark: '#1E272E',
					aqua: '#71C3BD'
				}
			},

			fontSize: {
				xxs: '0.65rem'
			}
		},
	},
  plugins: [],
}
