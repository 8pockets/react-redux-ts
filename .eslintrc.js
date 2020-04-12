module.exports = {
  env: {
    browser: true,
    node: false,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:cypress/recommended',
  ],
  overrides: [
    {
      files: ['**/__test?(s)__/*.{js,jsx,ts,tsx}'],
      env: {
        browser: false,
        node: true,
        'jest/globals': true,
      },
      rules: {
        // Triggers false positive for `describe.each`.
        // https://github.com/jest-community/eslint-plugin-jest/issues/463
        'jest/valid-describe': 'off',
      },
    },
    {
      files: [
        '.eslintrc.js',
        '**/*.config.js',
        'svg-to-icon-component-runtime-generator.js',
        './__tests__/storyshots.test.js',
      ],
      env: {
        browser: false,
        node: true,
      },
      rules: {
        // This is needed in order to use require().
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/{src,__mocks__}/**/*.{js,jsx,ts,tsx}'],
      globals: {
        // Required for the "conditional exports" for unit tests.
        module: 'readonly',
        // Required to get values from environment.  Ideally this would be
        // scoped to one file, like "configuration" which the rest of the app
        // uses to determine the values.
        process: 'readonly',
      },
    },
    {
      files: ['*.js'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2019,
      },
    },
    {
      env: {
        browser: false,
        node: true,
      },
      files: ['**/cypress/**/*.js'],
      rules: {
        // These is required because there are false positives for jest-like commands
        // that are made available by cypress.
        'jest/valid-expect': 'off',
        'jest/expect-expect': 'off',
        // This triggers a false positive that is not a problem for cypress
        // ("Promise should be returned to test its fulfillment or rejection")
        'jest/valid-expect-in-promise': 'off',
        // False positives about assigning the return value of a stubbed
        // function.  The test does not make sense without it.
        'cypress/no-assigning-return-values': 'off',
      },
    },
    {
      files: ['*.story.*'],
      env: {
        browser: true,
        node: false,
      },
      rules: {
        'no-alert': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    useJSXTextNode: true,
  },
  plugins: ['prettier', '@dczajkowski'],
  rules: {
    '@dczajkowski/enum-value-name': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    'import/extensions': ['error', 'always', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        // Files matched here are allowed to import from "devDependencies".
        // There are some files that have inline exceptions.
        devDependencies: [
          '**/cypress/**',
          '**/__mocks__/*',
          '**/*.test.*',
          '**/*story*',
          '**/*.config.js',
          '**/svg-to-icon-component-runtime-generator.js',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'error',
    'no-shadow': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'error',
    'prefer-arrow-callback': 'error',
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    eqeqeq: 'error',

    // TODO: apply these rules
    'jsx-a11y/anchor-is-valid': 'off', // non-trivial changes
    'jsx-a11y/click-events-have-key-events': 'off', // non-trivial changes
    'jsx-a11y/label-has-associated-control': 'off', // non-trivial changes
    'jsx-a11y/no-static-element-interactions': 'off', // non-trivial changes
    'import/named': 'off', // `module.exports` for testing does not work with it
    'react/destructuring-assignment': 'off', // too many violations
    'react/jsx-props-no-spreading': 'off', // too many violations
  },
  settings: {
    react: {
      version: 'detect',
    },
    // 'import/resolver': {
    //   webpack: {
    //     config: {
    //       resolve: {
    //         extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //       },
    //     },
    //   },
    // },
  },
};
