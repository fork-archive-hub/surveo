const Joi = require('joi');

const AnswerSchema = Joi.object().keys({
  index: Joi.number().min(0).required(),
  text: Joi.string().min(2).max(140).required(),
});

const SubquestionSchema = Joi.object().keys({
  requirements: Joi.array().items(Joi.number().min(0)).required(),
  text: Joi.string().min(3).max(140).required(),
  answers: Joi.array().items(AnswerSchema).min(2).required(),
});

const QuestionSchema = Joi.object().keys({
  text: Joi.string().min(3).max(140).required(),
  answers: Joi.array().items(AnswerSchema).min(2).required(),
  subquestions: Joi.array().items(SubquestionSchema).required(),
});

const SurveyInformationSchema = Joi.object().keys({
  name: Joi.string().min(3).max(240).required(),
  open: Joi.boolean().default(true),
  protection: Joi.object()
    .keys({
      captcha: Joi.boolean().default(false),
      ipRestriction: Joi.boolean().default(false),
    })
    .required(),
});

const SurveySchema = SurveyInformationSchema.append({
  questions: Joi.array().items(QuestionSchema).min(1).required(),
});

module.exports = { AnswerSchema, SubquestionSchema, QuestionSchema, SurveyInformationSchema, SurveySchema };
