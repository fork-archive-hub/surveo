const { NotFound, Forbidden } = require('@feathersjs/errors');

exports.Subscriptions = class Subscriptions {
  async setup(app) {
    this.app = app;
  }

  async create(data, params) {
    const survey = await this.app.service('surveys').Model.findById(data.surveyId).lean();

    if (!survey) {
      throw new NotFound(`Survey with id '${id}' not found`);
    }

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
