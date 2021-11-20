const { dbRemove } = require('../../models/crudFunctions')('sales');

const readById = require('./readById');

const remove = async (id) => {
  const readId = await readById(id);

  console.log(readId);

  if (!readId) return null;

  const removed = await dbRemove(id);

  return removed;
};

module.exports = remove;
