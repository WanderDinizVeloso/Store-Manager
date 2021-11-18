const { ObjectId } = require('mongodb');

const connection = require('../connection');

const dbReadById = async (collection, id) => {
  if (ObjectId.isvalid(id)) {
    return connection()
      .collection(collection)
      .findOne(ObjectId(id));
  }

  return null;
};

module.exports = dbReadById;
