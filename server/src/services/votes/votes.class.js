const { NotFound, BadRequest, NotAcceptable } = require('@feathersjs/errors');

exports.Votes = class Votes {
  constructor(options, app) {
    this.app = app;
    this.options = options || {};
  }

  async get(id, params) {
    const survey = await this.app.service('surveys').Model.findById(id).lean();

    if (!survey) {
      throw new NotFound(`Survey with id '${id}' not found`);
    }

    const votes = survey.ips.filter((ip) => ip === params.ip).length;

    return {
      voted: votes > 0,
      votes: votes,
    };
  }

  async create(data, params) {
    const survey = await this.app.service('surveys').Model.findById(data.surveyId).lean();

    if (!survey) {
      throw new NotFound(`Survey with id '${id}' not found`);
    }

    if (!survey.open) {
      throw new NotAcceptable('Survey is closed');
    }

    for (const question of survey.questions) {
      const questionAnswer = this.getUserAnswer(question, data.answerSheet);

      for (const subquestion of question.subquestions) {
        if (subquestion.requirements.includes(questionAnswer.index)) {
          const subquestionAnswer = this.getUserAnswer(subquestion, data.answerSheet);

          subquestionAnswer.votes += 1;
        }
      }

      questionAnswer.votes += 1;
    }

    survey.ips.push(params.ip);

    const { questions, ips } = survey;
    await this.app.service('surveys').Model.findByIdAndUpdate(data.surveyId, { questions, ips });

    return {};
  }

  getUserAnswer(question, answerSheet) {
    const questionId = question._id.toString();
    const answerIndex = question.answers.findIndex((answer) => answer._id.toString() === answerSheet[questionId]);

    if (answerIndex === -1) {
      throw new BadRequest(`Answer for question '${questionId}' not found`);
    }

    return question.answers[answerIndex];
  }
};
