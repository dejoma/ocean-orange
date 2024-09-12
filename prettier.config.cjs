/** @type {import('prettier').Config} */
module.exports = {
  trailingComma: 'none',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'always',
  printWidth: 80,
  plugins: ['prettier-plugin-tailwindcss']
};
