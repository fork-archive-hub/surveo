const { Service } = require('feathers-mongoose');

exports.Surveys = class Surveys extends Service {
  async setup(app) {
    this.app = app;
  }

  async create(data, params) {
    const survey = await super.create(data, params);

    await this.app.service('trackers').Model.create({
      surveyId: survey._id,
      ips: [],
    });

    return survey;
  }

  async remove(id, params) {
    const survey = await super.remove(id, params);

    await this.app.service('trackers').Model.findOneAndDelete({
      surveyId: survey._id,
    });

    return survey;
  }
};
