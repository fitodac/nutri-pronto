/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	distDir: 'dist',
	exportStatic: true,
	images: {
		unoptimized: true
	},


	env: {
		FOOTER_CODE: process.env.FOOTER_CODE,
		LINK_2_PDF_DOCUMENT: process.env.LINK_2_PDF_DOCUMENT
	},
}

module.exports = nextConfig