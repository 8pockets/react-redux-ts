module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'prefer-arrow'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    createDefaultProgram: true,
  },
  rules: {
    'no-console': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
  },
  globals: {
    process: true,
    module: true,
    app: true,
    cast: true,
    setFetchMockInterceptor: true,
    mockFetchInterceptor: true,
    Pigeon: true,
  },
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: false,
  },
};
