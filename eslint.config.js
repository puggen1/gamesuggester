import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
export default [
	pluginJs.configs.recommended,
	pluginReact.configs.flat.all,
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		plugins: {},
		rules: {
			// Disabling unused variables warning
			// Disabling React-specific warnings/errors
			'react/jsx-uses-react': 'off', // In React 17+, no need to import React
			'react/react-in-jsx-scope': 'off', // JSX doesn't require React in scope (React 17+)
			'react/prop-types': 'off', // Disable PropTypes validation
			'react/display-name': 'off', // Allow unnamed default exports
			'react/no-unescaped-entities': 'off', // Ignore unescaped entities like < or '
			'react/jsx-props-no-spreading': 'off', // Allow prop spreading (e.g., {...props})
			'react/jsx-max-depth': 'off',
			'react/jsx-indent': 'off',
			'react/jsx-no.literals': 'off',
			'react/jsx-no-bind': 'off', // turning this off for the moment
			'react/forbid-component-props': 'off',
			'react/jsx-no-literals': 'off',
			'react/no-multi-comp': 'off',
		},
	},
	{languageOptions: {globals: globals.browser}},
];