const { checkContext } = require('feathers-hooks-common');
const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = (originalSettings, ...originalStrategies) => {
  return async (context) => {
    checkContext(context, null, null, 'authenticateWhenCredentialsProvided');

    if (Object.prototype.hasOwnProperty.call(context.params, 'authentication')) {
      await authenticate(originalSettings, ...originalStrategies)(context);
    }
  };
};
