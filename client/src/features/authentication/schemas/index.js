import Joi from 'joi';

export const loginFormSchema = Joi.object({
  username: Joi.string().min(3).max(15).alphanum().lowercase().required().label('username'),
  password: Joi.string().min(3).required().label('password'),
});

export const registerFormSchema = Joi.object({
  username: Joi.string().min(3).max(15).alphanum().lowercase().required().label('username'),
  password: Joi.string().min(3).required().label('password'),
  repeatPassword: Joi.any().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords do not match',
  }),
});
