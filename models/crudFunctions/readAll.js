const connection = require('../connection');

const dbReadAll = async (collection) => {
  const products = (await connection())
    .collection(collection)
    .find()
    .toArray();

  return products;
};

module.exports = dbReadAll;
