import tseslint from 'typescript-eslint';

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', '.opencode/**']
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
      ],
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
];

export default eslintConfig;

// npm install --save-dev prettier-plugin-tailwindcss
// npm install --save-dev eslint-plugin-prettier prettier
// npm install --save-dev eslint eslint-config-next @eslint/eslintrc
// npm install --save-dev eslint eslint-config-next eslint-plugin-prettier eslint-config-prettier
// npm install --save-dev eslint-config-prettier
// npm install --save-dev prettier
