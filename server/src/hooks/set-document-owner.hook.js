const { checkContext } = require('feathers-hooks-common');
const { setField } = require('feathers-authentication-hooks');
const { Forbidden } = require('@feathersjs/errors');

module.exports = (userField, dataField) => {
  return async (context) => {
    checkContext(context, 'before', null, 'setDocumentOwner');

    const isUserAuthenticated = Object.prototype.hasOwnProperty.call(context.params, 'user');

    if (!isUserAuthenticated) {
      throw new Forbidden('You must be authenticated to perform this action.');
    }

    return await setField({ from: `params.user.${userField}`, as: `data.${dataField}` })(context);
  };
};
