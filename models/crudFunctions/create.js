const connection = require('../connection');

const dbCreate = async (collection, entity) => connection()
  .collection(collection)
  .insertOne(entity);

module.exports = dbCreate;
