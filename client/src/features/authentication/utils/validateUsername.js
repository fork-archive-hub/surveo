import Joi from 'joi';

import { validateJoiSchema } from '../../../utils/validateJoiSchema';

const schema = Joi.string().min(3).max(15).alphanum().lowercase().required().label('username');

export const validateUsername = (username) => {
  return validateJoiSchema(schema, username);
};
