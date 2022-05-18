const verifyCaptchaToken = require('../../hooks/verify-captcha-token.hook');

const restrictDuplicatedIps = require('./hooks/restrict-duplicated-ips.hook');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [verifyCaptchaToken('token'), restrictDuplicatedIps()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
