const { dbReadAll } = require('../../models/crudFunctions')('sales');

const readAll = async () => {
  const sales = await dbReadAll();

  return { sales };
};

module.exports = readAll;
