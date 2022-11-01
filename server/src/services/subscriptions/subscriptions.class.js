const { Forbidden } = require('@feathersjs/errors');

exports.Subscriptions = class Subscriptions {
  constructor(options, app) {
    this.app = app;
    this.options = options || {};
  }

  async create(data, params) {
    const survey = await this.app.service('surveys').get(data.surveyId);

    if (survey.authorId.toString() !== params.user._id.toString()) {
      throw new Forbidden('You can only subscribe to surveys you have created');
    }

    this.app.channel(`survey.${data.surveyId}`).join(params.connection);

    return {};
  }

  async remove(id, params) {
    this.app.channel(`survey.${id}`).leave(params.connection);

    return {};
  }
};
