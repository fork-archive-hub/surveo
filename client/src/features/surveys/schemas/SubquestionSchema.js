import Joi from 'joi';

import { AnswerSchema } from './AnswerSchema';

export const SubquestionSchema = Joi.object().keys({
  text: Joi.string().min(3).max(140).required().label('subquestion'),
  requirements: Joi.array().items(Joi.number().min(0)).required().label('requirements'),
  answers: Joi.array().items(AnswerSchema).min(2).required().label('answers'),
});
