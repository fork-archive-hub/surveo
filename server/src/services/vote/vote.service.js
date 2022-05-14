const { Vote } = require('./vote.class');
const hooks = require('./vote.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate'),
  };

  app.use('/vote', new Vote(options, app));
  app.service('vote').hooks(hooks);
};
