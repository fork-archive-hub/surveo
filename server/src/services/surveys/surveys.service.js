const { Surveys } = require('./surveys.class');
const createModel = require('../../models/surveys.model');
const hooks = require('./surveys.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  app.use('/surveys', new Surveys(options, app));
  app.service('surveys').hooks(hooks);
};
