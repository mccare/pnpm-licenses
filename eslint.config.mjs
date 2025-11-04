import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  { files: ['src/**/*.ts'], plugins: { eslint, tseslint }, extends: [eslint.configs.recommended, tseslint.configs.recommended, prettier] }
])
//
// module.exports = {
//   ignores: ['dist/**/*', 'build/**/*'],
//   extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: '2020'
//   },
//   plugins: ['@typescript-eslint', 'prettier'],
//   rules: {
//     'import/order': 'error',
//     'no-use-before-define': 'off',
//     'n/no-callback-literal': 'off',
//     '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
//     '@typescript-eslint/no-use-before-define': 'error',
//   }
// }
