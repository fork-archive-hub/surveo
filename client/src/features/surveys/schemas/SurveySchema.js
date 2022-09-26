import Joi from 'joi';

import { SurveyInformationSchema } from './SurveyInformationSchema';
import { QuestionSchema } from './QuestionSchema';

export const SurveySchema = SurveyInformationSchema.append({
  questions: Joi.array().items(QuestionSchema).min(1).required().label('questions'),
});
