module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        printWidth: 80,
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'none'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
