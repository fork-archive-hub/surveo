const { checkContext } = require('feathers-hooks-common');
const { BadRequest, Unprocessable } = require('@feathersjs/errors');
const fetch = require('node-fetch');

module.exports = (dataField) => {
  return async (context) => {
    checkContext(context, 'before', null, 'verifyCaptchaToken');

    if (!Object.prototype.hasOwnProperty.call(context.data, dataField)) {
      throw new BadRequest('Missing captcha token field!');
    }

    const { secret } = context.app.get('recaptcha');
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${context.data[dataField]}`
    );
    const responseData = await response.json();

    if (!responseData.success) {
      throw new Unprocessable('Invalid captcha response!');
    }

    return context;
  };
};
