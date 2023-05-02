const { isProvider, checkContext } = require('feathers-hooks-common');
const { setField } = require('feathers-authentication-hooks');

module.exports = (userField, queryField) => {
  return async (context) => {
    checkContext(context, 'before', null, 'mapUserFieldToQueryField');

    if (isProvider('server')(context)) {
      return;
    }

    await setField({ from: `params.user.${userField}`, as: `params.query.${queryField}` })(context);
  };
};
