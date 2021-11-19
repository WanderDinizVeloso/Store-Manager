const { dbReadById } = require('../../models/crudFunctions')('products');

const readById = async (id) => {
  const product = await dbReadById(id);

  return product;
};

module.exports = readById;
