const { checkContext } = require('feathers-hooks-common');

module.exports = (surveyField, protectionHooks) => {
  return async (context) => {
    checkContext(context, 'before', null, 'useProtectionHooks');

    const protectionNames = Object.keys(protectionHooks);

    if (protectionNames.length === 0) {
      return context;
    }

    const survey = await context.app.service('surveys').Model.findById(context.data.surveyId).lean();

    for (const protectionName of protectionNames) {
      if (survey[surveyField][protectionName]) {
        await protectionHooks[protectionName](context);
      }
    }
  };
};
