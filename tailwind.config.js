import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin';
import { sandbless } from './src/sandbless'
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'vintage',
						enhancements: true,
					},
				],
				custom: [
					sandbless,
				],
			},
		}),
	],
};
