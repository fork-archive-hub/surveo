const { checkContext } = require('feathers-hooks-common');

module.exports = (field) => {
  return (context) => {
    checkContext(context, 'after', ['create', 'get', 'update', 'patch', 'remove'], 'isOwner');

    return context.params.user._id.toString() === context.result[field].toString();
  };
};
