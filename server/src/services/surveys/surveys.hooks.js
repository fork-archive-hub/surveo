const { authenticate } = require('@feathersjs/authentication').hooks;

const { discard, disallow, populate } = require('feathers-hooks-common');

const validateSchema = require('../../hooks/validate-schema.hook');
const ifProvider = require('../../hooks/if-provider.hook');
const ifNot = require('../../hooks/if-not.hook');
const authenticateIfPossible = require('../../hooks/authenticate-if-possible.hook');
const setDocumentOwner = require('../../hooks/set-document-owner.hook');
const deepDiscard = require('../../hooks/deep-discard.hook');
const restrictToOwner = require('../../hooks/restrict-to-owner.hook');
const isDocumentOwner = require('../../hooks/is-document-owner.hook');

const { surveySchema } = require('./surveys.schemas');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [authenticateIfPossible('jwt')],
    create: [
      authenticate('jwt'),
      validateSchema(surveySchema),
      setDocumentOwner('_id', 'authorId'),
      deepDiscard('votes'),
    ],
    update: [authenticate('jwt'), disallow('external')],
    patch: [authenticate('jwt'), disallow('external')],
    remove: [authenticate('jwt'), restrictToOwner('_id', 'authorId')],
  },

  after: {
    all: [ifProvider(['external'], discard('ips'))],
    find: [ifProvider(['external'], deepDiscard('votes'), discard('protection', 'questions'))],
    get: [
      ifProvider(['external'], ifNot(isDocumentOwner('_id', 'authorId'), deepDiscard('votes'))),
      populate({
        schema: {
          include: {
            service: 'users',
            nameAs: 'author',
            parentField: 'authorId',
            childField: '_id',
            provider: 'rest',
          },
        },
      }),
      discard('_include'),
    ],
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
