const { authenticate } = require('@feathersjs/authentication').hooks;

const { disallow } = require('feathers-hooks-common');

const validateSchema = require('../../hooks/validate-schema.hook');

const { subscriptionSchema } = require('./subscriptions.schemas');

module.exports = {
  before: {
    all: [disallow('rest', 'primus'), authenticate('jwt')],
    find: [disallow()],
    get: [disallow()],
    create: [validateSchema(subscriptionSchema)],
    update: [disallow()],
    patch: [disallow()],
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
