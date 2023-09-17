import preline from 'preline/plugin.js';

module.exports = {
	content: [
		'./public/**/*.astro',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/preline/dist/*.js',
	],
	theme: {
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [
		preline,
	],
};
