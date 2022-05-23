const Joi = require('joi');

const subscriptionSchema = Joi.object().keys({
  surveyId: Joi.string().length(24).required(),
});

module.exports = { subscriptionSchema };
