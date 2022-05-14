const users = require('./users/users.service.js');
const surveys = require('./surveys/surveys.service.js');
const vote = require('./vote/vote.service.js');

module.exports = function (app) {
  app.configure(users);
  app.configure(surveys);
  app.configure(vote);
};
