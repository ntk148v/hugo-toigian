/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../**/content/**/*.html",
	"../**/layouts/**/*.html"
  ],
  theme: {
    extend: {
        spacing: {
				'page-top': 'var(--page-top)',
				'page-gutter': 'var(--page-gutter)',
				'header-height': 'var(--header-height)',
				'footer-height': 'var(--footer-height)',
			},
			maxWidth: {
				content: 'var(--content-width)',
			},
			minHeight: {
				content: 'var(--content-height)',
			},
			fontSize: {
				md: '15px',
			},
			colors: {
				'b-low-a': 'var(--b-low-a)',
				'b-low': 'var(--b-low)',
				'b-med': 'var(--b-med)',
				'f-med': 'var(--f-med)',
				'f-high': 'var(--f-high)',
			},
			borderColor: (theme) => ({
				DEFAULT: theme('colors.b-med', 'currentColor'),
			}),
		},
  },
  plugins: []
}
