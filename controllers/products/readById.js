const { StatusCodes } = require('http-status-codes');

const { readById } = require('../../services/products');

const readByIdProduct = async (req, res, _next) => {
  const { id } = req.params;

  const product = await readById(id);

  return res.status(StatusCodes.OK).json(product);
};

module.exports = readByIdProduct;
