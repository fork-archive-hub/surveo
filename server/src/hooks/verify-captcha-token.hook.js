const { checkContext } = require('feathers-hooks-common');
const { Unprocessable } = require('@feathersjs/errors');
const fetch = require('node-fetch');

module.exports = (dataField) => {
  return async (context) => {
    checkContext(context, 'before', null, 'verifyCaptchaToken');

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
