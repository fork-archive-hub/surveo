const { checkContext } = require('feathers-hooks-common');

module.exports = (userField, resultfield) => {
  return (context) => {
    checkContext(context, 'after', ['create', 'get', 'update', 'patch', 'remove'], 'isOwner');

    const isUserAuthenticated = Object.prototype.hasOwnProperty.call(context.params, 'user');

    if (isUserAuthenticated) {
      const isUserAuthor = context.params.user[userField].toString() === context.result[resultfield].toString();

      return isUserAuthor;
    }

    return false;
  };
};
