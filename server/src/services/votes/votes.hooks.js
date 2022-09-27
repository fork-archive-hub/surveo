const validateSchema = require('../../hooks/validate-schema.hook');
const mapProtectionHooks = require('../../hooks/map-protection-hooks');
const verifyCaptchaToken = require('../../hooks/verify-captcha-token.hook');
const restrictDuplicatedIps = require('../../hooks/restrict-duplicated-ips.hook');

const { VoteSchema } = require('./votes.schemas');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validateSchema(VoteSchema),
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
