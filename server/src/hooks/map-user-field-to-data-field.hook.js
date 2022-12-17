const { checkContext } = require('feathers-hooks-common');
const { setField } = require('feathers-authentication-hooks');

module.exports = (userField, dataField) => {
  return async (context) => {
    checkContext(context, 'before', null, 'mapUserFieldToDataField');

    await setField({ from: `params.user.${userField}`, as: `data.${dataField}` })(context);
  };
};
