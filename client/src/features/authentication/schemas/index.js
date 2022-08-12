import Joi from 'joi';

export const username = Joi.string().min(3).max(15).alphanum().lowercase().required().label('username');
export const password = Joi.string().min(3).required().label('password');

export const login = Joi.object({
  username: username,
  password: password,
});

export const register = Joi.object({
  username: username,
  password: password,
  repeatPassword: Joi.any().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords do not match',
  }),
});
