const { checkContext } = require('feathers-hooks-common');
const { Unprocessable } = require('@feathersjs/errors');

module.exports = (trackerField, paramsField) => {
  return async (context) => {
    checkContext(context, 'before', null, 'disallowDuplicatedIps');

    const tracker = await context.app.service('trackers').Model.findOne({ surveyId: context.data.surveyId }).lean();
    const ip = context.params[paramsField];

    if (tracker[trackerField].includes(ip)) {
      throw new Unprocessable('You have already voted on this survey');
    }
  };
};
