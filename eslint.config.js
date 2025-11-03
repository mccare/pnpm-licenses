
module.exports = {
  ignores: ['dist/**/*', 'build/**/*'],
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2020'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/order': 'error',
    'no-use-before-define': 'off',
    'n/no-callback-literal': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-use-before-define': 'error',
  }
}
