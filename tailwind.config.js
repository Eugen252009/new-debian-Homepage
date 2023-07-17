/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: { 'debian-background': '#05475cff' }
			// backgroundImage: { 'debian-image': 'url("/emerald-fg.svg")' }
		}
	},
	plugins: []
};
