const { checkContext } = require('feathers-hooks-common');
const { BadRequest, Unprocessable } = require('@feathersjs/errors');
const fetch = require('node-fetch');

module.exports = (field) => {
  return async (context) => {
    checkContext(context, 'before', ['create', 'update', 'patch'], 'verifyCaptchaToken');

    if (!Object.prototype.hasOwnProperty.call(context.data, field)) {
      throw new BadRequest('Missing captcha token field!');
    }

    const { secret } = context.app.get('recaptcha');
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${context.data[field]}`
    );
    const responseData = await response.json();

    if (!responseData.success) {
      throw new Unprocessable('Invalid captcha response!');
    }

    return context;
  };
};
