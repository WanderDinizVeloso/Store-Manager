const connection = require('../connection');

const dbCreate = async (collection, entity) => {
  const createEntity = (await connection())
    .collection(collection)
    .insertOne(entity);

  return createEntity;
};

module.exports = dbCreate;
