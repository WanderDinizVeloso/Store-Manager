const { StatusCodes } = require('http-status-codes');

const { readAll } = require('../../services/products');

const readAllProduct = async (_req, res, _next) => {
  const products = await readAll();

  return res.status(StatusCodes.OK).json(products);
};

module.exports = readAllProduct;
