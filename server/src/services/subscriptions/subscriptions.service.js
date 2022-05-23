const { Subscriptions } = require('./subscriptions.class');
const hooks = require('./subscriptions.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate'),
  };

  app.use('/subscriptions', new Subscriptions(options, app));
  app.service('subscriptions').hooks(hooks);
};
