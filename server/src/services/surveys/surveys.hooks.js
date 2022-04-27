const { authenticate } = require('@feathersjs/authentication').hooks;

const { iff, isNot, isProvider, discard, disallow } = require('feathers-hooks-common');

const setDocumentOwner = require('../../hooks/set-document-owner');
const deepDiscard = require('../../hooks/deep-discard');
const restrictToOwner = require('../../hooks/restrict-to-owner');
const isOwner = require('../../hooks/is-owner');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [setDocumentOwner('author'), deepDiscard(['votes'])],
    update: [disallow('external')],
    patch: [disallow('external')],
    remove: [restrictToOwner('author')],
  },

  after: {
    all: [iff(isProvider('external'), discard('ips'))],
    find: [iff(isProvider('external'), deepDiscard(['votes']), discard('protection', 'questions'))],
    get: [iff(isNot(isOwner('author')), deepDiscard(['votes']))],
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
