const { authenticate } = require('@feathersjs/authentication').hooks;

const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks;
const { disallow } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [disallow('external'), authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [hashPassword('password')],
    update: [disallow('external'), hashPassword('password'), authenticate('jwt')],
    patch: [disallow('external'), hashPassword('password'), authenticate('jwt')],
    remove: [disallow('external'), authenticate('jwt')],
  },

  after: {
    all: [protect('password')],
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
