const { authenticate } = require('@feathersjs/authentication').hooks;

const { iff, isNot, isProvider, discard, disallow } = require('feathers-hooks-common');

const setDocumentOwner = require('../../hooks/set-document-owner.hook');
const deepDiscard = require('../../hooks/deep-discard.hook');
const restrictToOwner = require('../../hooks/restrict-to-owner.hook');
const isOwner = require('../../hooks/is-owner.hook');

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
    get: [iff(isProvider('external'), iff(isNot(isOwner('author')), deepDiscard(['votes'])))],
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
