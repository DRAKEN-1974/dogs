module.exports = {
  extends: 'next/core-web-vitials',
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn', // downgrade from error to warning
    '@typescript-eslint/no-explicit-any': 'warn', // downgrade from error to warning
    'react-hooks/exhaustive-deps': 'warn', // downgrade from error to warning
    '@next/next/no-img-element': 'warn', // downgrade from error to warning
    'prefer-const': 'warn' // downgrade from error to warning
  }
}
