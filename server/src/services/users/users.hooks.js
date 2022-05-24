const { authenticate } = require('@feathersjs/authentication').hooks;

const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks;
const { disallow } = require('feathers-hooks-common');

const validateSchema = require('../../hooks/validate-schema.hook');
const restrictToOwner = require('../../hooks/restrict-to-owner.hook');

const { userSchema } = require('./users.schemas');

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt'), restrictToOwner('_id', '_id')],
    get: [authenticate('jwt'), restrictToOwner('_id', '_id')],
    create: [validateSchema(userSchema), hashPassword('password')],
    update: [disallow('external'), hashPassword('password'), authenticate('jwt'), restrictToOwner('_id', '_id')],
    patch: [disallow('external'), hashPassword('password'), authenticate('jwt'), restrictToOwner('_id', '_id')],
    remove: [disallow('external'), authenticate('jwt'), restrictToOwner('_id', '_id')],
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
