const { checkContext } = require('feathers-hooks-common');
const { BadRequest } = require('@feathersjs/errors');

module.exports = (schema) => {
  return async (context) => {
    checkContext(context, 'before', null, 'validateSchema');

    try {
      context.data = await schema.validateAsync(context.data);

      return context;
    } catch (error) {
      throw new BadRequest(error.message);
    }
  };
};
