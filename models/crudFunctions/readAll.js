const connection = require('../connection');

const dbReadAll = async (collection) => connection()
  .collection(collection)
  .find()
  .toArray();

module.exports = dbReadAll;
