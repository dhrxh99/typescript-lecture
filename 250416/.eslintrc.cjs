const { rules } = require('eslint-config-prettier');

module.exports = {
  env: {
    node: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint: recommended',
    'plugin: prettier/recommended',
    'plugin: @typescript-eslint/recommended'
  ],
  plugin: ['prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'on',
    'prettier/prettier': 'error',
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error', 'test']
      }
    ]
  }
};
