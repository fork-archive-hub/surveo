const { iff, isNot, checkContext } = require('feathers-hooks-common');

module.exports = (predicate, ...hooks) => {
  return async (context) => {
    checkContext(context, null, null, 'ifNot');

    return iff(isNot(predicate), hooks)(context);
  };
};
