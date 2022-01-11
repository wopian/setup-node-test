module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:prettier/recommended' // also sets eslint-config-prettier
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrrc: true }],
    'no-var': 'error',
  }
}
