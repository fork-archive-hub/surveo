const { checkContext } = require('feathers-hooks-common');
const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = (originalSettings, ...originalStrategies) => {
  return async (context) => {
    checkContext(context, null, null, 'authenticateIfPossible');

    if (Object.prototype.hasOwnProperty.call(context.params, 'authentication')) {
      return await authenticate(originalSettings, ...originalStrategies)(context);
    }

    return context;
  };
};
