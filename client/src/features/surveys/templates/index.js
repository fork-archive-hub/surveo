import { updateIndexFields } from '../utils/updateIndexFields';

export class AnswerTemplate {
  constructor(text = '', index = 0) {
    this.text = text;
    this.index = index;
  }
}

export class SubquestionTemplate {
  constructor(text = '', requirements = []) {
    this.text = text;
    this.answers = updateIndexFields([new AnswerTemplate(), new AnswerTemplate()]);
    this.requirements = requirements;
  }
}

export class QuestionTemplate {
  constructor(text = '', subquestions = []) {
    this.text = text;
    this.answers = updateIndexFields([new AnswerTemplate(), new AnswerTemplate()]);
    this.subquestions = subquestions;
  }
}

export class SurveyInformationTemplate {
  constructor(name = '', open = true, captcha = false, ipRestriction = false) {
    this.name = name;
    this.open = open;
    this.protection = {
      captcha: captcha,
      ipRestriction: ipRestriction,
    };
  }
}

export class SurveyTemplate extends SurveyInformationTemplate {
  constructor(name = '') {
    super(name);
    this.questions = [new QuestionTemplate()];
  }
}
