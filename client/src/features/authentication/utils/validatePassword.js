import Joi from 'joi';

import { validateJoiSchema } from '../../../utils/validateJoiSchema';

const schema = Joi.string().min(3).required().label('password');

export const validatePassword = (password) => {
  return validateJoiSchema(schema, password);
};
