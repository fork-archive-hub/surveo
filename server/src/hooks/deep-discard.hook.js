const { checkContext } = require('feathers-hooks-common');
const { getItems } = require('feathers-hooks-common');
const omitDeep = require('omit-deep');

module.exports = (...fields) => {
  return (context) => {
    checkContext(context, null, null, 'deepDiscard');

    const items = getItems(context);

    if (Array.isArray(items)) {
      for (let i = 0; i < items.length; i++) {
        omitDeep(items[i], fields);
      }
    } else {
      omitDeep(items, fields);
    }

    return context;
  };
};
