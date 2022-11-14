const { checkContext } = require('feathers-hooks-common');
const { Unprocessable } = require('@feathersjs/errors');

module.exports = (surveyField, paramsField) => {
  return async (context) => {
    checkContext(context, 'before', null, 'disallowDuplicatedIps');

    const survey = await context.app.service('surveys').Model.findById(context.data.surveyId).lean();
    const ip = context.params[paramsField];

    if (survey[surveyField].includes(ip)) {
      throw new Unprocessable('You have already voted on this survey!');
    }
  };
};
