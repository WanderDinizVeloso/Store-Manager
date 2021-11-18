const dbReadAll = require('./readAll');
const dbReadById = require('./readById');
const dbCreate = require('./create');
const dbUpdate = require('./update');
const dbRemove = require('./remove');

const { wrapper } = require('../../middlewares');

function crudFunctions(collection) {
  return {
    dbReadAll: async () => wrapper(dbReadAll(collection)),
    dbReadById: async (id) => wrapper(dbReadById(collection, id)),
    dbRemove: async (id) => wrapper(dbRemove(collection, id)),
    dbCreate: async (doc) => wrapper(dbCreate(collection, doc)),
    dbUpdate: async (doc) => wrapper(dbUpdate(collection, doc)),
  };
}

module.exports = crudFunctions;
