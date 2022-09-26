import Joi from 'joi';

export const LoginFormSchema = Joi.object({
  username: Joi.string().min(3).max(15).alphanum().lowercase().required().label('username'),
  password: Joi.string().min(3).required().label('password'),
});
