module.exports = function (app) {
  if (typeof app.channel !== 'function') {
    return;
  }

  app.service('votes').publish('created', async (data, context) => {
    const survey = await app.service('surveys').get(context.data.surveyId);

    return app.channel(`survey.${survey._id.toString()}`).send(survey);
  });
};
