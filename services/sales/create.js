const { dbCreate } = require('../../models/crudFunctions')('sales');

const create = async (sales) => {
  const saleList = { itensSold: sales };

  const { ops } = (await dbCreate(saleList));

  return ops[0];
};

module.exports = create;
