const Joi = require('joi');

const AnswerSheetSchema = Joi.object().pattern(/^/, Joi.string().length(24).required());

const VoteSchema = Joi.object().keys({
  surveyId: Joi.string().length(24).required(),
  answerSheet: AnswerSheetSchema.required(),
  token: Joi.string(),
});

module.exports = { AnswerSheetSchema, VoteSchema };
