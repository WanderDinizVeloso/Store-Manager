const { ObjectId } = require('mongodb');

const connection = require('../connection');

const dbRemove = async (collection, id) => connection()
  .collection(collection)
  .deleteOne({ _id: ObjectId(id) });

module.exports = dbRemove;
