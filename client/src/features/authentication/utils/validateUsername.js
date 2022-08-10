import Joi from 'joi';

const schema = Joi.string().min(3).max(15).alphanum().lowercase().required().label('username');

export const validateUsername = (username) => {
  const { error } = schema.validate(username);

  return {
    result: error === undefined,
    message: error ? error.message : '',
  };
};
