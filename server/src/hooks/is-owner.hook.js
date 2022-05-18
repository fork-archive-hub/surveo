const { checkContext } = require('feathers-hooks-common');

module.exports = (userField, resultField) => {
  return (context) => {
    checkContext(context, 'after', ['get', 'create', 'update', 'patch', 'remove'], 'isOwner');

    const isUserAuthenticated = Object.prototype.hasOwnProperty.call(context.params, 'user');

    if (isUserAuthenticated) {
      const isUserAuthor = context.params.user[userField].toString() === context.result[resultField].toString();

      return isUserAuthor;
    }

    return false;
  };
};
