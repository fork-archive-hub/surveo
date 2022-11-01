const { BadRequest, NotAcceptable } = require('@feathersjs/errors');

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
    const { open, questions, ips } = await this.app.service('surveys').get(data.surveyId);

    if (!open) {
      throw new NotAcceptable('Survey is closed');
    }

    for (const question of questions) {
      const questionAnswer = this.getUserAnswer(question, data.answerSheet);

      for (const subquestion of question.subquestions) {
        if (subquestion.requirements.includes(questionAnswer.index)) {
          const subquestionAnswer = this.getUserAnswer(subquestion, data.answerSheet);

          subquestionAnswer.votes += 1;
        }
      }

      questionAnswer.votes += 1;
    }

    ips.push(params.ip);

    await this.app.service('surveys').patch(data.surveyId, { questions, ips });

    return {};
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
