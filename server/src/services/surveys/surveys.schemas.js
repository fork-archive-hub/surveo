const Joi = require('joi');

const answerSchema = Joi.object().keys({
  index: Joi.number().min(0).required(),
  text: Joi.string().min(2).max(140).required(),
});

const subquestionSchema = Joi.object().keys({
  requirements: Joi.array().items(Joi.number().min(0)).required(),
  text: Joi.string().min(3).max(140).required(),
  answers: Joi.array().items(answerSchema).min(2).required(),
});

const questionSchema = Joi.object().keys({
  text: Joi.string().min(3).max(140).required(),
  answers: Joi.array().items(answerSchema).min(2).required(),
  subquestions: Joi.array().items(subquestionSchema).required(),
});

const surveyMetadataSchema = Joi.object().keys({
  name: Joi.string().min(3).max(240).required(),
  open: Joi.boolean().default(true),
  protection: Joi.object()
    .keys({
      captcha: Joi.boolean().default(false),
      ipRestriction: Joi.boolean().default(false),
    })
    .required(),
});

const surveySchema = surveyMetadataSchema.append({
  questions: Joi.array().items(questionSchema).min(1).required(),
});

module.exports = { answerSchema, subquestionSchema, questionSchema, surveyMetadataSchema, surveySchema };
