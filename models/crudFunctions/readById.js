const { ObjectId } = require('mongodb');

const connection = require('../connection');

const dbReadById = async (collection, id) => {
  const entity = (await connection())
    .collection(collection)
    .findOne(ObjectId(id));

  return entity;
};

module.exports = dbReadById;
