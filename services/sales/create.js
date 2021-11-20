const { dbCreate } = require('../../models/crudFunctions')('sales');
const inventory = require('../utils/inventory');

const create = async (sales) => {
  inventory(sales, 'create');

  const saleList = { itensSold: sales };

  const { ops } = (await dbCreate(saleList));

  return ops[0];
};

module.exports = create;
