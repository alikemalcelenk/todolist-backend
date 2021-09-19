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
    'no-unused-vars': 'off'
  },
  parserOptions: {
    ecmaVersion: 12
  }
}
