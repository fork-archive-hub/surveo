import { AnswerTemplate } from './AnswerTemplate';

import { updateIndexFields } from '../utils/updateIndexFields';

export class QuestionTemplate {
  constructor(text = '', subquestions = []) {
    this.text = text;
    this.answers = updateIndexFields([new AnswerTemplate(), new AnswerTemplate()]);
    this.subquestions = subquestions;
  }
}
