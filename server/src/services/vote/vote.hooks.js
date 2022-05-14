const restrictDuplicatedIps = require('./hooks/restrict-duplicated-ips.hook');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [restrictDuplicatedIps()],
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
