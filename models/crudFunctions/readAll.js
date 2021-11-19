const connection = require('../connection');

const dbReadAll = async (collection) => {
  const entities = (await connection())
    .collection(collection)
    .find()
    .toArray();

  return entities;
};

module.exports = dbReadAll;
