import type { Config } from 'tailwindcss'

import withMT from '@material-tailwind/react/utils/withMT'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

export default withMT(config)
