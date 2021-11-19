const { dbReadAll } = require('../../models/crudFunctions')('products');

const readAll = async () => {
  const products = await dbReadAll();

  return products;
};

module.exports = readAll;
