const { BadRequest } = require('@feathersjs/errors');

exports.Votes = class Votes {
  constructor(options, app) {
    this.app = app;
    this.options = options || {};
  }

  async get(id, params) {
    const survey = await this.app.service('surveys').get(id);
    const votes = survey.ips.filter((ip) => ip === params.ip).length;

    return {
      voted: votes > 0,
      votes: votes,
    };
  }

  async create(data, params) {
    const survey = await this.app.service('surveys').get(data.surveyId);

    for (const question of survey.questions) {
      const answerForQuestion = this.getUserAnswer(question, data.answerSheet);

      for (const subQuestion of question.subQuestions) {
        if (subQuestion.requirements.includes(answerForQuestion.index)) {
          const answerForSubQuestion = this.getUserAnswer(subQuestion, data.answerSheet);

          answerForSubQuestion.votes += 1;
        }
      }

      answerForQuestion.votes += 1;
    }

    survey.ips.push(params.ip);
    await this.app.service('surveys').patch(data.surveyId, survey);

    return { success: true };
  }

  getUserAnswer(question, answerSheet) {
    const questionId = question._id.toString();
    const answerIndex = question.answers.findIndex((answer) => answer._id.toString() === answerSheet[questionId]);

    if (answerIndex === -1) {
      throw new BadRequest(`Answer for question '${questionId}' not found!`);
    }

    return question.answers[answerIndex];
  }
};
