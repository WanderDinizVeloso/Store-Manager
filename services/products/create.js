const { dbCreate } = require('../../models/crudFunctions')('products');

const create = async (product) => {
  const { ops } = (await dbCreate(product));

  return ops[0];
};

module.exports = create;
