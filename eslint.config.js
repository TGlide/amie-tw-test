// eslint.config.js
import config from '@antfu/eslint-config'
import tailwindPlugin from 'eslint-plugin-tailwindcss'

export default config(
	{
		astro: true,
		stylistic: {
			indent: 'tab',
			overrides: {
				'max-len': ['error', { code: 120 }],
				'antfu/if-newline': 'off',
			},
		},
	},
	// Tailwind config
	{
		plugins: { tailwindcss: tailwindPlugin },
		settings: {
			tailwindcss: {
				classRegex: '^class(:?Name|:list)?$',
			},
		},
		rules: {
			'tailwindcss/classnames-order': 'warn',
			'tailwindcss/enforces-negative-arbitrary-values': 'warn',
			'tailwindcss/enforces-shorthand': 'warn',
			'tailwindcss/migration-from-tailwind-2': 'warn',
			'tailwindcss/no-arbitrary-value': 'off',
			'tailwindcss/no-custom-classname': [
				'warn',
				{
					whitelist: ['dark'],
				},
			],
			'tailwindcss/no-contradicting-classname': 'error',
			'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
		},
	},
)
