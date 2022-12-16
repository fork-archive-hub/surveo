const { isProvider, checkContext } = require('feathers-hooks-common');
const { setField } = require('feathers-authentication-hooks');
const { Forbidden } = require('@feathersjs/errors');

module.exports = (userField, queryField) => {
  return async (context) => {
    checkContext(context, 'before', null, 'mapUserFieldToQueryField');

    if (isProvider('server')(context)) {
      return;
    }

    const isUserAuthenticated = Object.prototype.hasOwnProperty.call(context.params, 'user');

    if (!isUserAuthenticated) {
      throw new Forbidden('You must be authenticated to perform this action');
    }

    await setField({ from: `params.user.${userField}`, as: `params.query.${queryField}` })(context);
  };
};
