const { checkContext } = require('feathers-hooks-common');
const { BadRequest, Unprocessable } = require('@feathersjs/errors');

module.exports = () => {
  return async (context) => {
    checkContext(context, 'before', ['create'], 'restrictDuplicatedIps');

    if (!Object.prototype.hasOwnProperty.call(context.data, 'surveyId')) {
      throw new BadRequest('Survey Id is required');
    }

    const survey = await context.app.service('surveys').get(context.data.surveyId);
    const ip = context.params.ip;

    if (survey.protection.ipRestriction) {
      if (survey.ips.includes(ip)) {
        throw new Unprocessable('You have already voted on this survey!');
      }
    }
  };
};
