module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': 'off',
    'indent': 'off',
    'keyword-spacing':'off',
    'arrow-spacing':'off',
    'space-before-blocks':'off',
    'no-unused-vars':'warn',
    'eol-last':'off',
    'no-multiple-empty-lines':'off',
    'quotes':'off',
    'space-before-function-paren':'off',
    'comma-spacing':'off',
    'semi':'off'
  }
}
