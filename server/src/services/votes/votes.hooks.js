const mapProtectionHooks = require('../../hooks/map-protection-hooks');
const verifyCaptchaToken = require('../../hooks/verify-captcha-token.hook');
const restrictDuplicatedIps = require('../../hooks/restrict-duplicated-ips.hook');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      mapProtectionHooks('protection', {
        captcha: verifyCaptchaToken('token'),
        ipRestriction: restrictDuplicatedIps('ips', 'ip'),
      }),
    ],
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
