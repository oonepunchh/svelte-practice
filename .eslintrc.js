module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json'],
      extraFileExtensions: ['.svelte'],
    },
    env: {
      browser: true,
    },
    plugins: [
      'svelte3',
      '@typescript-eslint',
      'simple-import-sort',
    ],
    overrides: [
      {
        files: ['*.svelte'],
        processor: 'svelte3/svelte3',
        rules: {
          // https://github.com/sveltejs/eslint-plugin-svelte3#installation-with-typescript
          //
          // "There are some limitations to these type-aware rules currently.
          //  Specifically, checks in the context of reactive assignments and
          //  store subscriptions will report false positives or false negatives,
          //  depending on the rule."
          '@typescript-eslint/no-unsafe-assignment': 'off',
          '@typescript-eslint/no-unsafe-call': 'off',
          '@typescript-eslint/no-unsafe-member-access': 'off',
          '@typescript-eslint/no-unsafe-return': 'off',
          '@typescript-eslint/restrict-plus-operands': 'off',
  
          // https://github.com/lydell/eslint-plugin-simple-import-sort/issues/71
          'simple-import-sort/imports': 'off',
          'simple-import-sort/exports': 'off',
  
          'eqeqeq': ['error', 'always'],
        },
      },
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'eqeqeq': ['error', 'always'],
    },
    settings: {
      'svelte3/typescript': require('typescript'),
      // ...
    },
    ignorePatterns: [
      'coverage/',
      'node_modules/',
      'public/build/',
      '.eslintrc.js',
      'rollup.config.js',
      'svelte.config.js',
    ]
  }