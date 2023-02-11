const { NotFound, BadRequest, NotAcceptable } = require('@feathersjs/errors');

exports.Votes = class Votes {
  async setup(app) {
    this.app = app;
  }

  async getSurvey(id) {
    const survey = await this.app.service('surveys').Model.findById(id).lean();

    if (!survey) {
      throw new NotFound(`Survey with id '${id}' not found`);
    }

    return survey;
  }

  async getTracker(id) {
    const tracker = await this.app.service('trackers').Model.findOne({ surveyId: id }).lean();

    if (!tracker) {
      throw new NotFound(`Tracker for survey with id '${id}' not found`);
    }

    return tracker;
  }

  async updateSurvey(id, survey) {
    const { questions } = survey;

    await this.app.service('surveys').Model.findByIdAndUpdate(id, { questions });
  }

  async updateTracker(id, tracker) {
    const { ips } = tracker;

    await this.app.service('trackers').Model.findOneAndUpdate({ surveyId: id }, { ips });
  }

  getUserAnswer(question, answerSheet) {
    const questionId = question._id.toString();
    const answer = question.answers.find((answer) => answer._id.toString() === answerSheet[questionId]);

    if (!answer) {
      throw new BadRequest(`Answer for question '${questionId}' not found`);
    }

    return answer;
  }

  async get(id, params) {
    const tracker = await this.getTracker(id);
    const votes = tracker.ips.filter((ip) => ip === params.ip).length;

    return {
      voted: votes > 0,
      votes: votes,
    };
  }

  async create(data, params) {
    const survey = await this.getSurvey(data.surveyId);
    const tracker = await this.getTracker(data.surveyId);

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

    tracker.ips.push(params.ip);

    await this.updateSurvey(data.surveyId, survey);
    await this.updateTracker(data.surveyId, tracker);

    return {};
  }
};
