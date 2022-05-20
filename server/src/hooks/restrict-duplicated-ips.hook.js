const { checkContext } = require('feathers-hooks-common');
const { Unprocessable } = require('@feathersjs/errors');

module.exports = (surveyField, paramsField) => {
  return async (context) => {
    checkContext(context, 'before', null, 'restrictDuplicatedIps');

    const survey = await context.app.service('surveys').get(context.data.surveyId);
    const ip = context.params[paramsField];

    if (survey[surveyField].includes(ip)) {
      throw new Unprocessable('You have already voted on this survey!');
    }
  };
};
