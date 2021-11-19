const { dbReadById } = require('../../models/crudFunctions')('products');
const readAll = require('./readAll');

const readById = async (id) => {
  const { products } = await readAll();

  const searchProduct = products.filter(({ _id: searchId }) => searchId === id);

  if (searchProduct.length !== 0) return null;

  const OneProduct = await dbReadById(id);

  return OneProduct;
};

module.exports = readById;
