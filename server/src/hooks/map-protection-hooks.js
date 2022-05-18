const { checkContext } = require('feathers-hooks-common');
const { BadRequest } = require('@feathersjs/errors');

module.exports = (surveyField, protectionHooks) => {
  return async (context) => {
    checkContext(context, 'before', null, 'mapProtectionHooks');

    const protectionNames = Object.keys(protectionHooks);

    if (protectionNames.length === 0) {
      return context;
    }

    if (!Object.prototype.hasOwnProperty.call(context.data, 'surveyId')) {
      throw new BadRequest('Survey Id is required');
    }

    const survey = await context.app.service('surveys').get(context.data.surveyId);

    for (const protectionName of protectionNames) {
      if (survey[surveyField][protectionName]) {
        await protectionHooks[protectionName](context);
      }
    }
  };
};
