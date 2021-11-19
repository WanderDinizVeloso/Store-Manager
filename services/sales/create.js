const { dbCreate } = require('../../models/crudFunctions')('sales');

const create = async (sales) => {
  const { ops } = (await dbCreate(sales));

  return ops[0];
};

module.exports = create;
