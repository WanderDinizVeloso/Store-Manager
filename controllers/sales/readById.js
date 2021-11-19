const { StatusCodes } = require('http-status-codes');

const { readById } = require('../../services/products');
const { isFound } = require('../../services/validations/auxFunctions');

const readByIdSales = async (req, res, next) => {
  const { id } = req.params;

  const sales = await readById(id);

  if (!sales) return next(isFound('Sale'));

  return res.status(StatusCodes.OK).json(sales);
};

module.exports = readByIdSales;
