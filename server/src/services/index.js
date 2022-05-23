const users = require('./users/users.service.js');
const surveys = require('./surveys/surveys.service.js');
const votes = require('./votes/votes.service.js');
const subscriptions = require('./subscriptions/subscriptions.service.js');

module.exports = function (app) {
  app.configure(users);
  app.configure(surveys);
  app.configure(votes);
  app.configure(subscriptions);
};
