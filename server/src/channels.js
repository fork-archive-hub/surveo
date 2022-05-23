module.exports = function (app) {
  if (typeof app.channel !== 'function') {
    return;
  }

  app.on('login', async (authResult, { connection }) => {
    if (connection) {
      const userId = connection.user._id.toString();

      app.channel(`user.${userId}`).join(connection);
    }
  });

  app.service('votes').publish('created', async (data, context) => {
    const survey = await app.service('surveys').get(context.data.surveyId, { provider: 'socketio' });
    const authorId = survey.authorId.toString();

    return [app.channel(`user.${authorId}`).send(survey)];
  });
};
