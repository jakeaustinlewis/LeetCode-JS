module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false
  },
  requireConfigFile: false,
  extends: [
    'eslint:recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "import/prefer-default-export": "off",
    "indent": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "object-curly-newline": "off"
  },
};
