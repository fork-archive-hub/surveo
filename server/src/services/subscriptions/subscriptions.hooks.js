const { authenticate } = require('@feathersjs/authentication').hooks;

const { disallow } = require('feathers-hooks-common');

const validateSchema = require('../../hooks/validate-schema.hook');

const { SubscriptionSchema } = require('./subscriptions.schemas');

module.exports = {
  before: {
    all: [],
    find: [disallow()],
    get: [disallow()],
    create: [disallow('rest', 'primus'), authenticate('jwt'), validateSchema(SubscriptionSchema)],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow('rest', 'primus'), authenticate('jwt')],
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
