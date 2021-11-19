const { dbReadById } = require('../../models/crudFunctions')('sales');
const readAll = require('./readAll');

const readById = async (id) => {
  const { sales } = await readAll();

  const searchSales = sales.filter(({ _id: searchId }) => searchId === id);

  if (searchSales.length !== 0) return null;

  const OneSales = await dbReadById(id);

  return OneSales;
};

module.exports = readById;
