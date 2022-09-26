import Joi from 'joi';

export const AnswerSchema = Joi.object().keys({
  text: Joi.string().min(2).max(140).required().label('answer'),
  index: Joi.number().min(0).required().label('index'),
});
