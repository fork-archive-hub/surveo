import { updateIndexFields } from '../utils/updateIndexFields';

export class AnswerTemplate {
  constructor(text = '') {
    this.text = text;
    this.index = 0;
  }
}

export class SubquestionTemplate {
  constructor(text = '') {
    this.text = text;
    this.answers = updateIndexFields([new AnswerTemplate(), new AnswerTemplate()]);
    this.requirements = [];
  }
}

export class QuestionTemplate {
  constructor(text = '') {
    this.text = text;
    this.answers = updateIndexFields([new AnswerTemplate(), new AnswerTemplate()]);
    this.subquestions = [];
  }
}

export class SurveyInformationTemplate {
  constructor(name = '') {
    this.name = name;
    this.protection = {
      captcha: false,
      ipRestriction: false,
    };
  }
}

export class SurveyTemplate extends SurveyInformationTemplate {
  constructor(name = '') {
    super(name);
    this.questions = [new QuestionTemplate()];
  }
}
