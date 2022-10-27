import Joi from 'joi';

import { AnswerSchema } from './AnswerSchema';
import { SubquestionSchema } from './SubquestionSchema';

export const QuestionSchema = Joi.object().keys({
  text: Joi.string().min(3).max(140).required().label('question'),
  answers: Joi.array().items(AnswerSchema).min(2).required().label('answers'),
  subquestions: Joi.array().items(SubquestionSchema).required().label('subquestions'),
});
