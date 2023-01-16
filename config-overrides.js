/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@': 'src/'
  })(config);

  return config;
};
