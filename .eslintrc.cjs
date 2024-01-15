module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  ignorePatterns: [ 'dist', '.eslintrc.cjs' ],
  parser: '@typescript-eslint/parser',
  plugins: [ 'react-refresh', '@tanstack/query' ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-named-as-default': 0,
    'import/newline-after-import': [ 'error', { count: 1 } ],
    'import/order': [
      'error',
      {
        groups: [
          [
            'builtin',
            'external'
          ],
          [
            'internal',
            'sibling',
            'parent',
            'index',
            'unknown'
          ]
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        'newlines-between': 'always',
      },
    ],
  },
};