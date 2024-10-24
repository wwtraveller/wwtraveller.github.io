import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    settings: {
      react: {
        version: 'detect', // автоматически определяет версию React
      },
    },
  },
  {
    ignores: ['public/', 'src/components/ui', 'tailwind.config.js', 'dist/', 'cypress/'],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { rules: { 'react/react-in-jsx-scope': 'off' } },
];
