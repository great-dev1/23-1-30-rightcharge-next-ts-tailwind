const prettierConfig = require('./.prettierrc.js');

module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
