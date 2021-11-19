const { dbRemove } = require('../../models/crudFunctions')('sales');

const remove = async (id) => {
  const removed = await dbRemove(id);

  return removed;
};

module.exports = remove;
