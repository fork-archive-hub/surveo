import { SurveyInformationTemplate } from './SurveyInformationTemplate';
import { QuestionTemplate } from './QuestionTemplate';

export class SurveyTemplate extends SurveyInformationTemplate {
  constructor(name = '') {
    super(name);
    this.questions = [new QuestionTemplate()];
  }
}
