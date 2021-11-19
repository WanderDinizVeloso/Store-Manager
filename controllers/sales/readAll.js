const { StatusCodes } = require('http-status-codes');

const { readAll } = require('../../services/sales');

const readAllSales = async (_req, res, _next) => {
  const sales = await readAll();

  return res.status(StatusCodes.OK).json(sales);
};

module.exports = readAllSales;
