const { disallow } = require('feathers-hooks-common');

const validateSchema = require('../../hooks/validate-schema.hook');
const useProtectionHooks = require('../../hooks/use-protection-hooks');
const verifyCaptchaToken = require('../../hooks/verify-captcha-token.hook');
const disallowDuplicatedIps = require('../../hooks/disallow-duplicated-ips.hook');

const { VoteSchema } = require('./votes.schemas');

module.exports = {
  before: {
    all: [],
    find: [disallow()],
    get: [],
    create: [
      validateSchema(VoteSchema),
      useProtectionHooks('protection', {
        captcha: verifyCaptchaToken('token'),
        ipRestriction: disallowDuplicatedIps('ips', 'ip'),
      }),
    ],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()],
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
