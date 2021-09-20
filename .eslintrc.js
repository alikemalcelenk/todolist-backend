module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],
  rules: {
    'comma-dangle': 'off',
    semi: 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off'
  },
  parserOptions: {
    ecmaVersion: 12
  }
}
