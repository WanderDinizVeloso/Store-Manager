const { dbCreate } = require('../../models/crudFunctions')('products');

const readAll = require('./readAll');

const create = async (product) => {
  const { products } = await readAll();

  const searchProduct = products.filter((search) => search.name === product.name);

  if (searchProduct.length > 0) return 'existing record';

  const { ops } = (await dbCreate(product));

  return ops[0];
};

module.exports = create;
