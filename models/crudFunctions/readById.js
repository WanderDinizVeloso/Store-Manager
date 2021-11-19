const { ObjectId } = require('mongodb');

const connection = require('../connection');

const dbReadById = async (collection, id) => {
  const product = (await connection())
    .collection(collection)
    .findOne(ObjectId(id));

  return product;
};

module.exports = dbReadById;
