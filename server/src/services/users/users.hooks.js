const { authenticate } = require('@feathersjs/authentication').hooks;

const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks;
const { disallow } = require('feathers-hooks-common');

const validateSchema = require('../../hooks/validate-schema.hook');
const mapUserFieldToQueryField = require('../../hooks/map-user-field-to-query-field.hook');

const { UserSchema } = require('./users.schemas');

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt'), mapUserFieldToQueryField('_id', '_id')],
    get: [authenticate('jwt'), mapUserFieldToQueryField('_id', '_id')],
    create: [validateSchema(UserSchema), hashPassword('password')],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()],
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
