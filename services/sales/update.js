const { dbUpdate } = require('../../models/crudFunctions')('sales');

const update = async (sales) => {
  const updated = await dbUpdate(sales);

  return updated;
};

module.exports = update;
