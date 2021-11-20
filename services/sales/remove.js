const { dbRemove } = require('../../models/crudFunctions')('sales');
const readById = require('./readById');
const inventory = require('../utils/inventory');

const remove = async (id) => {
  const readId = await readById(id);

  if (!readId) return null;

  inventory(readId.itensSold, 'remove');

  const removed = await dbRemove(id);

  return removed;
};

module.exports = remove;
