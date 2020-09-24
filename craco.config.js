const eslintConfig = require('./.eslintrc');

module.exports = {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-optional-chaining',
    ],
  },
  eslint: {
    configure: eslintConfig,
  },
};
