const Joi = require('joi');

const answerSheetSchema = Joi.object().pattern(/^/, Joi.string().length(24).required());

const voteSchema = Joi.object().keys({
  surveyId: Joi.string().length(24).required(),
  answerSheet: answerSheetSchema.required(),
  token: Joi.string(),
});

module.exports = { answerSheetSchema, voteSchema };
