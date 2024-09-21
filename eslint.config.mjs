import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },

    rules: {
      'prettier/prettier': 'error', // Integrate Prettier
    },
  },

  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig, // Disable ESLint rules conflicting with Prettier
  prettierPlugin, // Use Prettier as an ESLint rule
];
