/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		FOOTER_CODE: process.env.FOOTER_CODE,
		LINK_2_PDF_DOCUMENT: process.env.LINK_2_PDF_DOCUMENT
	}
}

module.exports = nextConfig
