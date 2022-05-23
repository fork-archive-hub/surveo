const { isProvider, checkContext } = require('feathers-hooks-common');

module.exports = (providers, ...hooks) => {
  return async (context) => {
    checkContext(context, null, null, 'ifProvider');

    if (isProvider(...providers)(context)) {
      for (const hook of hooks) {
        context = await hook(context);
      }
    }

    return context;
  };
};
