const connection = require('../connection');

const dbCreate = async (collection, entity) => {
  const createProduct = (await connection())
    .collection(collection)
    .insertOne(entity);

  return createProduct;
};

module.exports = dbCreate;
