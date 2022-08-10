import Joi from 'joi';

const schema = Joi.string().min(3).required().label('password');

export const validatePassword = (password) => {
  const { error } = schema.validate(password);

  return {
    result: error === undefined,
    message: error ? error.message : '',
  };
};
