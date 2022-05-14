const { setField } = require('feathers-authentication-hooks');

module.exports = (field) => {
  return setField({ from: 'params.user._id', as: `data.${field}` });
};
