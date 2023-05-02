const { Trackers } = require('./trackers.class');
const createModel = require('../../models/trackers.model');
const hooks = require('./trackers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/trackers', new Trackers(options, app));
  app.service('trackers').hooks(hooks);
};
