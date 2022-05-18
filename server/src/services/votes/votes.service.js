const { Votes } = require('./votes.class');
const hooks = require('./votes.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate'),
  };

  app.use('/votes', new Votes(options, app));
  app.service('votes').hooks(hooks);
};
