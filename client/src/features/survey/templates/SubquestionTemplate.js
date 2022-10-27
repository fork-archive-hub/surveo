import { AnswerTemplate } from './AnswerTemplate';

import { updateIndexFields } from '../utils/updateIndexFields';

export class SubquestionTemplate {
  constructor(text = '', requirements = []) {
    this.text = text;
    this.answers = updateIndexFields([new AnswerTemplate(), new AnswerTemplate()]);
    this.requirements = requirements;
  }
}
