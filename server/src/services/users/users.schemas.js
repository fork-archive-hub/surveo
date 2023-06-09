const Joi = require('joi');

const UserSchema = Joi.object().keys({
  username: Joi.string().min(3).max(15).alphanum().lowercase().required(),
  password: Joi.string().min(3).required(),
});

module.exports = { UserSchema };
