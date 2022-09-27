const Joi = require('joi');

const SubscriptionSchema = Joi.object().keys({
  surveyId: Joi.string().length(24).required(),
});

module.exports = { SubscriptionSchema };
