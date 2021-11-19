const dbReadAll = require('./readAll');
const dbReadById = require('./readById');
const dbCreate = require('./create');
const dbUpdate = require('./update');
const dbRemove = require('./remove');

function crudFunctions(collection) {
  return {
    dbReadAll: async () => dbReadAll(collection),
    dbReadById: async (id) => dbReadById(collection, id),
    dbRemove: async (id) => dbRemove(collection, id),
    dbCreate: async (doc) => dbCreate(collection, doc),
    dbUpdate: async (doc) => dbUpdate(collection, doc),
  };
}

module.exports = crudFunctions;
